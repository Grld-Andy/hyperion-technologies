import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { vendorAccent, type Certification } from '../../constants/certifications';
import { routes } from '../../constants/navigation';
import { brand, fonts } from '../../constants/theme';

interface CertCardProps {
  cert: Certification;
  /** `carousel` is the fixed-width home variant; `grid` is the list page. */
  variant?: 'carousel' | 'grid';
}

export function CertCard({ cert, variant = 'grid' }: CertCardProps) {
  const accent = vendorAccent(cert.vendor);
  const isCarousel = variant === 'carousel';

  return (
    <Link
      to={routes.certificationDetail(cert.slug)}
      className="hy-card-lift-navy"
      style={{
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'left',
        background: brand.navy,
        border: 'none',
        borderRadius: 18,
        padding: isCarousel ? 22 : 24,
        cursor: 'pointer',
        flex: isCarousel ? '0 0 250px' : '1 1 260px',
        maxWidth: isCarousel ? undefined : 320,
        scrollSnapAlign: isCarousel ? 'start' : undefined,
        height: isCarousel ? 260 : 270,
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: -30,
          bottom: -30,
          width: isCarousel ? 160 : 170,
          height: isCarousel ? 160 : 170,
          borderRadius: 999,
          background: `radial-gradient(circle, ${accent.accentSoft}, transparent 70%)`,
        }}
      />

      <span
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignSelf: 'flex-start',
          alignItems: 'center',
          padding: '4px 9px',
          borderRadius: 999,
          background: accent.glassBg,
          border: `1px solid ${accent.glassBorder}`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          color: '#fff',
          fontFamily: fonts.mono,
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        Certification
      </span>

      <span
        style={{
          position: 'relative',
          marginTop: 24,
          fontFamily: fonts.mono,
          fontSize: 11,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: brand.goldLight,
        }}
      >
        {cert.level}
      </span>

      <span
        style={{
          position: 'relative',
          marginTop: 8,
          fontFamily: fonts.display,
          fontWeight: 800,
          fontSize: isCarousel ? 20 : 21,
          lineHeight: 1.25,
          color: '#fff',
        }}
      >
        {cert.shortName}
      </span>

      {!isCarousel ? (
        <span
          style={{
            position: 'relative',
            marginTop: 8,
            fontSize: 13,
            lineHeight: 1.5,
            color: 'oklch(1 0 0 / 0.65)',
          }}
        >
          {cert.tagline}
        </span>
      ) : null}

      <span
        style={{
          position: 'relative',
          marginTop: 'auto',
          paddingTop: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          color: 'oklch(1 0 0 / 0.6)',
        }}
      >
        <Clock size={13} aria-hidden />
        {cert.duration}
      </span>
    </Link>
  );
}
