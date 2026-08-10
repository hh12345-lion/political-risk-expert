import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct a Political Risk Expert Witness UK",
  description:
    "How to instruct a political risk expert witness for investment treaty arbitration, political risk insurance, and sanctions disputes. Letter of instruction, documents, and procedural requirements.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct a Political Risk Expert Witness"
        subtitle="Practical guidance for arbitration counsel and solicitors on instructing political risk expert witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-mute leading-relaxed">
          Instruction requirements depend on the forum and the countries at issue, not on where your
          firm is based. Whether the dispute is seated in London, Geneva, Washington, or Singapore,
          provide the expert with the treaty or contract, the regulatory documents, and a clear
          statement of the political risk question. We match experts by the jurisdiction and risk
          type your matter requires.
        </p>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Investment Treaty Arbitration</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
            <li>Identify the BIT or ECT provisions at issue</li>
            <li>Identify the specific political risk: expropriation, FET, FPS, or umbrella clause</li>
            <li>Ensure the expert has regional expertise and arbitration testimony experience</li>
            <li>Provide the expert with host state regulatory documents, permits, and correspondence</li>
            <li>Coordinate with quantum experts on valuation assumptions</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Political Risk Insurance</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
            <li>Provide the full policy wording including exclusions and waiting periods</li>
            <li>Identify the insured peril in dispute</li>
            <li>Establish whether the event is political risk or commercial risk</li>
            <li>Ensure the expert understands PRTC policy structure and Lloyd&apos;s market practice</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Sanctions Disputes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
            <li>Identify the applicable sanctions regime (UK OFSI, US OFAC, EU)</li>
            <li>Provide the contract, applicable law clause, and force majeure provisions</li>
            <li>Specify the relevant dates for sanctions designations and restrictions</li>
            <li>Ensure the expert has sanctions regulatory expertise, not just general country knowledge</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">Procedural Requirements</h2>
          <p className="mt-4 text-mute leading-relaxed">
            Provide a formal letter of instruction setting out the issues for the expert&apos;s opinion,
            the documents provided, and the assumptions the expert should make. For international
            arbitration, follow IBA Rules format for expert reports. For UK court proceedings, comply
            with CPR Part 35 and the Practice Direction on expert evidence.
          </p>
          <p className="mt-4 text-mute leading-relaxed">
            Instruct the expert as early as possible in the proceedings. Political risk analysis often
            shapes case theory and identifies evidence that counsel should obtain through disclosure
            or document production.
          </p>
        </section>
      </PageShell>
    </>
  );
}
