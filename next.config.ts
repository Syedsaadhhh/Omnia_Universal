import type { NextConfig } from "next";
import { contentSecurityPolicy, securityHeaders } from "./lib/security-headers";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "standalone",
  // Current images are local SVGs; no native image input API is needed.
  images: { unoptimized: true },
  async headers() {
    return [{ source: "/(.*)", headers: [
      ...securityHeaders,
      { key: "Content-Security-Policy", value: contentSecurityPolicy(process.env.NODE_ENV === "development") },
      ...(process.env.VERCEL_ENV === "preview" ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
    ] }];
  },
};

export default nextConfig;
