import {
  AppWindow,
  BadgeCheck,
  Eye,
  Globe,
  GraduationCap,
  HeartHandshake,
  Network,
  PenTool,
  Printer,
  ServerCog,
  Smartphone,
  Target,
  Users,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * The mockup referenced icons by their kebab-case `data-lucide` name.
 * This map keeps the data files declarative while binding to real components.
 */
export const iconMap = {
  'app-window': AppWindow,
  'badge-check': BadgeCheck,
  eye: Eye,
  globe: Globe,
  'graduation-cap': GraduationCap,
  'heart-handshake': HeartHandshake,
  network: Network,
  'pen-tool': PenTool,
  printer: Printer,
  'server-cog': ServerCog,
  smartphone: Smartphone,
  target: Target,
  users: Users,
  wifi: Wifi,
  wrench: Wrench,
  zap: Zap,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;
