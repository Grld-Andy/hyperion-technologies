import { Phone, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { CONTACT } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-royal-700 via-royal-600 to-royal-500 py-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, var(--color-gold-400), transparent 70%)" }}
      />
      <div className="container-hyperion relative z-10 flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Ready to start your certification journey?
          </h2>
          <p className="mt-3 max-w-lg text-royal-50/85">
            Speak with our team about intakes, pricing, and the right track for your goals.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="secondary" size="lg" icon={<Phone className="h-4 w-4" />}>
            Contact Us
          </Button>
          <Button
            href={`https://wa.me/${CONTACT.whatsapp}`}
            target="_blank"
            variant="outline-light"
            size="lg"
            icon={<MessageCircle className="h-4 w-4" />}
          >
            WhatsApp Us
          </Button>
        </div>
      </div>
    </section>
  );
}
