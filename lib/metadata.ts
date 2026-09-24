import type { Metadata } from "next";
import { SITE_URL } from "./constants";
import { isProductionSite } from "./seo/is-production";

const BRAND = "Political Risk Expert";
const TITLE_MAX = 60;
const DESCRIPTION_MAX = 155;

const OG_IMAGE_ALT =
  "Political Risk Expert Witness - Investment Treaty, Sanctions and Arbitration";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

function truncateAtWord(text: string, max: number): string {
  const trimmed = text.trim();
  if (trimmed.length <= max) return trimmed;
  const slice = trimmed.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(" ");
  if (lastSpace > max * 0.6) return `${slice.slice(0, lastSpace).trim()}…`;
  return `${slice.trim()}…`;
}

export function buildPageTitle(title: string): string {
  const normalized = title.trim();
  const full = normalized.includes(BRAND)
    ? normalized
    : `${normalized} | ${BRAND}`;
  return truncateAtWord(full, TITLE_MAX);
}

export function buildPageDescription(description: string): string {
  return truncateAtWord(description, DESCRIPTION_MAX);
}

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const pageTitle = buildPageTitle(title);
  const pageDescription = buildPageDescription(description);
  const shouldNoindex = noindex || !isProductionSite();

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: BRAND,
      locale: "en",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
    },
    robots: shouldNoindex
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
