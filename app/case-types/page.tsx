import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Case Types | Political Risk Expert Witness",
  description:
    "Political risk expert witness case types: ICSID claims, LCIA/ICC arbitration, political risk insurance, sanctions disputes, expropriation, resource nationalism, and UK investor-state arbitration.",
  path: "/case-types",
});

export default function CaseTypesHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Case Types"
        subtitle="Expert witness evidence for the principal case types in investment treaty arbitration, political risk insurance, and commercial disputes."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.content[0],
            href: `/case-types/${c.slug}`,
          }))}
        />
      </PageShell>
    </>
  );
}
