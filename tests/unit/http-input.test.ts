import { test } from "node:test";
import assert from "node:assert/strict";
import { readJsonObject, RequestError } from "../../lib/http-input";

function request(body: BodyInit | null, headers: Record<string, string> = {}) {
  return new Request("https://omniaseclabs.com/api/contact", {
    method: "POST", body, headers: { "content-type": "application/json", ...headers },
    ...(body instanceof ReadableStream ? { duplex: "half" } : {}),
  });
}
async function rejectsStatus(body: BodyInit | null, status: number, headers = {}) {
  await assert.rejects(readJsonObject(request(body, headers)), (e: unknown) => e instanceof RequestError && e.status === status);
}
for (const body of ["", "{", "null", "[]", '"text"', "42", "true"]) {
  test(`rejects invalid/non-object JSON ${JSON.stringify(body)} as 400`, () => rejectsStatus(body, 400));
}
for (const type of ["text/plain", "application/jsonx", "xapplication/json", "application/json; charset=iso-8859-1", ""]) {
  test(`rejects unsupported content type ${JSON.stringify(type)}`, () => rejectsStatus("{}", 415, { "content-type": type }));
}
test("accepts JSON media type case and UTF-8 charset", async () => {
  assert.deepEqual(await readJsonObject(request('{"message":"مرحبا 👋"}', { "content-type": "Application/JSON; charset=utf-8" })), { message: "مرحبا 👋" });
});
test("requires a body", () => rejectsStatus(null, 400));
test("rejects malformed UTF-8", () => rejectsStatus(new Uint8Array([0x7b, 0xff, 0x7d]), 400));
test("byte boundary includes multibyte characters", async () => {
  const body = JSON.stringify({ text: "é👋" });
  const bytes = Buffer.byteLength(body);
  assert.deepEqual(await readJsonObject(request(body), bytes), { text: "é👋" });
  await assert.rejects(readJsonObject(request(body), bytes - 1), (e: unknown) => e instanceof RequestError && e.status === 413);
});
test("oversized declared body is rejected before reading", async () => {
  let cancelled = false;
  const stream = new ReadableStream({ cancel() { cancelled = true; } });
  await rejectsStatus(stream, 413, { "content-length": "999999" });
  assert.equal(cancelled, true);
});
test("invalid length is 400", () => rejectsStatus("{}", 400, { "content-length": "-1" }));
test("streamed byte cap defeats a misleading length hint", async () => {
  const stream = new ReadableStream({ start(c) { c.enqueue(new TextEncoder().encode("x".repeat(17000))); c.close(); } });
  await rejectsStatus(stream, 413, { "content-length": "1" });
});
test("chunk boundaries may split UTF-8 characters", async () => {
  const bytes = new TextEncoder().encode('{"text":"👋"}');
  const stream = new ReadableStream({ start(c) { for (const byte of bytes) c.enqueue(new Uint8Array([byte])); c.close(); } });
  assert.deepEqual(await readJsonObject(request(stream)), { text: "👋" });
});
test("slow body is cancelled at the total read deadline", async () => {
  let cancelled = false;
  const stream = new ReadableStream({ cancel() { cancelled = true; } });
  await assert.rejects(readJsonObject(request(stream), 1024, 10), (e: unknown) => e instanceof RequestError && e.status === 408);
  assert.equal(cancelled, true);
});
test("failed stream does not expose its exception", async () => {
  const stream = new ReadableStream({ start(c) { c.error(new Error("PRIVATE_SYNTHETIC_CONTENT")); } });
  await assert.rejects(readJsonObject(request(stream)), (e: unknown) => e instanceof RequestError && e.status === 400 && !e.message.includes("PRIVATE_SYNTHETIC"));
});
