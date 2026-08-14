import type { Metadata } from "next";
import { Barlow_Condensed, Source_Serif_4 } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentProvider, ConsentDefaultsScript } from "@/components/cookies";
import { JsonLd } from "@/components/ui/JsonLd";
import { SITE_URL } from "@/lib/constants";
import { isProductionSite } from "@/lib/seo/is-production";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Political Risk Expert Witness UK | Investment Treaty, Sanctions & Arbitration",
    template: "%s | Political Risk Expert",
  },
  description:
    "Find a qualified political risk expert witness in the UK. Independent experts for investment treaty arbitration, political risk insurance claims, sanctions disputes, and commercial arbitration.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  alternates: {
    languages: {
      "en-GB": SITE_URL,
      "en-US": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  robots: isProductionSite() ? { index: true, follow: true } : { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${barlow.variable} ${sourceSerif.variable} h-full`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-hidden font-sans antialiased lg:flex-row">
        <ConsentDefaultsScript />
        <CookieConsentProvider>
          <JsonLd data={[homepageGraph(), websiteSchema()]} />
          <Header />
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </CookieConsentProvider>
      </body>
    </html>
  );
}
