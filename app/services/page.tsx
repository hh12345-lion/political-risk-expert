import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";
import { serviceNode } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Political Risk Expert Witness Services UK",
  description:
    "Political risk expert witness services for investment treaty arbitration, political risk insurance, sanctions analysis, expropriation, FET, political violence, and country risk reports.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={services.map((s) => serviceNode(s.id, s.title, s.description))}
      />
      <PageShell
        title="Political Risk Expert Witness Services"
        subtitle="Eight specialist expert witness services for arbitration counsel, commercial litigators, and political risk insurance counsel in any jurisdiction."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-mute leading-relaxed">
          Services are available for matters seated in London, Paris, Geneva, Singapore, Washington,
          or other forums. Analysis is impartial and tailored to the countries and risk types
          relevant to your dispute.
        </p>
        <CardGrid
          items={services.map((s) => ({
            title: s.title,
            description: s.description,
            href: `/services/${s.id}`,
          }))}
        />
        <p className="mt-8 text-sm text-mute">
          Select a service to view scope, expert approach, and frequently asked questions.
        </p>
      </PageShell>
    </>
  );
}
