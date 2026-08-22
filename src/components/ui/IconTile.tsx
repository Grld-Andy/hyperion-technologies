import { brand } from '../../constants/theme';
import { iconMap, type IconName } from '../../constants/icons';

interface IconTileProps {
  icon: IconName;
  size?: number;
  iconSize?: number;
}

/** Navy rounded square holding a gold lucide glyph — used across every card grid. */
export function IconTile({ icon, size = 44, iconSize = 21 }: IconTileProps) {
  const Icon = iconMap[icon];
  return (
    <span
      style={{
        display: 'flex',
        height: size,
        width: size,
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        background: brand.navy,
        color: brand.goldLight,
      }}
    >
      <Icon size={iconSize} aria-hidden />
    </span>
  );
}
