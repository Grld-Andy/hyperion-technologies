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
      className="flex shrink-0 items-center justify-center rounded-[10px] bg-navy text-gold-light"
      style={{ height: size, width: size }}
    >
      <Icon size={iconSize} aria-hidden />
    </span>
  );
}
