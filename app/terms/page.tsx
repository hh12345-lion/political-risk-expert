import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the Political Risk Expert website and expert witness matching service.",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

  return (
    <PageShell title="Terms of Use" breadcrumbs={crumbs}>
      <p className="mb-4 text-mute leading-relaxed">
        By using politicalriskexpert.com, you agree to these terms. If you do not agree, please do
        not use this website.
      </p>
      <h2 className="mt-8 text-lg font-bold text-ink">Nature of Service</h2>
      <p className="mt-4 text-mute leading-relaxed">
        Political Risk Expert connects UK international arbitration counsel, commercial litigation
        solicitors, and political risk insurance counsel with qualified political risk expert
        witnesses. We are not a law firm and do not provide legal advice. Information on this website
        is for general guidance only and does not constitute legal or expert advice.
      </p>
      <h2 className="mt-8 text-lg font-bold text-ink">No Warranties</h2>
      <p className="mt-4 text-mute leading-relaxed">
        We make reasonable efforts to ensure information on this website is accurate and current, but
        we do not warrant completeness or accuracy. Political risk and sanctions landscapes change
        rapidly. Counsel should verify current regulatory positions independently.
      </p>
      <h2 className="mt-8 text-lg font-bold text-ink">Expert Witness Arrangements</h2>
      <p className="mt-4 text-mute leading-relaxed">
        Expert witness engagements are subject to separate terms between the instructing party and the
        expert. We facilitate introductions but are not party to expert witness retainer agreements
        unless expressly agreed in writing.
      </p>
      <h2 className="mt-8 text-lg font-bold text-ink">Limitation of Liability</h2>
      <p className="mt-4 text-mute leading-relaxed">
        To the fullest extent permitted by law, we exclude liability for any loss arising from use of
        this website or reliance on its content. Nothing in these terms excludes liability for death
        or personal injury caused by negligence or fraud.
      </p>
      <h2 className="mt-8 text-lg font-bold text-ink">Contact</h2>
      <p className="mt-4 text-mute leading-relaxed">
        For questions about these terms, contact{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-meridian hover:underline">
          {SITE_EMAIL}
        </a>
        .
      </p>
    </PageShell>
  );
}
