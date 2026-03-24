import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildPageMetadata,
  siteConfig,
} from "@/lib/seo";

const noIndexRobots: Metadata["robots"] = {
  index: false,
  follow: true,
  googleBot: {
    index: false,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const metadata: Metadata = buildPageMetadata({
  title: "Stampe fine art e licenze",
  description:
    "Informazioni su stampe fine art e licenze fotografiche di Zoriography. La pagina resterà noindex finché il catalogo non sarà completo.",
  path: "/acquista",
  keywords: [
    "stampe fine art",
    "licenze fotografiche",
    "acquistare fotografie",
  ],
  robots: noIndexRobots,
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Acquista", path: "/acquista" },
]);

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Stampe fine art e licenze fotografiche",
  description:
    "Pagina dedicata alle stampe fine art e alle licenze digitali del progetto fotografico Zoriography.",
  url: absoluteUrl("/acquista"),
  inLanguage: siteConfig.language,
  author: {
    "@type": "Person",
    name: siteConfig.ownerName,
    url: siteConfig.url,
  },
};

const PurchaseLayout = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <JsonLd data={[breadcrumbSchema, collectionPageSchema]} />
  </>
);

export default PurchaseLayout;
