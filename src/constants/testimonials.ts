export interface Testimonial {
  name: string;
  role: string;
  program: string;
  /** Drives which avatar endpoint the mockup requested. */
  gender: 'boy' | 'girl';
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Kwame Asante',
    role: 'CCNA Graduate',
    program: 'Cisco CCNA',
    gender: 'boy',
    quote:
      'The hands-on labs at Hyperion made routing and switching finally click for me. I went in knowing almost nothing about networking and came out able to configure a small business network from scratch.',
  },
  {
    name: 'Abena Owusu',
    role: 'CompTIA A+ Graduate',
    program: 'CompTIA A+',
    gender: 'girl',
    quote:
      'I had zero IT background before Hyperion. Within four months of finishing my A+ training, I landed my first help desk role. The instructors were patient and explained everything in plain terms.',
  },
  {
    name: 'Kojo Mensah',
    role: 'CCNP Candidate',
    program: 'Cisco CCNP',
    gender: 'boy',
    quote:
      'What sets Hyperion apart is how they explain enterprise-level concepts in a way that actually sticks. I am now confident troubleshooting issues I used to avoid entirely.',
  },
  {
    name: 'Efua Boateng',
    role: 'CompTIA Network+ Graduate',
    program: 'CompTIA Network+',
    gender: 'girl',
    quote:
      'Coming from a non-technical background, I appreciated how the curriculum moved at a pace I could keep up with while still being thorough. I now manage the network for a small logistics company in Accra.',
  },
  {
    name: 'Yaw Darko',
    role: 'CCIE Candidate',
    program: 'Cisco CCIE',
    gender: 'boy',
    quote:
      'Hyperion gave me the lab time and mentorship I could not find anywhere else in Accra. The instructors have real field experience, not just textbook knowledge, and it shows in how they teach.',
  },
];

export function testimonialAvatarUrl(t: Testimonial): string {
  const firstName = t.name.split(' ')[0];
  return `https://avatarapi.runflare.run/public/${t.gender}?username=${encodeURIComponent(firstName)}`;
}

/** Autoplay interval used by the mockup's carousel. */
export const TESTIMONIAL_AUTOPLAY_MS = 7000;
