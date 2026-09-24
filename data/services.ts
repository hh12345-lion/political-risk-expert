import type { FAQ } from "@/lib/schema";

export type Service = {
  id: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    id: "investment-treaty-expert-analysis",
    title: "Investment Treaty Expert Analysis",
    description:
      "Independent expert analysis of host state conduct, treaty breaches, and political context for ICSID, LCIA, ICC, and UNCITRAL investor-state proceedings.",
    metaTitle: "Investment Treaty Expert Analysis UK | Political Risk Expert Witness",
    metaDescription:
      "Investment treaty expert analysis for ICSID, LCIA, ICC, and UNCITRAL proceedings. Host state conduct, expropriation, FET, and political context for UK arbitration counsel.",
    content: [
      "Investment treaty expert analysis explains the political and regulatory context of host state conduct in investor-state disputes. Experts bridge the gap between legal submissions on treaty standards and the factual country conditions tribunals must understand.",
      "Analysis covers expropriation (direct and indirect), fair and equitable treatment breaches, full protection and security, umbrella clauses, and the political motivations behind government action. With UK investor-state arbitrations now active, domestic regulatory context is increasingly in demand.",
      "Reports comply with IBA Rules on Evidence Article 5 and are prepared for concurrent expert evidence, tribunal questioning, and coordination with quantum experts on valuation assumptions.",
    ],
    faqs: [
      {
        question: "When is investment treaty expert analysis required?",
        answer:
          "Expert analysis is required when the dispute turns on the political context of host state conduct: why a licence was revoked, whether regulatory measures were discriminatory, or how government policy frustrated legitimate expectations. Tribunals need country-specific political analysis to assess treaty breach.",
      },
      {
        question: "What forums does this service cover?",
        answer:
          "Investment treaty expert analysis is provided for ICSID, LCIA, ICC, UNCITRAL, and ad hoc investor-state arbitrations under bilateral investment treaties, the Energy Charter Treaty sunset provision, and other investment protection instruments.",
      },
    ],
  },
  {
    id: "political-risk-insurance-expert-evidence",
    title: "Political Risk Insurance Expert Evidence",
    description:
      "Expert evidence on PRTC coverage triggers, cause of loss disputes, and whether events constitute insured political perils under Lloyd's and export credit policies.",
    metaTitle: "Political Risk Insurance Expert Evidence UK | PRTC Claims",
    metaDescription:
      "Expert evidence for political risk insurance claims. PRTC coverage disputes, cause of loss analysis, expropriation vs regulation, and Lloyd's market policy interpretation.",
    content: [
      "Political risk insurance expert evidence establishes whether a loss event constitutes a covered political peril under PRTC policies. Coverage disputes frequently turn on whether the cause of loss is political risk or commercial risk.",
      "Experts analyse policy wording, host state conduct, waiting period compliance, and the political context of expropriation, political violence, and currency restriction claims. Lloyd's market and export credit agency policy structures require specialist knowledge.",
      "Evidence is provided for LCIA and ICC coverage arbitrations, Commercial Court proceedings, and pre-action coverage assessments for policyholders and insurers.",
    ],
    faqs: [
      {
        question: "What insurance perils does expert evidence cover?",
        answer:
          "Expert evidence covers expropriation, political violence, currency inconvertibility and transfer restrictions, contract frustration, and the boundary between creeping expropriation and legitimate regulation under PRTC and bespoke political risk policies.",
      },
      {
        question: "Who appoints the expert in a coverage dispute?",
        answer:
          "Each party typically appoints its own expert under IBA Rules or CPR Part 35. Single joint experts may be appointed by agreement or tribunal direction for narrow coverage questions requiring neutral analysis.",
      },
    ],
  },
  {
    id: "sanctions-context-analysis",
    title: "Sanctions Context Analysis",
    description:
      "Analysis of OFSI, OFAC, and EU sanctions regimes, blocking regulations, and their impact on contractual performance, force majeure, and award enforcement.",
    metaTitle: "Sanctions Context Analysis UK | Arbitration Expert Witness",
    metaDescription:
      "Sanctions context analysis for international arbitration. OFSI, OFAC, EU sanctions, blocking regulations, force majeure, frustration, and award enforcement.",
    content: [
      "Sanctions context analysis explains the applicable sanctions regime, specific designations at relevant dates, and whether contractual obligations could lawfully be performed. Nearly 25% of ICC cases in Q1 2024 involved sanctions, making this expertise central to modern arbitration.",
      "Experts address Russia-Ukraine sanctions, Iran re-sanctions (2025), UK OFSI implementation, EU and US interaction, secondary sanctions, and blocking regulations that create conflicting legal obligations.",
      "Analysis supports force majeure and frustration arguments, performance impossibility, foreseeability at contract formation, and post-award enforcement challenges in sanctions-affected disputes.",
    ],
    faqs: [
      {
        question: "Can sanctions constitute force majeure?",
        answer:
          "Sanctions can constitute force majeure where they make performance impossible, illegal, or commercially unreasonable, depending on contract wording, applicable law, and foreseeability at contract formation. Experts analyse the specific sanctions landscape at the relevant dates.",
      },
      {
        question: "How do blocking regulations affect analysis?",
        answer:
          "EU and UK blocking regulations may prohibit compliance with foreign sanctions, creating conflicting obligations. Experts explain the regulatory framework and what performance options were available to parties subject to overlapping regimes.",
      },
    ],
  },
  {
    id: "expropriation-country-analysis",
    title: "Expropriation Country Analysis",
    description:
      "Country-specific analysis of direct and indirect expropriation, regulatory takings, and Chorzow Factory fair market value standards in treaty and insurance claims.",
    metaTitle: "Expropriation Country Analysis Expert Witness",
    metaDescription:
      "Expropriation country analysis for investment treaty and insurance claims. Direct and indirect expropriation, regulatory taking, Chorzow Factory standard, and ICSID jurisprudence.",
    content: [
      "Expropriation country analysis examines whether government measures constitute direct seizure, indirect regulatory taking, or creeping expropriation in the political and legal context of the host state.",
      "Experts analyse the sequence of government actions, cumulative effect on investment value, proportionality to public purpose, and discriminatory treatment. The Chorzow Factory standard requires fair market value compensation, with political experts establishing context and valuation experts addressing quantum.",
      "Analysis draws on ICSID jurisprudence, the Hull Formula, and country-specific regulatory history to support both treaty and political risk insurance claims.",
    ],
    faqs: [
      {
        question: "What is indirect expropriation and how is it proved?",
        answer:
          "Indirect expropriation occurs when regulatory measures, taken together, substantially deprive an investor of economic value without formal title transfer. Experts analyse the sequence of government actions and whether measures go beyond legitimate regulation.",
      },
      {
        question: "How is expropriated investment valued?",
        answer:
          "Under the Chorzow Factory standard, expropriated investment is valued at fair market value absent the expropriation. Political risk experts establish the political context; forensic accountants or economists typically calculate fair market value.",
      },
    ],
  },
  {
    id: "resource-nationalism-assessment",
    title: "Resource Nationalism Assessment",
    description:
      "Assessment of mining licence revocations, windfall taxes, and forced renegotiation in West Africa, Latin America, and Central Asia resource disputes.",
    metaTitle: "Resource Nationalism Assessment Expert Witness",
    metaDescription:
      "Resource nationalism expert assessment for mining and energy disputes. Licence revocations in West Africa, Latin America, Central Asia, and ICSID investment treaty claims.",
    content: [
      "Resource nationalism assessment analyses state measures asserting greater control over natural resources: licence revocations, windfall taxes, forced renegotiation, and nationalisation in mining, energy, and infrastructure sectors.",
      "The surge in West Africa (Guinea, Mali, Burkina Faso), Latin America energy nationalism, and Central Asia infrastructure disputes in 2024-2026 has generated significant ICSID and commercial arbitration activity requiring country-specific political analysis.",
      "Experts assess whether measures constitute legitimate policy change or treaty violations, establishing the political motivations, legal process followed, and discrimination against foreign investors.",
    ],
    faqs: [
      {
        question: "What is resource nationalism and why is it increasing?",
        answer:
          "Resource nationalism is where states reassert control over natural resources through licence actions, taxation, and renegotiation. It has increased significantly in West Africa, Latin America, and Central Asia in 2024-2026, generating investment treaty and commercial disputes.",
      },
      {
        question: "How does expert assessment assist in mining licence revocation claims?",
        answer:
          "Experts analyse the political context of revocation, legal process followed, discrimination against the investor, and consistency with treaty obligations, providing the background tribunals need for FET and expropriation analysis.",
      },
    ],
  },
  {
    id: "fet-breach-context-analysis",
    title: "FET Breach Context Analysis",
    description:
      "Analysis of fair and equitable treatment breaches, legitimate expectations, due process, and proportionality in investment treaty arbitration.",
    metaTitle: "FET Breach Context Analysis Expert Witness",
    metaDescription:
      "Fair and equitable treatment breach analysis for investment treaty arbitration. Legitimate expectations, due process, transparency, and FET evolution post-Philip Morris.",
    content: [
      "FET breach context analysis explains host state conduct in its political and regulatory environment, establishing whether it fell below the international minimum standard protected by bilateral investment treaties.",
      "Analysis addresses legitimate expectations arising from state representations, stable regulatory frameworks, and specific assurances; due process in regulatory proceedings; transparency; and proportionality of government measures post-Philip Morris jurisprudence.",
      "Country specialists analyse the policy environment at investment and the changes that frustrated investor expectations, supporting both liability and damages arguments in treaty arbitration.",
    ],
    faqs: [
      {
        question: "What constitutes a breach of fair and equitable treatment?",
        answer:
          "FET breaches involve frustration of legitimate expectations, failure of due process, discriminatory or arbitrary conduct, and lack of transparency. Political risk experts explain host state conduct in its political and regulatory context.",
      },
      {
        question: "How do legitimate expectations arise in investment treaty claims?",
        answer:
          "Legitimate expectations arise from specific host state representations, stable regulatory frameworks, permits, or assurances of treatment. Experts analyse the policy environment at investment and subsequent changes that frustrated expectations.",
      },
    ],
  },
  {
    id: "political-violence-country-report",
    title: "Political Violence Country Report",
    description:
      "Country reports on war, civil unrest, insurrection, and politically motivated violence for PRTC insurance and force majeure disputes.",
    metaTitle: "Political Violence Country Report Expert Witness",
    metaDescription:
      "Political violence country reports for PRTC insurance and force majeure disputes. War, civil unrest, insurrection, and business interruption from political events.",
    content: [
      "Political violence country reports provide independent analysis of conflict context, geographic and temporal scope of violence, and whether specific events constitute insured political perils rather than ordinary crime or commercial disruption.",
      "PRTC policies define political violence to include war, civil war, insurrection, revolution, and politically motivated civil commotion. The boundary with ordinary crime is frequently disputed and requires expert country analysis.",
      "Reports support business interruption claims, force majeure in conflict zones, and coverage disputes where insurers argue losses arose from commercial rather than political causes.",
    ],
    faqs: [
      {
        question: "How is political violence defined for insurance purposes?",
        answer:
          "Most PRTC policies define political violence to include war, civil war, insurrection, revolution, rebellion, and politically motivated civil commotion. Experts analyse whether specific events constitute an insured political peril.",
      },
      {
        question: "What is the expert role in business interruption claims from conflict?",
        answer:
          "Experts provide country-specific analysis of political causes of instability, scope of violence, and whether business interruption losses arose from covered political events rather than general market disruption.",
      },
    ],
  },
  {
    id: "country-risk-expert-report",
    title: "Country Risk Expert Report",
    description:
      "Comprehensive country risk reports covering regulatory environment, political stability, and foreseeability of government action for commercial arbitration.",
    metaTitle: "Country Risk Expert Report UK | Commercial Arbitration",
    metaDescription:
      "Country risk expert reports for commercial arbitration. Regulatory environment, political stability, foreseeability of government action, and force majeure in political context.",
    content: [
      "Country risk expert reports provide comprehensive analysis of a jurisdiction's political and regulatory environment for commercial arbitration and contract disputes with geopolitical elements.",
      "Reports address political stability, regulatory risk, foreseeability of government action at contract formation, and the political context required for contract interpretation, material adverse change, and force majeure analysis.",
      "Experts draw on political risk consultancy methodology and academic country expertise to provide tribunals with objective, evidence-based country analysis.",
    ],
    faqs: [
      {
        question: "When is a country risk report needed in commercial arbitration?",
        answer:
          "Country risk reports are needed when disputes turn on whether government action was foreseeable, what the regulatory context requires for contract interpretation, or whether political events triggered force majeure or material adverse change clauses.",
      },
      {
        question: "How does country risk analysis differ from investment treaty analysis?",
        answer:
          "Country risk analysis for commercial disputes focuses on contract interpretation and foreseeability under commercial law, while investment treaty analysis addresses treaty standards such as expropriation and FET. The underlying country facts may overlap but the legal framework differs.",
      },
    ],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
