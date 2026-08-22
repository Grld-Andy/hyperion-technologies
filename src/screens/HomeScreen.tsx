import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { AuroraBlobs } from '../components/AuroraBlobs';
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
import { whyChooseUs } from '../constants/values';
import { featuredVideos } from '../constants/videos';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

function Hero() {
  const { revealed } = useScrollReveal({ immediate: true });

  return (
    <section className="relative overflow-hidden bg-navy px-8 pt-24 pb-[72px]">
      <AuroraBlobs />
      <div className="hy-pulse pointer-events-none absolute inset-0 bg-[radial-gradient(oklch(1_0_0/0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--navy)_85%)]" />

      <div className="hy-split relative z-[1] mx-auto grid max-w-[1280px] grid-cols-[1.1fr_0.9fr] items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-[7px] font-mono text-[11px] font-semibold tracking-[0.1em] text-gold-light uppercase">
            <ShieldCheck size={14} aria-hidden />
            {site.tagline}
          </span>

          <h1 className="hy-h1 mt-7 max-w-[640px] font-display text-[52px] leading-[1.08] font-extrabold tracking-[-0.02em] text-white">
            Certified networks start with{' '}
            <span className="text-gold-light">certified people.</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-lg leading-[1.65] text-white/75">
            {site.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button to={routes.certifications} variant="gold" size="lg">
              Explore Certifications <ArrowRight size={17} aria-hidden />
            </Button>
            <Button to={routes.contact} variant="outlineLight" size="lg">
              Talk to an Advisor
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.1 }}
          className="rounded-[22px] border border-white/14 bg-white/6 p-8"
        >
          <p className="font-mono text-[11px] tracking-[0.12em] text-gold-light uppercase">
            {heroHighlight.eyebrow}
          </p>
          <p className="mt-2.5 font-display text-[26px] font-bold text-white">
            {heroHighlight.title}
          </p>
          <p className="mt-3 text-sm leading-[1.6] text-white/65">{heroHighlight.description}</p>
          <div className="my-6 h-px bg-gold-light/50" />
          <div className="grid grid-cols-2 gap-4">
            {heroHighlight.facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-[17px] font-semibold text-white">{fact.value}</p>
                <p className="mt-1 text-xs text-white/55">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
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
          <div className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5">
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
          <div className="hy-hide-scrollbar mt-6 flex gap-4 overflow-x-auto py-10 [scroll-snap-type:x_proximity]">
            {certifications.map((cert) => (
              <CertCard key={cert.slug} cert={cert} variant="carousel" />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section background="page" align="center">
        <Reveal>
          <SectionHeading eyebrow="Watch & Learn" title="Training videos" style={{ textAlign: 'center' }} />
          <div className="hy-grid-3 mt-12 grid grid-cols-3 gap-5 text-left">
            {featuredVideos.map((video) => (
              <VideoCard key={video.title} video={video} variant="feature" />
            ))}
          </div>
          <div className="mt-10">
            <Button to={routes.videos} variant="gold">
              View All Videos <ArrowRight size={15} aria-hidden />
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section background="page">
        <Reveal>
          <SectionHeading eyebrow="What We Do" title="Full-spectrum IT services" />
          <div className="hy-grid-3 mt-12 grid grid-cols-3 gap-5">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to={routes.services} variant="outlineBlue" size="sm">
              View All Services
            </Button>
          </div>
        </Reveal>
      </Section>

      <Section background="alt" align="center" maxWidth={720}>
        <Reveal>
          <SectionHeading eyebrow="Student Voices" title="What students say" style={{ textAlign: 'center' }} />
          <div className="text-left">
            <TestimonialCarousel />
          </div>
        </Reveal>
      </Section>

      <Section background="page">
        <Reveal>
          <SectionHeading eyebrow="Latest News" title="From the Hyperion blog" />
          <div className="hy-grid-3 mt-10 grid grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <BlogCard key={post.title} post={post} />
            ))}
          </div>
        </Reveal>
      </Section>

      <Section background="navy" padding="80px" align="center">
        <Reveal>
          <h2 className="hy-h2 m-0 font-display text-[30px] font-extrabold text-white">
            Ready to get certified?
          </h2>
          <p className="mt-3.5 text-[15px] text-white/70">
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
