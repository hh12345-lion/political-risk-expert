import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { practiceAreas } from "@/data/practice-areas";

export const metadata = createMetadata({
  title: "Practice Areas | Political Risk Expert Witness UK",
  description:
    "Political risk expert witness practice areas: investment treaty arbitration, political risk insurance, sanctions arbitration, and commercial arbitration with political risk elements.",
  path: "/practice-areas",
});

export default function PracticeAreasHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Practice Areas" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Practice Areas"
        subtitle="Four practice areas where political risk expert evidence is essential, across ICSID, LCIA, ICC, UNCITRAL, and national court proceedings worldwide."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 max-w-3xl text-mute leading-relaxed">
          Each practice area covers disputes arising in any jurisdiction. Expert witnesses are
          matched to the host state, sanctions regime, or insured peril at issue, not to a fixed
          regional focus.
        </p>
        <CardGrid
          items={practiceAreas.map((p) => ({
            title: p.title,
            description: p.content[0],
            href: `/practice-areas/${p.slug}`,
          }))}
        />
      </PageShell>
    </>
  );
}
