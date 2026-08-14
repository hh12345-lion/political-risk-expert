"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  practiceAreasNavLinks,
  resourcesNavLinks,
  riskTypesNavLinks,
  servicesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <aside className="relative z-50 hidden w-56 shrink-0 flex-col overflow-visible bg-ink text-paper lg:flex">
        <div className="sticky top-0 flex min-h-screen flex-col">
          <Link href="/" className="border-b border-white/10 px-5 py-8">
            <span className="block font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brass">
              Political
            </span>
            <span className="mt-1 block font-display text-2xl font-semibold uppercase leading-none tracking-[0.04em] text-paper">
              Risk
              <br />
              Expert
            </span>
          </Link>

          <nav className="flex flex-1 flex-col overflow-visible py-4" aria-label="Main">
            <NavDropdown label="Practice" href="/practice-areas" items={practiceAreasNavLinks} scrollable />
            <NavDropdown label="Risks" href="/risk-types" items={riskTypesNavLinks} scrollable />
            <NavDropdown label="Cases" href="/case-types" items={caseTypesNavLinks} scrollable />
            <NavDropdown label="Services" href="/services" items={servicesNavLinks} scrollable />
            <NavDropdown label="Guides" href="/guides" items={resourcesNavLinks} scrollable />
          </nav>

          <div className="border-t border-white/10 p-5">
            <Link
              href="/appoint"
              className="flex min-h-[48px] items-center justify-center bg-brass px-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:bg-paper"
            >
              Enquire
            </Link>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-50 w-full lg:hidden">
        <input
          ref={toggleRef}
          id="mobile-nav-toggle"
          type="checkbox"
          className="peer sr-only"
          aria-hidden
        />

        <div className="header-bar flex items-center justify-between border-b border-line bg-paper px-4 py-3">
          <Link href="/" className="min-w-0 font-display text-lg font-semibold uppercase tracking-[0.06em] text-ink">
            Political Risk Expert
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center border border-line"
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

        <nav
          id="mobile-menu"
          className="hidden border-b border-line bg-paper peer-checked:block"
          aria-label="Mobile"
        >
          <div className="px-4 py-4">
            {mobileNavGroups.map((group) => (
              <div key={group.title} className="mb-5">
                <p className="mb-1 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-meridian">
                  {group.title}
                </p>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="flex min-h-[44px] items-center text-sm text-mute hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/appoint"
              onClick={closeMobileMenu}
              className="inline-flex min-h-[48px] w-full items-center justify-center bg-ink font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper"
            >
              Enquire
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
