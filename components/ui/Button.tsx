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
    "bg-primary text-primary-foreground shadow-lg shadow-primary-deep/20 hover:shadow-xl hover:shadow-primary-deep/30 hover:-translate-y-0.5",
  secondary:
    "bg-gold text-primary-deep shadow-lg shadow-gold/20 hover:shadow-xl hover:-translate-y-0.5",
  ghost: "bg-card/10 text-primary-foreground hover:bg-card/20",
  "outline-light":
    "border border-primary-foreground/30 text-primary-foreground hover:bg-card/10 hover:border-primary-foreground/60",
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
