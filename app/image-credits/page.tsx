import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { imageCredits } from "@/lib/images";

export const metadata = createMetadata({
  title: "Image Credits",
  description: "Sources and licences for the photographs used on politicalriskexpert.com.",
  path: "/image-credits",
  noindex: true,
  follow: true,
});

export default function ImageCreditsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Image credits" }];

  return (
    <PageShell
      title="Image Credits"
      subtitle="Photographs on this site come from Wikimedia Commons. Each is shown in greyscale with a colour wash."
      breadcrumbs={crumbs}
    >
      <ul className="max-w-3xl border-b border-line">
        {imageCredits.map((credit) => (
          <li key={credit.source} className="border-t border-line py-5">
            <p className="font-display text-lg font-semibold uppercase tracking-[0.03em] text-ink">
              {credit.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-mute">
              {credit.author}. {credit.license}.{" "}
              <a href={credit.source} target="_blank" rel="noopener noreferrer" className="text-meridian underline">
                View source
              </a>
            </p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
