import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/metadata";
import { certifications } from "@/lib/data/certifications";
import { TRADEMARK_NOTICE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Professional Certifications",
  description:
    "Explore Cisco CCNA, CCNP, CCIE, and CompTIA A+ and Network+ certification training programs at Hyperion Technologies.",
  path: "/certifications",
});

export default function CertificationsPage() {
  const cisco = certifications.filter((c) => c.vendor === "Cisco");
  const comptia = certifications.filter((c) => c.vendor === "CompTIA");

  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Certifications</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Professional Certification Training</h1>
          <p className="mx-auto mt-4 max-w-2xl text-royal-100/80">
            Structured, hands-on preparation for the certifications that matter most in networking and IT support.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion">
          <SectionHeading eyebrow="Cisco Track" title="Cisco Certifications" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cisco.map((c) => (
              <CertCard key={c.slug} slug={c.slug} shortName={c.shortName} level={c.level} tagline={c.tagline} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light-gray">
        <div className="container-hyperion">
          <SectionHeading eyebrow="CompTIA Track" title="CompTIA Certifications" align="left" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {comptia.map((c) => (
              <CertCard key={c.slug} slug={c.slug} shortName={c.shortName} level={c.level} tagline={c.tagline} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="container-hyperion">
          <p className="text-center text-xs leading-relaxed text-slate/70">{TRADEMARK_NOTICE}</p>
        </div>
      </section>
    </>
  );
}

function CertCard({
  slug,
  shortName,
  level,
  tagline,
}: {
  slug: string;
  shortName: string;
  level: string;
  tagline: string;
}) {
  return (
    <Link
      href={`/certifications/${slug}`}
      className="group flex flex-col rounded-2xl border border-mid-gray bg-white p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:bg-royal-950 hover:shadow-2xl"
    >
      <span className="font-mono text-[11px] uppercase tracking-wider text-gold-600 group-hover:text-gold-300">
        {level}
      </span>
      <h3 className="mt-3 font-display text-2xl font-bold text-royal-950 group-hover:text-white">{shortName}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate group-hover:text-royal-100/70">{tagline}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 group-hover:text-gold-300">
        View program details <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
