import { BadgeCheck, Briefcase, GraduationCap } from 'lucide-react';
import founderPortrait from '../assets/founder-portrait.webp';
import { TeamCard } from '../components/cards/TeamCard';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { founder, founderCertificates, founderEducation } from '../constants/founder';
import { team } from '../constants/team';
import { brand, fonts, t } from '../constants/theme';

const eyebrowStyle = {
  margin: 0,
  fontFamily: fonts.mono,
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: brand.blue,
} as const;

export function FounderScreen() {
  return (
    <>
      <Section background="page" padding="30px" style={{ paddingBottom: 0 }}>
        <SectionHeading eyebrow="The Founder" title={founder.name} as="h1" />
        <p style={{ margin: '12px 0 0', color: t.textMuted, fontSize: 15 }}>{founder.role}</p>
      </Section>

      <Section background="page" padding="48px" style={{ paddingBottom: 96 }}>
        <div
          className="hy-split"
          style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: 56 }}
        >
          <div
            style={{
              position: 'sticky',
              top: 96,
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <img
              src={founderPortrait}
              alt={`${founder.name}, Founder`}
              style={{
                width: '100%',
                aspectRatio: '1',
                objectFit: 'cover',
                borderRadius: 9999,
              }}
            />

            <div style={{ background: t.altBg, borderRadius: 14, padding: 18 }}>
              <p
                style={{
                  margin: 0,
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: brand.goldDim,
                }}
              >
                Nationality
              </p>
              <p
                style={{
                  margin: '6px 0 0',
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                {founder.nationality}
              </p>
            </div>

            <div>
              <p style={eyebrowStyle}>Credentials</p>
              <h3
                style={{
                  margin: '10px 0 0',
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                Professional Certifications
              </h3>
              <div
                style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {founderCertificates.map((cert) => (
                  <div
                    key={cert.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      background: t.altBg,
                      borderRadius: 10,
                      padding: '12px 14px',
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    <BadgeCheck size={15} color={brand.goldDim} style={{ flexShrink: 0 }} aria-hidden />
                    {cert.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 44 }}>
            <div>
              {founder.bio.map((paragraph, i) => (
                <p
                  key={paragraph.slice(0, 40)}
                  style={{
                    margin: i === 0 ? 0 : '14px 0 0',
                    color: t.textMuted,
                    lineHeight: 1.7,
                    fontSize: 15,
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <p style={eyebrowStyle}>Background</p>
              <h3
                style={{
                  margin: '10px 0 0',
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Education
              </h3>
              <div
                style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                {founderEducation.map((entry) => (
                  <div
                    key={entry.credential}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      border: `1px solid ${t.border}`,
                      borderRadius: 12,
                      padding: '14px 16px',
                    }}
                  >
                    <GraduationCap
                      size={17}
                      color={brand.blue}
                      style={{ flexShrink: 0, marginTop: 2 }}
                      aria-hidden
                    />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>{entry.credential}</p>
                      <p style={{ margin: '3px 0 0', fontSize: 13, color: t.textMuted }}>
                        {entry.school}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p style={eyebrowStyle}>Experience</p>
              <h3
                style={{
                  margin: '10px 0 0',
                  fontFamily: fonts.display,
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                Professional Experience
              </h3>
              <ul
                style={{
                  margin: '16px 0 0',
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  fontSize: 14,
                  color: t.textMuted,
                }}
              >
                {founder.experience.map((entry) => (
                  <li key={entry} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <Briefcase
                      size={15}
                      color={brand.blue}
                      style={{ flexShrink: 0, marginTop: 2 }}
                      aria-hidden
                    />
                    {entry}
                  </li>
                ))}
              </ul>
              <p style={{ margin: '14px 0 0', fontSize: 13, color: t.textMuted }}>
                {founder.curriculaNote}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="page" padding="0px" style={{ paddingBottom: 96 }}>
        <SectionHeading eyebrow="Our People" title="Meet the team" />
        <div
          style={{
            marginTop: 40,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 20,
          }}
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
