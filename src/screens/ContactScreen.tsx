import { useState, type CSSProperties, type FormEvent } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { certifications } from '../constants/certifications';
import { site } from '../constants/site';
import { brand, fonts, t } from '../constants/theme';

const fieldStyle: CSSProperties = {
  marginTop: 6,
  width: '100%',
  background: t.inputBg,
  border: `1px solid ${t.border}`,
  borderRadius: 9,
  padding: '12px 14px',
  fontSize: 14,
  fontFamily: fonts.body,
  color: t.text,
};

const labelStyle: CSSProperties = { fontSize: 12, fontWeight: 600 };

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
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
      <span style={{ flexShrink: 0, marginTop: 2, color: brand.blue, display: 'flex' }}>
        {icon}
      </span>
      <div>
        <p style={{ margin: 0, fontWeight: 700 }}>{title}</p>
        {lines.map((line, i) => (
          <p key={line} style={{ margin: i === 0 ? '4px 0 0' : '2px 0 0', color: t.textMuted }}>
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
        <div
          className="hy-split"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56 }}
        >
          <div>
            <h3 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 700, fontSize: 18 }}>
              Contact Details
            </h3>
            <div
              style={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                fontSize: 14,
              }}
            >
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

            <div
              style={{
                marginTop: 24,
                borderRadius: 16,
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                background: t.altBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: 13, color: t.textMuted, fontFamily: fonts.mono }}>
                {site.contact.mapLabel}
              </span>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            style={{ background: t.altBg, borderRadius: 20, padding: 32 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label htmlFor="contact-name" style={labelStyle}>
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  placeholder="Your name"
                  style={fieldStyle}
                />
              </div>

              <div>
                <label htmlFor="contact-email" style={labelStyle}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  style={fieldStyle}
                />
              </div>

              <div>
                <label htmlFor="contact-program" style={labelStyle}>
                  Program of Interest
                </label>
                <select id="contact-program" name="program" defaultValue="" style={fieldStyle}>
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
                <label htmlFor="contact-message" style={labelStyle}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us what you're looking for..."
                  style={{ ...fieldStyle, resize: 'vertical', minHeight: 80 }}
                />
              </div>

              <Button type="submit" variant="gold" fullWidth style={{ marginTop: 4, padding: 14 }}>
                Send Message <Send size={15} aria-hidden />
              </Button>

              {submitted ? (
                <p
                  role="status"
                  style={{ margin: 0, fontSize: 13, color: t.textMuted, lineHeight: 1.6 }}
                >
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
