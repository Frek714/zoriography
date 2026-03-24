import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const manifest = (): MetadataRoute.Manifest => ({
  name: siteConfig.name,
  short_name: siteConfig.name,
  description: siteConfig.description,
  start_url: "/",
  scope: "/",
  display: "browser",
  background_color: "#0d0d0f",
  theme_color: "#0d0d0f",
  lang: siteConfig.language,
  categories: ["photography", "portfolio", "art"],
  icons: [
    {
      src: "/icon",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/apple-icon",
      sizes: "180x180",
      type: "image/png",
      purpose: "any",
    },
  ],
});

export default manifest;
