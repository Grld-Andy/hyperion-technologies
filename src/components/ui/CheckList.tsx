import { Check } from 'lucide-react';
import { brand, fonts, t } from '../../constants/theme';

interface CheckListProps {
  items: string[];
  heading?: string;
  fontSize?: number;
  muted?: boolean;
}

/** Gold check-marked bullet list; used on services and certification detail. */
export function CheckList({ items, heading, fontSize = 14, muted = true }: CheckListProps) {
  return (
    <div>
      {heading ? (
        <h3
          style={{
            margin: 0,
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: 16,
          }}
        >
          {heading}
        </h3>
      ) : null}
      <ul
        style={{
          margin: heading ? '14px 0 0' : '16px 0 0',
          padding: 0,
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              display: 'flex',
              gap: 8,
              fontSize,
              lineHeight: 1.55,
              color: muted ? t.textMuted : t.text,
            }}
          >
            <Check
              size={14}
              color={brand.goldDim}
              style={{ flexShrink: 0, marginTop: 3 }}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
