import Link from "next/link";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
  target?: string;
};

type ButtonAsButton = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: never;
};

type Props = ButtonAsLink | ButtonAsButton;

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-royal-600 to-royal-500 text-white shadow-lg shadow-royal-900/20 hover:shadow-xl hover:shadow-royal-900/30 hover:-translate-y-0.5",
  secondary:
    "bg-gradient-to-r from-gold-500 to-gold-400 text-royal-950 shadow-lg shadow-gold-500/20 hover:shadow-xl hover:-translate-y-0.5",
  ghost: "bg-white/10 text-white hover:bg-white/20",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

const sizes: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  href,
  onClick,
  type = "button",
  target,
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} target={target}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
