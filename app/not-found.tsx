import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page not found"
        subtitle="This route does not exist or has moved."
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="max-w-xl text-mute">
          If you need a political risk expert witness for treaty, insurance, or sanctions matters,
          instruct through the contact desk.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-[48px] items-center border border-ink px-6 text-[11px] uppercase tracking-[0.14em] text-ink hover:bg-ink hover:text-paper"
          >
            Home
          </Link>
          <Link
            href="/appoint"
            className="inline-flex min-h-[48px] items-center bg-ink px-6 text-[11px] uppercase tracking-[0.14em] text-paper hover:bg-meridian"
          >
            Instruct
          </Link>
        </div>
      </main>
    </>
  );
}
