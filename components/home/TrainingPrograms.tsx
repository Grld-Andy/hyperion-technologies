import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data/certifications";

export default function TrainingPrograms() {
  return (
    <section className="py-24 bg-white">
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
              className="group flex flex-col rounded-2xl border border-mid-gray p-6 transition-all hover:-translate-y-1 hover:border-transparent hover:bg-royal-950 hover:shadow-2xl hover:shadow-royal-950/20"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-600 group-hover:text-gold-300">
                {cert.vendor} · {cert.level}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-royal-950 group-hover:text-white">
                {cert.shortName}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate group-hover:text-royal-100/70">
                {cert.tagline}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 group-hover:text-gold-300">
                View program <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
