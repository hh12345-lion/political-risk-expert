import Image from "next/image";
import Link from "next/link";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  practiceAreasNavLinks,
  resourcesNavLinks,
  riskTypesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileNavReset } from "@/components/layout/MobileNavReset";

const RAIL = [
  { label: "Practice", href: "/practice-areas", items: practiceAreasNavLinks },
  { label: "Risks", href: "/risk-types", items: riskTypesNavLinks },
  { label: "Cases", href: "/case-types", items: caseTypesNavLinks },
  { label: "Services", href: "/services", items: servicesNavLinks },
  {
    label: "Guides",
    href: "/guides",
    items: resourcesNavLinks,
    match: resourcesNavLinks.map((l) => l.href),
  },
];

export function Header() {
  return (
    <>
      <MobileNavReset />

      {/* Desktop rail: logo, a numbered index strung on a spine, and the enquiry block */}
      <aside className="relative z-50 hidden w-64 shrink-0 border-r border-line bg-white lg:block">
        <div className="sticky top-0 flex h-screen flex-col">
          <div aria-hidden className="h-1.5 bg-gradient-to-r from-brass via-brass to-meridian" />

          <Link href="/" className="block px-9 pb-7 pt-8" aria-label="Political Risk Expert home">
            <Image
              src="/brand/logo.svg"
              alt="Political Risk Expert"
              width={559}
              height={370}
              preload
              unoptimized
              className="w-full"
            />
          </Link>

          <nav className="relative flex-1 px-3" aria-label="Main">
            <p className="mb-2 pl-3 font-display text-[11px] font-semibold uppercase tracking-[0.24em] text-slate">
              Index
            </p>
            <div className="relative">
              <span aria-hidden className="absolute bottom-6 left-[1.75rem] top-6 w-px bg-line" />
              {RAIL.map((entry, i) => (
                <NavDropdown
                  key={entry.href}
                  label={entry.label}
                  href={entry.href}
                  items={entry.items}
                  index={i + 1}
                  match={"match" in entry ? entry.match : undefined}
                  anchor={i >= 3 ? "bottom" : "top"}
                />
              ))}
            </div>
          </nav>

          <div className="relative m-3 overflow-hidden rounded-md bg-ink p-5 text-paper">
            <Image
              src="/brand/blade.svg"
              alt=""
              width={110}
              height={180}
              unoptimized
              aria-hidden
              className="pointer-events-none absolute -right-3 -top-4 w-16 opacity-25"
            />
            <p className="relative font-display text-lg font-semibold uppercase leading-tight tracking-[0.06em]">
              Instruct an expert
            </p>
            <p className="relative mt-1.5 text-[13px] leading-snug text-paper/65">
              Forum, host state, and the risk at issue.
            </p>
            <Link
              href="/appoint"
              className="relative mt-4 flex min-h-[44px] items-center justify-center rounded-sm bg-brass px-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-paper"
            >
              Enquire
            </Link>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="relative mt-3 block truncate text-[12px] text-paper/60 hover:text-brass"
            >
              {SITE_EMAIL}
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile bar */}
      <header className="sticky top-0 z-50 w-full lg:hidden">
        <input id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-hidden tabIndex={-1} />

        <div className="header-bar flex items-center justify-between border-b border-line bg-white px-4 py-2.5 shadow-[0_8px_20px_-16px_rgba(26,28,37,0.6)]">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Political Risk Expert home">
            <Image src="/brand/monogram.svg" alt="" width={327} height={304} unoptimized className="w-10 shrink-0" />
            <Image
              src="/brand/wordmark.svg"
              alt="Political Risk Expert"
              width={559}
              height={167}
              unoptimized
              className="w-[8.5rem]"
            />
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-sm border border-line"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="icon-open h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            <svg className="icon-close hidden h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <nav id="mobile-menu" className="hidden border-b border-line bg-white peer-checked:block" aria-label="Mobile">
          <div className="px-4 py-3">
            {mobileNavGroups.map((group, i) => (
              <details key={group.title} className="group/m border-b border-line">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-[12px] font-semibold text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-ink">
                    {group.title}
                  </span>
                  <svg
                    className="h-4 w-4 text-slate transition-transform group-open/m:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="pb-2 pl-8">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex min-h-[42px] items-center text-sm text-mute hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
            <Link
              href="/appoint"
              className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-sm bg-ink font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper"
            >
              Enquire
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
