import type { CSSProperties } from 'react';

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
      <p className="m-0 font-mono text-[12px] font-semibold tracking-[0.12em] text-blue uppercase">
        {eyebrow}
      </p>
      <Tag
        className="hy-h2 mx-0 mt-3 mb-0 font-display font-extrabold tracking-[-0.01em] leading-[1.2]"
        style={{ fontSize: size, maxWidth }}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className="mx-0 mt-3.5 mb-0 text-[15px] leading-[1.7] text-ink-muted"
          style={{ maxWidth: maxWidth ?? 680 }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
