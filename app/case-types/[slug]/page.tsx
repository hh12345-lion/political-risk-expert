import { notFound } from "next/navigation";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { getCaseTypeRelatedLinks } from "@/data/related-links";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes, getCaseType } from "@/data/case-types";
import { getPracticeArea } from "@/data/practice-areas";
import { getRiskType } from "@/data/risk-types";

export function generateStaticParams() {
  return caseTypes.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) return {};
  return createMetadata({
    title: caseType.metaTitle,
    description: caseType.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Case Types", href: "/case-types" },
    { label: caseType.title },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={caseType.faqs} />
      <PageShell title={caseType.h1} breadcrumbs={crumbs}>
        {caseType.content.map((p, i) => (
          <p key={i} className="mb-4 text-mute leading-relaxed">
            {p}
          </p>
        ))}

        <h2 className="mt-8 text-xl font-bold text-ink">Related Practice Areas</h2>
        <ul className="mt-4 space-y-2">
          {caseType.relatedPracticeAreas.map((s) => {
            const pa = getPracticeArea(s);
            return (
              <li key={s}>
                <Link href={`/practice-areas/${s}`} className="text-meridian hover:underline">
                  {pa?.title ?? s}
                </Link>
              </li>
            );
          })}
        </ul>

        <h2 className="mt-8 text-xl font-bold text-ink">Related Risk Types</h2>
        <ul className="mt-4 space-y-2">
          {caseType.relatedRiskTypes.map((s) => {
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

        <FAQSection faqs={caseType.faqs} />
        <RelatedLinks
          links={getCaseTypeRelatedLinks(
            caseType.relatedPracticeAreas,
            caseType.relatedRiskTypes
          )}
        />
      </PageShell>
    </>
  );
}
