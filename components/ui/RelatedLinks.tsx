import Link from "next/link";
import type { RelatedLink } from "@/data/related-links";

export function RelatedLinks({
  title = "Related pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <aside className="mt-12 min-w-0 border-t border-line pt-8">
      <h2 className="text-[10px] font-medium uppercase tracking-[0.2em] text-brass">{title}</h2>
      <ul className="mt-4 grid grid-cols-1 gap-0 border-t border-line md:grid-cols-2">
        {links.map((link) => (
          <li key={link.href} className="border-b border-line/70">
            <Link
              href={link.href}
              className="inline-flex min-h-[48px] items-center text-sm text-ink transition-colors hover:text-meridian"
            >
              {link.label}
              <span className="ml-2 text-meridian" aria-hidden>
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
