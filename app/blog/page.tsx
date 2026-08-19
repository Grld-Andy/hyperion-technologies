import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description:
    "IT career guidance, certification study tips, and updates from Hyperion Technologies.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPostsMeta();
  return (
    <>
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Blog</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Hyperion Insights</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Study strategies, career guidance, and updates from our instructors.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container-hyperion">
          <SectionHeading eyebrow="Latest Posts" title="From the blog" />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border p-7 transition-all hover:border-gold-soft hover:shadow-lg"
              >
                <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  {post.category} · {post.date}
                </span>
                <h2 className="mt-3 font-display text-lg font-semibold text-primary-deep">{post.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <p className="mt-3 text-xs text-muted-foreground/70">By {post.author}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold">
                  Read post <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
            {posts.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground">
                No posts yet — add a Markdown file to <code>content/blog/</code> to publish one.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
