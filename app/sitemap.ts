import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/gns3-agent",
    "/projects",
    "/research",
    "/build-log",
    "/about",
    "/contact",
    "/security",
    "/privacy",
    "/terms",
    "/collaborate",
    "/for-organizations",
  ];
  return routes.map((route, index) => ({
    url: siteUrl(route || "/"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : 0.7,
  }));
}
