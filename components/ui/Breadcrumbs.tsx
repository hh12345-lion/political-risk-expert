import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-paper/50">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden className="text-brass/70">/</span>}
            {item.href ? (
              <Link href={item.href} className="hover:text-paper">
                {item.label}
              </Link>
            ) : (
              <span className="text-paper/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
