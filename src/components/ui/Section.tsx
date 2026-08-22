import type { CSSProperties, ReactNode } from 'react';
import { layout, t } from '../../constants/theme';

export type SectionBackground = 'page' | 'alt' | 'navy';

const backgrounds: Record<SectionBackground, string> = {
  page: t.pageBg,
  alt: t.altBg,
  navy: 'var(--navy)',
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
      style={{
        background: backgrounds[background],
        padding: `${padding} ${layout.gutter}px`,
        textAlign: align,
        ...style,
      }}
    >
      <div style={{ maxWidth, margin: '0 auto', ...innerStyle }}>{children}</div>
    </section>
  );
}
