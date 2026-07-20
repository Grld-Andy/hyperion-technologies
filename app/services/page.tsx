import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/lib/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Networking, systems administration, graphics design, electrical engineering, website & application development, printing, internet cafe, mobile money, and professional IT training.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Services</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Professional IT Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-royal-100/80">
            A full-spectrum technology partner for individuals, businesses, schools, and organizations.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.slug}
              id={s.slug}
              className="rounded-2xl border border-mid-gray p-8 transition-all hover:border-gold-400 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-700 to-royal-500 text-gold-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 font-display text-xl font-semibold text-royal-950">{s.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-royal-950">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" /> {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-royal-950 py-16 text-center text-white">
        <div className="container-hyperion">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Need something not listed here?</h2>
          <p className="mt-3 text-royal-100/75">Reach out and tell us what you need — we&apos;ll let you know how we can help.</p>
          <Button href="/contact" variant="secondary" size="lg" className="mt-7">
            Get In Touch
          </Button>
        </div>
      </section>
    </>
  );
}
