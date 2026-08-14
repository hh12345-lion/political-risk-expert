import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="border-b border-line bg-field">
      <div className="min-w-0 px-5 py-10 sm:px-8 sm:py-14">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <h1 className="max-w-3xl break-words font-display text-3xl font-semibold uppercase tracking-[0.02em] text-ink min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
