import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/ui/CTASection";
import { EnquiryCard } from "@/components/ui/EnquiryCard";
import type { Crumb } from "@/components/ui/Breadcrumbs";

export function PageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
  aside = false,
}: {
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  children: React.ReactNode;
  /** Show the sticky enquiry card beside the content on large screens. */
  aside?: boolean;
}) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />
      {aside ? (
        <main className="min-w-0 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 xl:grid xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-12">
          <div className="min-w-0 max-w-3xl">{children}</div>
          <EnquiryCard />
        </main>
      ) : (
        <main className="min-w-0 overflow-x-hidden px-5 py-10 sm:px-8 sm:py-12">{children}</main>
      )}
      <CTASection />
    </>
  );
}
