import type { Metadata } from "next";

const ensureProtocol = (value: string) =>
  /^https?:\/\//i.test(value) ? value : `https://${value}`;

const normalizeUrl = (value: string) =>
  ensureProtocol(value).replace(/\/+$/, "");

export const siteConfig = {
  name: "Zoriography",
  ownerName: "Federico D'Ursi",
  url: normalizeUrl(process.env.NEXT_PUBLIC_SITE_URL ?? "https://zoriography.com"),
  locale: "it_IT",
  language: "it-IT",
  description:
    "Portfolio fotografico di Federico D'Ursi tra natura, paesaggio, wildlife, viaggi e astrofotografia.",
  email: "hello@zoriography.com",
  instagram: "https://www.instagram.com/zoriography/",
  behance: "https://www.behance.net/federicodursi",
  keywords: [
    "fotografo portfolio",
    "portfolio fotografico",
    "fotografia naturalistica",
    "fotografia paesaggistica",
    "wildlife photography",
    "astrofotografia",
    "fotografia di viaggio",
    "stampe fine art",
    "Zoriography",
    "Federico D'Ursi",
  ],
} as const;

export const isPreviewDeployment = process.env.VERCEL_ENV === "preview";
export const shouldIndexSite = !isPreviewDeployment;

export const defaultMetadataImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Anteprima del portfolio fotografico Zoriography",
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, `${siteConfig.url}/`).toString();

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  openGraphType?: "website" | "article";
  robots?: Metadata["robots"];
};

export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords = [],
  openGraphType = "website",
  robots,
}: PageMetadataOptions): Metadata => {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const pageKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords])
  );

  return {
    title,
    description,
    keywords: pageKeywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: openGraphType,
      images: [
        {
          url: absoluteUrl(defaultMetadataImage.url),
          width: defaultMetadataImage.width,
          height: defaultMetadataImage.height,
          alt: defaultMetadataImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@zoriography",
      images: [absoluteUrl(defaultMetadataImage.url)],
    },
    ...(robots ? { robots } : {}),
  };
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  alternateName: siteConfig.ownerName,
  url: siteConfig.url,
  inLanguage: siteConfig.language,
  description: siteConfig.description,
  publisher: {
    "@type": "Person",
    name: siteConfig.ownerName,
    url: siteConfig.url,
  },
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.ownerName,
  alternateName: siteConfig.name,
  jobTitle: "Fotografo",
  description: siteConfig.description,
  email: siteConfig.email,
  url: siteConfig.url,
  image: absoluteUrl(defaultMetadataImage.url),
  sameAs: [siteConfig.instagram, siteConfig.behance],
  knowsAbout: [
    "fotografia naturalistica",
    "fotografia di paesaggio",
    "wildlife photography",
    "astrofotografia",
    "fotografia di viaggio",
  ],
};
