import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { testimonials } from "@/lib/data/site-content";

export default function TestimonialsPreview() {
  return (
    <section className="bg-light-gray py-24">
      <div className="container-hyperion">
        <SectionHeading eyebrow="Student Voices" title="What our students say" />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-mid-gray">
              <Quote className="h-6 w-6 text-gold-400" />
              <blockquote className="mt-4 text-sm leading-relaxed text-slate">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 border-t border-mid-gray pt-4">
                <p className="font-display text-sm font-semibold text-royal-950">{t.name}</p>
                <p className="text-xs text-slate">
                  {t.role} · {t.program}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/testimonials" variant="outline-light" className="!text-royal-700 !border-royal-300 hover:!bg-white">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
}
