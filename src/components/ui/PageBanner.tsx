import type { ReactNode } from 'react';

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  /**
   * Optional background photograph. The mockup left every screen banner as an
   * empty image slot, so the default is the navy + drifting-blob treatment
   * borrowed from the hero.
   */
  image?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
  compact?: boolean;
}

export function PageBanner({
  eyebrow,
  title,
  description,
  image,
  align = 'center',
  children,
  compact = false,
}: PageBannerProps) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-navy px-8 ${
        compact ? 'pt-[100px] pb-16 min-h-80' : 'py-[140px] min-h-[380px]'
      } ${align === 'center' ? 'justify-center text-center' : 'justify-start text-left'}`}
    >
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <>
          <div className="hy-drift-a pointer-events-none absolute top-[-80px] left-[-60px] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,oklch(0.5_0.2_264/0.55),transparent_70%)]" />
          <div className="hy-drift-b pointer-events-none absolute right-[-40px] bottom-[-100px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,oklch(0.79_0.135_84/0.35),transparent_70%)]" />
          <div className="hy-pulse pointer-events-none absolute inset-0 bg-[radial-gradient(oklch(1_0_0/0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
        </>
      )}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--navy)_85%)]" />

      <div className={`relative z-[1] w-full ${align === 'center' ? '' : 'mx-auto max-w-[1000px]'}`}>
        {children}
        <span className="font-mono text-[11px] tracking-[0.14em] text-gold-light uppercase">
          {eyebrow}
        </span>
        <h1 className="hy-h1 mx-0 mt-4 mb-0 font-display text-[40px] font-extrabold leading-[1.15] text-white">
          {title}
        </h1>
        {description ? (
          <p
            className={`mt-4 mb-0 max-w-[640px] text-[15px] leading-[1.6] text-white/75 ${
              align === 'center' ? 'mx-auto' : 'mx-0'
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
