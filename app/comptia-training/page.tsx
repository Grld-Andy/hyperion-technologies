import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { certifications } from "@/lib/data/certifications";
import { TRADEMARK_NOTICE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "CompTIA Training",
  description:
    "Explore CompTIA A+ and Network+ training at Hyperion Technologies — vendor-neutral IT fundamentals for support and networking careers.",
  path: "/comptia-training",
});

const comptia = certifications.filter((c) => c.vendor === "CompTIA");

const resources = [
  { label: "CompTIA — Official Site", href: "https://www.comptia.org/" },
  { label: "CompTIA A+ Certification", href: "https://www.comptia.org/certifications/a" },
  { label: "CompTIA Network+ Certification", href: "https://www.comptia.org/certifications/network" },
  { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/comptia" },
];

export default function CompTIATrainingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">CompTIA Track</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">CompTIA Certification Training</h1>
          <p className="mx-auto mt-4 max-w-2xl text-royal-100/80">
            Vendor-neutral fundamentals that build a strong, portable IT foundation —
            ideal on their own or alongside Cisco training.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {comptia.map((c) => (
              <div key={c.slug} className="rounded-2xl border border-mid-gray p-8">
                <h2 className="font-display text-2xl font-bold text-royal-950">{c.name}</h2>
                <p className="mt-2 text-sm text-slate">{c.overview}</p>
                <div className="mt-5 space-y-2">
                  {c.skillsLearned.slice(0, 4).map((s) => (
                    <p key={s} className="flex items-start gap-2 text-sm text-royal-950">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" /> {s}
                    </p>
                  ))}
                </div>
                <Link
                  href={`/certifications/${c.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 hover:text-gold-600"
                >
                  Full program details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-24">
        <div className="container-hyperion grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Career Paths" title="Where CompTIA certifications lead" align="left" />
            <p className="mt-6 text-sm leading-relaxed text-slate">
              CompTIA A+ is widely used as the entry credential for help desk and IT support
              roles, while Network+ builds vendor-neutral networking knowledge that
              complements (or precedes) Cisco-specific training. Together they form a strong,
              recognized foundation for an IT support or junior networking career.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-royal-950">Official CompTIA Resources</p>
            <div className="mt-4 flex flex-col gap-3">
              {resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-lg border border-mid-gray bg-white px-4 py-3 text-sm font-medium text-royal-700 hover:border-gold-400 hover:text-gold-700"
                >
                  {r.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="container-hyperion">
          <Button href="/contact" size="lg">
            Start Your CompTIA Journey
          </Button>
          <p className="mt-8 text-xs leading-relaxed text-slate/70">{TRADEMARK_NOTICE}</p>
        </div>
      </section>
    </>
  );
}
