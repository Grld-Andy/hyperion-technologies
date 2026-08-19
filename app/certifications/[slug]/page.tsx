import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  ListChecks,
  Briefcase,
  Clock,
  Target,
  FileCheck2,
  Lightbulb,
  ExternalLink,
  TrendingUp,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { certifications, getCertification } from "@/lib/data/certifications";
import { TRADEMARK_NOTICE } from "@/lib/constants";

export function generateStaticParams() {
  return certifications.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) return {};
  return buildMetadata({
    title: cert.name,
    description: cert.overview,
    path: `/certifications/${cert.slug}`,
  });
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cert = getCertification(slug);
  if (!cert) notFound();

  return (
    <>
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-hyperion">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {cert.vendor} · {cert.level} Level
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-5xl">{cert.name}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{cert.tagline}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" size="lg">
              Enroll in This Program
            </Button>
            <Button href="/certifications" variant="outline-light" size="lg">
              Compare Certifications
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container-hyperion grid gap-14 lg:grid-cols-[1fr_320px]">
          <div className="space-y-14">
            {/* Overview */}
            <div>
              <SectionHeading eyebrow="Course Overview" title="What this certification covers" align="left" />
              <p className="mt-6 leading-relaxed text-muted-foreground">{cert.overview}</p>
            </div>

            {/* Who should take */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <Users className="h-6 w-6 text-gold" /> Who Should Take This Course
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.whoShouldTake.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <ListChecks className="h-6 w-6 text-gold" /> Prerequisites
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.prerequisites.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills learned */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <Target className="h-6 w-6 text-gold" /> Skills You&apos;ll Learn
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cert.skillsLearned.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 rounded-xl bg-muted px-4 py-3 text-sm text-primary-deep">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Career opportunities */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <Briefcase className="h-6 w-6 text-gold" /> Career Opportunities
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {cert.careerOpportunities.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-primary"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/70">{cert.salaryInsight}</p>
            </div>

            {/* Learning outcomes */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <TrendingUp className="h-6 w-6 text-gold" /> Learning Outcomes
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.learningOutcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam info */}
            <div className="rounded-2xl border border-border p-8">
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <FileCheck2 className="h-6 w-6 text-gold" /> Certification Exam Information
              </h2>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exam Code(s)</dt>
                  <dd className="mt-1 font-mono text-sm text-primary-deep">{cert.examInfo.examCodes.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Delivered By</dt>
                  <dd className="mt-1 text-sm text-primary-deep">{cert.examInfo.deliveredBy}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Format</dt>
                  <dd className="mt-1 text-sm text-primary-deep">{cert.examInfo.format}</dd>
                </div>
              </dl>
              <p className="mt-5 rounded-lg bg-gold-soft px-4 py-3 text-xs leading-relaxed text-gold">
                {cert.examInfo.note}
              </p>
            </div>

            {/* Prep tips */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-primary-deep">
                <Lightbulb className="h-6 w-6 text-gold" /> Preparation Tips
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.prepTips.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-deep">Frequently Asked Questions</h2>
              <div className="mt-5 space-y-4">
                {cert.faqs.map((f) => (
                  <div key={f.question} className="rounded-xl bg-muted p-5">
                    <p className="font-semibold text-primary-deep">{f.question}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="font-display text-2xl font-bold text-primary-deep">Official Resources</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Always verify exam details directly with the official certification provider.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {cert.resources.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-border px-5 py-3.5 text-sm font-medium text-primary transition-colors hover:border-gold-soft hover:text-gold"
                  >
                    {r.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground/70">{TRADEMARK_NOTICE}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-primary-deep p-7 text-primary-foreground">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-soft">
                <Clock className="h-4 w-4" /> Typical Duration
              </p>
              <p className="mt-2 font-display text-xl font-bold">{cert.duration}</p>
              <p className="mt-1 text-xs text-primary-foreground/60">Customizable based on pace and schedule</p>
              <div className="mt-6 h-px bg-card/10" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-soft">Vendor</p>
              <p className="mt-2 text-sm">{cert.vendor}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-soft">Level</p>
              <p className="mt-2 text-sm">{cert.level}</p>
              <Button href="/contact" className="mt-7 w-full" variant="secondary">
                Request Program Details
              </Button>
            </div>
            <div className="rounded-2xl border border-border p-6">
              <p className="text-sm font-semibold text-primary-deep">Explore other certifications</p>
              <div className="mt-3 flex flex-col gap-1.5">
                {certifications
                  .filter((c) => c.slug !== cert.slug)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/certifications/${c.slug}`}
                      className="text-sm text-primary hover:text-gold"
                    >
                      {c.shortName}
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
