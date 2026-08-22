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
