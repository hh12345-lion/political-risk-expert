"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`flex min-h-[44px] items-center justify-between gap-2 px-5 py-2 font-display text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
          open ? "bg-white/10 text-paper" : "text-paper/70 hover:bg-white/5 hover:text-paper"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`h-3 w-3 shrink-0 opacity-70 ${open ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      <div
        className={`absolute left-full top-0 z-[60] w-[min(20rem,70vw)] pl-0 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flyout-panel border border-line bg-paper shadow-[12px_12px_40px_rgba(27,30,42,0.18)]">
          <div className="flex items-center justify-between border-b border-line bg-field px-4 py-2.5">
            <p className="font-display text-xs uppercase tracking-[0.14em] text-ink">{label}</p>
            <Link href={href} className="font-display text-[11px] uppercase tracking-[0.12em] text-meridian hover:text-ink">
              All
            </Link>
          </div>
          <ul
            className={scrollable ? "max-h-[min(70vh,22rem)] overflow-y-auto" : ""}
            role="menu"
          >
            {items.map((item) => (
              <li key={item.href} role="none" className="border-b border-line/70 last:border-0">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm leading-snug text-mute hover:bg-field hover:text-ink focus:bg-field focus:text-ink focus:outline-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
