import type { WhyChooseUsItem } from '../../constants/values';
import { IconTile } from '../ui/IconTile';

export function FeatureCard({ item }: { item: WhyChooseUsItem }) {
  return (
    <div className="hy-card-lift relative overflow-hidden rounded-2xl border border-line bg-card p-7">
      <div className="absolute inset-x-0 top-0 h-0.75 bg-linear-to-r from-blue to-gold" />
      <IconTile icon={item.icon} />
      <h3 className="m-0 mt-4.5 font-display text-base font-bold">{item.title}</h3>
      <p className="m-0 mt-2.5 text-sm leading-[1.6] text-ink-muted">{item.description}</p>
    </div>
  );
}
