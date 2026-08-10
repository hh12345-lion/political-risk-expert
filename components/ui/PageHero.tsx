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
    <section className="relative overflow-hidden border-b border-line bg-ink">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage: "url(/images/hero-meridian.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" aria-hidden />
      <div className="relative mx-auto max-w-6xl min-w-0 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        <p className="mb-3 text-[10px] uppercase tracking-[0.22em] text-brass">Political Risk Expert</p>
        <h1 className="max-w-4xl break-words font-display text-3xl font-semibold tracking-tight text-paper min-[375px]:text-4xl sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
          {title}
        </h1>
        <div className="meridian-rule mt-5 w-28 bg-meridian" />
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
