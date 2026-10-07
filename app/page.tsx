import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { BrandImage } from "@/components/ui/BrandImage";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/metadata";
import { practiceAreas } from "@/data/practice-areas";
import { riskTypes } from "@/data/risk-types";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Political Risk Expert Witness | Investment Treaty, Sanctions & Arbitration",
  description:
    "Find a qualified political risk expert witness. Independent experts for investment treaty arbitration, political risk insurance claims, sanctions disputes, and commercial arbitration.",
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
      "Licence revocations and fiscal resets across West Africa, Latin America, and Central Asia continue to feed ICSID and commercial dockets, and country context is the evidentiary hinge.",
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
            insurance, and sanctions matters, in any jurisdiction, any major forum.
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
          <BrandImage src={images.peacePalace.src} alt={images.peacePalace.alt} tone="ink" preload />
        </div>
      </section>

      <section className="border-t border-line px-5 py-14 sm:px-8 lg:px-12">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-ink">
          Jurisdiction-neutral analysis
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-mute">
          We match instructing parties with qualified political risk expert witnesses wherever
          the dispute arises: ICSID, LCIA, ICC, UNCITRAL, SIAC, HKIAC, or national courts.
          Matching turns on host state, risk type, and procedural frame, not a fixed geographic
          franchise.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-3">
          {[
            {
              title: "Treaty & ISDS",
              body: "Expropriation, FET, and resource nationalism evidence for investor-state claims.",
              href: "/practice-areas/investment-treaty-arbitration",
            },
            {
              title: "PRI coverage",
              body: "Country and political-risk context for political risk insurance disputes.",
              href: "/practice-areas/political-risk-insurance",
            },
            {
              title: "Sanctions overlay",
              body: "Regime design and commercial effect across OFAC, OFSI, and EU measures.",
              href: "/practice-areas/sanctions-arbitration",
            },
          ].map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative flex min-h-[17rem] flex-col justify-end overflow-hidden p-7 no-underline transition-colors ${
                i === 1 ? "bg-ink text-paper" : "bg-white text-ink hover:bg-field"
              }`}
            >
              <span
                aria-hidden
                className={`absolute right-4 top-1 font-display text-[7rem] font-bold leading-none ${
                  i === 1 ? "text-paper/10" : "text-line"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden className="mb-4 block h-1 w-12 bg-brass transition-all group-hover:w-20" />
              <h3
                className={`relative font-display text-2xl font-semibold uppercase tracking-[0.04em] ${
                  i === 1 ? "!text-paper" : "text-ink"
                }`}
              >
                {item.title}
              </h3>
              <p className={`relative mt-2 text-sm leading-relaxed ${i === 1 ? "text-paper/75" : "text-mute"}`}>
                {item.body}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid border-t border-line lg:grid-cols-5">
        <div className="relative min-h-[14rem] lg:col-span-2">
          <BrandImage
            src={images.containerPort.src}
            alt={images.containerPort.alt}
            sizes="(max-width: 1024px) 100vw, 40vw"
            blade="bl"
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
        <ol className="risk-index relative mt-8 border-t border-ink lg:min-h-[26rem] lg:pr-[50%]">
          {riskTypes.map((r, i) => (
            <li key={r.slug} className="border-b border-line">
              <Link
                href={`/risk-types/${r.slug}`}
                className="group flex min-h-[60px] items-center gap-4 py-3 text-inherit no-underline transition-[padding] hover:pl-2 focus:outline-none focus-visible:pl-2"
              >
                <span className="w-8 shrink-0 font-display text-sm font-semibold text-brass">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-xl font-semibold uppercase tracking-[0.03em] text-ink group-hover:text-meridian group-focus-visible:text-meridian">
                  {r.title}
                </span>
                <span aria-hidden className="text-brass opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  →
                </span>
              </Link>
              <div
                aria-hidden
                className="risk-preview pointer-events-none absolute right-0 top-0 hidden h-full w-[46%] overflow-hidden rounded-md bg-ink text-paper shadow-[0_26px_50px_-28px_rgba(26,28,37,0.8)] lg:block"
              >
                <div className="absolute inset-0 bg-meridian">
                  <Image
                    src={images.openPitMine.src}
                    alt=""
                    fill
                    quality={55}
                    sizes="480px"
                    className="object-cover opacity-40 mix-blend-luminosity"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <span className="font-display text-7xl font-bold leading-none text-brass/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-display text-3xl font-semibold uppercase leading-tight tracking-[0.03em]">
                    {r.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/75">{r.content[0].slice(0, 220)}…</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-brass" />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid items-stretch border-t border-line lg:grid-cols-2">
        <div className="relative min-h-[18rem]">
          <BrandImage src={images.openPitMine.src} alt={images.openPitMine.alt} />
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
                d: "We propose experts with the regional or issue depth your forum and timetable require, CPR Part 35 / IBA-ready where applicable.",
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
