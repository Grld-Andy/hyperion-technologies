import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({ title: post.title, description: post.excerpt, path: `/blog/${slug}` });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-20 bg-card">
      <div className="container-hyperion max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-gold">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <span className="mt-8 block font-mono text-xs uppercase tracking-wider text-gold">
          {post.category} · {post.date}
        </span>
        <h1 className="mt-3 font-display text-3xl font-bold text-primary-deep md:text-4xl">{post.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">By {post.author}</p>
        <div
          className="prose prose-royal mt-10 max-w-none prose-headings:font-display prose-headings:text-primary-deep prose-a:text-primary prose-strong:text-primary-deep"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </article>
  );
}
