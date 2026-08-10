import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Political Risk Expert Witness Qualifications UK",
  description:
    "Qualifications for political risk expert witnesses in UK arbitration. Academic credentials, consultancy experience, ICSID/LCIA testimony, CPR Part 35 and IBA Rules expertise.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Political Risk Expert Witness Qualifications UK"
        subtitle="The credentials and expertise counsel should expect when instructing a political risk expert witness for arbitration and litigation."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-mute leading-relaxed">
          Qualifications for political risk expert witnesses are assessed against the requirements of
          the specific dispute, not a single national market. Experts may testify under CPR Part 35 in
          English courts, IBA Rules in LCIA or ICC arbitrations, or ICSID procedures, depending on
          the forum. Regional depth and thematic breadth are both valid profiles for international
          matters.
        </p>
        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Core Credentials</h2>
          <p className="mt-4 text-mute leading-relaxed">
            Political risk expert witnesses should hold a PhD or senior academic background in
            political science, international relations, economics, or area studies. Prior experience
            at political risk consultancies such as Oxford Analytica, Control Risks, or Eurasia Group
            (or equivalent) demonstrates applied expertise beyond academic theory.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-mute">
            <li>Regional expertise relevant to the specific dispute</li>
            <li>Prior ICSID, LCIA, or ICC arbitration testimony</li>
            <li>Understanding of CPR Part 35 for UK court proceedings</li>
            <li>Familiarity with IBA Rules on Evidence for international arbitration</li>
            <li>Published research or consultancy reports on relevant jurisdictions or risk types</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-ink">Two Expert Profiles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-[8px] border border-line bg-white p-6">
              <h3 className="font-semibold text-ink">Country/Regional Specialist</h3>
              <p className="mt-3 text-sm text-mute leading-relaxed">
                Deep knowledge of a specific region or country: political dynamics, regulatory
                framework, and government conduct. Most appropriate for country-specific
                expropriation and FET claims where the tribunal needs detailed analysis of host
                state actions in their political context.
              </p>
            </div>
            <div className="rounded-[8px] border border-line bg-white p-6">
              <h3 className="font-semibold text-ink">Thematic/Sector Specialist</h3>
              <p className="mt-3 text-sm text-mute leading-relaxed">
                Expertise in a specific risk type across multiple jurisdictions: sanctions expert,
                resource nationalism specialist, or political violence analyst. Most appropriate for
                cross-jurisdictional commercial disputes and sanctions arbitrations where the
                regulatory framework rather than a single country is central.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink">CPR Part 35 and IBA Rules</h2>
          <p className="mt-4 text-mute leading-relaxed">
            In UK Commercial Court and Technology and Construction Court proceedings, political risk
            expert witnesses must comply with CPR Part 35 and the related Practice Direction. The
            expert&apos;s duty is to the court, not the instructing party. Reports must state the
            substance of all material instructions, the facts and assumptions on which the opinion is
            based, and confirm the expert&apos;s independence.
          </p>
          <p className="mt-4 text-mute leading-relaxed">
            In international arbitration, IBA Rules on Evidence Article 5 governs party-appointed
            experts and Article 6 governs tribunal-appointed experts. Political risk experts should
            be familiar with both frameworks and prepared for concurrent expert evidence (hot-tubbing)
            on political and regulatory issues.
          </p>
        </section>
      </PageShell>
    </>
  );
}
