import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/json-ld";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildPageMetadata,
  personSchema,
  siteConfig,
} from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Chi sono",
  description:
    "Scopri il percorso, le ispirazioni e l'attrezzatura di Federico D'Ursi, autore del progetto fotografico Zoriography.",
  path: "/chi-sono",
  keywords: [
    "chi è zoriography",
    "fotografo natura e paesaggio",
    "federico d'ursi fotografo",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Chi sono", path: "/chi-sono" },
]);

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Chi sono | Zoriography",
  description:
    "Percorso, passioni e strumenti fotografici di Federico D'Ursi, autore di Zoriography.",
  url: absoluteUrl("/chi-sono"),
  inLanguage: siteConfig.language,
  mainEntity: personSchema,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const AboutLayout = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <JsonLd data={[breadcrumbSchema, aboutPageSchema]} />
  </>
);

export default AboutLayout;
