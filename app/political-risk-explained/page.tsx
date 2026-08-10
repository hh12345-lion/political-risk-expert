import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PILLAR_RELATED_LINKS } from "@/data/related-links";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";

const PAGE_DESCRIPTION =
  "The complete guide to political risk expert evidence in UK and international proceedings: expropriation, FET, sanctions, resource nationalism, political violence, and country risk analysis.";

export const metadata = createMetadata({
  title: "Political Risk in Litigation & Arbitration UK | Expert Evidence Guide",
  description: PAGE_DESCRIPTION,
  path: "/political-risk-explained",
});

export default function PoliticalRiskExplainedPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Political Risk Explained" },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={articleSchema({
          title: "Political Risk in Litigation and Arbitration: The Complete UK Guide",
          description: PAGE_DESCRIPTION,
          path: "/political-risk-explained",
        })}
      />
      <PageShell
        title="Political Risk in Litigation and Arbitration: The Complete UK Guide"
        subtitle="A comprehensive guide to political risk expert evidence for arbitration counsel and commercial litigators in the UK and internationally."
        breadcrumbs={crumbs}
      >
        <p className="mb-10 max-w-3xl text-mute leading-relaxed">
          This guide covers political risk expert evidence across all major dispute forums. Examples
          involving UK law, UK investor-state arbitration, or London-seated proceedings reflect
          current developments in a leading arbitration centre, not an exclusive scope. The same
          principles apply to ICSID claims in Africa, sanctions arbitrations seated in Paris or
          Singapore, and political risk insurance disputes under policies governed by English or
          New York law.
        </p>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">
            What Is Political Risk in a Legal Context?
          </h2>
          <p className="mt-4 text-mute leading-relaxed">
            Political risk is the risk that government actions, political instability, or geopolitical
            events will affect the value or performance of investments or commercial arrangements. In
            legal proceedings, political risk expert witnesses explain the political context of events
            that are central to the dispute: why a government revoked a mining licence, how sanctions
            affected contractual performance, or whether civil unrest constituted a covered political
            violence peril under an insurance policy.
          </p>
          <p className="mt-4 text-mute leading-relaxed">
            Political risk is distinct from commercial risk. A decline in commodity prices or a
            counterparty&apos;s insolvency is commercial risk. Government expropriation, arbitrary
            regulatory change, sanctions prohibiting performance, or politically motivated violence is
            political risk. The boundary between the two is frequently contested and requires expert
            analysis.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">
            Three Legal Contexts Where Political Risk Expert Evidence Is Needed
          </h2>
          <div className="table-scroll mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-sm text-mute">
              <caption className="sr-only">
                Three legal contexts where political risk expert evidence is required
              </caption>
              <thead>
                <tr className="bg-ink text-left text-white">
                  <th className="border border-line px-4 py-3">Context</th>
                  <th className="border border-line px-4 py-3">Forum</th>
                  <th className="border border-line px-4 py-3">Expert Role</th>
                  <th className="border border-line px-4 py-3">Primary Issues</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-line px-4 py-3">Investment treaty arbitration</td>
                  <td className="border border-line px-4 py-3">ICSID, LCIA, ICC, UNCITRAL</td>
                  <td className="border border-line px-4 py-3">
                    Explain political context of host state conduct
                  </td>
                  <td className="border border-line px-4 py-3">
                    Expropriation, FET, political violence
                  </td>
                </tr>
                <tr className="bg-field/40">
                  <td className="border border-line px-4 py-3">Political risk insurance</td>
                  <td className="border border-line px-4 py-3">LCIA, ICC, Commercial Court</td>
                  <td className="border border-line px-4 py-3">
                    Establish whether insured political risk event occurred
                  </td>
                  <td className="border border-line px-4 py-3">Coverage trigger, cause of loss</td>
                </tr>
                <tr>
                  <td className="border border-line px-4 py-3">Sanctions arbitration</td>
                  <td className="border border-line px-4 py-3">LCIA, ICC, Commercial Court</td>
                  <td className="border border-line px-4 py-3">
                    Analyse sanctions regime and impact on contract
                  </td>
                  <td className="border border-line px-4 py-3">
                    Force majeure, frustration, enforcement
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Types of Political Risk</h2>
          <p className="mt-4 text-mute leading-relaxed">
            The principal types of political risk requiring expert evidence include expropriation and
            nationalisation (direct and indirect), fair and equitable treatment breach, sanctions and
            regulatory risk, political violence and instability, currency inconvertibility and
            transfer restrictions, and resource nationalism. Each has dedicated expert analysis
            requirements and distinct legal frameworks depending on whether the dispute is treaty,
            insurance, or commercial.
          </p>
          <p className="mt-4">
            <Link href="/risk-types" className="text-meridian hover:underline">
              View all risk types requiring expert evidence
            </Link>
          </p>
        </section>

        <section id="sanctions-landscape" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-ink">The Sanctions Landscape 2025-2026</h2>
          <p className="mt-4 text-mute leading-relaxed">
            Sanctions are no longer the backdrop to international arbitration; they are the main event.
            They now shape how parties bring claims, perform contracts, and enforce awards. Nearly 25%
            of ICC cases in Q1 2024 involved sanctions, and the trend is expected to continue through
            2026.
          </p>
          <p className="mt-4 text-mute leading-relaxed">
            Russia-Ukraine sanctions, Iran re-sanctions in 2025, and the interaction between UK OFSI,
            US OFAC, and EU sanctions with blocking regulations create unprecedented complexity. Parties
            dispute force majeure, frustration, impossibility, and the lawfulness of performance under
            overlapping and sometimes conflicting regulatory obligations.
          </p>
        </section>

        <section id="uk-investor-state" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-ink">
            UK Investor-State Arbitration: A New Frontier
          </h2>
          <p className="mt-4 text-mute leading-relaxed">
            The UK government is currently respondent to two active investor-state arbitrations:
            Woodhouse/West Cumbria Mining and Mr Mikhail Fridman&apos;s claim. These represent a new
            frontier for the UK government with its network of over 80 bilateral investment treaties.
          </p>
          <p className="mt-4 text-mute leading-relaxed">
            The National Security and Investment Act 2021 allows the UK government to review and
            block foreign investments affecting national security, creating a potential basis for
            treaty claims. Expert evidence on UK regulatory and policy decisions is essential in these
            proceedings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Energy Charter Treaty Sunset Provision</h2>
          <p className="mt-4 text-mute leading-relaxed">
            The UK completed its withdrawal from the Energy Charter Treaty in 2025. The sunset
            provision protects existing investments by qualifying foreign investors until April 2045.
            ECT expert evidence remains relevant for UK energy investments and UK investors abroad for
            decades, particularly as energy transition policies generate regulatory disputes.
          </p>
        </section>

        <section id="resource-nationalism" className="mb-10 scroll-mt-24">
          <h2 className="text-xl font-bold text-ink">
            Resource Nationalism: The 2025-2026 Surge
          </h2>
          <p className="mt-4 text-mute leading-relaxed">
            Resource nationalism has intensified globally. Mining licence revocations in West Africa
            (Guinea, Mali, Burkina Faso), Latin America energy nationalism, and Central Asia
            infrastructure disputes are generating ICSID claims and commercial arbitrations. Political
            risk experts analyse whether state measures constitute legitimate policy or treaty breach.
          </p>
        </section>

        <section id="iba-rules" className="scroll-mt-24">
          <h2 className="text-xl font-bold text-ink">
            CPR Part 35 and IBA Rules in Political Risk Cases
          </h2>
          <p className="mt-4 text-mute leading-relaxed">
            Political risk expert witnesses in UK Commercial Court and TCC proceedings must comply with
            CPR Part 35. The expert&apos;s duty is to the court. Reports must be independent, state all
            material instructions, and identify the facts and assumptions underlying the opinion.
          </p>
          <p className="mt-4 text-mute leading-relaxed">
            In international arbitration, IBA Rules on Evidence Article 5 (party experts) and Article
            6 (tribunal-appointed experts) govern engagement. Political risk experts should be
            instructed early, provided with comprehensive documentation, and coordinated with legal and
            quantum experts to ensure consistent case theory across all expert evidence.
          </p>
        </section>

        <RelatedLinks links={PILLAR_RELATED_LINKS} />
      </PageShell>
    </>
  );
}
