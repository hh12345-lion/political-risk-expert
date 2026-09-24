import type { FAQ } from "@/lib/schema";

export type PracticeArea = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  faqs: FAQ[];
  relatedRiskTypes: string[];
  relatedServices: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "investment-treaty-arbitration",
    title: "Investment Treaty Arbitration",
    h1: "Investment Treaty Arbitration Political Risk Expert Witness",
    metaTitle:
      "Investment Treaty Arbitration Expert Witness | ICSID, LCIA, ICC",
    metaDescription:
      "Political risk expert witnesses for investment treaty arbitration. ICSID, LCIA, ICC, UNCITRAL proceedings covering expropriation, FET breaches, and UK investor-state cases.",
    content: [
      "International arbitration plays a critical role in protecting investments against political risks. The UK's withdrawal from the Energy Charter Treaty was completed in 2025, while the sunset provision protects existing investments until April 2045.",
      "Our experts provide independent analysis for ICSID, LCIA, ICC, and UNCITRAL proceedings. Coverage includes Chorzow Factory full reparation standards, direct and indirect expropriation, fair and equitable treatment (FET), full protection and security, umbrella clauses, and BIT protections.",
      "The UK government is currently respondent in active investor-state arbitrations including Woodhouse/West Cumbria Mining and Mikhail Fridman's claim (2025-2026), representing a new frontier for UK treaty arbitration with over 80 bilateral investment treaties in force.",
    ],
    faqs: [
      {
        question:
          "What is a political risk expert witness in investment treaty arbitration?",
        answer:
          "In investment treaty arbitration, political risk expert witnesses provide independent analysis of the geopolitical, regulatory, and policy context of host state conduct, explaining why government actions constituted expropriation, FET breach, or other treaty violations in the political context of the time. They bridge the gap between legal submissions and factual country conditions for arbitral tribunals.",
      },
      {
        question:
          "What is the significance of the UK's Energy Charter Treaty withdrawal?",
        answer:
          "The UK completed its withdrawal from the Energy Charter Treaty in 2025. However, the treaty's sunset provision means existing investments made by qualifying foreign investors retain protection until April 2045, making ECT expert evidence relevant to UK disputes for decades to come.",
      },
    ],
    relatedRiskTypes: [
      "expropriation-nationalisation",
      "fair-equitable-treatment-breach",
      "resource-nationalism",
    ],
    relatedServices: [
      "investment-treaty-expert-analysis",
      "expropriation-country-analysis",
      "fet-breach-context-analysis",
    ],
  },
  {
    slug: "political-risk-insurance",
    title: "Political Risk Insurance",
    h1: "Political Risk Insurance Expert Witness | PRTC & Expropriation Claims",
    metaTitle:
      "Political Risk Insurance Expert Witness | PRTC & Expropriation",
    metaDescription:
      "Expert witnesses for political risk insurance claims. PRTC coverage, expropriation, political violence, currency inconvertibility, and Lloyd's market coverage disputes.",
    content: [
      "Political risk insurance claims require expert evidence when insurers dispute whether a covered political risk event has occurred, when the cause of loss is contested between political and commercial risk, or when quantum requires political context.",
      "Our experts cover Political Risk, Trade Credit and Political Violence (PRTC) insurance, expropriation coverage, currency inconvertibility, political violence, contract frustration, Lloyd's market policies, and parallel MIGA and export credit agency coverage.",
      "Expert analysis establishes whether the relevant political event constituted an insured peril and whether host state conduct amounted to expropriation, legitimate regulation, or something in between.",
    ],
    faqs: [
      {
        question:
          "When is a political risk expert needed in an insurance claim?",
        answer:
          "Political risk insurance claims require expert evidence when the insurer disputes whether a covered political risk event has occurred, when the cause of loss is disputed between political risk and commercial risk, or when the quantum of loss requires political risk context to be properly assessed. Political risk experts provide independent analysis of whether the relevant political event constituted an insured peril.",
      },
      {
        question:
          "What is the difference between expropriation and regulatory change for insurance purposes?",
        answer:
          "Expropriation, direct seizure of assets, is clearly covered by most political risk policies. Creeping expropriation, gradual regulatory measures that effectively deprive the investor of economic value, is a contested coverage area. Political risk experts analyse the host state's conduct and whether it constituted expropriation, legitimate regulation, or something in between.",
      },
    ],
    relatedRiskTypes: [
      "expropriation-nationalisation",
      "political-violence-instability",
      "currency-convertibility-transfer",
    ],
    relatedServices: [
      "political-risk-insurance-expert-evidence",
      "expropriation-country-analysis",
      "political-violence-country-report",
    ],
  },
  {
    slug: "sanctions-arbitration",
    title: "Sanctions Arbitration",
    h1: "Sanctions Arbitration Expert Witness | Commercial & Investment Disputes",
    metaTitle:
      "Sanctions Arbitration Expert Witness | Force Majeure & Enforcement",
    metaDescription:
      "Sanctions arbitration expert witnesses. Russia-Ukraine sanctions, Iran re-sanctions, OFSI, blocking regulations, contract frustration, and award enforcement.",
    content: [
      "Sanctions are now central to international arbitration. Nearly 25% of ICC cases in Q1 2024 involved sanctions, and the trend is expected to continue through 2026. Russia-Ukraine sanctions, Iran re-sanctions (2025), and European blocking regulations create substantial legal complexity.",
      "Our experts analyse Russia/Ukraine sanctions, Iran sanctions reintroduced in 2025, UK OFSI implementation, EU and US sanctions interaction, blocking regulations, contract frustration, force majeure in sanctions context, and award enforcement challenges.",
      "Political risk experts explain the geopolitical context of sanctions implementation, the regulatory framework, and the impact on contractual performance, helping tribunals understand whether force majeure or frustration applies in the specific sanctions context.",
    ],
    faqs: [
      {
        question:
          "What role does a political risk expert play in sanctions arbitration?",
        answer:
          "In sanctions-related arbitrations, political risk experts explain the geopolitical context of sanctions implementation, the regulatory framework, and the impact on contractual performance, helping tribunals understand why obligations could not be performed and whether force majeure or frustration applies in the specific sanctions context.",
      },
      {
        question: "How do blocking regulations affect arbitration?",
        answer:
          "The interplay between EU and UK blocking regulations, secondary sanctions, and Chinese countermeasures poses substantial challenges for arbitrators, with many disputes still going through case management phase. Political risk experts provide analysis of the applicable regulatory framework and its impact on parties' contractual obligations.",
      },
    ],
    relatedRiskTypes: ["sanctions-regulatory-risk"],
    relatedServices: ["sanctions-context-analysis", "country-risk-expert-report"],
  },
  {
    slug: "commercial-arbitration-risk",
    title: "Commercial Arbitration Risk",
    h1: "Commercial Arbitration Political Risk Expert Witness",
    metaTitle:
      "Commercial Arbitration Political Risk Expert Witness | Country Risk",
    metaDescription:
      "Political risk expert witnesses for commercial arbitration. Resource nationalism, regulatory risk, country risk analysis, and force majeure in political context.",
    content: [
      "Commercial arbitration with political risk elements requires expert evidence when disputes turn on government action, regulatory change, or geopolitical events affecting contract performance.",
      "Our experts cover resource nationalism, regulatory risk, country risk analysis, force majeure in political context, commercial contracts affected by geopolitical events, and dispute resolution in high-risk jurisdictions.",
      "Political risk expert evidence establishes whether government action was foreseeable, whether force majeure was triggered by political events, and what the political and regulatory context requires for contract interpretation.",
    ],
    faqs: [
      {
        question:
          "When is political risk expert evidence needed in commercial arbitration?",
        answer:
          "Political risk expert evidence is needed in commercial arbitration when the dispute turns on whether a government action was foreseeable as political risk, whether force majeure was triggered by political events, whether regulatory changes constitute material adverse change, or what the political and regulatory context of a jurisdiction requires for contract interpretation.",
      },
      {
        question:
          "What is resource nationalism and how does it affect commercial arbitration?",
        answer:
          "Resource nationalism, the trend for states to exert greater control over natural resources through licence revocation, forced renegotiation, or nationalisation, creates commercial and investment treaty disputes. Political risk experts analyse whether state conduct constitutes legitimate policy change or expropriation and treaty breach.",
      },
    ],
    relatedRiskTypes: [
      "resource-nationalism",
      "sanctions-regulatory-risk",
      "expropriation-nationalisation",
    ],
    relatedServices: [
      "resource-nationalism-assessment",
      "country-risk-expert-report",
      "sanctions-context-analysis",
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}
