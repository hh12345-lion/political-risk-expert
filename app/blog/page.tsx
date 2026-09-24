import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { getAllBlogPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const dynamic = "force-dynamic";

export const metadata = createMetadata({
  title: "Blog | Political Risk Expert",
  description:
    "Articles on distinguishing political and commercial risk, instructing political risk experts, and treaty, sanctions, and PRI disputes.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const crumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog`,
    inLanguage: "en",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
    })),
  };

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} extra={blogLd} />
      <PageShell
        title="Political Risk Expert Blog"
        subtitle="Practitioner-facing articles on political and commercial risk, country context, and instructing independent experts."
        breadcrumbs={crumbs}
      >
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/appoint"
            className="inline-flex min-h-[44px] items-center bg-ink px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper hover:bg-meridian"
          >
            Enquire
          </Link>
          <Link
            href="/guides"
            className="inline-flex min-h-[44px] items-center border border-ink px-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink hover:bg-field"
          >
            Guides
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="text-mute">Articles will appear here shortly.</p>
        ) : (
          <ul className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug} className="overflow-hidden border border-line bg-paper">
                {post.image ? (
                  <Link href={`/blog/${post.slug}`} className="relative block h-52 w-full">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </Link>
                ) : null}
                <div className="p-6">
                  <p className="font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-meridian">
                    <time dateTime={post.updated || post.date}>
                      {new Date(post.updated || post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span className="mx-2">·</span>
                    <span className="normal-case tracking-normal">{post.readingTime}</span>
                  </p>
                  <h2 className="mt-3 font-display text-xl font-semibold uppercase tracking-[0.03em] text-ink">
                    <Link href={`/blog/${post.slug}`} className="hover:text-meridian">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{post.description}</p>
                  <p className="mt-5">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="font-display text-sm font-semibold uppercase tracking-[0.12em] text-meridian hover:text-ink"
                    >
                      Read article →
                    </Link>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageShell>
    </>
  );
}
