import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "What Is a Political Risk Expert Witness? | UK Commercial & Arbitration Role",
  description:
    "A political risk expert witness provides independent analysis of geopolitical and regulatory risks for investment treaty arbitration, political risk insurance claims, and commercial disputes.",
  path: "/what-is-a-political-risk-expert",
});

export default function WhatIsPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "What Is a Political Risk Expert?" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is a Political Risk Expert Witness?"
        subtitle="The role of political risk expert witnesses in international arbitration and litigation across all jurisdictions."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-mute leading-relaxed">
          A political risk expert witness is an independent specialist who provides expert analysis
          and testimony on geopolitical, regulatory, and policy risks in legal proceedings. Unlike
          legal experts who interpret treaty text or contract clauses, political risk experts explain
          the factual political context of government actions, sanctions, political violence, and
          regulatory changes that are central to the dispute.
        </p>
        <p className="mb-4 text-mute leading-relaxed">
          Political risk expert witnesses serve arbitration counsel, commercial litigation
          solicitors, and political risk insurance counsel worldwide. They are instructed in
          investment treaty arbitration (ICSID, LCIA, ICC, UNCITRAL, and other institutions),
          political risk insurance coverage disputes, sanctions-related contract arbitrations, and
          commercial disputes with political risk elements, regardless of where the underlying
          investment or contract is located.
        </p>
        <p className="mb-4 text-mute leading-relaxed">
          Expert evidence is jurisdiction-neutral: the witness analyses the political and regulatory
          facts of the dispute, not the nationality of the parties. Country specialists are matched to
          the host state or region at issue; thematic specialists address cross-border sanctions,
          resource nationalism, or political violence where multiple jurisdictions are relevant.
        </p>
        <p className="mb-4 text-mute leading-relaxed">
          The expert&apos;s role is to assist the tribunal or court with objective analysis based on
          their specialised knowledge. In investment treaty claims, they explain why host state conduct
          constituted expropriation or fair and equitable treatment breach in the political context of
          the time. In insurance claims, they establish whether a political peril occurred. In
          sanctions disputes, they analyse the regulatory framework and its impact on contractual
          performance.
        </p>
        <p className="mb-4 text-mute leading-relaxed">
          Political risk experts must comply with CPR Part 35 in UK court proceedings and IBA Rules on
          Evidence in international arbitration. They must maintain independence and provide opinions
          within the bounds of their expertise, distinguishing political risk from commercial risk and
          explaining the limitations of their analysis where appropriate.
        </p>
        <p className="text-mute leading-relaxed">
          Typical qualifications include a PhD or senior academic background in political science,
          international relations, or area studies, combined with applied experience at political
          risk consultancies and prior arbitration testimony. Country specialists and thematic
          specialists (sanctions, resource nationalism, political violence) serve different case
          profiles.
        </p>
      </PageShell>
    </>
  );
}
