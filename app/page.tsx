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
      "UK withdrawal completed in 2025; the sunset keeps protection for qualifying investments until April 2045. Timing and restructuring questions now drive expert instructions.",
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
      <section className="relative min-h-[min(92vh,52rem)] overflow-hidden border-b border-ink bg-ink text-paper">
        <Image
          src="/images/hero-meridian.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40"
          aria-hidden
        />
        <div className="relative mx-auto flex min-h-[min(92vh,52rem)] max-w-7xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 sm:pb-20 lg:px-8">
          <p className="animate-rise text-[11px] uppercase tracking-[0.28em] text-brass">
            Political Risk Expert
          </p>
          <h1 className="animate-rise-delay mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl lg:text-7xl lg:leading-[0.95]">
            Political risk evidence,
            <span className="block text-meridian">matched for counsel</span>
          </h1>
          <div className="meridian-rule mt-6 w-32 bg-meridian" />
          <p className="animate-rise-late mt-6 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Independent expert witnesses for investment treaty arbitration, political risk
            insurance, sanctions disputes, and commercial cases with a state-conduct hinge —
            any jurisdiction, any major forum.
          </p>
          <div className="animate-rise-late mt-8 flex flex-wrap gap-3">
            <Link
              href="/appoint"
              className="inline-flex min-h-[48px] items-center bg-paper px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:bg-brass hover:text-paper"
            >
              Instruct an Expert
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[48px] items-center border border-paper/35 px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-paper/85 transition-colors hover:border-paper hover:text-paper"
            >
              Instruction guide
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="reading-rail mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <aside>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass">01 — Mandate</p>
          </aside>
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Jurisdiction-neutral analysis for counsel who need country truth, not advocacy
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-mute">
              Political Risk Expert matches instructing parties with qualified political risk
              expert witnesses wherever the dispute arises — ICSID, LCIA, ICC, UNCITRAL, SIAC,
              HKIAC, or national courts. Matching turns on host state, risk type, and procedural
              frame, not a fixed geographic franchise.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute">
              Experts examine government conduct, sanctions architecture, political violence, and
              regulatory change with an impartial duty to the tribunal. UK references on this site
              mark a major arbitration hub, not an exclusive territory.
            </p>
            <div className="mt-8 grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
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
                <div key={item.title} className="border-l-2 border-meridian pl-4">
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-field/35">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-12">
          <div className="relative min-h-[18rem] lg:col-span-5 lg:min-h-full">
            <Image
              src="/images/briefing-table.jpg"
              alt="Briefing table with cartographic notes"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="lg:col-span-7 px-4 py-14 sm:px-8 lg:px-12 lg:py-20">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass">02 — Landscape 2025–26</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              What is driving instructions now
            </h2>
            <div className="mt-8 border-t border-line">
              {landscape.map((item, i) => (
                <Link key={item.href} href={item.href} className="index-row group text-inherit no-underline">
                  <span className="font-display text-xs tabular-nums text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-lg text-ink group-hover:text-meridian-deep">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-mute">{item.detail}</span>
                  </span>
                  <span className="hidden text-[10px] uppercase tracking-[0.16em] text-meridian sm:inline">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="reading-rail mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <aside>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass">03 — Practice</p>
          </aside>
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">Practice areas</h2>
            <p className="mt-3 max-w-2xl text-mute">
              Four instruction lanes where political risk expert evidence most often decides
              whether state conduct, coverage language, or sanctions design can be proved.
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
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-20">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass">04 — Risk types</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-paper">
              The political risks tribunals ask experts to map
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              From expropriation and FET breach to currency controls and resource nationalism —
              each risk type has a distinct evidentiary pattern.
            </p>
            <Link
              href="/risk-types"
              className="mt-6 inline-flex text-[11px] uppercase tracking-[0.16em] text-brass hover:text-paper"
            >
              Full risk index →
            </Link>
          </div>
          <div className="lg:col-span-8">
            <div className="grid gap-px bg-paper/10 sm:grid-cols-2">
              {riskTypes.map((r, i) => (
                <Link
                  key={r.slug}
                  href={`/risk-types/${r.slug}`}
                  className="bg-ink p-5 transition-colors hover:bg-meridian-deep"
                >
                  <span className="font-display text-[10px] tabular-nums text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-paper">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">
                    {r.content[0].slice(0, 140)}…
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="relative aspect-[3/4] max-h-[32rem] overflow-hidden border border-line">
            <Image
              src="/images/texture-signal.jpg"
              alt="Oxidized material with risk-signal contour"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass">05 — Instruction</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              How counsel use this desk
            </h2>
            <ol className="mt-8 space-y-6">
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
                  t: "Instruct cleanly",
                  d: "Use our instruction checklist for treaty, insurance, or sanctions matters so the letter of instruction stays focused and usable.",
                },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="font-display text-2xl text-meridian tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{step.t}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-mute">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/how-to-instruct"
                className="inline-flex min-h-[44px] items-center border border-ink px-5 text-[11px] uppercase tracking-[0.14em] text-ink hover:bg-ink hover:text-paper"
              >
                How to instruct
              </Link>
              <Link
                href="/political-risk-explained"
                className="inline-flex min-h-[44px] items-center text-[11px] uppercase tracking-[0.14em] text-meridian hover:text-ink"
              >
                Political risk explained →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-field/30">
        <div className="reading-rail mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <aside>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brass">06 — Services</p>
          </aside>
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink">Expert witness services</h2>
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
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
