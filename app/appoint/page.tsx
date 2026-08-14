import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Appoint a Political Risk Expert Witness UK",
  description:
    "Appoint a political risk expert witness for investment treaty arbitration, political risk insurance, sanctions disputes, or commercial arbitration. Response within 1 business day.",
  path: "/appoint",
  noindex: true,
  follow: true,
});

export default function AppointPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Appoint" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Appoint an expert"
        subtitle="Five fields. We reply within one business day with a matching recommendation."
        breadcrumbs={crumbs}
      >
        <div className="mx-auto max-w-xl">
          <p className="mb-8 text-sm leading-relaxed text-mute">
            Include forum and host state in the brief if known. Or email{" "}
            <a href={`mailto:${SITE_EMAIL}`} className="text-meridian hover:text-ink">
              {SITE_EMAIL}
            </a>
            .
          </p>
          <ContactForm />
        </div>
      </PageShell>
    </>
  );
}
