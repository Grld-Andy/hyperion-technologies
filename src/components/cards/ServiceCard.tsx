import type { Service } from '../../constants/services';
import { CheckList } from '../ui/CheckList';
import { IconTile } from '../ui/IconTile';

interface ServiceCardProps {
  service: Service;
  /** `compact` is the home preview; `detailed` is the services page. */
  variant?: 'compact' | 'detailed';
}

export function ServiceCard({ service, variant = 'compact' }: ServiceCardProps) {
  const detailed = variant === 'detailed';

  return (
    <div
      className={`hy-card-lift-blue rounded-2xl border border-line bg-card ${detailed ? 'p-7' : 'p-6.5'}`}
    >
      {detailed ? (
        <div className="flex items-center gap-3.5">
          <IconTile icon={service.icon} />
          <h3 className="m-0 font-display text-[17px] font-bold">{service.name}</h3>
        </div>
      ) : (
        <>
          <IconTile icon={service.icon} />
          <h3 className="m-0 mt-4.5 font-display text-base font-bold">{service.name}</h3>
        </>
      )}

      <p
        className={`m-0 text-sm text-ink-muted ${detailed ? 'mt-4 leading-[1.6]' : 'mt-2 leading-[1.55]'}`}
      >
        {detailed ? service.description : service.summary}
      </p>

      {detailed ? <CheckList items={service.highlights} fontSize={13} muted={false} /> : null}
    </div>
  );
}
