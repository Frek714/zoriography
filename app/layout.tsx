import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

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
    default: "Zoriography - Portfolio Fotografico",
    template: "%s - Zoriography"
  },
  description:
    "Portfolio fotografico di Zoriography: storie visive tra ritratti, moda e reportage.",
  metadataBase: new URL("https://zoriography.example"),
  openGraph: {
    title: "Zoriography - Portfolio Fotografico",
    description:
      "Una selezione curata di progetti fotografici che celebrano luce, texture e movimento.",
    url: "https://zoriography.example",
    siteName: "Zoriography",
    locale: "it_IT",
    type: "website"
  }
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="it" className={`${manifesto.variable} ${montserrat.variable}`}>
    <body className="bg-[radial-gradient(circle_at_top,_#1d1d21,_#0d0d0f)] text-white antialiased overflow-y-hidden overflow-x-hidden">
      <SmoothScrollProvider>
        <SiteHeader />
        <main className="w-full px-0 pt-32">{children}</main>
        <SiteFooter />
      </SmoothScrollProvider>
    </body>
  </html>
);

export default RootLayout;
