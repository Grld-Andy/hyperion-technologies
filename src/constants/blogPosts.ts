export interface BlogPost {
  category: string;
  /** ISO date string. */
  date: string;
  title: string;
  excerpt: string;
  imgSrc: string;
}

const blogImageUrls = [
  'https://content.kaspersky-labs.com/fm/press-releases/3b/3b8b535ce01b35a7b7997396aceb4f1e/source/what-is-cybersecurity.webp',
  'https://content.kaspersky-labs.com/fm/press-releases/d4/d4cf821245050f9a70daf533e71905e2/source/six-domains-of-cybersecurity.webp',
  'https://content.kaspersky-labs.com/fm/press-releases/55/55d03b92edd893acbe8dfd5a9a38eda1/source/how-cyber-threats-are-evolving.webp',
];

export const blogPosts: BlogPost[] = [
  {
    category: 'Study Tips',
    date: '2026-03-10',
    title: 'Five Habits That Make Networking Labs Click',
    excerpt:
      'Hands-on lab time is where CCNA concepts actually stick. Here are five habits that help our students most.',
    imgSrc: blogImageUrls[0],
  },
  {
    category: 'Career Guidance',
    date: '2026-02-03',
    title: 'Choosing Your First IT Certification: CompTIA vs. Cisco',
    excerpt:
      'A practical guide to deciding between CompTIA A+, Network+, and Cisco CCNA as your entry point into IT.',
    imgSrc: blogImageUrls[1],
  },
  {
    category: 'Announcements',
    date: '2026-01-15',
    title: 'Welcome to Hyperion Technologies',
    excerpt:
      'An introduction to our mission, our training programs, and what to expect from this blog.',
    imgSrc: blogImageUrls[2],
  },
];

/** Renders `2026-03-10` as `10 Mar, 2026`, matching the mockup. */
export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d
    .toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
    .replace(/^(\d+) (\w+) (\d+)$/, '$1 $2, $3');
}
