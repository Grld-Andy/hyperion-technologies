import { useEffect, useRef, useState } from 'react';

export interface ScrollRevealOptions {
  threshold?: number;
  /** Reveal immediately without waiting for intersection (used by the hero). */
  immediate?: boolean;
  /** Delay, in ms, before an `immediate` reveal fires. */
  delay?: number;
}

/**
 * Mirrors the mockup's `data-reveal-key` IntersectionObserver: an element
 * fades/slides in once, the first time it enters the viewport.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  immediate = false,
  delay = 60,
}: ScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (immediate) {
      const timer = window.setTimeout(() => setRevealed(true), delay);
      return () => window.clearTimeout(timer);
    }

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate, delay, threshold]);

  return { ref, revealed };
}
