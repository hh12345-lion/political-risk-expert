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
      <main className="min-w-0 overflow-x-hidden px-5 py-10 sm:px-8 sm:py-12">{children}</main>
      <CTASection />
    </>
  );
}
