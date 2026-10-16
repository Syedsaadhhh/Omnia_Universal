// Canonical identity is independent of request/proxy headers and stale host variables.
export const SITE_ORIGIN = "https://omniaseclabs.com";

export function siteUrl(path = "/"): string {
  if (!path.startsWith("/") || path.startsWith("//")) {
    throw new Error("Site paths must be absolute paths on the canonical origin.");
  }
  const url = new URL(path, SITE_ORIGIN);
  if (url.origin !== SITE_ORIGIN) throw new Error("Site paths must stay on the canonical origin.");
  return url.href;
}
