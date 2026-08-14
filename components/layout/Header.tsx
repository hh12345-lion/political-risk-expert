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
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-paper/60 sm:px-6 lg:px-8">
          <span>Independent political risk expert matching</span>
          <span className="hidden sm:inline">Response within one business day</span>
        </div>
      </div>

      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar border-b border-line/80 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-stretch justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex min-h-[64px] min-w-0 shrink items-center gap-3 py-2"
          >
            <span
              className="hidden h-10 w-10 shrink-0 items-center justify-center border border-meridian/40 bg-ink text-[10px] font-display tracking-widest text-brass sm:inline-flex"
              aria-hidden
            >
              PRE
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-none tracking-tight text-ink sm:text-xl lg:text-2xl">
                Political Risk Expert
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.2em] text-meridian">
                Expert witness matching
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 overflow-visible lg:flex" aria-label="Main">
            <NavDropdown
              label="Practice"
              href="/practice-areas"
              items={practiceAreasNavLinks}
              scrollable
              index="01"
            />
            <NavDropdown
              label="Risks"
              href="/risk-types"
              items={riskTypesNavLinks}
              scrollable
              index="02"
            />
            <NavDropdown
              label="Cases"
              href="/case-types"
              items={caseTypesNavLinks}
              scrollable
              index="03"
            />
            <NavDropdown
              label="Services"
              href="/services"
              items={servicesNavLinks}
              scrollable
              index="04"
            />
            <NavDropdown
              label="Briefings"
              href="/guides"
              items={resourcesNavLinks}
              scrollable
              index="05"
            />
            <Link
              href="/appoint"
              className="ml-3 inline-flex min-h-[44px] items-center border border-ink bg-ink px-4 py-2 text-[11px] font-medium uppercase tracking-[0.14em] text-paper transition-colors hover:border-meridian hover:bg-meridian"
            >
              Instruct
            </Link>
          </nav>

          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center self-center border border-line lg:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="icon-open h-5 w-5 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            <svg
              className="icon-close hidden h-5 w-5 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-b border-line bg-paper peer-checked:block lg:hidden"
        aria-label="Mobile"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
          {mobileNavGroups.map((group, gi) => (
            <div key={group.title} className="mb-6">
              <p className="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-brass">
                <span className="tabular-nums">{String(gi + 1).padStart(2, "0")}</span>
                {group.title}
              </p>
              <ul className="border-t border-line">
                {group.links.map((link, li) => (
                  <li key={link.href} className="border-b border-line/60">
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="flex min-h-[44px] w-full items-center gap-3 px-1 text-sm text-mute hover:text-ink"
                    >
                      <span className="font-display text-[10px] text-meridian tabular-nums">
                        {String(li + 1).padStart(2, "0")}
                      </span>
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
            className="inline-flex min-h-[48px] w-full items-center justify-center bg-ink px-4 text-[11px] font-medium uppercase tracking-[0.14em] text-paper hover:bg-meridian"
          >
            Instruct an Expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
