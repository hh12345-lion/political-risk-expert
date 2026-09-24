import type { FAQ } from "@/lib/schema";

export type RiskType = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  faqs: FAQ[];
  relatedPracticeArea: string;
  relatedServices: string[];
};

export const riskTypes: RiskType[] = [
  {
    slug: "expropriation-nationalisation",
    title: "Expropriation & Nationalisation",
    h1: "Expropriation & Nationalisation Expert Witness",
    metaTitle: "Expropriation & Nationalisation Expert Witness | ICSID",
    metaDescription:
      "Expert witnesses on direct and indirect expropriation, regulatory taking, Chorzow Factory FMV standard, Hull Formula, and ICSID jurisprudence for UK arbitration counsel.",
    content: [
      "Direct expropriation involves formal seizure of assets by the host state. Indirect or creeping expropriation occurs when a series of regulatory measures, taken together, substantially deprive an investor of their investment's value without formal title transfer.",
      "Political risk experts analyse the sequence of government actions, their cumulative effect on investment value, and whether measures go beyond legitimate regulation. The Chorzow Factory standard requires fair market value compensation for expropriated investments.",
      "ICSID jurisprudence and the Hull Formula inform valuation and liability analysis. UK investor-state cases including Woodhouse/West Cumbria Mining demonstrate the growing relevance of expropriation analysis in domestic treaty disputes.",
    ],
    faqs: [
      {
        question: "What is indirect expropriation and how is it proved?",
        answer:
          "Indirect (or creeping) expropriation occurs when a series of regulatory measures, taken together, substantially deprive an investor of their investment's value without formal title transfer. Political risk experts analyse the sequence of government actions, their cumulative effect on investment value, and whether the measures go beyond legitimate regulation.",
      },
      {
        question: "How is expropriated investment valued?",
        answer:
          "Under the Chorzow Factory standard, expropriated investment is valued at fair market value, what the investment would be worth in an open market transaction absent the expropriation. Political risk and forensic accounting experts typically work together on this analysis.",
      },
    ],
    relatedPracticeArea: "investment-treaty-arbitration",
    relatedServices: [
      "expropriation-country-analysis",
      "investment-treaty-expert-analysis",
    ],
  },
  {
    slug: "fair-equitable-treatment-breach",
    title: "Fair & Equitable Treatment",
    h1: "Fair & Equitable Treatment (FET) Expert Witness",
    metaTitle: "FET Breach Expert Witness | Investment Treaty Arbitration",
    metaDescription:
      "Expert witnesses on fair and equitable treatment breaches, legitimate expectations, due process, transparency, and FET evolution post-Philip Morris.",
    content: [
      "The fair and equitable treatment (FET) standard in bilateral investment treaties protects investors against arbitrary, discriminatory, or opaque host state conduct. FET breaches typically involve frustration of legitimate expectations, failure of due process, and lack of transparency.",
      "Political risk experts explain host state conduct in its political and regulatory context, establishing whether it fell below the international minimum standard. Legitimate expectations arise from specific representations, stable regulatory frameworks, permits, or assurances of treatment.",
      "FET jurisprudence has evolved significantly post-Philip Morris, with tribunals increasingly applying proportionality analysis and distinguishing between legitimate policy change and treaty breach.",
    ],
    faqs: [
      {
        question: "What constitutes a breach of fair and equitable treatment?",
        answer:
          "FET breaches typically involve frustration of legitimate expectations created by host state representations, failure of due process in regulatory or judicial proceedings, discriminatory or arbitrary conduct, and lack of transparency. Political risk experts explain the host state's conduct in its political and regulatory context.",
      },
      {
        question: "How do legitimate expectations arise in investment treaty claims?",
        answer:
          "Legitimate expectations arise from specific representations or commitments made by the host state to the investor, a stable regulatory framework, a specific permit or licence, or assurances of treatment. Political risk experts analyse the policy and regulatory environment at the time of investment and the changes that frustrated the investor's expectations.",
      },
    ],
    relatedPracticeArea: "investment-treaty-arbitration",
    relatedServices: [
      "fet-breach-context-analysis",
      "investment-treaty-expert-analysis",
    ],
  },
  {
    slug: "sanctions-regulatory-risk",
    title: "Sanctions & Regulatory Risk",
    h1: "Sanctions & Regulatory Risk Expert Witness",
    metaTitle: "Sanctions & Regulatory Risk Expert Witness | OFSI, OFAC",
    metaDescription:
      "Sanctions expert witnesses for UK arbitration. OFSI, OFAC, EU sanctions, secondary sanctions, force majeure, frustration, and blocking regulations in commercial disputes.",
    content: [
      "Sanctions now shape how parties bring claims, perform contracts, and enforce awards. Nearly 25% of ICC cases in Q1 2024 involved sanctions, with the trend expected to continue through 2026.",
      "Expert coverage includes OFSI, OFAC, EU sanctions, secondary sanctions, due diligence obligations, force majeure, frustration, and the interaction between blocking regulations across jurisdictions.",
      "Sanctions expert witnesses analyse the applicable sanctions regime, specific designations and restrictions at the relevant time, and whether contractual obligations could lawfully be performed given conflicting regulatory frameworks.",
    ],
    faqs: [
      {
        question: "How does sanctions expert evidence work in arbitration?",
        answer:
          "Sanctions expert witnesses analyse the applicable sanctions regime, the specific designations and restrictions at the relevant time, and whether contractual obligations could lawfully be performed. They address the interaction between different jurisdictions' sanctions regimes, particularly where EU, UK, and US sanctions apply simultaneously with conflicting blocking regulations.",
      },
      {
        question: "Can sanctions constitute force majeure?",
        answer:
          "Sanctions can constitute force majeure where they make performance of a contractual obligation impossible, illegal, or commercially unreasonable, but this depends on the specific contract language, the applicable law, and whether the sanctions were foreseeable at contract formation. Political risk experts analyse the foreseeability and impact of sanctions as a force majeure trigger.",
      },
    ],
    relatedPracticeArea: "sanctions-arbitration",
    relatedServices: ["sanctions-context-analysis", "country-risk-expert-report"],
  },
  {
    slug: "political-violence-instability",
    title: "Political Violence & Instability",
    h1: "Political Violence & Instability Expert Witness",
    metaTitle: "Political Violence Expert Witness | PRTC Insurance Claims",
    metaDescription:
      "Expert witnesses on war, civil unrest, insurrection, PRTC insurance coverage, business interruption from political violence, and force majeure in conflict zones.",
    content: [
      "Political violence encompasses war, civil war, insurrection, revolution, rebellion, and politically motivated civil commotion. The boundary between political violence and ordinary crime is frequently disputed in insurance and commercial disputes.",
      "PRTC policies define political violence perils with specific waiting periods and coverage triggers. Political risk experts analyse whether specific events constitute an insured political peril rather than commercial risk or general market disruption.",
      "In business interruption claims arising from conflict, experts provide country-specific analysis of political causes of instability, geographic and temporal scope of violence, and whether losses arose from covered political events.",
    ],
    faqs: [
      {
        question: "How is political violence defined for insurance purposes?",
        answer:
          "Most PRTC policies define political violence to include war, civil war, insurrection, revolution, rebellion, and politically motivated civil commotion. The boundary between political violence and ordinary crime is frequently disputed. Political risk experts analyse whether the specific events constitute an insured political peril rather than commercial risk.",
      },
      {
        question:
          "What is the expert's role in business interruption claims arising from conflict?",
        answer:
          "Political risk experts provide country-specific analysis of the conflict context, explaining the political causes of instability, the geographic and temporal scope of violence, and whether the business interruption losses arose from covered political events rather than general market disruption.",
      },
    ],
    relatedPracticeArea: "political-risk-insurance",
    relatedServices: [
      "political-violence-country-report",
      "political-risk-insurance-expert-evidence",
    ],
  },
  {
    slug: "currency-convertibility-transfer",
    title: "Currency Inconvertibility & Transfer",
    h1: "Currency Inconvertibility & Transfer Risk Expert Witness",
    metaTitle: "Currency Inconvertibility Expert Witness | PRTC Claims",
    metaDescription:
      "Expert witnesses on currency restrictions, PRTC coverage, exchange control measures, waiting period provisions, and Argentina, Venezuela, Zimbabwe precedents.",
    content: [
      "Currency inconvertibility and transfer risk covers the inability to convert local currency to hard currency or transfer funds out of a country due to government restrictions. Expert evidence is needed when the cause of restriction is disputed between political risk and economic policy.",
      "PRTC policies typically require a waiting period, commonly 180 days, before a currency restriction claim is triggered. Political risk experts analyse whether the restriction remained in effect throughout the waiting period.",
      "Precedents from Argentina, Venezuela, and Zimbabwe inform analysis of exchange control measures, regulatory changes affecting convertibility, and the quantum of loss in currency restriction claims.",
    ],
    faqs: [
      {
        question:
          "What is currency inconvertibility risk and when is expert evidence needed?",
        answer:
          "Currency inconvertibility/transfer risk covers the inability to convert local currency to hard currency or transfer funds out of a country due to government restrictions. Expert evidence is needed when the cause of currency restriction is disputed, the scope of the restriction affects coverage, or the quantum of loss requires analysis of currency markets and restrictions.",
      },
      {
        question:
          'How is the "waiting period" interpreted in currency restriction claims?',
        answer:
          "PRTC policies typically require a waiting period, commonly 180 days, before a currency restriction claim is triggered. Political risk experts analyse whether the restriction remained in effect throughout the waiting period and whether the applicable regulatory changes affected the restriction's continuance.",
      },
    ],
    relatedPracticeArea: "political-risk-insurance",
    relatedServices: [
      "political-risk-insurance-expert-evidence",
      "country-risk-expert-report",
    ],
  },
  {
    slug: "resource-nationalism",
    title: "Resource Nationalism",
    h1: "Resource Nationalism Expert Witness | Mining, Energy & Infrastructure",
    metaTitle: "Resource Nationalism Expert Witness | Mining & Energy",
    metaDescription:
      "Expert witnesses on mining licence revocations, West Africa disputes, Latin America energy nationalism, Central Asia infrastructure, and ICSID claims.",
    content: [
      "Resource nationalism, where states reassert control over natural resources through licence revocations, windfall taxes, forced renegotiation, or nationalisation, has increased significantly in West Africa, Latin America, and Central Asia in 2024-2026.",
      "Mining licence revocations in Guinea, Mali, and Burkina Faso, Latin America energy nationalism, and Central Asia infrastructure disputes generate both commercial and investment treaty claims requiring expert political context.",
      "Political risk experts analyse whether specific measures constitute legitimate policy change or treaty violations that trigger investment protection claims, and establish the political and regulatory background tribunals need for FET and expropriation analysis.",
    ],
    faqs: [
      {
        question: "What is resource nationalism and why is it increasing?",
        answer:
          "Resource nationalism, where states reassert control over natural resources through licence revocations, windfall taxes, forced renegotiation, or nationalisation, has increased significantly in West Africa, Latin America, and Central Asia in 2024-2026. Political risk experts analyse whether specific measures constitute legitimate policy change or treaty violations that trigger investment protection claims.",
      },
      {
        question:
          "How does a political risk expert assist in a mining licence revocation claim?",
        answer:
          "The political risk expert analyses the context of the revocation, the political motivations, the legal process followed, any discrimination against the specific investor, and whether the revocation was consistent with the host state's treaty obligations. They establish the political and regulatory background that the tribunal needs to assess the FET and expropriation claims.",
      },
    ],
    relatedPracticeArea: "commercial-arbitration-risk",
    relatedServices: [
      "resource-nationalism-assessment",
      "expropriation-country-analysis",
    ],
  },
];

export function getRiskType(slug: string): RiskType | undefined {
  return riskTypes.find((r) => r.slug === slug);
}
