import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol
        className={`flex flex-wrap items-center gap-1 font-display text-[11px] uppercase tracking-[0.14em] ${
          dark ? "text-paper/60" : "text-mute"
        }`}
      >
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && (
              <span aria-hidden className="text-brass">
                ·
              </span>
            )}
            {item.href ? (
              <Link href={item.href} className={dark ? "hover:text-brass" : "hover:text-ink"}>
                {item.label}
              </Link>
            ) : (
              <span className={dark ? "text-paper" : "text-ink"}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
