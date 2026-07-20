import type { LucideIcon } from "lucide-react";
import {
  Network,
  ServerCog,
  PenTool,
  Zap,
  Globe,
  AppWindow,
  Printer,
  Wifi,
  Smartphone,
  GraduationCap,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    slug: "computer-networking",
    name: "Computer Networking",
    icon: Network,
    summary: "Design, installation, and support for reliable business and home networks.",
    description:
      "From structured cabling to router and switch configuration, we design networks that stay online. We plan for growth from day one so your network doesn't need to be rebuilt as your team scales.",
    highlights: ["LAN/WAN design & installation", "Router & switch configuration", "Network troubleshooting & support"],
  },
  {
    slug: "systems-administration",
    name: "Systems Administration",
    icon: ServerCog,
    summary: "Ongoing management of servers, workstations, and IT infrastructure.",
    description:
      "We keep the systems behind your business running: user accounts, backups, updates, and monitoring, handled proactively so small issues don't become outages.",
    highlights: ["Server setup & maintenance", "Backup & recovery planning", "User & access management"],
  },
  {
    slug: "graphics-design",
    name: "Graphics Design",
    icon: PenTool,
    summary: "Brand identity, print, and digital design that looks professional everywhere.",
    description:
      "Logos, business cards, banners, and digital assets designed to make your business look as credible as the work you do.",
    highlights: ["Logo & brand identity", "Print & signage design", "Digital & social media graphics"],
  },
  {
    slug: "electrical-engineering",
    name: "Electrical Engineering",
    icon: Zap,
    summary: "Practical electrical services supporting IT and facility infrastructure.",
    description:
      "Safe, code-aware electrical work to support server rooms, workstations, and office infrastructure.",
    highlights: ["Power & wiring assessments", "Server room electrical setup", "Maintenance & safety checks"],
  },
  {
    slug: "website-development",
    name: "Website Development",
    icon: Globe,
    summary: "Fast, modern, mobile-friendly websites built to represent your business well.",
    description:
      "We build responsive, SEO-ready websites — from simple business sites to more complex web applications — using modern, maintainable technology.",
    highlights: ["Business & portfolio websites", "SEO-friendly builds", "Ongoing maintenance & support"],
  },
  {
    slug: "application-development",
    name: "Application Development",
    icon: AppWindow,
    summary: "Custom software and mobile applications built around your workflow.",
    description:
      "We translate real operational needs into working software — internal tools, customer-facing apps, and everything in between.",
    highlights: ["Custom business applications", "Mobile app development", "Ongoing support & updates"],
  },
  {
    slug: "printing-services",
    name: "Printing Services",
    icon: Printer,
    summary: "Reliable printing for documents, certificates, and marketing materials.",
    description:
      "Quality printing services for students, businesses, and organizations — from everyday documents to certificates and marketing collateral.",
    highlights: ["Document & certificate printing", "Marketing materials", "Bulk printing options"],
  },
  {
    slug: "internet-cafe",
    name: "Internet Cafe",
    icon: Wifi,
    summary: "Affordable, reliable internet access and computer services for the community.",
    description:
      "A comfortable, well-equipped space for browsing, printing, applications, and digital services for the local community.",
    highlights: ["High-speed internet access", "Printing & scanning", "Online application support"],
  },
  {
    slug: "mobile-money-transfer",
    name: "Mobile Money Transfer",
    icon: Smartphone,
    summary: "Convenient, secure mobile money services for the local community.",
    description:
      "Fast, secure mobile money deposits and transfers, offered as a convenient community service alongside our IT operations.",
    highlights: ["Deposits & withdrawals", "Secure transactions", "Friendly, local service"],
  },
  {
    slug: "professional-it-training",
    name: "Professional IT Training",
    icon: GraduationCap,
    summary: "Certification-track and general IT training for individuals and organizations.",
    description:
      "Beyond Cisco and CompTIA certification tracks, we offer general IT literacy and professional development training tailored to schools, businesses, and organizations.",
    highlights: ["Certification training", "Corporate/organizational training", "Custom curriculum for schools"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
