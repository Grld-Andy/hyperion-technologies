import { useCallback, useEffect, useRef, useState } from 'react';
import {
  TESTIMONIAL_AUTOPLAY_MS,
  testimonialAvatarUrl,
  testimonials,
} from '../constants/testimonials';

type Phase = 'enter' | 'exit' | 'snap';

const EXIT_MS = 280;
const SNAP_MS = 30;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('enter');
  const [direction, setDirection] = useState(1);

  const fadeTimer = useRef<number | undefined>(undefined);
  const snapTimer = useRef<number | undefined>(undefined);
  const autoplayTimer = useRef<number | undefined>(undefined);
  const indexRef = useRef(index);
  indexRef.current = index;

  const switchTo = useCallback((next: number, dir: number) => {
    if (next === indexRef.current) return;
    window.clearTimeout(fadeTimer.current);
    window.clearTimeout(snapTimer.current);
    setDirection(dir);
    setPhase('exit');
    fadeTimer.current = window.setTimeout(() => {
      setIndex(next);
      setPhase('snap');
      snapTimer.current = window.setTimeout(() => setPhase('enter'), SNAP_MS);
    }, EXIT_MS);
  }, []);

  const startAutoplay = useCallback(() => {
    window.clearInterval(autoplayTimer.current);
    autoplayTimer.current = window.setInterval(() => {
      switchTo((indexRef.current + 1) % testimonials.length, 1);
    }, TESTIMONIAL_AUTOPLAY_MS);
  }, [switchTo]);

  useEffect(() => {
    startAutoplay();
    return () => {
      window.clearInterval(autoplayTimer.current);
      window.clearTimeout(fadeTimer.current);
      window.clearTimeout(snapTimer.current);
    };
  }, [startAutoplay]);

  const goTo = (i: number) => {
    const n = testimonials.length;
    const forwardDist = (i - index + n) % n;
    switchTo(i, forwardDist <= n / 2 ? 1 : -1);
    startAutoplay();
  };

  const active = testimonials[index];
  const quoteOpacity = phase === 'enter' ? 1 : 0;
  const quoteX =
    phase === 'exit' ? direction * -30 : phase === 'snap' ? direction * 30 : 0;
  const quoteTransition =
    phase === 'snap' ? 'none' : 'transform 0.32s var(--ease-out-expo), opacity 0.32s ease';

  const half = Math.floor(testimonials.length / 2);

  return (
    <div className="mt-10 flex min-h-[430px] flex-col justify-between rounded-[22px] bg-card px-10 py-12 shadow-card">
      <div className="overflow-hidden">
        <div
          aria-live="polite"
          className="min-h-[140px] flex flex-col items-center"
          style={{
            opacity: quoteOpacity,
            transform: `translateX(${quoteX}px)`,
            transition: quoteTransition,
          }}
        >
          <p className="m-0 text-xl leading-[1.6] text-center">&ldquo;{active.quote}&rdquo;</p>
          <p className="mt-6 font-display text-[15px] font-bold">{active.name}</p>
          <p className="mt-[3px] text-[13px] text-ink-muted">{active.role}</p>
        </div>
      </div>

      <div className="relative mt-8 h-[92px] w-full">
        {testimonials.map((testimonial, i) => {
          const n = testimonials.length;
          const diff = (((i - index + half + n) % n) - half);
          const dist = Math.abs(diff);
          const isActive = dist === 0;
          const scale = isActive ? 1.25 : dist === 1 ? 0.92 : 0.7;
          const opacity = isActive ? 1 : dist === 1 ? 0.7 : 0.32;

          return (
            <button
              key={testimonial.name}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial from ${testimonial.name}`}
              aria-current={isActive}
              className={`absolute top-1/2 left-1/2 cursor-pointer rounded-full border-[3px] bg-transparent p-[3px] transition-[transform_0.55s_var(--ease-out-expo),opacity_0.55s_var(--ease-out-expo),border-color_0.4s_ease] ${isActive ? 'border-gold' : 'border-transparent'}`}
              style={{
                zIndex: 10 - dist,
                transform: `translate(calc(-50% + ${diff * 74}px), -50%) scale(${scale})`,
                opacity,
              }}
            >
              <img
                src={testimonialAvatarUrl(testimonial)}
                alt=""
                loading="lazy"
                className="block h-[52px] w-[52px] rounded-full bg-alt object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
