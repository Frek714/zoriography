import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildPageMetadata,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio fotografico",
  description:
    "Esplora la galleria fotografica di Zoriography tra natura, paesaggio, wildlife, viaggi e astrofotografia.",
  path: "/portfolio",
  keywords: [
    "galleria fotografica",
    "portfolio fotografia natura",
    "portfolio wildlife",
    "portfolio paesaggio",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
]);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio fotografico di Zoriography",
  description:
    "Una raccolta di fotografie di natura, paesaggio, fauna selvatica, viaggi e cielo notturno.",
  url: absoluteUrl("/portfolio"),
  inLanguage: siteConfig.language,
  about: [
    "fotografia naturalistica",
    "fotografia paesaggistica",
    "wildlife photography",
    "astrofotografia",
  ],
  author: {
    "@type": "Person",
    name: siteConfig.ownerName,
    url: siteConfig.url,
  },
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const PortfolioLayout = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <JsonLd data={[breadcrumbSchema, collectionPageSchema]} />
  </>
);

export default PortfolioLayout;
