import { z } from "zod";
import { readJsonObject, RequestError } from "@/lib/http-input";
import { SITE_ORIGIN } from "@/lib/site-origin";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().default(""),
  interest: z.string().trim().min(2).max(120),
  message: z.string().trim().min(20).max(4000),
  consent: z.literal("true"),
  website: z.string().max(0).optional().default(""),
});

function reply(status: number, code: string, message: string) {
  return Response.json({ code, message }, {
    status,
    headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
  });
}

export async function POST(request: Request) {
  // No host/IP forwarded header is a trusted identity or an origin allowlist.
  if (request.headers.get("origin") !== SITE_ORIGIN) {
    return reply(403, "ORIGIN_REJECTED", "Request origin was not accepted.");
  }
  try {
    const raw = await readJsonObject(request);
    if (!schema.safeParse(raw).success) {
      return reply(400, "INVALID_INPUT", "Please review the form fields.");
    }
    // The public UI is mailto-only. No provider, secret, process-local bucket,
    // forwarded IP or feature flag can enable sending from this retired channel.
    // A future form needs an independently reviewed, durable ingress/send budget.
    return reply(503, "CONTACT_DISABLED", "Online submissions are unavailable. Email contact@omniaseclabs.com.");
  } catch (error) {
    if (error instanceof RequestError) return reply(error.status, "INVALID_REQUEST", error.message);
    // Do not print request bodies, provider errors, headers, or credentials.
    console.error("contact_request_failed");
    return reply(500, "REQUEST_FAILED", "The request could not be processed.");
  }
}
