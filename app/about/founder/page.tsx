import type { Metadata } from "next";
import { GraduationCap, BadgeCheck, Briefcase } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "The Founder — Michael Quarshie",
  description:
    "Meet Michael Quarshie, founder of Hyperion Technologies — an accredited Cisco Networking Academy instructor with over 10 years of teaching experience.",
  path: "/about/founder",
});

const education = [
  { school: "University of Cape Coast", credential: "MSc Information Technology" },
  { school: "University of Cape Coast", credential: "Bachelor of Commerce (Management)" },
  { school: "Accra Technical University", credential: "Accounting" },
];

const certifications = [
  "Cisco Certified Network Associate (CCNA)",
  "Cisco Certified Network Professional (CCNP)",
  "CompTIA A+",
  "Microsoft Certified Solutions Associate (MCSA)",
  "Microsoft Certified Professional (MCP)",
];

const curricula = ["Ghana Education Curriculum", "British Curriculum", "IGCSE", "AS Level", "A Level"];

export default function FounderPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">The Founder</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Michael Quarshie</h1>
          <p className="mx-auto mt-4 max-w-xl text-royal-100/80">
            Founder of Hyperion Technologies · Accredited Cisco Networking Academy (NetAcad) Instructor
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion grid gap-12 lg:grid-cols-[380px_1fr]">
          <div>
            <PlaceholderMedia label="Michael Quarshie, Founder" aspect="portrait" />
            <div className="mt-6 rounded-2xl bg-light-gray p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">Nationality</p>
              <p className="mt-1 font-display text-lg font-semibold text-royal-950">Ghanaian</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <p className="text-slate leading-relaxed">
                Michael Quarshie founded Hyperion Technologies to bring internationally
                recognized IT certification training to Accra, grounded in over a decade of
                real classroom experience. As an accredited Cisco Networking Academy (NetAcad)
                instructor, he has taught networking and systems administration across
                multiple curricula, giving him a rare fluency in how students from very
                different educational backgrounds actually learn technical material.
              </p>
              <p className="mt-4 text-slate leading-relaxed">
                His teaching experience spans the Ghana Education Curriculum, the British
                Curriculum, IGCSE, AS Level, and A Level — a breadth that now shapes how
                Hyperion structures its own certification tracks for a diverse student body.
              </p>
            </div>

            <div>
              <SectionHeading eyebrow="Background" title="Education" align="left" />
              <div className="mt-6 space-y-4">
                {education.map((e) => (
                  <div key={e.credential} className="flex items-start gap-3 rounded-xl border border-mid-gray p-4">
                    <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-royal-600" />
                    <div>
                      <p className="font-semibold text-royal-950">{e.credential}</p>
                      <p className="text-sm text-slate">{e.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Credentials" title="Professional Certifications" align="left" />
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {certifications.map((c) => (
                  <li key={c} className="flex items-center gap-2.5 rounded-xl bg-light-gray px-4 py-3 text-sm font-medium text-royal-950">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-gold-600" /> {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="Experience" title="Professional Experience" align="left" />
              <ul className="mt-6 space-y-3 text-sm text-slate">
                <li className="flex items-start gap-2.5">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                  Accredited Cisco Networking Academy (NetAcad) Instructor
                </li>
                <li className="flex items-start gap-2.5">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                  More than 10 years of teaching experience
                </li>
                <li className="flex items-start gap-2.5">
                  <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-royal-600" />
                  Extensive experience in networking, systems administration, and professional IT training
                </li>
              </ul>
              <p className="mt-4 text-sm text-slate">Curricula taught: {curricula.join(", ")}.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
