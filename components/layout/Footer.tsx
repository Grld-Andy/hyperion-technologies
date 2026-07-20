import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, CONTACT, SOCIAL, FOOTER_LINKS, TRADEMARK_NOTICE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-royal-950 text-white/80">
      <div className="gold-seam" />
      <div className="container-hyperion grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-royal-600 to-royal-400 font-display text-lg font-bold text-gold-300">
              H
            </span>
            <span className="font-display text-lg font-bold text-white">{SITE.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{SITE.description}</p>
          <div className="mt-6 flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-white/70 hover:border-gold-400 hover:text-gold-300 transition-colors"
              >
                {s.label[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">Company</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_LINKS.company.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">Training</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_LINKS.training.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-300">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {CONTACT.address.line1}, {CONTACT.address.line2}, {CONTACT.address.city},{" "}
                {CONTACT.address.country}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-400" />
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>
                {CONTACT.hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-hyperion flex flex-col gap-4 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-5">
            {FOOTER_LINKS.legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/80">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="container-hyperion pb-6 text-[11px] leading-relaxed text-white/35">{TRADEMARK_NOTICE}</div>
      </div>
    </footer>
  );
}
