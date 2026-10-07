import Link from "next/link";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  /** Position in the index, shown as a folio number. */
  index: number;
  /** Open the flyout upward so it stays on screen for items low in the rail. */
  anchor?: "top" | "bottom";
  /** Path prefixes that count as this section, for the current-section marker. */
  match?: string[];
};

/**
 * Sidebar index row with a flyout. Opens on hover and keyboard focus with CSS
 * only, so the rail renders on the server and needs no client state.
 */
export function NavDropdown({ label, href, items, index, anchor = "top", match }: NavDropdownProps) {
  return (
    <div className="group/nav relative" data-rail={(match ?? [href]).join(",")}>
      <Link
        href={href}
        aria-haspopup="true"
        className="relative flex min-h-[52px] items-center gap-4 pl-3 pr-4 transition-colors hover:bg-field focus:outline-none focus-visible:bg-field group-hover/nav:bg-field group-focus-within/nav:bg-field"
      >
        <span
          aria-hidden
          className="absolute inset-y-2 right-0 hidden w-1 rounded-l bg-brass group-data-[active=true]/nav:block"
        />
        {/* Node on the spine */}
        <span
          aria-hidden
          className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white font-display text-[12px] font-semibold tracking-[0.06em] text-slate transition-colors group-hover/nav:border-brass group-hover/nav:bg-brass group-hover/nav:text-ink group-focus-within/nav:border-brass group-focus-within/nav:bg-brass group-focus-within/nav:text-ink group-data-[active=true]/nav:border-brass group-data-[active=true]/nav:bg-brass group-data-[active=true]/nav:text-ink"
        >
          {String(index).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display text-[15px] font-semibold uppercase tracking-[0.12em] text-ink">
          {label}
        </span>
        <svg
          className="h-3 w-3 shrink-0 text-slate transition-transform group-hover/nav:translate-x-0.5 group-hover/nav:text-brass group-focus-within/nav:translate-x-0.5 group-focus-within/nav:text-brass"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>

      <div
        className={`pointer-events-none invisible absolute left-full z-[60] w-[min(21rem,70vw)] pl-3 opacity-0 transition-opacity duration-150 group-hover/nav:pointer-events-auto group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:visible group-focus-within/nav:opacity-100 ${
          anchor === "bottom" ? "bottom-0" : "top-0"
        }`}
      >
        <div className="overflow-hidden rounded-md border border-line bg-white shadow-[0_24px_48px_-18px_rgba(26,28,37,0.4)]">
          <div className="flex items-center justify-between bg-ink px-4 py-3">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper">
              <span className="mr-2 text-brass">{String(index).padStart(2, "0")}</span>
              {label}
            </p>
            <Link
              href={href}
              className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brass hover:text-paper"
            >
              View all
            </Link>
          </div>
          <ul>
            {items.map((item) => (
              <li key={item.href} className="border-b border-line/70 last:border-0">
                <Link
                  href={item.href}
                  className="block border-l-2 border-transparent px-4 py-2.5 text-sm leading-snug text-mute hover:border-brass hover:bg-field hover:text-ink focus:border-brass focus:bg-field focus:text-ink focus:outline-none"
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
