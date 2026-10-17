import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const origin = "https://omniaseclabs.com";
const routes = ["/", "/projects", "/research", "/about", "/build-log", "/contact", "/security", "/privacy", "/terms", "/gns3-agent"];
const valid = { name: "Audit User", email: "audit@example.test", interest: "Research", message: "Synthetic integration message only.", consent: "true" };

for (const viewport of [{ width: 1440, height: 1000 }, { width: 768, height: 1024 }, { width: 390, height: 844 }]) {
  test.describe(`${viewport.width}px`, () => {
    test.use({ viewport });
    for (const path of routes) {
      test(`${path} renders with correct metadata and internal targets`, async ({ page }) => {
        const errors: string[] = [];
        page.on("pageerror", e => errors.push(e.message));
        const response = await page.goto(path);
        expect(response?.status()).toBe(200);
        await expect(page.locator("h1")).toHaveCount(1);
        if (path === "/") expect(await page.title()).toBe("Omniasec Labs — Research & Product Development");
        expect(new URL((await page.locator('link[rel="canonical"]').getAttribute("href"))!).href).toBe(`${origin}${path}`);
        expect(new URL((await page.locator('meta[property="og:url"]').getAttribute("content"))!).href).toBe(`${origin}${path}`);
        await expect(page.locator('meta[property="og:image"]').first()).toHaveAttribute("content", new RegExp(`^${origin}/opengraph-image`));
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
        expect(await page.locator("img").evaluateAll(images => images.every(img => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
        // Fragments in current-page links must resolve. External demos are not exercised.
        const missing = await page.locator('a[href^="#"]').evaluateAll(links => links.map(a => a.getAttribute("href")!.slice(1)).filter(id => id && !document.getElementById(id)));
        expect(missing).toEqual([]);
        expect(errors).toEqual([]);
        if (["/", "/contact", "/privacy"].includes(path)) {
          await page.screenshot({ path: `test-results/screenshots/${viewport.width}-${path === "/" ? "home" : path.slice(1)}.png`, fullPage: true });
        }
      });
    }
  });
}

test("closed mobile menu is absent from tab order; Escape restores toggle focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.locator("button[aria-controls=mobile-navigation]");
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press("Tab");
    expect(await page.evaluate(() => !!document.activeElement?.closest("#mobile-navigation"))).toBe(false);
  }
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(page.locator("#mobile-navigation a").first()).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
  await page.screenshot({ path: "test-results/screenshots/mobile-menu-closed.png" });
});

test("menu route changes, same-route click and desktop resize close navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.locator("#mobile-navigation").getByRole("link", { name: "Work" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.locator("#mobile-navigation").getByRole("link", { name: "Work" }).click();
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(page.locator("#mobile-navigation")).toBeHidden();
  // CSS hides mobile navigation immediately; wait for its state transition too.
  await expect(page.locator("button[aria-controls=mobile-navigation]")).toHaveAttribute("aria-expanded", "false");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
});

for (const width of [1440, 390]) {
  test(`WCAG automated regression sample at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    for (const path of ["/", "/projects", "/about", "/contact", "/privacy"]) {
      await page.goto(path);
      const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
      expect(result.violations, `${path}: ${JSON.stringify(result.violations.map(v => ({ id: v.id, targets: v.nodes.map(n => n.target) })))}`).toEqual([]);
    }
  });
}

test("project filters still hydrate and announce count", async ({ page }) => {
  await page.goto("/projects");
  for (const [label, count] of [["All", 11], ["Prototypes", 7], ["Experiments", 3], ["Concepts", 1]] as const) {
    await page.getByRole("button", { name: label, exact: true }).click();
    await expect(page.locator(".showcase-card")).toHaveCount(count);
    await expect(page.locator(".project-result-count")).toContainText(`Showing ${count}`);
  }
});

test("contact and privacy describe the same mailto-only flow", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator("form")).toHaveCount(0);
  await expect(page.locator('a[href="mailto:contact@omniaseclabs.com"]').first()).toBeVisible();
  await page.goto("/privacy");
  await expect(page.locator("main")).toContainText("not an online contact form");
  await expect(page.locator("main")).toContainText("endpoint is disabled for delivery");
  await expect(page.locator("main")).not.toContainText("Basic IP-based rate limiting");
});

test("production CSP reaches HTTP clients and blocks inline event handlers", async ({ page }) => {
  const response = await page.goto("/");
  const csp = response!.headers()["content-security-policy"];
  expect(csp).toContain("script-src-attr 'none'");
  expect(csp).toContain("base-uri 'none'");
  expect(csp).not.toContain("unsafe-eval");
  expect(response!.headers()["x-frame-options"]).toBe("DENY");
  await page.evaluate(() => {
    const button = document.createElement("button");
    button.id = "csp-test";
    button.textContent = "Synthetic CSP probe";
    button.setAttribute("onclick", "document.body.dataset.untrustedHandler = 'executed'");
    document.body.append(button);
  });
  await page.locator("#csp-test").click();
  expect(await page.getAttribute("body", "data-untrusted-handler")).toBeNull();
});

test("robots, sitemap, OG image and missing route have expected HTTP behavior", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`${origin}/sitemap.xml`);
  const sitemap = await request.get("/sitemap.xml");
  const xml = await sitemap.text();
  expect((xml.match(/<loc>/g) || []).length).toBe(24);
  expect(xml).not.toContain("vercel.app");
  const image = await request.get("/opengraph-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/not-a-real-route")).status()).toBe(404);
  expect((await request.get("/api/contact")).status()).toBe(405);
  expect((await request.get("/_next/image?url=/favicon.svg&w=64&q=75")).status()).toBe(404);
});

test("real HTTP contact contract rejects unsafe input and cannot send", async ({ request }) => {
  const headers = { origin, "content-type": "application/json" };
  for (const [data, status] of [["{", 400], ["null", 400], ["[]", 400], [JSON.stringify(valid), 503], [JSON.stringify({ ...valid, extra: "x".repeat(1024 * 1024) }), 413]] as const) {
    const r = await request.post("/api/contact", { data, headers });
    expect(r.status()).toBe(status);
    expect(r.headers()["cache-control"]).toBe("no-store");
    expect(await r.text()).not.toContain("Synthetic integration message");
  }
  expect((await request.post("/api/contact", { data: valid, headers: { ...headers, origin: "https://evil.example.test", "x-forwarded-host": "evil.example.test" } })).status()).toBe(403);
  expect((await request.post("/api/contact", { data: valid, headers: { ...headers, "content-type": "text/plain" } })).status()).toBe(415);
  for (let i = 0; i < 6; i++) {
    expect((await request.post("/api/contact", { data: valid, headers: { ...headers, "x-forwarded-for": `203.0.113.${i}` } })).status()).toBe(503);
  }
});
