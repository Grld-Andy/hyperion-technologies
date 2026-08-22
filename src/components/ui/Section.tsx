import type { CSSProperties, ReactNode } from 'react';
import { layout } from '../../constants/theme';

export type SectionBackground = 'page' | 'alt' | 'navy';

const backgroundClass: Record<SectionBackground, string> = {
  page: 'bg-page',
  alt: 'bg-alt',
  navy: 'bg-navy',
};

interface SectionProps {
  children: ReactNode;
  background?: SectionBackground;
  /** Vertical padding shorthand; horizontal gutter is always applied. */
  padding?: string;
  maxWidth?: number;
  align?: 'left' | 'center';
  style?: CSSProperties;
  innerStyle?: CSSProperties;
  id?: string;
}

export function Section({
  children,
  background = 'page',
  padding = '96px',
  maxWidth = layout.maxWidth,
  align = 'left',
  style,
  innerStyle,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-8 ${backgroundClass[background]} ${align === 'center' ? 'text-center' : 'text-left'}`}
      style={{ paddingTop: padding, paddingBottom: padding, ...style }}
    >
      <div className="mx-auto" style={{ maxWidth, ...innerStyle }}>
        {children}
      </div>
    </section>
  );
}
