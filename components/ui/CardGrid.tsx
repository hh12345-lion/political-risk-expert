import Link from "next/link";

export type CardItem = {
  title: string;
  description: string;
  href: string;
};

export function CardGrid({ items }: { items: CardItem[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="chamber-card group p-5 text-inherit no-underline">
          <h3 className="font-display text-lg font-semibold uppercase tracking-[0.03em] text-ink group-hover:text-meridian">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
