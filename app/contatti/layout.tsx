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
  title: "Contatti",
  description:
    "Contatta Zoriography per collaborazioni, richieste stampa, licenze fotografiche o domande sui progetti fotografici.",
  path: "/contatti",
  keywords: [
    "contatti fotografo",
    "contatti zoriography",
    "licenze fotografiche",
    "richiesta stampe fotografiche",
  ],
});

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Contatti", path: "/contatti" },
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contatti | Zoriography",
  description:
    "Pagina contatti per collaborazioni, richieste fine art print e licenze digitali.",
  url: absoluteUrl("/contatti"),
  inLanguage: siteConfig.language,
  mainEntity: {
    "@type": "Person",
    name: siteConfig.ownerName,
    email: siteConfig.email,
    sameAs: [siteConfig.instagram, siteConfig.behance],
    url: siteConfig.url,
  },
};

const ContactLayout = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <JsonLd data={[breadcrumbSchema, contactPageSchema]} />
  </>
);

export default ContactLayout;
