import { useCallback, useEffect, useRef, useState } from 'react';
import {
  TESTIMONIAL_AUTOPLAY_MS,
  testimonialAvatarUrl,
  testimonials,
} from '../constants/testimonials';
import { brand, EASE, fonts, shadows, t } from '../constants/theme';

/**
 * Three-phase transition copied from the mockup's `switchTestimonial`:
 *   exit  — current quote slides out and fades
 *   snap  — swap content, jump (untransitioned) to the far side
 *   enter — slide/fade the new quote into place
 */
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
    phase === 'snap' ? 'none' : `transform 0.32s ${EASE}, opacity 0.32s ease`;

  const half = Math.floor(testimonials.length / 2);

  return (
    <div
      style={{
        marginTop: 40,
        background: t.cardBg,
        borderRadius: 22,
        padding: '48px 40px',
        boxShadow: shadows.card,
        minHeight: 313,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div
          aria-live="polite"
          style={{
            opacity: quoteOpacity,
            transform: `translateX(${quoteX}px)`,
            transition: quoteTransition,
            minHeight: 140,
          }}
        >
          <p style={{ margin: 0, fontSize: 20, lineHeight: 1.6 }}>&ldquo;{active.quote}&rdquo;</p>
          <p
            style={{
              margin: '24px 0 0',
              fontFamily: fonts.display,
              fontWeight: 700,
              fontSize: 15,
            }}
          >
            {active.name}
          </p>
          <p style={{ margin: '3px 0 0', fontSize: 13, color: t.textMuted }}>{active.role}</p>
        </div>
      </div>

      <div style={{ marginTop: 32, position: 'relative', width: '100%', height: 92 }}>
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
              style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                zIndex: 10 - dist,
                background: 'none',
                cursor: 'pointer',
                padding: 3,
                borderRadius: 999,
                border: `3px solid ${isActive ? brand.gold : 'transparent'}`,
                transform: `translate(calc(-50% + ${diff * 74}px), -50%) scale(${scale})`,
                opacity,
                transition: `transform 0.55s ${EASE}, opacity 0.55s ${EASE}, border-color 0.4s ease`,
              }}
            >
              <img
                src={testimonialAvatarUrl(testimonial)}
                alt=""
                loading="lazy"
                style={{
                  display: 'block',
                  width: 52,
                  height: 52,
                  borderRadius: 999,
                  objectFit: 'cover',
                  background: t.altBg,
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
