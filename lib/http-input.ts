export class RequestError extends Error {
  constructor(public readonly status: number, message: string) {
    super(message);
  }
}

export const MAX_CONTACT_BYTES = 16 * 1024;
export const BODY_TIMEOUT_MS = 5_000;

// Enforce the streamed byte count as well as the untrusted Content-Length hint.
export async function readJsonObject(
  request: Request,
  maxBytes = MAX_CONTACT_BYTES,
  timeoutMs = BODY_TIMEOUT_MS,
): Promise<Record<string, unknown>> {
  const [type, ...parameters] = (request.headers.get("content-type") || "").split(";");
  if (type.trim().toLowerCase() !== "application/json" || parameters.some((part) => {
    const [key, value] = part.trim().toLowerCase().split("=");
    return key === "charset" && !["utf-8", "utf8", '"utf-8"'].includes(value);
  })) {
    throw new RequestError(415, "Use application/json encoded as UTF-8.");
  }
  const length = request.headers.get("content-length");
  if (length !== null) {
    if (!/^\d+$/.test(length)) throw new RequestError(400, "Invalid request length.");
    if (!Number.isSafeInteger(Number(length)) || Number(length) > maxBytes) {
      void request.body?.cancel().catch(() => {});
      throw new RequestError(413, "The request is too large.");
    }
  }
  if (!request.body) throw new RequestError(400, "Provide a JSON object.");
  const reader = request.body.getReader();
  let timer: ReturnType<typeof setTimeout> | undefined;
  const deadline = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new RequestError(408, "Request body timed out.")), timeoutMs);
  });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await Promise.race([reader.read(), deadline]);
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) throw new RequestError(413, "The request is too large.");
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }
    let value: unknown;
    try {
      value = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    } catch {
      throw new RequestError(400, "Provide valid UTF-8 JSON.");
    }
    if (value === null || typeof value !== "object" || Array.isArray(value)) {
      throw new RequestError(400, "Provide a JSON object.");
    }
    return value as Record<string, unknown>;
  } catch (error) {
    void reader.cancel().catch(() => {});
    if (error instanceof RequestError) throw error;
    throw new RequestError(400, "The request body could not be read.");
  } finally {
    clearTimeout(timer);
    reader.releaseLock();
  }
}
