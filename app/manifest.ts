import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Omniasec Labs",
    short_name: "Omniasec Labs",
    description: "Technology research and product development.",
    start_url: "/",
    display: "standalone",
    background_color: "#101f1d",
    theme_color: "#101f1d",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
