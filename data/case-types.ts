import type { FAQ } from "@/lib/schema";

export type CaseType = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  content: string[];
  faqs: FAQ[];
  relatedPracticeAreas: string[];
  relatedRiskTypes: string[];
};

export const caseTypes: CaseType[] = [
  {
    slug: "icsid-investment-treaty-claim",
    title: "ICSID Investment Treaty Claim",
    h1: "ICSID Investment Treaty Claim Political Risk Expert Witness",
    metaTitle: "ICSID Investment Treaty Claim Expert Witness",
    metaDescription:
      "Political risk expert witnesses for ICSID investment treaty claims. ICSID procedure, expert evidence rules, Chorzow Factory standard, and IBA Rules Article 5.",
    content: [
      "ICSID arbitration is the primary forum for investor-state disputes under the ICSID Convention and bilateral investment treaties. Political risk experts address the merits of claims by explaining the political and regulatory context of host state conduct.",
      "Expert evidence under ICSID Arbitration Rules and IBA Rules on Evidence (where adopted) governs the preparation, submission, and examination of expert reports. Political risk experts address liability; forensic accountants and economists typically address quantum.",
      "The Chorzow Factory principle requires full reparation, restoring the investor to the position they would have been in absent the breach. For expropriation, this means fair market value of the investment.",
    ],
    faqs: [
      {
        question: "How is expert evidence used in ICSID proceedings?",
        answer:
          "ICSID arbitration typically involves extensive expert evidence on both the merits (political and legal context of the host state's conduct) and on quantum (valuation of the expropriated investment). Political risk experts address the former; forensic accountants and economists address the latter. The IBA Rules on Evidence (where adopted) govern the expert evidence procedure.",
      },
      {
        question:
          "What is the significance of the Chorzow Factory standard in ICSID claims?",
        answer:
          "The Chorzow Factory principle requires full reparation, restoring the investor to the position they would have been in absent the breach. For expropriation, this means fair market value of the investment. Political risk experts establish the political context of the expropriation; forensic accountants or economists calculate the fair market value.",
      },
    ],
    relatedPracticeAreas: ["investment-treaty-arbitration"],
    relatedRiskTypes: [
      "expropriation-nationalisation",
      "fair-equitable-treatment-breach",
    ],
  },
  {
    slug: "lcia-icc-political-risk-arbitration",
    title: "LCIA & ICC Political Risk Arbitration",
    h1: "LCIA & ICC Political Risk Arbitration Expert Witness",
    metaTitle: "LCIA & ICC Political Risk Arbitration Expert Witness",
    metaDescription:
      "Political risk expert witnesses for LCIA and ICC arbitrations involving sanctions, expropriation, regulatory risk, and commercial disputes with geopolitical elements.",
    content: [
      "LCIA and ICC arbitrations increasingly involve political risk elements, particularly sanctions-related disputes which accounted for nearly 25% of ICC cases in Q1 2024. Commercial parties and investors rely on these institutions for disputes with geopolitical dimensions.",
      "Political risk experts provide country and regulatory context for contract interpretation, force majeure analysis, and liability questions arising from government action. IBA Rules on Evidence Article 5 governs party-appointed expert evidence.",
      "London-seated arbitrations benefit from the concentration of international arbitration counsel and political risk expertise in the UK legal market.",
    ],
    faqs: [
      {
        question:
          "When should counsel appoint a political risk expert in LCIA or ICC proceedings?",
        answer:
          "Counsel should consider a political risk expert when the dispute involves government action, sanctions, regulatory change, resource nationalism, or political violence affecting contractual performance or investment value. Early instruction allows the expert to shape case theory and identify relevant country evidence.",
      },
      {
        question: "How do IBA Rules apply to political risk experts in LCIA/ICC cases?",
        answer:
          "IBA Rules on Evidence Article 5 governs party-appointed experts, requiring reports to state instructions, methodology, assumptions, and the expert's independence. Political risk experts must comply with these requirements and be prepared for concurrent expert evidence and tribunal questioning.",
      },
    ],
    relatedPracticeAreas: [
      "sanctions-arbitration",
      "commercial-arbitration-risk",
    ],
    relatedRiskTypes: ["sanctions-regulatory-risk", "resource-nationalism"],
  },
  {
    slug: "political-risk-insurance-claim",
    title: "Political Risk Insurance Claim",
    h1: "Political Risk Insurance Claim Expert Witness",
    metaTitle: "Political Risk Insurance Claim Expert Witness | PRTC",
    metaDescription:
      "Expert witnesses for political risk insurance claims. PRTC coverage disputes, cause of loss analysis, expropriation vs regulation, and Lloyd's market claims.",
    content: [
      "Political risk insurance claims are frequently litigated in LCIA, ICC arbitration, or the Commercial Court when insurers dispute coverage triggers or cause of loss. Expert evidence is central to establishing whether a political peril occurred.",
      "PRTC policies cover expropriation, political violence, currency inconvertibility, and contract frustration. The boundary between political risk and commercial risk is often the key battleground requiring independent expert analysis.",
      "Experts analyse policy wording, host state conduct, and the political context of the loss event to assist tribunals and courts in coverage determinations.",
    ],
    faqs: [
      {
        question:
          "What expert evidence is needed in a political risk insurance coverage dispute?",
        answer:
          "Coverage disputes require expert evidence on whether the loss event constitutes a covered political peril, whether host state conduct amounted to expropriation or legitimate regulation, and whether political violence or currency restrictions met policy trigger requirements including any waiting periods.",
      },
      {
        question: "Who appoints the expert in a PRTC insurance dispute?",
        answer:
          "Each party typically appoints its own expert under IBA Rules or CPR Part 35 depending on the forum. Single joint experts may be appointed by agreement or tribunal direction where the issues are narrow and a neutral analysis is appropriate.",
      },
    ],
    relatedPracticeAreas: ["political-risk-insurance"],
    relatedRiskTypes: [
      "expropriation-nationalisation",
      "political-violence-instability",
      "currency-convertibility-transfer",
    ],
  },
  {
    slug: "sanctions-contract-dispute",
    title: "Sanctions Contract Dispute",
    h1: "Sanctions Contract Dispute Expert Witness",
    metaTitle: "Sanctions Contract Dispute Expert Witness | Force Majeure",
    metaDescription:
      "Expert witnesses for sanctions contract disputes. Force majeure, frustration, blocking regulations, and performance impossibility in UK and international arbitration.",
    content: [
      "Sanctions contract disputes have become a defining feature of international arbitration in 2025-2026. Parties dispute whether sanctions make performance impossible, illegal, or commercially unreasonable, triggering force majeure or frustration.",
      "Experts analyse the applicable sanctions regime at the relevant dates, the impact on specific contractual obligations, foreseeability at contract formation, and the interaction between UK, EU, and US sanctions with blocking regulations.",
      "Award enforcement may also be affected by sanctions, requiring expert analysis of the regulatory landscape post-award.",
    ],
    faqs: [
      {
        question:
          "What does a sanctions expert analyse in a contract dispute?",
        answer:
          "A sanctions expert analyses the applicable regime, specific designations and restrictions at relevant dates, whether performance was legally possible, the interaction between conflicting sanctions regimes, and whether sanctions were foreseeable when the contract was formed.",
      },
      {
        question: "How do blocking regulations affect sanctions contract disputes?",
        answer:
          "EU and UK blocking regulations may prohibit compliance with foreign sanctions, creating conflicting obligations. Experts explain how blocking regulations interact with primary sanctions and what options were available to the performing party.",
      },
    ],
    relatedPracticeAreas: ["sanctions-arbitration"],
    relatedRiskTypes: ["sanctions-regulatory-risk"],
  },
  {
    slug: "expropriation-claim",
    title: "Expropriation Claim",
    h1: "Expropriation Claim Political Risk Expert Witness",
    metaTitle: "Expropriation Claim Expert Witness | Direct & Indirect",
    metaDescription:
      "Expert witnesses for expropriation claims in investment treaty arbitration and political risk insurance. Direct, indirect, and regulatory taking analysis.",
    content: [
      "Expropriation claims arise in both investment treaty arbitration and political risk insurance disputes. Direct expropriation involves formal seizure; indirect expropriation involves measures that substantially deprive the investor of economic value.",
      "Political risk experts establish the political context and sequence of government actions. Valuation experts apply the Chorzow Factory fair market value standard to quantum.",
      "Regulatory taking analysis requires distinguishing legitimate public policy from measures that cross the threshold into expropriation under treaty and insurance standards.",
    ],
    faqs: [
      {
        question: "How do tribunals assess indirect expropriation?",
        answer:
          "Tribunals assess the cumulative effect of government measures on investment value, whether the measures were proportional to a legitimate public purpose, and whether the investor was singled out for discriminatory treatment. Political risk experts provide the factual and political context for this analysis.",
      },
      {
        question: "Is expropriation analysis different in insurance vs treaty claims?",
        answer:
          "The underlying analysis of host state conduct is similar, but insurance policies have specific definitions and exclusions that may differ from treaty standards. Experts must analyse both the political facts and the applicable policy or treaty language.",
      },
    ],
    relatedPracticeAreas: [
      "investment-treaty-arbitration",
      "political-risk-insurance",
    ],
    relatedRiskTypes: ["expropriation-nationalisation"],
  },
  {
    slug: "resource-nationalism-mining",
    title: "Resource Nationalism Mining Dispute",
    h1: "Resource Nationalism Mining Dispute Expert Witness",
    metaTitle: "Resource Nationalism Mining Dispute Expert Witness",
    metaDescription:
      "Expert witnesses for mining disputes involving resource nationalism. Licence revocations in West Africa, Latin America, and ICSID claims against host states.",
    content: [
      "Mining licence revocations and resource nationalism measures in Guinea, Mali, Burkina Faso, and Latin America have generated a surge of commercial and investment treaty disputes in 2024-2026.",
      "Political risk experts analyse the political motivations behind licence actions, whether proper legal process was followed, discrimination against foreign investors, and consistency with treaty obligations.",
      "These disputes frequently combine expropriation, FET, and full protection and security claims requiring integrated political and legal analysis.",
    ],
    faqs: [
      {
        question:
          "What evidence does a tribunal need in a mining licence revocation dispute?",
        answer:
          "Tribunals need evidence on the political context of the revocation, the regulatory and legal process followed, whether the investor received fair treatment compared to domestic operators, and whether the measure was a legitimate policy response or discriminatory expropriation.",
      },
      {
        question: "Are West Africa mining disputes increasing?",
        answer:
          "Yes. Military coups and policy shifts in Guinea, Mali, and Burkina Faso have led to significant mining licence reviews and revocations, generating ICSID and commercial arbitrations requiring country-specific political risk expertise.",
      },
    ],
    relatedPracticeAreas: ["commercial-arbitration-risk"],
    relatedRiskTypes: ["resource-nationalism", "expropriation-nationalisation"],
  },
  {
    slug: "uk-investor-state-arbitration",
    title: "UK Investor-State Arbitration",
    h1: "UK Investor-State Arbitration Political Risk Expert Witness",
    metaTitle: "UK Investor-State Arbitration Expert Witness | Woodhouse, Fridman",
    metaDescription:
      "Expert witnesses for UK investor-state arbitration. Woodhouse/West Cumbria Mining and Fridman claims, BIT network, NSI Act 2021, and UK regulatory context.",
    content: [
      "The UK government is currently respondent in active investor-state arbitrations including Woodhouse/West Cumbria Mining and Mr Mikhail Fridman's claim, representing a new frontier given the UK's network of over 80 bilateral investment treaties.",
      "Expert evidence on the political and regulatory context of UK government decisions is central to these proceedings. The National Security and Investment Act 2021 creates a framework for reviewing foreign investments affecting national security.",
      "UK domestic law generally treats foreign and domestic investors equally, but treaty protections provide foreign investors access to investor-state arbitration for alleged treaty breaches.",
    ],
    faqs: [
      {
        question: "What are the UK's investor-state arbitration obligations?",
        answer:
          "The UK does not have specific national legislation protecting foreign investment; domestic laws generally treat foreign and domestic investors equally. However, with over 80 bilateral investment treaties, foreign investors have access to investor-state arbitration against the UK for treaty breaches. Expert evidence on UK regulatory and policy decisions is essential in these proceedings.",
      },
      {
        question:
          "How does the National Security and Investment Act 2021 affect political risk claims?",
        answer:
          "The National Security and Investment Act 2021 allows the UK government to review and potentially block foreign investments affecting national security. This creates a limited exception to the equal treatment principle and a potential basis for investor-state claims where interventions affect qualifying foreign investments.",
      },
    ],
    relatedPracticeAreas: ["investment-treaty-arbitration"],
    relatedRiskTypes: [
      "expropriation-nationalisation",
      "fair-equitable-treatment-breach",
    ],
  },
  {
    slug: "energy-charter-treaty-dispute",
    title: "Energy Charter Treaty Dispute",
    h1: "Energy Charter Treaty Dispute Expert Witness",
    metaTitle: "Energy Charter Treaty Dispute Expert Witness | ECT Sunset",
    metaDescription:
      "Expert witnesses for Energy Charter Treaty disputes. UK withdrawal 2025, sunset provision to April 2045, energy policy changes, and modernised ECT.",
    content: [
      "The UK completed its withdrawal from the Energy Charter Treaty in 2025. The sunset provision protects existing investments by qualifying foreign investors until April 2045, making ECT expert evidence relevant for decades.",
      "ECT arbitration requires expert evidence on regulatory measures taken by the host state, whether they were consistent with the investor's legitimate expectations, and the political context of energy policy changes.",
      "The tension between net zero commitments and investor protection continues to shape ECT disputes and the modernised treaty framework.",
    ],
    faqs: [
      {
        question: "Are UK investors still protected by the Energy Charter Treaty?",
        answer:
          "Following the UK's completion of ECT withdrawal in 2025, existing investments by qualifying foreign investors in the UK, and UK investors in other contracting states, continue to enjoy ECT protection under the sunset provision until April 2045.",
      },
      {
        question: "What political risk evidence is needed in ECT arbitration?",
        answer:
          "ECT arbitration typically requires expert evidence on the regulatory measures taken by the host state, whether they were consistent with the investor's legitimate expectations, and the political context of energy policy changes that affected the investment.",
      },
    ],
    relatedPracticeAreas: ["investment-treaty-arbitration"],
    relatedRiskTypes: [
      "fair-equitable-treatment-breach",
      "expropriation-nationalisation",
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return caseTypes.find((c) => c.slug === slug);
}
