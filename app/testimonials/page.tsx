import type { Metadata } from "next";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { testimonials } from "@/lib/data/site-content";

export const metadata: Metadata = buildMetadata({
  title: "Testimonials",
  description: "Read what students say about their training experience at Hyperion Technologies.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Testimonials</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Student Success Stories</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Real feedback shapes how we teach. Here&apos;s what students have told us.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container-hyperion">
          <p className="mx-auto mb-10 max-w-2xl text-center text-xs uppercase tracking-widest text-muted-foreground/50">
            Placeholder testimonials — replace with real, permissioned student quotes
          </p>
          <SectionHeading eyebrow="In Their Words" title="What our graduates say" />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl bg-muted p-8">
                <Quote className="h-7 w-7 text-gold" />
                <blockquote className="mt-5 leading-relaxed text-muted-foreground">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="font-display font-semibold text-primary-deep">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.program}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-deep py-16 text-center text-primary-foreground">
        <div className="container-hyperion">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Ready to write your own success story?</h2>
          <Button href="/contact" variant="secondary" size="lg" className="mt-7">
            Enroll Today
          </Button>
        </div>
      </section>
    </>
  );
}
