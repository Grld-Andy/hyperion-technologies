import { stats, STATS_COUNT_UP_MS } from '../constants/stats';
import { brand, fonts, layout } from '../constants/theme';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

/** Gold band under the hero; the numbers count up once the band scrolls in. */
export function StatsBand() {
  const { ref, revealed } = useScrollReveal<HTMLElement>({ threshold: 0.4 });
  const progress = useCountUp(revealed, STATS_COUNT_UP_MS);

  return (
    <section
      ref={ref}
      style={{ background: brand.gold, padding: `22px ${layout.gutter}px` }}
    >
      <div
        className="hy-grid-4"
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
        }}
      >
        {stats.map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <p
              style={{
                margin: 0,
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: 30,
                color: brand.navyDeep,
              }}
            >
              {Math.round(stat.target * progress)}
              {stat.suffix}
            </p>
            <p
              style={{
                margin: '4px 0 0',
                fontSize: 12,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'oklch(0.24 0.06 265 / 0.75)',
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
