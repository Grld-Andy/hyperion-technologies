import { brand, fonts, t } from '../../constants/theme';
import type { WhyChooseUsItem } from '../../constants/values';
import { IconTile } from '../ui/IconTile';

/** "Why Hyperion" card: gradient hairline on top, lifts on hover. */
export function FeatureCard({ item }: { item: WhyChooseUsItem }) {
  return (
    <div
      className="hy-card-lift"
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        padding: 28,
        background: t.cardBg,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${brand.blue}, ${brand.gold})`,
        }}
      />
      <IconTile icon={item.icon} />
      <h3 style={{ margin: '18px 0 0', fontFamily: fonts.display, fontWeight: 700, fontSize: 16 }}>
        {item.title}
      </h3>
      <p style={{ margin: '10px 0 0', fontSize: 14, lineHeight: 1.6, color: t.textMuted }}>
        {item.description}
      </p>
    </div>
  );
}
