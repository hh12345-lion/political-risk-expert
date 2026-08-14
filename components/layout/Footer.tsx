import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-10">
        <div className="max-w-md">
          <p className="font-display text-2xl tracking-tight text-paper sm:text-3xl">
            Political Risk Expert
          </p>
          <div className="meridian-rule mt-3 w-24 bg-meridian" />
          <p className="mt-4 text-sm leading-relaxed text-paper/55">
            Matching counsel with independent political risk expert witnesses for treaty,
            insurance, and sanctions disputes worldwide. Not a law firm.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-10">
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="text-sm text-brass hover:text-paper"
          >
            {SITE_EMAIL}
          </a>
          <nav
            className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.14em] text-paper/45"
            aria-label="Legal"
          >
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-paper">
              Cookies
            </Link>
            <Link href="/terms" className="hover:text-paper">
              Terms
            </Link>
            <CookieSettingsButton variant="footer" />
            <Link href="/appoint" className="text-brass hover:text-paper">
              Instruct
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
