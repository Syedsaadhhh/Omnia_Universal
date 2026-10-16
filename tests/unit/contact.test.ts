import { test } from "node:test";
import assert from "node:assert/strict";
import { POST } from "../../app/api/contact/route";
import { SITE_ORIGIN } from "../../lib/site-origin";

const valid = { name: "Audit User", email: "audit@example.test", interest: "Research", message: "Synthetic local regression message only.", consent: "true" };
function send(body: unknown = valid, headers: Record<string, string> = {}) {
  return POST(new Request(`${SITE_ORIGIN}/api/contact`, {
    method: "POST", headers: { origin: SITE_ORIGIN, "content-type": "application/json", ...headers }, body: JSON.stringify(body),
  }));
}
for (const origin of ["", "null", "https://other.example.test", "https://omniaseclabs.com.other.example.test", "https://www.omniaseclabs.com", `${SITE_ORIGIN}/path`]) {
  test(`rejects unapproved origin ${JSON.stringify(origin)}`, async () => {
    const r = await send(valid, { origin, host: "other.example.test", "x-forwarded-host": "other.example.test", "x-forwarded-proto": "https" });
    assert.equal(r.status, 403);
  });
}
for (const value of [null, [], {}, { ...valid, consent: true }, { ...valid, message: "short" }, { ...valid, website: "bot" }, { ...valid, email: "bad" }]) {
  test(`invalid input gets 400: ${JSON.stringify(value).slice(0, 100)}`, async () => assert.equal((await send(value)).status, 400));
}
test("valid inquiry remains disabled even with legacy provider settings", async (t) => {
  t.mock.method(console, "error", () => { throw new Error("Unexpected log output"); });
  t.mock.method(globalThis, "fetch", async () => { throw new Error("No outbound request is allowed"); });
  const before = process.env.RESEND_API_KEY;
  process.env.RESEND_API_KEY = "synthetic-not-a-real-key";
  t.after(() => { if (before === undefined) delete process.env.RESEND_API_KEY; else process.env.RESEND_API_KEY = before; });
  const r = await send();
  assert.equal(r.status, 503);
  assert.equal(r.headers.get("cache-control"), "no-store");
  assert.equal((await r.json()).code, "CONTACT_DISABLED");
});
test("repeated or forged proxy IPs cannot open delivery", async (t) => {
  t.mock.method(globalThis, "fetch", async () => { throw new Error("No outbound request is allowed"); });
  for (let i = 0; i < 10; i++) {
    const r = await send(valid, { "x-forwarded-for": `203.0.113.${i}`, "x-real-ip": `198.51.100.${i}`, "x-vercel-forwarded-for": `192.0.2.${i}` });
    assert.equal(r.status, 503);
  }
});
test("malformed JSON is 400 without body/error logging", async (t) => {
  t.mock.method(console, "error", () => { throw new Error("Input must not be logged"); });
  const r = await POST(new Request(`${SITE_ORIGIN}/api/contact`, { method: "POST", headers: { origin: SITE_ORIGIN, "content-type": "application/json" }, body: "{" }));
  assert.equal(r.status, 400);
  assert.equal(r.headers.get("cache-control"), "no-store");
});
test("unknown large fields cannot bypass the byte cap", async () => assert.equal((await send({ ...valid, extra: "x".repeat(17000) })).status, 413));
test("substring content-type trick is rejected", async () => assert.equal((await send(valid, { "content-type": "xapplication/json" })).status, 415));
