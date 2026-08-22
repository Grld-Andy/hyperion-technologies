import { ArrowRight } from 'lucide-react';
import aboutStory from '../assets/about-story.webp';
import { ValueCard } from '../components/cards/ValueCard';
import { Button } from '../components/ui/Button';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { routes } from '../constants/navigation';
import { site } from '../constants/site';
import { values } from '../constants/values';

export function AboutScreen() {
  return (
    <>
      <PageBanner eyebrow="About Us" title={site.name} description={site.description} />

      <Section background="page">
        <div className="hy-split grid grid-cols-2 items-center gap-14">
          <img
            src={aboutStory}
            alt="Hyperion Technologies training facility"
            className="aspect-[16/10] w-full self-start rounded-[20px] object-cover"
          />
          <div>
            <p className="m-0 font-mono text-xs font-semibold tracking-[0.1em] text-blue uppercase">
              Our Story
            </p>
            <h2 className="hy-h2 mt-3 font-display text-[28px] font-extrabold">
              Built to bridge classroom theory and IT careers
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-ink-muted">
              Hyperion Technologies was founded to close a real gap: talented students and
              professionals who understood IT concepts on paper but lacked the hands-on,
              certification-aligned training to translate that knowledge into a career.
            </p>
            <p className="mt-3.5 text-[15px] leading-[1.7] text-ink-muted">
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
        <div className="hy-grid-3 mt-11 grid grid-cols-3 gap-5">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </Section>
    </>
  );
}
