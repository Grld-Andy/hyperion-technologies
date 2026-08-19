import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data/certifications";

export default function TrainingPrograms() {
  return (
    <section className="py-24 bg-card">
      <div className="container-hyperion">
        <SectionHeading
          eyebrow="Certification Tracks"
          title="Five certifications. One clear path forward."
          description="Whether you're starting out or advancing toward expert level, there's a structured track waiting for you."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {certifications.map((cert) => (
            <Link
              key={cert.slug}
              href={`/certifications/${cert.slug}`}
              className="motion-card motion-card-sheen group flex flex-col rounded-2xl border border-border p-6 hover:-translate-y-1 hover:border-transparent hover:bg-primary-deep hover:shadow-2xl hover:shadow-primary-deep/20"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold group-hover:text-gold-soft">
                {cert.vendor} · {cert.level}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-primary-deep group-hover:text-primary-foreground">
                {cert.shortName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground/70">
                {cert.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold-soft">
                View program <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
