export type GalleryCategory =
  | 'Cisco Training'
  | 'CompTIA Training'
  | 'Networking Labs'
  | 'Graduation'
  | 'Practical Sessions'
  | 'Events';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
}

export const galleryFilters: Array<'All' | GalleryCategory> = [
  'All',
  'Cisco Training',
  'CompTIA Training',
  'Networking Labs',
  'Graduation',
  'Practical Sessions',
  'Events',
];

/** One representative stock photo per category, reused across that category's tiles. */
export const galleryCategoryImages: Record<GalleryCategory, string> = {
  'Cisco Training':
    'https://images.unsplash.com/photo-1550439062-609e1531270e?w=800&q=80&auto=format&fit=crop',
  'CompTIA Training':
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
  'Networking Labs':
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format&fit=crop',
  Graduation:
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop',
  'Practical Sessions':
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop',
  Events:
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop',
};

export const gallery: GalleryItem[] = [
  { id: 'g1', category: 'Networking Labs', title: 'Structured cabling lab session' },
  { id: 'g2', category: 'Cisco Training', title: 'Students configuring Cisco routers' },
  { id: 'g3', category: 'CompTIA Training', title: 'Hardware troubleshooting workshop' },
  { id: 'g4', category: 'Networking Labs', title: 'Server room walkthrough' },
  { id: 'g5', category: 'Graduation', title: 'Certification cohort graduation' },
  { id: 'g6', category: 'Practical Sessions', title: 'Instructor-led switching lab' },
  { id: 'g7', category: 'Events', title: 'Open day at Hyperion Technologies' },
  { id: 'g8', category: 'Cisco Training', title: 'Packet Tracer simulation class' },
  { id: 'g9', category: 'Networking Labs', title: 'Team troubleshooting exercise' },
  { id: 'g10', category: 'CompTIA Training', title: 'PC hardware build session' },
  { id: 'g11', category: 'Practical Sessions', title: 'VLAN configuration practicum' },
  { id: 'g12', category: 'Graduation', title: 'Certificate presentation ceremony' },
];
