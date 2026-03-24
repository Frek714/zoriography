import type { MetadataRoute } from "next";
import { absoluteUrl, shouldIndexSite, siteConfig } from "@/lib/seo";

const robots = (): MetadataRoute.Robots => {
  if (!shouldIndexSite) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: absoluteUrl("/sitemap.xml"),
      host: siteConfig.url,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
};

export default robots;
