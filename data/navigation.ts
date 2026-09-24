import { practiceAreas } from "./practice-areas";
import { riskTypes } from "./risk-types";
import { caseTypes } from "./case-types";
import { guides } from "./guides";
import { services } from "./services";

export type NavLink = { label: string; href: string };

export const practiceAreasNavLinks: NavLink[] = practiceAreas.map((p) => ({
  label: p.title,
  href: `/practice-areas/${p.slug}`,
}));

export const riskTypesNavLinks: NavLink[] = riskTypes.map((r) => ({
  label: r.title,
  href: `/risk-types/${r.slug}`,
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const servicesNavLinks: NavLink[] = services.map((s) => ({
  label: s.title,
  href: `/services/${s.id}`,
}));

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.title,
  href: `/guides/${g.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "Guides", href: "/guides" },
  { label: "Blog", href: "/blog" },
  { label: "Glossary", href: "/glossary" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "What Is a Political Risk Expert?", href: "/what-is-a-political-risk-expert" },
  { label: "Political Risk Explained", href: "/political-risk-explained" },
];

export const mobileNavGroups = [
  {
    title: "Practice Areas",
    links: [{ label: "All Practice Areas", href: "/practice-areas" }, ...practiceAreasNavLinks],
  },
  {
    title: "Risk Types",
    links: [{ label: "All Risk Types", href: "/risk-types" }, ...riskTypesNavLinks],
  },
  {
    title: "Case Types",
    links: [{ label: "All Case Types", href: "/case-types" }, ...caseTypesNavLinks],
  },
  {
    title: "Services",
    links: [{ label: "All Services", href: "/services" }, ...servicesNavLinks],
  },
  {
    title: "Resources",
    links: [
      ...guidesNavLinks.slice(0, 3),
      { label: "All Guides", href: "/guides" },
      { label: "Blog", href: "/blog" },
      { label: "Glossary", href: "/glossary" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "How to Instruct", href: "/how-to-instruct" },
      { label: "Political Risk Explained", href: "/political-risk-explained" },
    ],
  },
];
