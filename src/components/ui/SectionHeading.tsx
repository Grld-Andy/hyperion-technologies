import type { CSSProperties } from 'react';
import { brand, fonts, t } from '../../constants/theme';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** `h2` everywhere except the very top of a screen. */
  as?: 'h1' | 'h2';
  size?: number;
  maxWidth?: number;
  style?: CSSProperties;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = 'h2',
  size = 34,
  maxWidth,
  style,
}: SectionHeadingProps) {
  return (
    <div style={style}>
      <p
        style={{
          margin: 0,
          fontFamily: fonts.mono,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: brand.blue,
        }}
      >
        {eyebrow}
      </p>
      <Tag
        className="hy-h2"
        style={{
          margin: '12px 0 0',
          fontFamily: fonts.display,
          fontWeight: 800,
          fontSize: size,
          letterSpacing: '-0.01em',
          lineHeight: 1.2,
          maxWidth,
        }}
      >
        {title}
      </Tag>
      {description ? (
        <p
          style={{
            margin: '14px 0 0',
            fontSize: 15,
            lineHeight: 1.7,
            color: t.textMuted,
            maxWidth: maxWidth ?? 680,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
