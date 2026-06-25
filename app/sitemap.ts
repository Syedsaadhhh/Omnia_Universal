import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

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
  ];
  return routes.map((route, index) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/gns3-agent" ? 0.9 : 0.7,
  }));
}
