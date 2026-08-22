import type { CSSProperties, ReactNode } from 'react';
import { EASE } from '../../constants/theme';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface RevealProps {
  children: ReactNode;
  /** Extra transition delay, in seconds. */
  delay?: number;
  /** Distance to travel on the Y axis before settling. */
  offsetY?: number;
  style?: CSSProperties;
  className?: string;
}

/**
 * Fade-and-rise wrapper matching the mockup's `data-reveal-key` sections.
 */
export function Reveal({ children, delay = 0, offsetY = 24, style, className }: RevealProps) {
  const { ref, revealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: `translateY(${revealed ? 0 : offsetY}px)`,
        transition: `opacity 0.8s ${EASE} ${delay}s, transform 0.8s ${EASE} ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
