import { Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Certification } from '../../constants/certifications';
import { routes } from '../../constants/navigation';

interface CertCardProps {
  cert: Certification;
  /** `carousel` is the fixed-width home variant; `grid` is the list page. */
  variant?: 'carousel' | 'grid';
}

export function CertCard({ cert, variant = 'grid' }: CertCardProps) {
  const isCisco = cert.vendor === 'Cisco';
  const isCarousel = variant === 'carousel';

  return (
    <Link
      to={routes.certificationDetail(cert.slug)}
      className={`hy-card-lift-navy relative flex flex-col overflow-hidden rounded-[18px] border-0 bg-navy text-left text-white ${
        isCarousel
          ? 'h-[260px] flex-[0_0_250px] snap-start p-5.5'
          : 'h-[270px] max-w-[320px] flex-[1_1_260px] p-6'
      }`}
    >
      <div
        className={`absolute -right-[30px] -bottom-[30px] rounded-full ${isCarousel ? 'h-40 w-40' : 'h-[170px] w-[170px]'} ${
          isCisco
            ? 'bg-[radial-gradient(circle,oklch(0.5_0.2_264/0.35),transparent_70%)]'
            : 'bg-[radial-gradient(circle,oklch(0.79_0.135_84/0.35),transparent_70%)]'
        }`}
      />

      <span
        className={`relative inline-flex self-start items-center rounded-full border px-2.25 py-1 font-mono text-[8px] font-semibold tracking-[0.06em] whitespace-nowrap text-white uppercase backdrop-blur-[10px] ${
          isCisco
            ? 'border-[oklch(0.65_0.18_264/0.5)] bg-[oklch(0.5_0.2_264/0.28)]'
            : 'border-[oklch(0.85_0.1_88/0.6)] bg-[oklch(0.79_0.135_84/0.28)]'
        }`}
      >
        Certification
      </span>

      <span className="relative mt-6 font-mono text-[11px] tracking-[0.08em] text-gold-light uppercase">
        {cert.level}
      </span>

      <span
        className={`relative mt-2 font-display font-extrabold leading-[1.25] text-white ${isCarousel ? 'text-[20px]' : 'text-[21px]'}`}
      >
        {cert.shortName}
      </span>

      {!isCarousel ? (
        <span className="relative mt-2 text-[13px] leading-[1.5] text-white/65">
          {cert.tagline}
        </span>
      ) : null}

      <span className="relative mt-auto flex items-center gap-1.5 pt-3.5 text-xs text-white/60">
        <Clock size={13} aria-hidden />
        {cert.duration}
      </span>
    </Link>
  );
}
