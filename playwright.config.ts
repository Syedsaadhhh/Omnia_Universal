import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/integration",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: "test-results/integration.json" }]],
  use: {
    baseURL: "http://127.0.0.1:3100",
    browserName: "chromium",
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE }
      : {},
    reducedMotion: "reduce",
    trace: "off",
  },
  webServer: {
    command: "node .next/standalone/server.js",
    url: "http://127.0.0.1:3100/api/health",
    env: { HOSTNAME: "127.0.0.1", PORT: "3100" },
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
