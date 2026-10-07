import Image from "next/image";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { images } from "@/lib/images";

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
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      {/* Toned photograph on the right, fading into the band */}
      <div aria-hidden className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] bg-meridian md:block">
        <Image
          src={images.peacePalace.src}
          alt=""
          fill
          quality={55}
          sizes="46vw"
          className="object-cover object-[50%_70%] opacity-45 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10" />
      </div>
      <div className="min-w-0 px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} tone="dark" />}
        <h1 className="max-w-3xl break-words font-display text-3xl font-semibold uppercase tracking-[0.02em] !text-paper min-[375px]:text-4xl sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper/75 sm:text-lg">{subtitle}</p>
        )}
      </div>
      <div aria-hidden className="h-1 bg-gradient-to-r from-brass via-brass to-meridian" />
    </section>
  );
}
