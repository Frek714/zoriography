import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import JsonLd from "@/components/json-ld";
import { Analytics } from '@vercel/analytics/next';
import {
  absoluteUrl,
  defaultMetadataImage,
  personSchema,
  shouldIndexSite,
  siteConfig,
  websiteSchema,
} from "@/lib/seo";

const manifesto = localFont({
  src: "../resources/fonts/MANIFESTO.ttf",
  variable: "--font-manifesto",
  fallback: ["system-ui", "sans-serif"],
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio fotografico di natura, paesaggio e wildlife | Zoriography",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  authors: [
    {
      name: siteConfig.ownerName,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.ownerName,
  publisher: siteConfig.name,
  category: "photography",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon",
    shortcut: "/icon",
    apple: "/apple-icon",
  },
  robots: {
    index: shouldIndexSite,
    follow: shouldIndexSite,
    googleBot: {
      index: shouldIndexSite,
      follow: shouldIndexSite,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Portfolio fotografico di natura, paesaggio e wildlife | Zoriography",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
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
    title: "Portfolio fotografico di natura, paesaggio e wildlife | Zoriography",
    description: siteConfig.description,
    creator: "@zoriography",
    images: [absoluteUrl(defaultMetadataImage.url)],
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION ||
  process.env.BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(process.env.GOOGLE_SITE_VERIFICATION
            ? { google: process.env.GOOGLE_SITE_VERIFICATION }
            : {}),
          ...(process.env.BING_SITE_VERIFICATION
            ? {
                other: {
                  "msvalidate.01": process.env.BING_SITE_VERIFICATION,
                },
              }
            : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0d0d0f",
  colorScheme: "dark",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="it" className={`${manifesto.variable} ${montserrat.variable}`}>
    <body className="text-white antialiased overflow-x-hidden">
      <SmoothScrollProvider>
        <SiteHeader />
        <main className="w-full px-0 pt-32">{children}</main>
        <JsonLd data={[websiteSchema, personSchema]} />
        <SiteFooter />
      </SmoothScrollProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
