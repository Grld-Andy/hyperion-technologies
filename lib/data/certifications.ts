export type Certification = {
  slug: string;
  vendor: "Cisco" | "CompTIA";
  name: string;
  shortName: string;
  level: "Associate" | "Professional" | "Expert" | "Core";
  tagline: string;
  overview: string;
  whoShouldTake: string[];
  prerequisites: string[];
  skillsLearned: string[];
  careerOpportunities: string[];
  duration: string; // marked customizable in UI
  learningOutcomes: string[];
  examInfo: {
    examCodes: string[];
    deliveredBy: string;
    format: string;
    note: string;
  };
  prepTips: string[];
  faqs: { question: string; answer: string }[];
  resources: { label: string; href: string }[];
  salaryInsight: string; // approximate, generally sourced
};

export const certifications: Certification[] = [
  {
    slug: "ccna",
    vendor: "Cisco",
    name: "Cisco Certified Network Associate (CCNA)",
    shortName: "CCNA",
    level: "Associate",
    tagline: "The foundational credential for networking careers.",
    overview:
      "CCNA validates the core skills needed to install, configure, and troubleshoot modern networks, covering networking fundamentals, IP connectivity, IP services, security fundamentals, automation, and programmability. It's the standard entry point into professional networking and the prerequisite mindset for every advanced Cisco track.",
    whoShouldTake: [
      "Aspiring network technicians and administrators",
      "IT support staff looking to specialize in networking",
      "Computer science / IT students building job-ready skills",
      "Career changers entering the technology sector",
    ],
    prerequisites: [
      "No formal prerequisite certification is required",
      "Basic computer literacy is recommended",
      "Familiarity with fundamental IT concepts is helpful but not mandatory",
    ],
    skillsLearned: [
      "Network fundamentals and topology architectures",
      "IPv4 and IPv6 addressing and subnetting",
      "Switching concepts, VLANs, and trunking",
      "Routing concepts and configuration (static and dynamic)",
      "Wireless networking fundamentals",
      "Network security fundamentals and access control",
      "Automation and programmability basics (APIs, Cisco DNA Center)",
    ],
    careerOpportunities: [
      "Network Technician",
      "Network Administrator",
      "IT Support Specialist",
      "Junior Network Engineer",
      "Help Desk / NOC Analyst",
    ],
    duration: "8–12 weeks (customizable — instructor-led and self-paced tracks available)",
    learningOutcomes: [
      "Design and implement a small-to-medium routed and switched network",
      "Configure and verify basic network security",
      "Troubleshoot common connectivity issues methodically",
      "Understand how automation is changing network operations",
    ],
    examInfo: {
      examCodes: ["200-301 CCNA"],
      deliveredBy: "Pearson VUE",
      format: "Single exam, multiple question types, proctored (test center or online)",
      note: "Exam blueprints and pricing change periodically — always confirm current details on Cisco's official site before booking.",
    },
    prepTips: [
      "Build a structured study plan around Cisco's official exam topics",
      "Get hands-on with Cisco Packet Tracer or real/virtual lab gear early",
      "Practice subnetting until it's automatic, not memorized",
      "Join study groups and use official Cisco Networking Academy materials",
      "Take timed practice assessments to build exam-day pacing",
    ],
    faqs: [
      {
        question: "Do I need prior IT experience to start CCNA?",
        answer:
          "No. CCNA is designed as an entry point. Motivated beginners succeed with consistent study and hands-on lab practice.",
      },
      {
        question: "How long is the certification valid?",
        answer:
          "Cisco certifications are generally valid for three years from the date earned; renewal options are outlined on Cisco's official certification site.",
      },
      {
        question: "Can I study part-time while working?",
        answer:
          "Yes — Hyperion offers flexible evening and weekend class schedules alongside self-paced study resources.",
      },
    ],
    resources: [
      { label: "Cisco Certifications — Official Site", href: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html" },
      { label: "Cisco Networking Academy", href: "https://www.netacad.com/" },
      { label: "Cisco Learning Network", href: "https://learningnetwork.cisco.com/" },
      { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/cisco" },
    ],
    salaryInsight:
      "Entry-to-mid level networking roles requiring CCNA generally command competitive local IT-sector salaries, with variation by country, employer, and experience. Consult current regional salary surveys for precise figures.",
  },
  {
    slug: "ccnp",
    vendor: "Cisco",
    name: "Cisco Certified Network Professional (CCNP)",
    shortName: "CCNP",
    level: "Professional",
    tagline: "Deepen your expertise and specialize in enterprise networking.",
    overview:
      "CCNP Enterprise builds on CCNA-level knowledge with advanced routing, switching, and enterprise infrastructure topics. It requires passing a core exam plus a concentration exam in a chosen specialty, reflecting the reality that professional-level engineers need both broad and deep expertise.",
    whoShouldTake: [
      "Network administrators ready to move into engineering roles",
      "CCNA holders seeking career advancement",
      "IT professionals specializing in enterprise infrastructure",
    ],
    prerequisites: [
      "No formal prerequisite certification is enforced by Cisco",
      "Solid working knowledge of CCNA-level topics is strongly recommended",
      "3+ years of hands-on networking experience is typical among successful candidates",
    ],
    skillsLearned: [
      "Advanced enterprise routing and switching design",
      "Network security architecture and segmentation",
      "Automation and programmability at scale",
      "Wireless enterprise design and troubleshooting",
      "SD-WAN and virtualization fundamentals",
    ],
    careerOpportunities: [
      "Network Engineer",
      "Senior Network Administrator",
      "Infrastructure Engineer",
      "Network Security Engineer",
      "Pre-Sales Network Consultant",
    ],
    duration: "3–6 months (customizable — core + concentration exam prep tracks)",
    learningOutcomes: [
      "Architect and troubleshoot enterprise-scale networks",
      "Apply automation to reduce manual network operations",
      "Design secure, resilient enterprise infrastructure",
    ],
    examInfo: {
      examCodes: ["350-401 ENCOR (core)", "Concentration exam of choice (e.g., 300-410 ENARSI)"],
      deliveredBy: "Pearson VUE",
      format: "Two exams required: one core exam plus one concentration exam",
      note: "Passing the core exam alone also counts toward CCIE written eligibility — confirm current pathway rules on Cisco's site.",
    },
    prepTips: [
      "Master CCNA fundamentals thoroughly before starting CCNP",
      "Choose a concentration aligned with your career direction early",
      "Build a home or virtual lab for advanced routing/switching practice",
      "Study automation and Python basics — it's increasingly tested",
    ],
    faqs: [
      {
        question: "Do I need to hold CCNA before attempting CCNP?",
        answer:
          "Cisco does not formally require it, but CCNA-level knowledge is foundational and strongly recommended before attempting CCNP.",
      },
      {
        question: "How many exams does CCNP require?",
        answer:
          "Two: a core exam covering enterprise infrastructure, plus a concentration exam in your chosen specialty area.",
      },
    ],
    resources: [
      { label: "Cisco Certifications — Official Site", href: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html" },
      { label: "Cisco Learning Network", href: "https://learningnetwork.cisco.com/" },
      { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/cisco" },
    ],
    salaryInsight:
      "Professional-level Cisco certification holders typically earn a premium over associate-level peers, reflecting greater scope of responsibility. Figures vary significantly by market — check current regional salary data.",
  },
  {
    slug: "ccie",
    vendor: "Cisco",
    name: "Cisco Certified Internetwork Expert (CCIE)",
    shortName: "CCIE",
    level: "Expert",
    tagline: "The pinnacle of Cisco networking certification.",
    overview:
      "CCIE is Cisco's expert-level credential, recognized worldwide for validating the ability to design, deploy, operate, and troubleshoot the most complex network infrastructures. It combines a qualifying written exam with a rigorous hands-on practical lab exam.",
    whoShouldTake: [
      "Senior network engineers with several years of enterprise experience",
      "CCNP holders aiming for the top tier of network engineering",
      "Architects responsible for large, complex network environments",
    ],
    prerequisites: [
      "No formal prerequisite certification required by Cisco",
      "Significant real-world, hands-on networking experience is essential (commonly 5–7+ years)",
      "Deep comfort with CCNP-level topics before attempting the written exam",
    ],
    skillsLearned: [
      "Complex enterprise network design and optimization",
      "Advanced troubleshooting under time pressure",
      "Large-scale automation and orchestration",
      "Security, QoS, and multi-domain integration at expert level",
    ],
    careerOpportunities: [
      "Principal / Lead Network Engineer",
      "Network Architect",
      "Senior Infrastructure Consultant",
      "Technical Director (Networking)",
    ],
    duration: "6–12+ months of dedicated preparation (customizable, highly individual)",
    learningOutcomes: [
      "Design and defend enterprise network architectures under scrutiny",
      "Diagnose and resolve complex multi-layer network issues rapidly",
      "Operate at the expert tier expected of senior technical leadership",
    ],
    examInfo: {
      examCodes: ["Qualifying written exam", "8-hour hands-on practical lab exam"],
      deliveredBy: "Pearson VUE (written) / Cisco-authorized lab locations (practical)",
      format: "Two-stage: written qualification exam, then an in-person or remote practical lab exam",
      note: "Lab exam availability and locations are limited — always check current scheduling on Cisco's official site.",
    },
    prepTips: [
      "Do not attempt CCIE without solid CCNP-level mastery",
      "Build extensive lab time — this exam is overwhelmingly hands-on",
      "Study real-world failure scenarios, not just textbook configurations",
      "Consider structured bootcamps closer to your target lab date",
    ],
    faqs: [
      {
        question: "How difficult is the CCIE lab exam?",
        answer:
          "It is widely regarded as one of the most demanding IT certification exams in the world, requiring both deep knowledge and speed under pressure.",
      },
      {
        question: "Is CCIE necessary for a successful networking career?",
        answer:
          "No — many strong careers are built on CCNA/CCNP alone. CCIE is for those pursuing the most senior technical tracks.",
      },
    ],
    resources: [
      { label: "Cisco Certifications — Official Site", href: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/index.html" },
      { label: "Cisco Learning Network", href: "https://learningnetwork.cisco.com/" },
      { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/cisco" },
    ],
    salaryInsight:
      "CCIE holders are typically among the highest-compensated network engineering professionals in their market, reflecting the certification's rarity and difficulty. Confirm figures against current regional data.",
  },
  {
    slug: "comptia-a-plus",
    vendor: "CompTIA",
    name: "CompTIA A+",
    shortName: "A+",
    level: "Core",
    tagline: "The industry standard for launching an IT career.",
    overview:
      "CompTIA A+ is the go-to certification for IT support and technician roles, covering hardware, networking basics, mobile devices, software troubleshooting, operating systems, security, and operational procedures.",
    whoShouldTake: [
      "Newcomers to IT support and help-desk roles",
      "Students seeking a widely-recognized entry credential",
      "Career changers moving into technology",
    ],
    prerequisites: [
      "No formal prerequisites",
      "Basic computer familiarity is helpful",
    ],
    skillsLearned: [
      "PC hardware installation and troubleshooting",
      "Mobile device support",
      "Networking basics and connectivity troubleshooting",
      "Operating system installation and administration (Windows, macOS, Linux basics)",
      "Security fundamentals and safe operating procedures",
    ],
    careerOpportunities: [
      "IT Support Technician",
      "Help Desk Analyst",
      "Field Service Technician",
      "Desktop Support Specialist",
    ],
    duration: "6–10 weeks (customizable)",
    learningOutcomes: [
      "Diagnose and resolve common hardware and software issues",
      "Support end users confidently across devices and operating systems",
      "Apply basic security best practices in an IT support context",
    ],
    examInfo: {
      examCodes: ["220-1101 (Core 1)", "220-1102 (Core 2)"],
      deliveredBy: "Pearson VUE",
      format: "Two exams required, covering hardware/networking and OS/security/procedures respectively",
      note: "Exam codes are periodically refreshed by CompTIA — verify current codes before registering.",
    },
    prepTips: [
      "Get hands-on with real hardware — build or take apart a PC",
      "Use official CompTIA study guides and practice questions",
      "Study both exams together since topics overlap in practice",
    ],
    faqs: [
      {
        question: "Do I need both Core 1 and Core 2 exams?",
        answer:
          "Yes — CompTIA A+ certification requires passing both exams to be fully certified.",
      },
    ],
    resources: [
      { label: "CompTIA — Official Site", href: "https://www.comptia.org/" },
      { label: "CompTIA A+ Certification", href: "https://www.comptia.org/certifications/a" },
      { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/comptia" },
    ],
    salaryInsight:
      "A+ is typically associated with entry-level IT support compensation, serving as a stepping stone toward higher-paying specialized roles.",
  },
  {
    slug: "comptia-network-plus",
    vendor: "CompTIA",
    name: "CompTIA Network+",
    shortName: "Network+",
    level: "Core",
    tagline: "Vendor-neutral networking fundamentals that complement Cisco training.",
    overview:
      "CompTIA Network+ validates essential networking skills and knowledge independent of any single vendor's equipment, covering network architecture, operations, security, troubleshooting, and industry standards.",
    whoShouldTake: [
      "IT support technicians expanding into networking",
      "Students who want vendor-neutral grounding before or alongside Cisco tracks",
      "Junior network administrators",
    ],
    prerequisites: [
      "CompTIA A+ is recommended but not required",
      "9–12 months of general networking experience is suggested by CompTIA, though motivated beginners regularly succeed",
    ],
    skillsLearned: [
      "Network architecture and topologies",
      "Network operations and monitoring",
      "Network security fundamentals",
      "Troubleshooting methodology",
      "Industry standards, protocols, and services",
    ],
    careerOpportunities: [
      "Network Administrator",
      "Junior Network Engineer",
      "Systems Administrator",
      "IT Support Specialist (networking focus)",
    ],
    duration: "6–10 weeks (customizable)",
    learningOutcomes: [
      "Explain core networking concepts across any vendor's equipment",
      "Apply structured troubleshooting to connectivity issues",
      "Understand foundational network security controls",
    ],
    examInfo: {
      examCodes: ["N10-009"],
      deliveredBy: "Pearson VUE",
      format: "Single exam, multiple question types, proctored",
      note: "Confirm the current exam code and objectives on CompTIA's official site, as these are periodically updated.",
    },
    prepTips: [
      "Pair Network+ study with hands-on lab practice, not memorization alone",
      "Use it as a strong complement to (not replacement for) CCNA",
      "Focus on troubleshooting methodology — it's heavily tested",
    ],
    faqs: [
      {
        question: "Should I take Network+ before or after CCNA?",
        answer:
          "Either order works. Some students prefer Network+ first for vendor-neutral grounding; others go straight into CCNA. Our instructors can help you choose based on your goals.",
      },
    ],
    resources: [
      { label: "CompTIA — Official Site", href: "https://www.comptia.org/" },
      { label: "CompTIA Network+ Certification", href: "https://www.comptia.org/certifications/network" },
      { label: "Pearson VUE — Schedule an Exam", href: "https://home.pearsonvue.com/comptia" },
    ],
    salaryInsight:
      "Network+ holders often see improved eligibility for junior networking roles, with compensation comparable to other associate-level IT certifications in the local market.",
  },
];

export function getCertification(slug: string) {
  return certifications.find((c) => c.slug === slug);
}
