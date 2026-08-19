import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { certifications } from "@/lib/data/certifications";
import { TRADEMARK_NOTICE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Cisco Training",
  description:
    "Explore the Cisco certification path at Hyperion Technologies: CCNA, CCNP, and CCIE, with study roadmaps, career insights, and official resources.",
  path: "/cisco-training",
});

const cisco = certifications.filter((c) => c.vendor === "Cisco");

const resources = [
  { label: "Cisco Certifications — Official Site", href: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html" },
  { label: "Cisco Networking Academy (NetAcad)", href: "https://www.netacad.com/" },
  { label: "Cisco Learning Network", href: "https://learningnetwork.cisco.com/" },
  { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/cisco" },
];

export default function CiscoTrainingPage() {
  return (
    <>
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Cisco Track</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Cisco Certification Training</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            A clear path from networking fundamentals to expert-level infrastructure design,
            taught by an accredited Cisco Networking Academy instructor.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container-hyperion">
          <SectionHeading eyebrow="Certification Path" title="CCNA → CCNP → CCIE" />
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {cisco.map((c, i) => (
              <div key={c.slug} className="relative rounded-2xl border border-border p-8">
                <span className="font-mono text-4xl font-bold text-primary-foreground">0{i + 1}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-primary-deep">{c.shortName}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">{c.level} Level</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.overview.slice(0, 140)}…</p>
                <Link
                  href={`/certifications/${c.slug}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold"
                >
                  Full program details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container-hyperion grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Study Roadmap" title="Recommended learning sequence" align="left" />
            <ol className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-gold-soft">1</span>
                <p className="text-muted-foreground">Build fundamentals: networking basics, IP addressing, and subnetting.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-gold-soft">2</span>
                <p className="text-muted-foreground">Complete CCNA with heavy hands-on lab practice (Packet Tracer and real gear).</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-gold-soft">3</span>
                <p className="text-muted-foreground">Gain real-world experience before attempting CCNP-level material.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-gold-soft">4</span>
                <p className="text-muted-foreground">Choose a CCNP concentration aligned to your career goals.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-bold text-gold-soft">5</span>
                <p className="text-muted-foreground">Pursue CCIE only once CCNP-level skills are deeply internalized.</p>
              </li>
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Career & Salary Insights" title="Where this path leads" align="left" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Cisco certifications are widely recognized across networking, IT support, and
              infrastructure engineering roles. Compensation generally increases with
              certification level — associate, then professional, then expert — though exact
              figures vary significantly by country, employer, and experience. We recommend
              checking current regional salary surveys rather than relying on general
              estimates.
            </p>
            <div className="mt-8 rounded-2xl bg-card p-6 ring-1 ring-border">
              <p className="text-sm font-semibold text-primary-deep">Official Cisco Resources</p>
              <div className="mt-4 flex flex-col gap-3">
                {resources.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm font-medium text-primary hover:border-gold-soft hover:text-gold"
                  >
                    {r.label} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card text-center">
        <div className="container-hyperion">
          <Button href="/contact" size="lg">
            Start Your Cisco Journey
          </Button>
          <p className="mt-8 text-xs leading-relaxed text-muted-foreground/70">{TRADEMARK_NOTICE}</p>
        </div>
      </section>
    </>
  );
}
