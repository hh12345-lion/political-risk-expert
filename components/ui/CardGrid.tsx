import Link from "next/link";

export type CardItem = {
  title: string;
  description: string;
  href: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className="index-row group text-inherit no-underline"
        >
          <span className="font-display text-xs tabular-nums text-brass">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="min-w-0">
            <span className="block font-display text-base tracking-tight text-ink group-hover:text-meridian-deep sm:text-lg">
              {item.title}
            </span>
            <span className="mt-1 block text-sm leading-relaxed text-mute">{item.description}</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.16em] text-meridian sm:inline">
            Open →
          </span>
        </Link>
      ))}
    </div>
  );
}
