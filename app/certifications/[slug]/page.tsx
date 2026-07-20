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
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {cert.vendor} · {cert.level} Level
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold md:text-5xl">{cert.name}</h1>
          <p className="mt-4 max-w-2xl text-royal-100/80">{cert.tagline}</p>
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

      <section className="py-20 bg-white">
        <div className="container-hyperion grid gap-14 lg:grid-cols-[1fr_320px]">
          <div className="space-y-14">
            {/* Overview */}
            <div>
              <SectionHeading eyebrow="Course Overview" title="What this certification covers" align="left" />
              <p className="mt-6 leading-relaxed text-slate">{cert.overview}</p>
            </div>

            {/* Who should take */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <Users className="h-6 w-6 text-gold-600" /> Who Should Take This Course
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.whoShouldTake.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prerequisites */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <ListChecks className="h-6 w-6 text-gold-600" /> Prerequisites
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.prerequisites.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills learned */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <Target className="h-6 w-6 text-gold-600" /> Skills You&apos;ll Learn
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {cert.skillsLearned.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 rounded-xl bg-light-gray px-4 py-3 text-sm text-royal-950">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Career opportunities */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <Briefcase className="h-6 w-6 text-gold-600" /> Career Opportunities
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {cert.careerOpportunities.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-royal-50 px-4 py-2 text-sm font-medium text-royal-700"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate/70">{cert.salaryInsight}</p>
            </div>

            {/* Learning outcomes */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <TrendingUp className="h-6 w-6 text-gold-600" /> Learning Outcomes
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.learningOutcomes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exam info */}
            <div className="rounded-2xl border border-mid-gray p-8">
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <FileCheck2 className="h-6 w-6 text-gold-600" /> Certification Exam Information
              </h2>
              <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate">Exam Code(s)</dt>
                  <dd className="mt-1 font-mono text-sm text-royal-950">{cert.examInfo.examCodes.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate">Delivered By</dt>
                  <dd className="mt-1 text-sm text-royal-950">{cert.examInfo.deliveredBy}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate">Format</dt>
                  <dd className="mt-1 text-sm text-royal-950">{cert.examInfo.format}</dd>
                </div>
              </dl>
              <p className="mt-5 rounded-lg bg-gold-100 px-4 py-3 text-xs leading-relaxed text-gold-700">
                {cert.examInfo.note}
              </p>
            </div>

            {/* Prep tips */}
            <div>
              <h2 className="flex items-center gap-2.5 font-display text-2xl font-bold text-royal-950">
                <Lightbulb className="h-6 w-6 text-gold-600" /> Preparation Tips
              </h2>
              <ul className="mt-5 space-y-2.5">
                {cert.prepTips.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div>
              <h2 className="font-display text-2xl font-bold text-royal-950">Frequently Asked Questions</h2>
              <div className="mt-5 space-y-4">
                {cert.faqs.map((f) => (
                  <div key={f.question} className="rounded-xl bg-light-gray p-5">
                    <p className="font-semibold text-royal-950">{f.question}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h2 className="font-display text-2xl font-bold text-royal-950">Official Resources</h2>
              <p className="mt-2 text-sm text-slate">
                Always verify exam details directly with the official certification provider.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                {cert.resources.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-mid-gray px-5 py-3.5 text-sm font-medium text-royal-700 transition-colors hover:border-gold-400 hover:text-gold-700"
                  >
                    {r.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-slate/70">{TRADEMARK_NOTICE}</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit space-y-6 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-royal-950 p-7 text-white">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-300">
                <Clock className="h-4 w-4" /> Typical Duration
              </p>
              <p className="mt-2 font-display text-xl font-bold">{cert.duration}</p>
              <p className="mt-1 text-xs text-royal-100/60">Customizable based on pace and schedule</p>
              <div className="mt-6 h-px bg-white/10" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-gold-300">Vendor</p>
              <p className="mt-2 text-sm">{cert.vendor}</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-gold-300">Level</p>
              <p className="mt-2 text-sm">{cert.level}</p>
              <Button href="/contact" className="mt-7 w-full" variant="secondary">
                Request Program Details
              </Button>
            </div>
            <div className="rounded-2xl border border-mid-gray p-6">
              <p className="text-sm font-semibold text-royal-950">Explore other certifications</p>
              <div className="mt-3 flex flex-col gap-1.5">
                {certifications
                  .filter((c) => c.slug !== cert.slug)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/certifications/${c.slug}`}
                      className="text-sm text-royal-600 hover:text-gold-600"
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
