import { fonts, shadows, t } from '../../constants/theme';
import type { ValueCardContent } from '../../constants/values';
import { IconTile } from '../ui/IconTile';

/** Mission / vision / values tile on the About screen. */
export function ValueCard({ value }: { value: ValueCardContent }) {
  return (
    <div
      className="hy-lift-sm"
      style={{
        background: t.cardBg,
        borderRadius: 16,
        padding: 30,
        boxShadow: shadows.cardSoft,
      }}
    >
      <IconTile icon={value.icon} size={40} iconSize={19} />
      <h3 style={{ margin: '16px 0 0', fontFamily: fonts.display, fontWeight: 700, fontSize: 17 }}>
        {value.title}
      </h3>
      <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.65, color: t.textMuted }}>
        {value.text}
      </p>
    </div>
  );
}
