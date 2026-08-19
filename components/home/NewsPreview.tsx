import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getAllPostsMeta } from "@/lib/blog";

export default function NewsPreview() {
  const posts = getAllPostsMeta().slice(0, 3);
  return (
    <section className="py-24 bg-muted">
      <div className="container-hyperion">
        <SectionHeading eyebrow="Latest News" title="From the Hyperion blog" />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="motion-card motion-card-sheen group flex flex-col rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border hover:shadow-lg hover:ring-primary-glow"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                {post.category} · {post.date}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-primary-deep">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold">
                Read more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
