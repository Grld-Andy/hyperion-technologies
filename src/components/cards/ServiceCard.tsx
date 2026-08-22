import type { Service } from '../../constants/services';
import { fonts, t } from '../../constants/theme';
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
      className="hy-card-lift-blue"
      style={{
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        padding: detailed ? 28 : 26,
        background: t.cardBg,
      }}
    >
      {detailed ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <IconTile icon={service.icon} />
          <h3 style={{ margin: 0, fontFamily: fonts.display, fontWeight: 700, fontSize: 17 }}>
            {service.name}
          </h3>
        </div>
      ) : (
        <>
          <IconTile icon={service.icon} />
          <h3
            style={{ margin: '18px 0 0', fontFamily: fonts.display, fontWeight: 700, fontSize: 16 }}
          >
            {service.name}
          </h3>
        </>
      )}

      <p
        style={{
          margin: detailed ? '16px 0 0' : '8px 0 0',
          fontSize: 14,
          lineHeight: detailed ? 1.6 : 1.55,
          color: t.textMuted,
        }}
      >
        {detailed ? service.description : service.summary}
      </p>

      {detailed ? <CheckList items={service.highlights} fontSize={13} muted={false} /> : null}
    </div>
  );
}
