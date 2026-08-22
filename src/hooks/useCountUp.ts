import { useEffect, useState } from 'react';

/**
 * Eased count-up used by the gold stats band. Runs once `active` flips true.
 */
export function useCountUp(active: boolean, durationMs: number): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [active, durationMs]);

  return progress;
}
