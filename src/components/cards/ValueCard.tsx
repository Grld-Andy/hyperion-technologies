import type { ValueCardContent } from '../../constants/values';
import { IconTile } from '../ui/IconTile';

export function ValueCard({ value }: { value: ValueCardContent }) {
  return (
    <div className="hy-lift-sm rounded-2xl bg-card p-7.5 shadow-card-soft">
      <IconTile icon={value.icon} size={40} iconSize={19} />
      <h3 className="m-0 mt-4 font-display text-[17px] font-bold">{value.title}</h3>
      <p className="m-0 mt-3 text-sm leading-[1.65] text-ink-muted">{value.text}</p>
    </div>
  );
}
