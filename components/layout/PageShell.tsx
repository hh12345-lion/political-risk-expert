import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import type { Crumb } from "@/components/ui/Breadcrumbs";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      <main className="mx-auto min-w-0 max-w-6xl overflow-x-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="reading-rail">
          <aside className="hidden lg:block">
            <p className="sticky top-28 text-[10px] uppercase tracking-[0.2em] text-brass">
              Briefing
            </p>
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      </main>
      <CTASection />
    </>
  );
}
