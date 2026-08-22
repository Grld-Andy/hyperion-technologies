export interface Stat {
  label: string;
  target: number;
  suffix: string;
}

export const stats: Stat[] = [
  { label: 'Students Trained', target: 500, suffix: '+' },
  { label: 'Years Teaching Experience', target: 10, suffix: '+' },
  { label: 'Certification Tracks', target: 5, suffix: '' },
  { label: 'Curricula Taught', target: 4, suffix: '' },
];

/** Count-up duration used by the mockup's stats band. */
export const STATS_COUNT_UP_MS = 1400;
