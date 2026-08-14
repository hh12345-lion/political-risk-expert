import { getCaseType } from "./case-types";
import { getGuide } from "./guides";
import { getPracticeArea } from "./practice-areas";
import { getRiskType } from "./risk-types";

export type RelatedLink = { href: string; label: string };

export const STANDARD_PROCESS_LINKS: RelatedLink[] = [
  {
    href: "/political-risk-explained",
    label: "Political Risk in Litigation and Arbitration",
  },
  { href: "/how-to-instruct", label: "How to Instruct a Political Risk Expert" },
  { href: "/appoint", label: "Enquire about a political risk expert" },
];

const PRACTICE_AREA_MATRIX: Record<
  string,
  { riskTypes: string[]; caseTypes: string[]; guides: string[] }
> = {
  "investment-treaty-arbitration": {
    riskTypes: ["expropriation-nationalisation", "fair-equitable-treatment-breach"],
    caseTypes: [
      "icsid-investment-treaty-claim",
      "uk-investor-state-arbitration",
      "energy-charter-treaty-dispute",
    ],
    guides: [
      "investment-treaty-arbitration-guide",
      "ect-sunset-provision-guide",
      "uk-investor-state-guide",
    ],
  },
  "political-risk-insurance": {
    riskTypes: [
      "expropriation-nationalisation",
      "political-violence-instability",
      "currency-convertibility-transfer",
    ],
    caseTypes: ["political-risk-insurance-claim"],
    guides: ["political-risk-insurance-guide"],
  },
  "sanctions-arbitration": {
    riskTypes: ["sanctions-regulatory-risk"],
    caseTypes: ["sanctions-contract-dispute", "lcia-icc-political-risk-arbitration"],
    guides: ["sanctions-arbitration-2025-guide"],
  },
  "commercial-arbitration-risk": {
    riskTypes: ["resource-nationalism", "sanctions-regulatory-risk"],
    caseTypes: ["resource-nationalism-mining", "expropriation-claim"],
    guides: ["resource-nationalism-guide"],
  },
};

const RISK_TYPE_MATRIX: Record<
  string,
  { practiceArea: string; caseType: string; guide?: string }
> = {
  "expropriation-nationalisation": {
    practiceArea: "investment-treaty-arbitration",
    caseType: "expropriation-claim",
    guide: "investment-treaty-arbitration-guide",
  },
  "fair-equitable-treatment-breach": {
    practiceArea: "investment-treaty-arbitration",
    caseType: "icsid-investment-treaty-claim",
    guide: "investment-treaty-arbitration-guide",
  },
  "sanctions-regulatory-risk": {
    practiceArea: "sanctions-arbitration",
    caseType: "sanctions-contract-dispute",
    guide: "sanctions-arbitration-2025-guide",
  },
  "political-violence-instability": {
    practiceArea: "political-risk-insurance",
    caseType: "political-risk-insurance-claim",
    guide: "political-risk-insurance-guide",
  },
  "currency-convertibility-transfer": {
    practiceArea: "political-risk-insurance",
    caseType: "political-risk-insurance-claim",
    guide: "political-risk-insurance-guide",
  },
  "resource-nationalism": {
    practiceArea: "commercial-arbitration-risk",
    caseType: "resource-nationalism-mining",
    guide: "resource-nationalism-guide",
  },
};

function riskLink(slug: string): RelatedLink | null {
  const rt = getRiskType(slug);
  return rt ? { href: `/risk-types/${slug}`, label: rt.title } : null;
}

function caseLink(slug: string): RelatedLink | null {
  const ct = getCaseType(slug);
  return ct ? { href: `/case-types/${slug}`, label: ct.title } : null;
}

function guideLink(slug: string): RelatedLink | null {
  const g = getGuide(slug);
  return g ? { href: `/guides/${slug}`, label: g.title } : null;
}

function practiceLink(slug: string): RelatedLink | null {
  const pa = getPracticeArea(slug);
  return pa ? { href: `/practice-areas/${slug}`, label: pa.title } : null;
}

export function getPracticeAreaRelatedLinks(slug: string): RelatedLink[] {
  const matrix = PRACTICE_AREA_MATRIX[slug];
  if (!matrix) return [...STANDARD_PROCESS_LINKS];

  const links: RelatedLink[] = [];
  for (const s of matrix.riskTypes) {
    const l = riskLink(s);
    if (l) links.push(l);
  }
  for (const s of matrix.caseTypes) {
    const l = caseLink(s);
    if (l) links.push(l);
  }
  for (const s of matrix.guides) {
    const l = guideLink(s);
    if (l) links.push(l);
  }
  return [...links, ...STANDARD_PROCESS_LINKS];
}

export function getRiskTypeRelatedLinks(slug: string): RelatedLink[] {
  const matrix = RISK_TYPE_MATRIX[slug];
  const links: RelatedLink[] = [];
  if (matrix) {
    const pa = practiceLink(matrix.practiceArea);
    const ct = caseLink(matrix.caseType);
    if (pa) links.push(pa);
    if (ct) links.push(ct);
    if (matrix.guide) {
      const g = guideLink(matrix.guide);
      if (g) links.push(g);
    }
  }
  return [...links, ...STANDARD_PROCESS_LINKS];
}

export function getCaseTypeRelatedLinks(
  practiceSlugs: string[],
  riskSlugs: string[]
): RelatedLink[] {
  const links: RelatedLink[] = [];
  for (const s of practiceSlugs) {
    const l = practiceLink(s);
    if (l) links.push(l);
  }
  for (const s of riskSlugs) {
    const l = riskLink(s);
    if (l) links.push(l);
  }
  return [...links, ...STANDARD_PROCESS_LINKS];
}

export function getGuideRelatedLinks(practiceSlugs: string[]): RelatedLink[] {
  const links: RelatedLink[] = [];
  for (const s of practiceSlugs) {
    const l = practiceLink(s);
    if (l) links.push(l);
  }
  return [
    { href: "/political-risk-explained", label: "Political Risk Explained" },
    ...links,
    { href: "/how-to-instruct", label: "How to Instruct a Political Risk Expert" },
    { href: "/appoint", label: "Enquire about a political risk expert" },
  ];
}

const GUIDE_PRACTICE_MAP: Record<string, string[]> = {
  "investment-treaty-arbitration-guide": ["investment-treaty-arbitration"],
  "sanctions-arbitration-2025-guide": ["sanctions-arbitration"],
  "political-risk-insurance-guide": ["political-risk-insurance"],
  "resource-nationalism-guide": ["commercial-arbitration-risk"],
  "uk-investor-state-guide": ["investment-treaty-arbitration"],
  "ect-sunset-provision-guide": ["investment-treaty-arbitration"],
};

export function getGuideRelatedLinksForSlug(slug: string): RelatedLink[] {
  return getGuideRelatedLinks(GUIDE_PRACTICE_MAP[slug] ?? []);
}

export const PILLAR_RELATED_LINKS: RelatedLink[] = [
  { href: "/practice-areas/investment-treaty-arbitration", label: "Investment Treaty Arbitration" },
  { href: "/practice-areas/political-risk-insurance", label: "Political Risk Insurance" },
  { href: "/practice-areas/sanctions-arbitration", label: "Sanctions Arbitration" },
  { href: "/practice-areas/commercial-arbitration-risk", label: "Commercial Arbitration Risk" },
  { href: "/risk-types/expropriation-nationalisation", label: "Expropriation and Nationalisation" },
  { href: "/risk-types/sanctions-regulatory-risk", label: "Sanctions and Regulatory Risk" },
  { href: "/risk-types/fair-equitable-treatment-breach", label: "Fair and Equitable Treatment" },
  { href: "/risk-types/resource-nationalism", label: "Resource Nationalism" },
  { href: "/guides/investment-treaty-arbitration-guide", label: "Investment Treaty Arbitration Guide" },
  { href: "/guides/sanctions-arbitration-2025-guide", label: "Sanctions Arbitration 2025-2026 Guide" },
  { href: "/guides/uk-investor-state-guide", label: "UK Investor-State Arbitration Guide" },
  { href: "/how-to-instruct", label: "How to Instruct a Political Risk Expert" },
  { href: "/appoint", label: "Enquire about a political risk expert" },
];
