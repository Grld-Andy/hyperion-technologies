import type { IconName } from './icons';

export interface ValueCardContent {
  icon: IconName;
  title: string;
  text: string;
}

/** Mission / vision / values — About screen. */
export const values: ValueCardContent[] = [
  {
    icon: 'target',
    title: 'Our Mission',
    text: 'To provide innovative Information Technology solutions and world-class professional IT certification training that empowers individuals, businesses, schools, and organizations through technology.',
  },
  {
    icon: 'eye',
    title: 'Our Vision',
    text: 'To be a leading IT training and services partner in Ghana, recognized for the depth of our technical instruction and the reliability of our IT services.',
  },
  {
    icon: 'heart-handshake',
    title: 'Our Values',
    text: 'Practical competence over theory alone, honest guidance for every student, and consistent, dependable service for every client.',
  },
];

export interface WhyChooseUsItem {
  icon: IconName;
  title: string;
  description: string;
}

/** "Why Hyperion" grid — Home screen. */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    icon: 'graduation-cap',
    title: 'Curriculum-Aligned Instruction',
    description:
      "Our founder's experience spans the Ghana Education Curriculum, British Curriculum, IGCSE, AS, and A Level, so training is pitched precisely to how you learn best.",
  },
  {
    icon: 'badge-check',
    title: 'Multi-Certification Expertise',
    description:
      'CCNA, CCNP, CCIE, CompTIA A+, and Network+ under one roof, taught by an accredited Cisco Networking Academy instructor.',
  },
  {
    icon: 'wrench',
    title: 'Hands-On, Not Just Theory',
    description:
      'Every program is grounded in practical labs: real configuration, real troubleshooting, real confidence before exam day.',
  },
  {
    icon: 'users',
    title: 'One Partner, Full IT Support',
    description:
      'Beyond training, we support your business with networking, systems administration, design, and development services.',
  },
];
