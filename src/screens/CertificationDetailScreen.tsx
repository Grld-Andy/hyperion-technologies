import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { CheckList } from '../components/ui/CheckList';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { getCertification } from '../constants/certifications';
import { routes } from '../constants/navigation';
import { brand, fonts, t } from '../constants/theme';

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
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            color: brand.goldLight,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          <ArrowLeft size={15} aria-hidden />
          Back to certifications
        </Link>
      </PageBanner>

      <Section background="page" padding="64px" maxWidth={1000}>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.75 }}>{cert.overview}</p>

        <div
          className="hy-grid-2"
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 32,
          }}
        >
          <CheckList heading="Who Should Take This" items={cert.whoShouldTake} />
          <CheckList heading="Prerequisites" items={cert.prerequisites} />
          <CheckList heading="Skills You'll Learn" items={cert.skillsLearned} />
          <CheckList heading="Career Opportunities" items={cert.careerOpportunities} />
        </div>

        <div
          style={{ marginTop: 40, background: t.altBg, borderRadius: 16, padding: 28 }}
        >
          <h3 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 700, fontSize: 16 }}>
            Exam Info
          </h3>
          <div
            style={{
              marginTop: 14,
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: 14,
            }}
          >
            <p style={{ margin: 0 }}>
              <strong>Exam:</strong> {cert.examInfo.examCodes.join(', ')}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Delivered by:</strong> {cert.examInfo.deliveredBy}
            </p>
            <p style={{ margin: 0 }}>
              <strong>Format:</strong> {cert.examInfo.format}
            </p>
          </div>
          <p
            style={{
              margin: '12px 0 0',
              fontSize: 13,
              color: t.textMuted,
              fontStyle: 'italic',
            }}
          >
            {cert.examInfo.note}
          </p>
        </div>

        <div style={{ marginTop: 40 }}>
          <CheckList heading="Prep Tips" items={cert.prepTips} />
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 700, fontSize: 16 }}>
            FAQs
          </h3>
          <div
            style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            {cert.faqs.map((faq) => (
              <div
                key={faq.question}
                style={{ borderBottom: `1px solid ${t.border}`, paddingBottom: 14 }}
              >
                <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>{faq.question}</p>
                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: 14,
                    color: t.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{ margin: '32px 0 0', fontSize: 13, color: t.textMuted, fontStyle: 'italic' }}
        >
          {cert.salaryInsight}
        </p>

        <Button to={routes.contact} variant="blue" size="lg" style={{ marginTop: 32 }}>
          Talk to an Advisor About {cert.shortName} <ArrowRight size={15} aria-hidden />
        </Button>
      </Section>
    </>
  );
}
