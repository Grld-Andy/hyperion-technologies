import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { services } from "@/lib/data/services";

export default function FeaturedServices() {
  const featured = services.slice(0, 6);
  return (
    <section className="bg-light-gray py-24">
      <div className="container-hyperion">
        <SectionHeading
          eyebrow="What We Do"
          title="Full-spectrum IT services"
          description="Certification training is our specialty — but our team supports the everyday technology needs of individuals, businesses, and schools."
        />
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <Link
              key={s.slug}
              href="/services"
              className="group relative flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-mid-gray transition-all hover:shadow-xl hover:ring-royal-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-royal-700 to-royal-500 text-gold-300">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-royal-950">{s.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal-600 group-hover:text-gold-600">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" variant="outline-light" className="!text-royal-700 !border-royal-300 hover:!bg-royal-50">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
