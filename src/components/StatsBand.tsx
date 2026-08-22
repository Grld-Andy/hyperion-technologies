import { stats, STATS_COUNT_UP_MS } from '../constants/stats';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function StatsBand() {
  const { ref, revealed } = useScrollReveal<HTMLElement>({ threshold: 0.4 });
  const progress = useCountUp(revealed, STATS_COUNT_UP_MS);

  return (
    <section ref={ref} className="bg-gold px-8 py-5.5">
      <div className="hy-grid-4 mx-auto grid max-w-7xl grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="m-0 font-display text-[30px] font-extrabold text-navy-deep">
              {Math.round(stat.target * progress)}
              {stat.suffix}
            </p>
            <p className="mt-1 text-xs font-semibold tracking-[0.06em] text-navy-deep/75 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
