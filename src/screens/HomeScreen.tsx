import { ArrowRight, ShieldCheck } from 'lucide-react';
import { BlogCard } from '../components/cards/BlogCard';
import { CertCard } from '../components/cards/CertCard';
import { FeatureCard } from '../components/cards/FeatureCard';
import { ServiceCard } from '../components/cards/ServiceCard';
import { VideoCard } from '../components/cards/VideoCard';
import { StatsBand } from '../components/StatsBand';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { Button } from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { blogPosts } from '../constants/blogPosts';
import { certifications } from '../constants/certifications';
import { routes } from '../constants/navigation';
import { featuredServices } from '../constants/services';
import { heroHighlight, site } from '../constants/site';
import { brand, EASE, fonts, layout } from '../constants/theme';
import { whyChooseUs } from '../constants/values';
import { featuredVideos } from '../constants/videos';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Hero() {
  const { revealed } = useScrollReveal({ immediate: true });
  const enter = (delay: number) => ({
    opacity: revealed ? 1 : 0,
    transform: `translateY(${revealed ? 0 : 24}px)`,
    transition: `opacity 0.8s ${EASE} ${delay}s, transform 0.8s ${EASE} ${delay}s`,
  });

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: brand.navy,
        padding: `96px ${layout.gutter}px 72px`,
      }}
    >
      <div
        className="hy-drift-a"
        style={{
          position: 'absolute',
          top: -80,
          left: -60,
          width: 340,
          height: 340,
          borderRadius: 999,
          background: 'radial-gradient(circle, oklch(0.5 0.2 264 / 0.55), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="hy-drift-b"
        style={{
          position: 'absolute',
          bottom: -100,
          right: -40,
          width: 380,
          height: 380,
          borderRadius: 999,
          background: 'radial-gradient(circle, oklch(0.79 0.135 84 / 0.35), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="hy-pulse"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(oklch(1 0 0 / 0.12) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="hy-split"
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 64,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div style={enter(0)}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid oklch(1 0 0 / 0.15)',
              borderRadius: 999,
              padding: '7px 16px',
              fontFamily: fonts.mono,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: brand.goldLight,
            }}
          >
            <ShieldCheck size={14} aria-hidden />
            {site.tagline}
          </span>

          <h1
            className="hy-h1"
            style={{
              margin: '28px 0 0',
              fontFamily: fonts.display,
              fontWeight: 800,
              fontSize: 52,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: 640,
            }}
          >
            Certified networks start with{' '}
            <span style={{ color: brand.goldLight }}>certified people.</span>
          </h1>

          <p
            style={{
              margin: '24px 0 0',
              maxWidth: 560,
              fontSize: 18,
              lineHeight: 1.65,
              color: 'oklch(1 0 0 / 0.75)',
            }}
          >
            {site.heroDescription}
          </p>

          <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button to={routes.certifications} variant="gold" size="lg">
              Explore Certifications <ArrowRight size={17} aria-hidden />
            </Button>
            <Button to={routes.contact} variant="outlineLight" size="lg">
              Talk to an Advisor
            </Button>
          </div>
        </div>

        <div
          style={{
            background: 'oklch(1 0 0 / 0.06)',
            border: '1px solid oklch(1 0 0 / 0.14)',
            borderRadius: 22,
            padding: 32,
            ...enter(0.1),
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: brand.goldLight,
            }}
          >
            {heroHighlight.eyebrow}
          </p>
          <p
            style={{
              margin: '10px 0 0',
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: 26,
              color: '#fff',
            }}
          >
            {heroHighlight.title}
          </p>
          <p
            style={{
              margin: '12px 0 0',
              fontSize: 14,
              lineHeight: 1.6,
              color: 'oklch(1 0 0 / 0.65)',
            }}
          >
            {heroHighlight.description}
          </p>
          <div style={{ margin: '24px 0', height: 1, background: 'oklch(0.88 0.09 88 / 0.5)' }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {heroHighlight.facts.map((fact) => (
              <div key={fact.label}>
                <p
                  style={{
                    margin: 0,
                    fontFamily: fonts.mono,
                    fontWeight: 600,
                    fontSize: 17,
                    color: '#fff',
                  }}
                >
                  {fact.value}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: 12, color: 'oklch(1 0 0 / 0.55)' }}>
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeScreen() {
  return (
    <>
      <Hero />
      <StatsBand />

      <Section background="page">
        <Reveal>
          <SectionHeading
            eyebrow="Why Hyperion"
            title="Training built on real teaching experience, not a script"
            maxWidth={620}
          />
          <div
            style={{
              marginTop: 48,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: 20,
            }}
          >
            {whyChooseUs.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section background="alt" padding="72px">
        <Reveal>
          <SectionHeading
            eyebrow="Certification Tracks"
            title="Five certifications. One clear path forward."
          />
          <div
            className="hy-hide-scrollbar"
            style={{
              marginTop: 48,
              display: 'flex',
              gap: 16,
              overflowX: 'auto',
              paddingBottom: 8,
              scrollSnapType: 'x proximity',
            }}
          >
            {certifications.map((cert) => (
              <CertCard key={cert.slug} cert={cert} variant="carousel" />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section background="page" align="center">
        <Reveal>
          <SectionHeading
            eyebrow="Watch & Learn"
            title="Training videos"
            style={{ textAlign: 'center' }}
          />
          <div
            className="hy-grid-3"
            style={{
              marginTop: 48,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
              textAlign: 'left',
            }}
          >
            {featuredVideos.map((video) => (
              <VideoCard key={video.title} video={video} variant="feature" />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Button to={routes.videos} variant="gold">
              View All Videos <ArrowRight size={15} aria-hidden />
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section background="page">
        <Reveal>
          <SectionHeading eyebrow="What We Do" title="Full-spectrum IT services" />
          <div
            className="hy-grid-3"
            style={{
              marginTop: 48,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Button to={routes.services} variant="outlineBlue" size="sm">
              View All Services
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section background="alt" align="center" maxWidth={720}>
        <Reveal>
          <SectionHeading
            eyebrow="Student Voices"
            title="What students say"
            style={{ textAlign: 'center' }}
          />
          <div style={{ textAlign: 'left' }}>
            <TestimonialCarousel />
          </div>
        </Reveal>
      </Section>

      <Section background="page">
        <Reveal>
          <SectionHeading eyebrow="Latest News" title="From the Hyperion blog" />
          <div
            className="hy-grid-3"
            style={{
              marginTop: 40,
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 20,
            }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section background="navy" padding="80px" align="center">
        <Reveal>
          <h2
            className="hy-h2"
            style={{
              margin: 0,
              fontFamily: fonts.display,
              fontWeight: 800,
              fontSize: 30,
              color: '#fff',
            }}
          >
            Ready to get certified?
          </h2>
          <p style={{ margin: '14px 0 0', color: 'oklch(1 0 0 / 0.7)', fontSize: 15 }}>
            Talk to an advisor about the right track for you.
          </p>
          <Button to={routes.contact} variant="gold" size="lg" style={{ marginTop: 26 }}>
            Get in Touch <ArrowRight size={16} aria-hidden />
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
