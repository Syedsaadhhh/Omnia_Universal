import type { Metadata } from "next";
import { site } from "./site";
import { siteUrl } from "./site-origin";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const image = { url: siteUrl("/opengraph-image"), width: 1200, height: 630, alt: site.name };
  return {
    title, description,
    alternates: { canonical: siteUrl(path) },
    openGraph: {
      type: "website", locale: "en_US", siteName: site.name,
      title, description, url: siteUrl(path), images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
