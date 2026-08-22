export const routes = {
  home: '/',
  about: '/about',
  founder: '/founder',
  services: '/services',
  certifications: '/certifications',
  certificationDetail: (slug: string) => `/certifications/${slug}`,
  ciscoTraining: '/cisco-training',
  comptiaTraining: '/comptia-training',
  gallery: '/gallery',
  videos: '/videos',
  blog: '/blog',
  faq: '/faq',
  contact: '/contact',
} as const;

export interface NavChild {
  label: string;
  to: string;
}

export interface NavItem {
  key: string;
  label: string;
  /** Top-level destination; omitted for pure dropdown triggers. */
  to?: string;
  children?: NavChild[];
  /** Extra routes that should light this item up as active. */
  matches?: string[];
}

export const navItems: NavItem[] = [
  { key: 'home', label: 'Home', to: routes.home },
  {
    key: 'about',
    label: 'About',
    matches: [routes.about, routes.founder],
    children: [
      { label: 'About Us', to: routes.about },
      { label: 'The Team', to: routes.founder },
    ],
  },
  {
    key: 'programs',
    label: 'Programs',
    matches: [
      routes.services,
      routes.certifications,
      routes.ciscoTraining,
      routes.comptiaTraining,
    ],
    children: [
      { label: 'Services', to: routes.services },
      { label: 'All Certifications', to: routes.certifications },
      { label: 'Cisco Training', to: routes.ciscoTraining },
      { label: 'CompTIA Training', to: routes.comptiaTraining },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    matches: [routes.gallery, routes.videos, routes.blog, routes.faq],
    children: [
      { label: 'Gallery', to: routes.gallery },
      { label: 'Videos', to: routes.videos },
      { label: 'Blog', to: routes.blog },
      { label: 'FAQ', to: routes.faq },
    ],
  },
  { key: 'contact', label: 'Contact', to: routes.contact },
];

export interface FooterLink {
  label: string;
  to: string;
}

export const footerCompanyLinks: FooterLink[] = [
  { label: 'About Us', to: routes.about },
  { label: 'The Founder', to: routes.founder },
  { label: 'Blog', to: routes.blog },
  { label: 'Contact', to: routes.contact },
];
