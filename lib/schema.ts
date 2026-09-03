import { SITE_EMAIL, SITE_URL, LINKEDIN_URL } from "./constants";
import { services } from "@/data/services";

export type FAQ = { question: string; answer: string };
export type BreadcrumbItem = { name: string; href?: string };

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(
  items: ({ name?: string; label?: string; href?: string })[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const name = item.name ?? item.label ?? "";
      const href = item.href;
      return {
        "@type": "ListItem",
        position: i + 1,
        name,
        ...(href ? { item: `${SITE_URL}${href}` } : {}),
      };
    }),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Political Risk Expert",
    url: SITE_URL,
    email: SITE_EMAIL,
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: ["United Kingdom", "International"],
    sameAs: [LINKEDIN_URL],
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Political Risk Expert Witness Services",
    url: SITE_URL,
    serviceType: "Political Risk Expert Witness",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Political Risk Expert Witness Services",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.title,
          description: s.description,
          url: `${SITE_URL}/services/${s.id}`,
          provider: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
  };
}

export function homepageGraph() {
  const { "@context": _orgCtx, ...organization } = organizationSchema();
  const { "@context": _svcCtx, ...professionalService } = professionalServiceSchema();
  return {
    "@context": "https://schema.org",
    "@graph": [organization, professionalService],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Political Risk Expert",
    url: SITE_URL,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function serviceNode(id: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${id}`,
    name,
    description,
    url: `${SITE_URL}/services/${id}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "United Kingdom",
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished = "2025-06-01",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
    inLanguage: "en-GB",
  };
}

export function personSchema({
  id,
  name,
  jobTitle,
  description,
  knowsAbout,
}: {
  id: string;
  name: string;
  jobTitle: string;
  description: string;
  knowsAbout: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/experts#${id}`,
    name,
    jobTitle,
    description,
    knowsAbout,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}/experts`,
  };
}
