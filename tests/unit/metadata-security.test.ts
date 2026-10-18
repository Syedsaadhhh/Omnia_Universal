import { test } from "node:test";
import assert from "node:assert/strict";
import { jsonLd, pageMetadata } from "../../lib/metadata";
import { siteUrl, SITE_ORIGIN } from "../../lib/site-origin";
import { contentSecurityPolicy } from "../../lib/security-headers";
import robots from "../../app/robots";
import sitemap from "../../app/sitemap";

test("metadata has distinct canonical, OG and image origins", () => {
  const m = pageMetadata("/projects", "Projects", "Description");
  assert.equal(m.alternates?.canonical, `${SITE_ORIGIN}/projects`);
  assert.equal(m.openGraph && "url" in m.openGraph ? m.openGraph.url : null, `${SITE_ORIGIN}/projects`);
  assert.equal(JSON.stringify(m).includes(`${SITE_ORIGIN}/opengraph-image`), true);
});
for (const path of ["https://evil.example.test", "//evil.example.test", "/\\evil.example.test"]) {
  test(`canonical helper rejects origin escape ${JSON.stringify(path)}`, () => assert.throws(() => siteUrl(path)));
}
test("JSON-LD cannot close its script element", () => {
  const payload = { name: '</script><script>alert("test")</script>' };
  const result = jsonLd(payload);
  assert.equal(result.includes("<"), false);
  assert.deepEqual(JSON.parse(result), payload);
});
test("production CSP blocks event attributes and base embedding, without eval", () => {
  const csp = contentSecurityPolicy();
  for (const directive of ["script-src-attr 'none'", "base-uri 'none'", "frame-src 'none'", "object-src 'none'"]) assert.ok(csp.includes(directive));
  assert.equal(csp.includes("unsafe-eval"), false);
  assert.ok(contentSecurityPolicy(true).includes("unsafe-eval"));
});
test("sitemap covers each unique canonical route without fabricated modification dates", () => {
  const entries = sitemap();
  assert.equal(entries.length, 24);
  assert.equal(new Set(entries.map(x => x.url)).size, 24);
  assert.ok(entries.every(x => new URL(x.url).origin === SITE_ORIGIN && !x.lastModified));
  assert.equal(robots().host, SITE_ORIGIN);
});
test("previews discourage crawling independently of canonical identity", (t) => {
  const previous = process.env.VERCEL_ENV;
  t.after(() => { if (previous === undefined) delete process.env.VERCEL_ENV; else process.env.VERCEL_ENV = previous; });
  process.env.VERCEL_ENV = "preview";
  assert.deepEqual(robots().rules, { userAgent: "*", disallow: "/" });
});
