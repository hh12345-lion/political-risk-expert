import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-field/40">
      <div className="reading-rail mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
        <aside className="text-[10px] uppercase tracking-[0.2em] text-brass">
          Next step
        </aside>
        <div>
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Instruct a political risk expert witness
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute">
            Tell us the forum, host state, and risk at issue. We match counsel with independent
            experts for investment treaty, political risk insurance, and sanctions matters —
            jurisdiction-neutral analysis, response within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-[48px] items-center bg-ink px-6 text-[11px] font-medium uppercase tracking-[0.16em] text-paper transition-colors hover:bg-meridian"
          >
            Instruct an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
