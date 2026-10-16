import assert from "node:assert/strict";
import { setTimeout } from "node:timers/promises";

const base = "http://127.0.0.1:3110";
let healthy = false;
for (let attempt = 0; attempt < 30; attempt++) {
  try { healthy = (await fetch(`${base}/api/health`)).ok; } catch { /* startup only */ }
  if (healthy) break;
  await setTimeout(500);
}
assert.ok(healthy, "Container did not become healthy");
for (const path of ["/", "/projects", "/contact", "/privacy", "/robots.txt", "/sitemap.xml", "/opengraph-image"]) {
  const r = await fetch(base + path);
  assert.equal(r.status, 200, path);
  assert.ok(r.headers.get("content-security-policy")?.includes("script-src-attr 'none'"));
  if (path === "/") assert.equal(new URL((await r.text()).match(/rel="canonical" href="([^"]+)"/)?.[1]).href, "https://omniaseclabs.com/");
}
const response = await fetch(`${base}/api/contact`, {
  method: "POST", headers: { origin: "https://omniaseclabs.com", "content-type": "application/json", "x-forwarded-for": "203.0.113.1" },
  body: JSON.stringify({ name: "Audit User", email: "audit@example.test", interest: "Research", message: "Synthetic container test message only.", consent: "true" }),
});
assert.equal(response.status, 503);
assert.equal((await response.json()).code, "CONTACT_DISABLED");
console.log("Container: liveness, seven GET routes/headers, canonical URL, and disabled email delivery passed.");
