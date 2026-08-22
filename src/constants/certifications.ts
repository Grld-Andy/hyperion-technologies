import { brand } from './theme';

export type CertVendor = 'Cisco' | 'CompTIA';

export interface CertExamInfo {
  examCodes: string[];
  deliveredBy: string;
  format: string;
  note: string;
}

export interface CertFaq {
  question: string;
  answer: string;
}

export interface Certification {
  slug: string;
  vendor: CertVendor;
  name: string;
  shortName: string;
  level: string;
  tagline: string;
  duration: string;
  overview: string;
  whoShouldTake: string[];
  prerequisites: string[];
  skillsLearned: string[];
  careerOpportunities: string[];
  examInfo: CertExamInfo;
  prepTips: string[];
  faqs: CertFaq[];
  salaryInsight: string;
}

export const certifications: Certification[] = [
  {
    slug: 'ccna',
    vendor: 'Cisco',
    name: 'Cisco Certified Network Associate (CCNA)',
    shortName: 'CCNA',
    level: 'Associate',
    tagline: 'The foundational credential for networking careers.',
    duration: '8-12 weeks',
    overview:
      "CCNA validates the core skills needed to install, configure, and troubleshoot modern networks, covering networking fundamentals, IP connectivity, IP services, security fundamentals, automation, and programmability. It's the standard entry point into professional networking.",
    whoShouldTake: [
      'Aspiring network technicians and administrators',
      'IT support staff looking to specialize in networking',
      'Computer science / IT students building job-ready skills',
      'Career changers entering the technology sector',
    ],
    prerequisites: [
      'No formal prerequisite certification is required',
      'Basic computer literacy is recommended',
      'Familiarity with fundamental IT concepts is helpful but not mandatory',
    ],
    skillsLearned: [
      'Network fundamentals and topology architectures',
      'IPv4 and IPv6 addressing and subnetting',
      'Switching concepts, VLANs, and trunking',
      'Routing concepts and configuration',
      'Wireless networking fundamentals',
      'Network security fundamentals and access control',
      'Automation and programmability basics',
    ],
    careerOpportunities: [
      'Network Technician',
      'Network Administrator',
      'IT Support Specialist',
      'Junior Network Engineer',
      'Help Desk / NOC Analyst',
    ],
    examInfo: {
      examCodes: ['200-301 CCNA'],
      deliveredBy: 'Pearson VUE',
      format: 'Single exam, multiple question types, proctored (test center or online)',
      note: "Exam blueprints and pricing change periodically, always confirm current details on Cisco's official site before booking.",
    },
    prepTips: [
      "Build a structured study plan around Cisco's official exam topics",
      'Get hands-on with Cisco Packet Tracer or real/virtual lab gear early',
      "Practice subnetting until it's automatic, not memorized",
      'Join study groups and use official Cisco Networking Academy materials',
    ],
    faqs: [
      {
        question: 'Do I need prior IT experience to start CCNA?',
        answer:
          'No. CCNA is designed as an entry point. Motivated beginners succeed with consistent study and hands-on lab practice.',
      },
      {
        question: 'Can I study part-time while working?',
        answer:
          'Yes, Hyperion offers flexible evening and weekend class schedules alongside self-paced study resources.',
      },
    ],
    salaryInsight:
      'Entry-to-mid level networking roles requiring CCNA generally command competitive local IT-sector salaries, with variation by country, employer, and experience.',
  },
  {
    slug: 'ccnp',
    vendor: 'Cisco',
    name: 'Cisco Certified Network Professional (CCNP)',
    shortName: 'CCNP',
    level: 'Professional',
    tagline: 'Deepen your expertise and specialize in enterprise networking.',
    duration: '3-6 months',
    overview:
      'CCNP Enterprise builds on CCNA-level knowledge with advanced routing, switching, and enterprise infrastructure topics. It requires passing a core exam plus a concentration exam in a chosen specialty.',
    whoShouldTake: [
      'Network administrators ready to move into engineering roles',
      'CCNA holders seeking career advancement',
      'IT professionals specializing in enterprise infrastructure',
    ],
    prerequisites: [
      'No formal prerequisite certification is enforced by Cisco',
      'Solid working knowledge of CCNA-level topics is strongly recommended',
      '3+ years of hands-on networking experience is typical',
    ],
    skillsLearned: [
      'Advanced enterprise routing and switching design',
      'Network security architecture and segmentation',
      'Automation and programmability at scale',
      'Wireless enterprise design and troubleshooting',
      'SD-WAN and virtualization fundamentals',
    ],
    careerOpportunities: [
      'Network Engineer',
      'Senior Network Administrator',
      'Infrastructure Engineer',
      'Network Security Engineer',
      'Pre-Sales Network Consultant',
    ],
    examInfo: {
      examCodes: ['350-401 ENCOR (core)', '300-410 ENARSI (concentration)'],
      deliveredBy: 'Pearson VUE',
      format: 'Two exams required: one core exam plus one concentration exam',
      note: 'Passing the core exam alone also counts toward CCIE written eligibility.',
    },
    prepTips: [
      'Master CCNA fundamentals thoroughly before starting CCNP',
      'Choose a concentration aligned with your career direction early',
      'Build a home or virtual lab for advanced practice',
      'Study automation and Python basics',
    ],
    faqs: [
      {
        question: 'Do I need to hold CCNA before attempting CCNP?',
        answer:
          'Cisco does not formally require it, but CCNA-level knowledge is foundational and strongly recommended.',
      },
      {
        question: 'How many exams does CCNP require?',
        answer: 'Two: a core exam plus a concentration exam in your chosen specialty area.',
      },
    ],
    salaryInsight:
      'Professional-level Cisco certification holders typically earn a premium over associate-level peers, reflecting greater scope of responsibility.',
  },
  {
    slug: 'ccie',
    vendor: 'Cisco',
    name: 'Cisco Certified Internetwork Expert (CCIE)',
    shortName: 'CCIE',
    level: 'Expert',
    tagline: 'The pinnacle of Cisco networking certification.',
    duration: '6-12+ months',
    overview:
      "CCIE is Cisco's expert-level credential, recognized worldwide for validating the ability to design, deploy, operate, and troubleshoot the most complex network infrastructures.",
    whoShouldTake: [
      'Senior network engineers with several years of experience',
      'CCNP holders aiming for the top tier of network engineering',
      'Architects responsible for large, complex network environments',
    ],
    prerequisites: [
      'No formal prerequisite certification required by Cisco',
      'Significant real-world experience is essential (commonly 5-7+ years)',
      'Deep comfort with CCNP-level topics',
    ],
    skillsLearned: [
      'Complex enterprise network design and optimization',
      'Advanced troubleshooting under time pressure',
      'Large-scale automation and orchestration',
      'Security, QoS, and multi-domain integration at expert level',
    ],
    careerOpportunities: [
      'Principal / Lead Network Engineer',
      'Network Architect',
      'Senior Infrastructure Consultant',
      'Technical Director (Networking)',
    ],
    examInfo: {
      examCodes: ['Qualifying written exam', '8-hour hands-on practical lab exam'],
      deliveredBy: 'Pearson VUE (written) / Cisco-authorized lab locations',
      format: 'Two-stage: written qualification exam, then a practical lab exam',
      note: 'Lab exam availability and locations are limited.',
    },
    prepTips: [
      'Do not attempt CCIE without solid CCNP-level mastery',
      'Build extensive lab time, this exam is overwhelmingly hands-on',
      'Study real-world failure scenarios, not just textbook configurations',
    ],
    faqs: [
      {
        question: 'How difficult is the CCIE lab exam?',
        answer:
          'Widely regarded as one of the most demanding IT certification exams in the world.',
      },
    ],
    salaryInsight:
      'CCIE holders are typically among the highest-compensated network engineering professionals in their market.',
  },
  {
    slug: 'comptia-a-plus',
    vendor: 'CompTIA',
    name: 'CompTIA A+',
    shortName: 'A+',
    level: 'Core',
    tagline: 'The industry standard for launching an IT career.',
    duration: '6-10 weeks',
    overview:
      'CompTIA A+ is the go-to certification for IT support and technician roles, covering hardware, networking basics, mobile devices, software troubleshooting, operating systems, security, and operational procedures.',
    whoShouldTake: [
      'Newcomers to IT support and help-desk roles',
      'Students seeking a widely-recognized entry credential',
      'Career changers moving into technology',
    ],
    prerequisites: ['No formal prerequisites', 'Basic computer familiarity is helpful'],
    skillsLearned: [
      'PC hardware installation and troubleshooting',
      'Mobile device support',
      'Networking basics and connectivity troubleshooting',
      'Operating system installation and administration',
      'Security fundamentals and safe operating procedures',
    ],
    careerOpportunities: [
      'IT Support Technician',
      'Help Desk Analyst',
      'Field Service Technician',
      'Desktop Support Specialist',
    ],
    examInfo: {
      examCodes: ['220-1101 (Core 1)', '220-1102 (Core 2)'],
      deliveredBy: 'Pearson VUE',
      format: 'Two exams required, covering hardware/networking and OS/security/procedures',
      note: 'Exam codes are periodically refreshed by CompTIA.',
    },
    prepTips: [
      'Get hands-on with real hardware',
      'Use official CompTIA study guides and practice questions',
      'Study both exams together since topics overlap',
    ],
    faqs: [
      {
        question: 'Do I need both Core 1 and Core 2 exams?',
        answer: 'Yes, CompTIA A+ certification requires passing both exams.',
      },
    ],
    salaryInsight:
      'A+ is typically associated with entry-level IT support compensation, serving as a stepping stone toward higher-paying specialized roles.',
  },
  {
    slug: 'comptia-network-plus',
    vendor: 'CompTIA',
    name: 'CompTIA Network+',
    shortName: 'Network+',
    level: 'Core',
    tagline: 'Vendor-neutral networking fundamentals that complement Cisco training.',
    duration: '6-10 weeks',
    overview:
      "CompTIA Network+ validates essential networking skills and knowledge independent of any single vendor's equipment, covering network architecture, operations, security, troubleshooting, and industry standards.",
    whoShouldTake: [
      'IT support technicians expanding into networking',
      'Students who want vendor-neutral grounding before or alongside Cisco tracks',
      'Junior network administrators',
    ],
    prerequisites: [
      'CompTIA A+ is recommended but not required',
      '9-12 months of general networking experience is suggested, though motivated beginners regularly succeed',
    ],
    skillsLearned: [
      'Network architecture and topologies',
      'Network operations and monitoring',
      'Network security fundamentals',
      'Troubleshooting methodology',
      'Industry standards, protocols, and services',
    ],
    careerOpportunities: [
      'Network Administrator',
      'Junior Network Engineer',
      'Systems Administrator',
      'IT Support Specialist (networking focus)',
    ],
    examInfo: {
      examCodes: ['N10-009'],
      deliveredBy: 'Pearson VUE',
      format: 'Single exam, multiple question types, proctored',
      note: "Confirm the current exam code and objectives on CompTIA's official site.",
    },
    prepTips: [
      'Pair Network+ study with hands-on lab practice, not memorization alone',
      'Use it as a strong complement to (not replacement for) CCNA',
      'Focus on troubleshooting methodology',
    ],
    faqs: [
      {
        question: 'Should I take Network+ before or after CCNA?',
        answer: 'Either order works, our instructors can help you choose based on your goals.',
      },
    ],
    salaryInsight:
      'Network+ holders often see improved eligibility for junior networking roles, with compensation comparable to other associate-level IT certifications.',
  },
];

export function getCertification(slug: string | undefined): Certification | undefined {
  return certifications.find((c) => c.slug === slug);
}

/** Vendor-derived accent colours, mirroring the mockup's `certsWithHandlers` mapping. */
export interface VendorAccent {
  accent: string;
  accentSoft: string;
  glassBg: string;
  glassBorder: string;
}

export function vendorAccent(vendor: CertVendor): VendorAccent {
  return vendor === 'Cisco'
    ? {
        accent: brand.blueBright,
        accentSoft: 'oklch(0.5 0.2 264 / 0.35)',
        glassBg: 'oklch(0.5 0.2 264 / 0.28)',
        glassBorder: 'oklch(0.65 0.18 264 / 0.5)',
      }
    : {
        accent: brand.gold,
        accentSoft: 'oklch(0.79 0.135 84 / 0.35)',
        glassBg: 'oklch(0.79 0.135 84 / 0.28)',
        glassBorder: 'oklch(0.85 0.1 88 / 0.6)',
      };
}

/** Copy for the three certification list variants (all / Cisco / CompTIA). */
export interface CertGroupCopy {
  eyebrow: string;
  title: string;
  description: string;
}

export const certGroupCopy: Record<'all' | 'cisco' | 'comptia', CertGroupCopy> = {
  all: {
    eyebrow: 'Certification Tracks',
    title: 'Five certifications. One clear path forward.',
    description:
      "Whether you're starting out or advancing toward expert level, there's a structured track waiting for you.",
  },
  cisco: {
    eyebrow: 'Cisco Training',
    title: 'Cisco Networking Academy tracks',
    description:
      'CCNA, CCNP, and CCIE, taught by an accredited Cisco Networking Academy instructor.',
  },
  comptia: {
    eyebrow: 'CompTIA Training',
    title: 'Vendor-neutral CompTIA tracks',
    description:
      'CompTIA A+ and Network+, a strong foundation on their own or alongside Cisco training.',
  },
};
