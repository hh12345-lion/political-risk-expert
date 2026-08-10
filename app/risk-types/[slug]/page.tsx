import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { getRiskTypeRelatedLinks } from "@/data/related-links";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { riskTypes, getRiskType } from "@/data/risk-types";
import { getPracticeArea } from "@/data/practice-areas";
import { getService } from "@/data/services";

export function generateStaticParams() {
  return riskTypes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const risk = getRiskType(slug);
  if (!risk) return {};
  return createMetadata({
    title: risk.metaTitle,
    description: risk.metaDescription,
    path: `/risk-types/${slug}`,
  });
}

export default async function RiskTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const risk = getRiskType(slug);
  if (!risk) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Risk Types", href: "/risk-types" },
    { label: risk.title },
  ];

  const practiceArea = getPracticeArea(risk.relatedPracticeArea);

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={risk.faqs} />
      <PageShell title={risk.h1} breadcrumbs={crumbs}>
        {risk.content.map((p, i) => (
          <p key={i} className="mb-4 text-mute leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-ink">Related Practice Area</h2>
        <p className="mt-2">
          <Link
            href={`/practice-areas/${risk.relatedPracticeArea}`}
            className="text-meridian hover:underline"
          >
            {practiceArea?.title ?? risk.relatedPracticeArea}
          </Link>
        </p>

        <h2 className="mt-8 text-xl font-bold text-ink">Related Services</h2>
        <ul className="mt-4 space-y-2">
          {risk.relatedServices.map((id) => {
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

        <FAQSection faqs={risk.faqs} />
        <RelatedLinks links={getRiskTypeRelatedLinks(slug)} />
      </PageShell>
    </>
  );
}
