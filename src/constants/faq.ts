export type FaqCategory = 'General' | 'Enrollment' | 'Certification' | 'Services';

export interface FaqItem {
  category: FaqCategory;
  question: string;
  answer: string;
}

export const faqCategories: FaqCategory[] = [
  'General',
  'Enrollment',
  'Certification',
  'Services',
];

export const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'Where is Hyperion Technologies located?',
    answer: "We're based in Wiaboman, Pambros Station, Weija District, Accra, Ghana.",
  },
  {
    category: 'General',
    question: 'Do you offer both in-person and remote training?',
    answer:
      'Yes, we offer instructor-led in-person sessions and flexible remote/self-paced options depending on the program.',
  },
  {
    category: 'Enrollment',
    question: 'How do I enroll in a certification program?',
    answer:
      'Reach out through our contact page, WhatsApp, or by calling us directly, and our team will walk you through available intakes and pricing.',
  },
  {
    category: 'Enrollment',
    question: 'Do you offer payment plans?',
    answer:
      "Payment options vary by program, contact us directly to discuss what's available for your chosen course.",
  },
  {
    category: 'Certification',
    question: 'Do you administer the official certification exams?',
    answer:
      'No. Official Cisco and CompTIA exams are delivered through Pearson VUE testing centers. We prepare you for the exam; booking happens directly with Pearson VUE.',
  },
  {
    category: 'Certification',
    question: 'Which certification should I start with?',
    answer:
      'It depends on your background and goals. CompTIA A+ or Network+ suit complete beginners; CCNA is a strong direct entry point for networking specifically.',
  },
  {
    category: 'Services',
    question: 'Do you offer IT services beyond training?',
    answer:
      'Yes, networking, systems administration, graphics design, website and application development, printing, internet cafe, and mobile money services are all available.',
  },
];

export interface FaqGroup {
  category: FaqCategory;
  items: Array<FaqItem & { key: string }>;
}

export const groupedFaqs: FaqGroup[] = faqCategories.map((category) => ({
  category,
  items: faqs
    .filter((f) => f.category === category)
    .map((f, i) => ({ ...f, key: `${category}-${i}` })),
}));

/** The mockup opens the first General question by default. */
export const DEFAULT_OPEN_FAQ_KEY = 'General-0';
