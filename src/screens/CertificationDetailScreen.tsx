import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckList } from '../components/ui/CheckList';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { getCertification } from '../constants/certifications';
import { routes } from '../constants/navigation';

export function CertificationDetailScreen() {
  const { slug } = useParams<{ slug: string }>();
  const cert = getCertification(slug);

  // Unknown slug falls back to the list rather than rendering an empty page.
  if (!cert) return <Navigate to={routes.certifications} replace />;

  return (
    <>
      <PageBanner
        eyebrow={`${cert.vendor} · ${cert.level}`}
        title={cert.name}
        description={cert.tagline}
        align="left"
        compact
      >
        <Link
          to={routes.certifications}
          className="mb-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-light"
        >
          <ArrowLeft size={15} aria-hidden />
          Back to certifications
        </Link>
      </PageBanner>

      <Section background="page" padding="64px" maxWidth={1000}>
        <p className="m-0 text-[15px] leading-[1.75]">{cert.overview}</p>

        <div className="hy-grid-2 mt-12 grid grid-cols-2 gap-8">
          <CheckList heading="Who Should Take This" items={cert.whoShouldTake} />
          <CheckList heading="Prerequisites" items={cert.prerequisites} />
          <CheckList heading="Skills You'll Learn" items={cert.skillsLearned} />
          <CheckList heading="Career Opportunities" items={cert.careerOpportunities} />
        </div>

        <div className="mt-10 rounded-2xl bg-alt p-7">
          <h3 className="m-0 font-display text-base font-bold">Exam Info</h3>
          <div className="mt-3.5 flex flex-col gap-1.5 text-sm">
            <p className="m-0">
              <strong>Exam:</strong> {cert.examInfo.examCodes.join(', ')}
            </p>
            <p className="m-0">
              <strong>Delivered by:</strong> {cert.examInfo.deliveredBy}
            </p>
            <p className="m-0">
              <strong>Format:</strong> {cert.examInfo.format}
            </p>
          </div>
          <p className="mt-3 text-[13px] text-ink-muted italic">{cert.examInfo.note}</p>
        </div>

        <div className="mt-10">
          <CheckList heading="Prep Tips" items={cert.prepTips} />
        </div>

        <div className="mt-10">
          <h3 className="m-0 font-display text-base font-bold">FAQs</h3>
          <div className="mt-3.5 flex flex-col gap-3.5">
            {cert.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-line pb-3.5">
                <p className="m-0 text-sm font-bold">{faq.question}</p>
                <p className="mt-1.5 text-sm leading-[1.6] text-ink-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-[13px] text-ink-muted italic">{cert.salaryInsight}</p>

        <Button to={routes.contact} variant="blue" size="lg" style={{ marginTop: 32 }}>
          Talk to an Advisor About {cert.shortName} <ArrowRight size={15} aria-hidden />
        </Button>
      </Section>
    </>
  );
}
