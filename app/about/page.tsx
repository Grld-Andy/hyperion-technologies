import type { Metadata } from "next";
import Link from "next/link";
import { Target, Eye, HeartHandshake, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Hyperion Technologies' mission to empower individuals, businesses, schools, and organizations through IT training and services.",
  path: "/about",
});

const values = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide innovative Information Technology solutions and world-class professional IT certification training that empowers individuals, businesses, schools, and organizations through technology.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be a leading IT training and services partner in Ghana, recognized for the depth of our technical instruction and the reliability of our IT services.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    text: "Practical competence over theory alone, honest guidance for every student, and consistent, dependable service for every client.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">About Us</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{SITE.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-royal-100/80">{SITE.description}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion grid items-center gap-12 lg:grid-cols-2">
          <PlaceholderMedia label="Hyperion Technologies training facility" aspect="wide" />
          <div>
            <SectionHeading eyebrow="Our Story" title="Built to bridge classroom theory and IT careers" align="left" />
            <p className="mt-6 text-slate leading-relaxed">
              Hyperion Technologies was founded to close a real gap: talented students and
              professionals who understood IT concepts on paper but lacked the hands-on,
              certification-aligned training to translate that knowledge into a career.
            </p>
            <p className="mt-4 text-slate leading-relaxed">
              Today, we combine professional Cisco and CompTIA certification training with a
              full suite of IT services — giving students a practical, real-world environment
              to learn in, and giving businesses a dependable local technology partner.
            </p>
            <Button href="/about/founder" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
              Meet the Founder
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-light-gray py-24">
        <div className="container-hyperion">
          <SectionHeading eyebrow="What Drives Us" title="Mission, vision, and values" />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-mid-gray">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-600">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-royal-950">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <div className="container-hyperion">
          <p className="text-slate">
            Curious about our specific programs?{" "}
            <Link href="/services" className="font-semibold text-royal-600 hover:text-gold-600">
              Explore our services
            </Link>{" "}
            or{" "}
            <Link href="/certifications" className="font-semibold text-royal-600 hover:text-gold-600">
              browse certifications
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
