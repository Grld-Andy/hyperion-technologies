import { BadgeCheck, Briefcase, GraduationCap } from 'lucide-react';
import founderPortrait from '../assets/founder-portrait.webp';
import { TeamCard } from '../components/cards/TeamCard';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { founder, founderCertificates, founderEducation } from '../constants/founder';
import { team } from '../constants/team';

const eyebrowClass = 'm-0 font-mono text-xs font-semibold tracking-[0.1em] text-blue uppercase';

export function FounderScreen() {
  return (
    <>
      <Section background="page" padding="30px" style={{ paddingBottom: 0 }}>
        <SectionHeading eyebrow="The Founder" title={founder.name} as="h1" />
        <p className="m-0 mt-3 text-[15px] text-ink-muted">{founder.role}</p>
      </Section>

      <Section background="page" padding="48px" style={{ paddingBottom: 96 }}>
        <div className="hy-split grid grid-cols-[340px_1fr] gap-14">
          <div className="sticky top-24 flex flex-col gap-5 self-start">
            <img
              src={founderPortrait}
              alt={`${founder.name}, Founder`}
              className="aspect-square w-full rounded-full object-cover"
            />

            <div className="rounded-[14px] bg-alt p-[18px]">
              <p className="m-0 font-mono text-[11px] font-semibold tracking-[0.08em] text-gold-dim uppercase">
                Nationality
              </p>
              <p className="m-0 mt-1.5 font-display text-base font-bold">{founder.nationality}</p>
            </div>

            <div>
              <p className={eyebrowClass}>Credentials</p>
              <h3 className="m-0 mt-2.5 font-display text-lg font-bold">
                Professional Certifications
              </h3>
              <div className="mt-[14px] flex flex-col gap-2.5">
                {founderCertificates.map((cert) => (
                  <div
                    key={cert.label}
                    className="flex items-center gap-2 rounded-[10px] bg-alt px-3.5 py-3 text-[13px] font-semibold"
                  >
                    <BadgeCheck size={15} className="shrink-0 text-gold-dim" aria-hidden />
                    {cert.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-11">
            <div>
              {founder.bio.map((paragraph, i) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className={`text-[15px] leading-[1.7] text-ink-muted ${i === 0 ? '' : 'mt-[14px]'}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <p className={eyebrowClass}>Background</p>
              <h3 className="m-0 mt-2.5 font-display text-xl font-bold">Education</h3>
              <div className="mt-4 flex flex-col gap-2.5">
                {founderEducation.map((entry) => (
                  <div
                    key={entry.credential}
                    className="flex items-start gap-2.5 rounded-xl border border-line px-4 py-3.5"
                  >
                    <GraduationCap size={17} className="mt-0.5 shrink-0 text-blue" aria-hidden />
                    <div>
                      <p className="m-0 text-sm font-bold">{entry.credential}</p>
                      <p className="mt-[3px] text-[13px] text-ink-muted">{entry.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className={eyebrowClass}>Experience</p>
              <h3 className="m-0 mt-2.5 font-display text-xl font-bold">
                Professional Experience
              </h3>
              <ul className="m-0 mt-4 flex list-none flex-col gap-2 p-0 text-sm text-ink-muted">
                {founder.experience.map((entry) => (
                  <li key={entry} className="flex items-start gap-2">
                    <Briefcase size={15} className="mt-0.5 shrink-0 text-blue" aria-hidden />
                    {entry}
                  </li>
                ))}
              </ul>
              <p className="mt-[14px] text-[13px] text-ink-muted">{founder.curriculaNote}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section background="page" padding="0px" style={{ paddingBottom: 96 }}>
        <SectionHeading eyebrow="Our People" title="Meet the team" />
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
