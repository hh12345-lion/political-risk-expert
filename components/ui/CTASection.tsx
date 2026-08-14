import Link from "next/link";

export function CTASection() {
  return (
    <section className="border-t border-line bg-ink px-5 py-12 text-paper sm:px-8 sm:py-14">
      <h2 className="font-display text-3xl font-semibold uppercase tracking-[0.04em] text-paper sm:text-4xl">
        Request a political risk expert
      </h2>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-paper/70">
        Tell us the forum, host state, and risk at issue. We match counsel with independent
        experts for treaty, insurance, and sanctions matters — reply within one business day.
      </p>
      <Link
        href="/appoint"
        className="mt-7 inline-flex min-h-[48px] items-center bg-brass px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:bg-paper"
      >
        Enquire
      </Link>
    </section>
  );
}
