import { ArrowRight } from 'lucide-react';
import aboutStory from '../assets/about-story.webp';
import { ValueCard } from '../components/cards/ValueCard';
import { Button } from '../components/ui/Button';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { routes } from '../constants/navigation';
import { site } from '../constants/site';
import { fonts, t } from '../constants/theme';
import { values } from '../constants/values';

export function AboutScreen() {
  return (
    <>
      <PageBanner eyebrow="About Us" title={site.name} description={site.description} />

      <Section background="page">
        <div
          className="hy-split"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 56,
            alignItems: 'center',
          }}
        >
          <img
            src={aboutStory}
            alt="Hyperion Technologies training facility"
            style={{
              width: '100%',
              aspectRatio: '16 / 10',
              objectFit: 'cover',
              borderRadius: 20,
              alignSelf: 'start',
            }}
          />
          <div>
            <p
              style={{
                margin: 0,
                fontFamily: fonts.mono,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--blue)',
              }}
            >
              Our Story
            </p>
            <h2
              className="hy-h2"
              style={{
                margin: '12px 0 0',
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: 28,
              }}
            >
              Built to bridge classroom theory and IT careers
            </h2>
            <p style={{ margin: '20px 0 0', color: t.textMuted, lineHeight: 1.7, fontSize: 15 }}>
              Hyperion Technologies was founded to close a real gap: talented students and
              professionals who understood IT concepts on paper but lacked the hands-on,
              certification-aligned training to translate that knowledge into a career.
            </p>
            <p style={{ margin: '14px 0 0', color: t.textMuted, lineHeight: 1.7, fontSize: 15 }}>
              Today, we combine professional Cisco and CompTIA certification training with a full
              suite of IT services, giving students a practical, real-world environment to learn in,
              and giving businesses a dependable local technology partner.
            </p>
            <Button to={routes.founder} variant="blue" style={{ marginTop: 22 }}>
              Meet the Founder <ArrowRight size={15} aria-hidden />
            </Button>
          </div>
        </div>
      </Section>

      <Section background="alt">
        <SectionHeading
          eyebrow="What Drives Us"
          title="Mission, vision, and values"
          size={30}
        />
        <div
          className="hy-grid-3"
          style={{
            marginTop: 44,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </Section>
    </>
  );
}
