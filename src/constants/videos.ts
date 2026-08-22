export interface TrainingVideo {
  title: string;
  category: string;
  duration: string;
  description: string;
}

/**
 * The mockup used a single YouTube still for every card (no per-video source
 * was supplied), so the same thumbnail backs each tile here too.
 */
export const VIDEO_THUMBNAIL_URL =
  'https://img.youtube.com/vi/88-FENio9Yw/maxresdefault.jpg';

export const videos: TrainingVideo[] = [
  {
    title: 'Introduction to Cisco Networking',
    category: 'Cisco Networking',
    duration: '12:30',
    description: 'A beginner-friendly walkthrough of core Cisco networking concepts.',
  },
  {
    title: 'Routing & Switching Fundamentals',
    category: 'Routing & Switching',
    duration: '18:45',
    description: 'How routers and switches move traffic across a network.',
  },
  {
    title: 'Structured Network Cabling Basics',
    category: 'Network Cabling',
    duration: '9:15',
    description: 'Cable types, termination standards, and best practices.',
  },
  {
    title: 'IP Addressing & Subnetting Explained',
    category: 'IP Addressing',
    duration: '22:10',
    description: 'A practical approach to subnetting without the guesswork.',
  },
  {
    title: 'VLAN Configuration Walkthrough',
    category: 'VLAN Configuration',
    duration: '15:00',
    description: 'Segmenting a network with VLANs, step by step.',
  },
  {
    title: 'Cisco Packet Tracer for Beginners',
    category: 'Packet Tracer',
    duration: '20:05',
    description: 'Getting comfortable simulating networks before touching real gear.',
  },
  {
    title: 'Network Security Essentials',
    category: 'Network Security',
    duration: '16:40',
    description: 'Core principles for protecting network infrastructure.',
  },
  {
    title: 'Data Center Technologies Overview',
    category: 'Data Center',
    duration: '14:20',
    description: 'How modern data centers are structured and operated.',
  },
  {
    title: 'Wireless Networking Fundamentals',
    category: 'Wireless Networking',
    duration: '13:55',
    description: 'Wireless standards, design, and common pitfalls.',
  },
  {
    title: 'Systematic Network Troubleshooting',
    category: 'Troubleshooting',
    duration: '19:30',
    description: 'A repeatable method for diagnosing network issues.',
  },
  {
    title: 'CompTIA Network+ Study Roadmap',
    category: 'CompTIA Network+',
    duration: '11:05',
    description: 'How to structure your Network+ preparation.',
  },
  {
    title: 'Computer Hardware Fundamentals',
    category: 'Computer Hardware',
    duration: '17:15',
    description: 'Core components every technician should know cold.',
  },
];

/** Home page shows the first three. */
export const featuredVideos = videos.slice(0, 3);
