import type { MetadataRoute } from "next";
import { absoluteUrl, resolveSiteLastModified } from "@/lib/seo";

const routes = [
  {
    path: "/",
    changeFrequency: "weekly" as const,
    priority: 1,
  },
  {
    path: "/chi-sono",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  },
  {
    path: "/portfolio",
    changeFrequency: "weekly" as const,
    priority: 0.9,
  },
  {
    path: "/contatti",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  },
];

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = resolveSiteLastModified();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
};

export default sitemap;
