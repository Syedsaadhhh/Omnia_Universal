// Authoring only: exact SVG rasterization with Chromium, no external assets.
import { chromium } from "@playwright/test";
import { readFile } from "node:fs/promises";
const browser = await chromium.launch({
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || "/usr/bin/chromium",
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 180, height: 180 } });
await page.setContent(
  "<style>html,body{margin:0;width:180px;height:180px}svg{display:block;width:180px;height:180px}</style>" +
    (await readFile("public/logo-mark.svg", "utf8")),
);
await page.screenshot({ path: "public/apple-touch-icon.png" });
await browser.close();
