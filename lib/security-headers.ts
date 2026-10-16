export function contentSecurityPolicy(development = false): string {
  return [
    "default-src 'self'", "base-uri 'none'", "form-action 'self'",
    "frame-ancestors 'none'", "object-src 'none'", "frame-src 'none'",
    "worker-src 'none'", "media-src 'none'", "img-src 'self' data: blob:",
    "font-src 'self' data:", "style-src 'self' 'unsafe-inline'",
    // Static Next.js hydration still requires inline scripts. Nonces would force
    // dynamic rendering; do not silently change CDN behavior and cost here.
    `script-src 'self' 'unsafe-inline'${development ? " 'unsafe-eval'" : ""}`,
    "script-src-attr 'none'",
    development ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
    ...(development ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");
}

export const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
];
