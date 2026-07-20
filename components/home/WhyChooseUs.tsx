import { GraduationCap, Users, Wrench, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const points = [
  {
    icon: GraduationCap,
    title: "Curriculum-Aligned Instruction",
    description:
      "Our founder's experience spans the Ghana Education Curriculum, British Curriculum, IGCSE, AS, and A Level — so training is pitched precisely to how you learn best.",
  },
  {
    icon: BadgeCheck,
    title: "Multi-Certification Expertise",
    description:
      "CCNA, CCNP, CCIE, CompTIA A+, and Network+ under one roof, taught by an accredited Cisco Networking Academy (NetAcad) instructor.",
  },
  {
    icon: Wrench,
    title: "Hands-On, Not Just Theory",
    description:
      "Every program is grounded in practical labs — real configuration, real troubleshooting, real confidence before exam day.",
  },
  {
    icon: Users,
    title: "One Partner, Full IT Support",
    description:
      "Beyond training, we support your business with networking, systems administration, design, and development services.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container-hyperion">
        <SectionHeading
          eyebrow="Why Hyperion"
          title="Training built on real teaching experience, not a script"
          description="Led by an accredited Cisco instructor with over a decade in the classroom, our programs are designed around how people actually learn networking."
        />
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="group relative rounded-2xl border border-mid-gray p-7 transition-all hover:border-gold-400 hover:shadow-xl hover:shadow-royal-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-600 transition-colors group-hover:bg-royal-700 group-hover:text-gold-300">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-royal-950">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
