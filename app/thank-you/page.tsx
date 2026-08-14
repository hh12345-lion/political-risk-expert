import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Enquiry received"
        subtitle="We will respond within one business day with matching options."
      />
      <main className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-mute leading-relaxed">
          Your enquiry is with the desk. We will review forum, host state, and risk
          type, then contact you on expert availability and next steps.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center border border-ink px-6 text-[11px] uppercase tracking-[0.14em] text-ink hover:bg-ink hover:text-paper"
          >
            Home
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center bg-ink px-6 text-[11px] uppercase tracking-[0.14em] text-paper hover:bg-meridian"
          >
            Instruction guide
          </Link>
        </div>
      </main>
    </>
  );
}
