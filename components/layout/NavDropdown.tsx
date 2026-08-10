"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
  index?: string;
};

export function NavDropdown({ label, href, items, scrollable, index }: NavDropdownProps) {
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
        className={`group inline-flex min-h-[44px] items-center gap-2 px-2 py-2 text-[11px] font-medium uppercase tracking-[0.14em] transition-colors ${
          open ? "text-ink" : "text-mute hover:text-ink"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {index && (
          <span className="font-display text-[10px] text-brass tabular-nums">{index}</span>
        )}
        <span className="relative">
          {label}
          <span
            className={`absolute -bottom-1 left-0 h-px bg-meridian transition-all duration-300 ${
              open ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </span>
        <svg
          className={`h-3 w-3 text-meridian transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`absolute left-1/2 top-full z-[60] w-[min(92vw,34rem)] -translate-x-1/2 pt-3 ${
          open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"
        } transition-opacity duration-200`}
      >
        <div className="dossier-panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-line/70 bg-ink px-5 py-3 text-paper">
            <div>
              <p className="font-display text-sm tracking-tight">{label}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-paper/55">
                Dossier index
              </p>
            </div>
            <Link
              href={href}
              className="text-[10px] uppercase tracking-[0.14em] text-brass hover:text-paper"
            >
              Open all →
            </Link>
          </div>
          <ul
            className={`grid gap-0 sm:grid-cols-2 ${scrollable ? "max-h-[min(60vh,20rem)] overflow-y-auto" : ""}`}
            role="menu"
          >
            {items.map((item, i) => (
              <li key={item.href} role="none" className="border-b border-line/40 sm:odd:border-r">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="flex min-h-[48px] items-start gap-3 px-4 py-3 text-sm text-mute transition-colors hover:bg-field/60 hover:text-ink focus:bg-field/60 focus:text-ink focus:outline-none"
                >
                  <span className="mt-0.5 font-display text-[10px] tabular-nums text-brass">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
