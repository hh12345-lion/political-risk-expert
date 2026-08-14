import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { createMetadata } from "@/lib/metadata";
import { practiceAreas } from "@/data/practice-areas";
import { riskTypes } from "@/data/risk-types";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title:
    "Political Risk Expert Witness UK | Investment Treaty, Sanctions & Arbitration",
  description:
    "Find a qualified political risk expert witness in the UK. Independent experts for investment treaty arbitration, political risk insurance claims, sanctions disputes, and commercial arbitration.",
  path: "/",
});

const landscape = [
  {
    href: "/political-risk-explained#sanctions-landscape",
    label: "Sanctions in arbitration",
    detail:
      "Nearly a quarter of ICC filings in early 2024 carried a sanctions overlay. Through 2026, counsel still need country specialists who can separate regime design from commercial consequence.",
  },
  {
    href: "/political-risk-explained#uk-investor-state",
    label: "UK as respondent state",
    detail:
      "Woodhouse / West Cumbria Mining and Fridman claims put the UK on the ISDS map. Over 80 BITs mean political-risk evidence is no longer only an outbound investor tool.",
  },
  {
    href: "/guides/ect-sunset-provision-guide",
    label: "ECT sunset through 2045",
    detail:
      "UK withdrawal completed in 2025; the sunset keeps protection for qualifying investments until April 2045. Timing and restructuring questions now drive expert work.",
  },
  {
    href: "/political-risk-explained#resource-nationalism",
    label: "Resource nationalism wave",
    detail:
      "Licence revocations and fiscal resets across West Africa, Latin America, and Central Asia continue to feed ICSID and commercial dockets — country context is the evidentiary hinge.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="grid min-h-[min(78vh,40rem)] lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-paper px-5 py-14 sm:px-8 lg:px-12">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-meridian">
            Political Risk Expert
          </p>
          <h1 className="mt-3 max-w-xl font-display text-4xl font-semibold uppercase leading-[0.95] tracking-[0.02em] text-ink sm:text-5xl lg:text-6xl">
            Expert evidence for treaty, sanctions, and PRI disputes
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mute sm:text-lg">
            Independent expert witnesses for investment treaty arbitration, political risk
            insurance, and sanctions matters — any jurisdiction, any major forum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/appoint"
              className="inline-flex min-h-[48px] items-center bg-ink px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-meridian"
            >
              Enquire
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[48px] items-center border border-ink px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:bg-field"
            >
              How it works
            </Link>
          </div>
        </div>
        <div className="relative min-h-[16rem] bg-ink">
          <Image
            src="/images/hero-meridian.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="border-t border-line px-5 py-14 sm:px-8 lg:px-12">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
          Jurisdiction-neutral analysis
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute">
          We match instructing parties with qualified political risk expert witnesses wherever
          the dispute arises — ICSID, LCIA, ICC, UNCITRAL, SIAC, HKIAC, or national courts.
          Matching turns on host state, risk type, and procedural frame, not a fixed geographic
          franchise. UK references mark a major arbitration hub, not an exclusive territory.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Treaty & ISDS",
              body: "Expropriation, FET, and resource nationalism evidence for investor-state claims.",
            },
            {
              title: "PRI coverage",
              body: "Country and political-risk context for political risk insurance disputes.",
            },
            {
              title: "Sanctions overlay",
              body: "Regime design and commercial effect across OFAC, OFSI, and EU measures.",
            },
          ].map((item) => (
            <div key={item.title} className="chamber-card p-5">
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid border-t border-line lg:grid-cols-5">
        <div className="relative min-h-[14rem] lg:col-span-2">
          <Image
            src="/images/briefing-table.jpg"
            alt="Briefing table with cartographic notes"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div className="lg:col-span-3 px-5 py-12 sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
            Landscape 2025–26
          </h2>
          <div className="mt-6 grid gap-4">
            {landscape.map((item) => (
              <Link key={item.href} href={item.href} className="chamber-card p-4 text-inherit no-underline">
                <span className="block font-display text-lg font-semibold uppercase tracking-[0.03em] text-ink">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-mute">{item.detail}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-14 sm:px-8 lg:px-12">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
          Practice areas
        </h2>
        <p className="mt-3 max-w-2xl text-mute">
          Four lanes where political risk expert evidence most often decides whether state
          conduct, coverage language, or sanctions design can be proved.
        </p>
        <div className="mt-8">
          <CardGrid
            items={practiceAreas.map((p) => ({
              title: p.title,
              description: p.content[0],
              href: `/practice-areas/${p.slug}`,
            }))}
          />
        </div>
      </section>

      <section className="border-t border-line bg-field px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
            Risk types
          </h2>
          <Link
            href="/risk-types"
            className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-meridian hover:text-ink"
          >
            Full list
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {riskTypes.map((r) => (
            <Link key={r.slug} href={`/risk-types/${r.slug}`} className="chamber-card p-5 text-inherit no-underline">
              <h3 className="font-display text-lg font-semibold uppercase tracking-[0.03em] text-ink">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{r.content[0].slice(0, 140)}…</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid items-stretch border-t border-line lg:grid-cols-2">
        <div className="relative min-h-[18rem]">
          <Image
            src="/images/texture-signal.jpg"
            alt="Oxidized material with risk-signal contour"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
            How counsel use this desk
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              {
                t: "Frame the hinge",
                d: "Identify the host state acts, sanctions measures, or coverage triggers that need independent country or thematic analysis.",
              },
              {
                t: "Match the specialist",
                d: "We propose experts with the regional or issue depth your forum and timetable require — CPR Part 35 / IBA-ready where applicable.",
              },
              {
                t: "Send a clean brief",
                d: "Use the checklist for treaty, insurance, or sanctions matters so the letter of instruction stays focused and usable.",
              },
            ].map((step) => (
              <li key={step.t}>
                <h3 className="font-display text-lg font-semibold uppercase tracking-[0.04em] text-ink">
                  {step.t}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-mute">{step.d}</p>
              </li>
            ))}
          </ul>
          <Link
            href="/how-to-instruct"
            className="mt-8 inline-flex min-h-[44px] w-fit items-center border border-ink px-5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink hover:bg-ink hover:text-paper"
          >
            How to instruct
          </Link>
        </div>
      </section>

      <section className="border-t border-line px-5 py-14 sm:px-8 lg:px-12">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
          Expert witness services
        </h2>
        <p className="mt-3 max-w-2xl text-mute">
          Eight specialist brief types spanning treaty analysis, PRI evidence, sanctions
          context, and country-risk reporting.
        </p>
        <div className="mt-8">
          <CardGrid
            items={services.map((s) => ({
              title: s.title,
              description: s.description,
              href: `/services/${s.id}`,
            }))}
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
