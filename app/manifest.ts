import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omnia Sec AI Labs",
    short_name: "Omnia",
    description: "Secure autonomous systems for infrastructure and cybersecurity.",
    start_url: "/",
    display: "standalone",
    background_color: "#060811",
    theme_color: "#060811",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
