import { Check } from 'lucide-react';

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
      {heading ? <h3 className="m-0 font-display text-[16px] font-bold">{heading}</h3> : null}
      <ul
        className={`mx-0 mb-0 ${heading ? 'mt-3.5' : 'mt-4'} flex list-none flex-col gap-2 p-0`}
      >
        {items.map((item) => (
          <li
            key={item}
            className={`flex gap-2 leading-[1.55] ${muted ? 'text-ink-muted' : 'text-ink'}`}
            style={{ fontSize }}
          >
            <Check size={14} className="mt-[3px] shrink-0 text-gold-dim" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
