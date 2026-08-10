import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { getPracticeAreaRelatedLinks } from "@/data/related-links";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { practiceAreas, getPracticeArea } from "@/data/practice-areas";
import { getRiskType } from "@/data/risk-types";
import { getService } from "@/data/services";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return {};
  return createMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/practice-areas/${slug}`,
  });
}

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: area.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={area.faqs} />
      <PageShell title={area.h1} breadcrumbs={crumbs}>
        {area.content.map((p, i) => (
          <p key={i} className="mb-4 text-mute leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-ink">Related Risk Types</h2>
        <ul className="mt-4 space-y-2">
          {area.relatedRiskTypes.map((s) => {
            const rt = getRiskType(s);
            return (
              <li key={s}>
                <Link href={`/risk-types/${s}`} className="text-meridian hover:underline">
                  {rt?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <h2 className="mt-8 text-xl font-bold text-ink">Related Services</h2>
        <ul className="mt-4 space-y-2">
          {area.relatedServices.map((id) => {
            const svc = getService(id);
            return (
              <li key={id}>
                <Link href={`/services/${id}`} className="text-meridian hover:underline">
                  {svc?.title ?? id}
                </Link>
              </li>
            );
          })}
        </ul>

        <FAQSection faqs={area.faqs} />
        <RelatedLinks links={getPracticeAreaRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
