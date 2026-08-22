import type { ReactNode } from 'react';
import { brand, fonts, layout } from '../../constants/theme';

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
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: compact ? `100px ${layout.gutter}px 64px` : `140px ${layout.gutter}px`,
        minHeight: compact ? 320 : 380,
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        background: brand.navy,
      }}
    >
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <>
          <div
            className="hy-drift-a"
            style={{
              position: 'absolute',
              top: -80,
              left: -60,
              width: 340,
              height: 340,
              borderRadius: 999,
              background: 'radial-gradient(circle, oklch(0.5 0.2 264 / 0.55), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            className="hy-drift-b"
            style={{
              position: 'absolute',
              bottom: -100,
              right: -40,
              width: 380,
              height: 380,
              borderRadius: 999,
              background: 'radial-gradient(circle, oklch(0.79 0.135 84 / 0.35), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            className="hy-pulse"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(oklch(1 0 0 / 0.12) 1px, transparent 1px)',
              backgroundSize: '34px 34px',
              pointerEvents: 'none',
            }}
          />
        </>
      )}

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, transparent, ${brand.navy} 85%)`,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: align === 'center' ? undefined : 1000,
          margin: align === 'center' ? undefined : '0 auto',
        }}
      >
        {children}
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: brand.goldLight,
          }}
        >
          {eyebrow}
        </span>
        <h1
          className="hy-h1"
          style={{
            margin: '16px 0 0',
            fontFamily: fonts.display,
            fontWeight: 800,
            fontSize: 40,
            lineHeight: 1.15,
            color: '#fff',
          }}
        >
          {title}
        </h1>
        {description ? (
          <p
            style={{
              margin: align === 'center' ? '16px auto 0' : '16px 0 0',
              maxWidth: 640,
              color: 'oklch(1 0 0 / 0.75)',
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
