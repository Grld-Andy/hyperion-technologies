"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { generalFaqs, type FAQItem } from "@/lib/data/site-content";

const categories: (FAQItem["category"] | "All")[] = ["All", "General", "Enrollment", "Certification", "Services"];

export default function FAQClient() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = active === "All" ? generalFaqs : generalFaqs.filter((f) => f.category === active);

  return (
    <>
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">FAQ</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Answers to the questions we hear most from prospective and current students.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container-hyperion max-w-3xl">
          <SectionHeading eyebrow="Have Questions?" title="We've got answers" />

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActive(c);
                  setOpenIndex(0);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary-glow"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="rounded-xl border border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-primary-deep">{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>}
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-2xl bg-muted p-8 text-center">
            <h2 className="font-display text-xl font-bold text-primary-deep">Still have questions?</h2>
            <p className="mt-2 text-sm text-muted-foreground">Reach out directly and our team will help.</p>
            <Button href="/contact" className="mt-6">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
