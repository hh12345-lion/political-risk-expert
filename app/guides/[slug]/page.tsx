import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { getGuideRelatedLinksForSlug } from "@/data/related-links";
import { guides, getGuide } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: guide.title },
  ];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        extra={articleSchema({
          title: guide.h1,
          description: guide.metaDescription,
          path: `/guides/${slug}`,
        })}
      />
      <PageShell title={guide.h1} breadcrumbs={crumbs}>
        {guide.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="mt-3 text-mute leading-relaxed">
                {p}
              </p>
            ))}
          </section>
        ))}
        <RelatedLinks links={getGuideRelatedLinksForSlug(slug)} />
      </PageShell>
    </>
  );
}
