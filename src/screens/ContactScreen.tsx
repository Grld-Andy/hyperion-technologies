import { useState, type FormEvent } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { certifications } from '../constants/certifications';
import { site } from '../constants/site';

const fieldClass =
  'mt-1.5 w-full rounded-[9px] border border-line bg-input px-3.5 py-3 font-body text-sm text-ink';

const labelClass = 'text-xs font-semibold';

function ContactDetail({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex items-start gap-2.5">
      <span className="mt-0.5 flex shrink-0 text-blue">{icon}</span>
      <div>
        <p className="m-0 font-bold">{title}</p>
        {lines.map((line, i) => (
          <p key={line} className={`text-ink-muted ${i === 0 ? 'mt-1' : 'mt-0.5'}`}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

export function ContactScreen() {
  const [submitted, setSubmitted] = useState(false);

  // No backend exists for this build; the form acknowledges locally and
  // points people at the phone / WhatsApp channels that do work.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Talk to an Advisor"
        description="Questions about a certification track or a service request, reach out and we'll get back to you."
      />

      <Section background="page" maxWidth={1100}>
        <div className="hy-split grid grid-cols-[1fr_1.2fr] gap-14">
          <div>
            <h3 className="m-0 font-display text-lg font-bold">Contact Details</h3>
            <div className="mt-5 flex flex-col gap-4 text-sm">
              <ContactDetail
                icon={<MapPin size={17} aria-hidden />}
                title="Address"
                lines={[site.contact.address]}
              />
              <ContactDetail
                icon={<Phone size={17} aria-hidden />}
                title="Phone / WhatsApp"
                lines={[site.contact.phone]}
              />
              <ContactDetail
                icon={<Mail size={17} aria-hidden />}
                title="Email"
                lines={[site.contact.email]}
              />
              <ContactDetail
                icon={<Clock size={17} aria-hidden />}
                title="Hours"
                lines={[...site.contact.hours]}
              />
            </div>

            <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-line">
              <iframe
                title={site.contact.mapLabel}
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.contact.address)}&output=embed`}
                width="100%"
                height="100%"
                className="block border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-[20px] bg-alt p-8">
            <div className="flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={fieldClass}
                />
              </div>

              <div>
                <label htmlFor="contact-program" className={labelClass}>
                  Program of Interest
                </label>
                <select id="contact-program" name="program" defaultValue="" className={fieldClass}>
                  <option value="" disabled>
                    CCNA, CCNP, CompTIA A+...
                  </option>
                  {certifications.map((cert) => (
                    <option key={cert.slug} value={cert.slug}>
                      {cert.shortName}
                    </option>
                  ))}
                  <option value="it-services">IT Services</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  className={`${fieldClass} min-h-20 resize-y`}
                />
              </div>

              <Button type="submit" variant="gold" fullWidth style={{ marginTop: 4, padding: 14 }}>
                Send Message <Send size={15} aria-hidden />
              </Button>

              {submitted ? (
                <p role="status" className="m-0 text-[13px] leading-[1.6] text-ink-muted">
                  Thanks — your details are noted. For the fastest response, call or WhatsApp us on{' '}
                  {site.contact.phone}.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </Section>
    </>
  );
}
