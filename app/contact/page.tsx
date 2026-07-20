import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import { buildMetadata } from "@/lib/metadata";
import { CONTACT } from "@/lib/constants";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Hyperion Technologies in Weija, Accra — call, WhatsApp, or send a message about training programs and IT services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Contact</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Let&apos;s Talk</h1>
          <p className="mx-auto mt-4 max-w-2xl text-royal-100/80">
            Questions about a certification track or one of our IT services? Reach out any way that&apos;s convenient.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion grid gap-14 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading eyebrow="Quick Actions" title="Reach us instantly" align="left" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href={`tel:${CONTACT.phoneIntl}`}
                className="flex items-center gap-3 rounded-xl border border-mid-gray p-5 transition-colors hover:border-royal-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal-50 text-royal-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">Call Now</p>
                  <p className="font-medium text-royal-950">{CONTACT.phone}</p>
                </div>
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-mid-gray p-5 transition-colors hover:border-royal-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#1c9e4d]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">WhatsApp</p>
                  <p className="font-medium text-royal-950">Chat with us</p>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 rounded-xl border border-mid-gray p-5 transition-colors hover:border-royal-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal-50 text-royal-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">Email</p>
                  <p className="font-medium text-royal-950 break-all">{CONTACT.email}</p>
                </div>
              </a>
              <a
                href={CONTACT.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-mid-gray p-5 transition-colors hover:border-royal-400"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-royal-50 text-royal-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate">Visit Us</p>
                  <p className="font-medium text-royal-950">Get directions</p>
                </div>
              </a>
            </div>

            <div className="mt-10 rounded-2xl bg-light-gray p-6">
              <p className="flex items-center gap-2 text-sm font-semibold text-royal-950">
                <Clock className="h-4 w-4 text-gold-600" /> Business Hours
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-slate">
                {CONTACT.hours.map((h) => (
                  <li key={h.day} className="flex justify-between">
                    <span>{h.day}</span>
                    <span className="font-medium text-royal-950">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-royal-950">
                <MapPin className="h-4 w-4 text-gold-600" /> Our Location
              </p>
              <p className="mb-4 text-sm text-slate">
                {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.city}, {CONTACT.address.country}
              </p>
              <MapEmbed />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Send a Message" title="Or write to us directly" align="left" />
            <div className="mt-8 rounded-2xl border border-mid-gray p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
