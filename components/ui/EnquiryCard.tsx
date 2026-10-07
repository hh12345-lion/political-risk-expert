import Image from "next/image";
import Link from "next/link";

/** Sticky side card shown beside long guides on large screens. */
export function EnquiryCard() {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-8 overflow-hidden rounded-md bg-ink p-6 text-paper shadow-[0_24px_48px_-26px_rgba(26,28,37,0.8)]">
        <Image
          src="/brand/blade.svg"
          alt=""
          width={110}
          height={180}
          unoptimized
          aria-hidden
          className="pointer-events-none absolute -right-2 -top-3 w-20 opacity-30"
        />
        <p className="relative font-display text-xl font-semibold uppercase leading-tight tracking-[0.05em]">
          Need an expert on this point?
        </p>
        <p className="relative mt-3 text-sm leading-relaxed text-paper/70">
          Tell us the forum, host state, and the risk at issue. We match counsel with an
          independent expert.
        </p>
        <Link
          href="/appoint"
          className="relative mt-5 flex min-h-[46px] items-center justify-center rounded-sm bg-brass px-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper"
        >
          Enquire
        </Link>
        <Link
          href="/how-to-instruct"
          className="relative mt-4 block text-sm text-paper/65 underline underline-offset-4 hover:text-brass"
        >
          How to instruct
        </Link>
      </div>
    </aside>
  );
}
