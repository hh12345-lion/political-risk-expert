import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { serviceNode } from "@/lib/schema";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getService(id);
  if (!service) return {};
  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${id}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = getService(id);
  if (!service) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={service.faqs}
        extra={serviceNode(service.id, service.title, service.description)}
      />
      <PageShell title={service.title} subtitle={service.description} breadcrumbs={crumbs}>
        {service.content.map((p, i) => (
          <p key={i} className="mb-4 text-mute leading-relaxed">
            {p}
          </p>
        ))}
        <FAQSection faqs={service.faqs} />
      </PageShell>
    </>
  );
}
