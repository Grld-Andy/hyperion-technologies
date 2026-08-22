import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { DEFAULT_OPEN_FAQ_KEY, groupedFaqs } from '../constants/faq';

export function FaqScreen() {
  const [openKey, setOpenKey] = useState<string | null>(DEFAULT_OPEN_FAQ_KEY);

  return (
    <>
      <PageBanner eyebrow="FAQ" title="Frequently Asked Questions" />

      <Section background="page" padding="56px" maxWidth={760} style={{ paddingBottom: 96 }}>
        {groupedFaqs.map((group) => (
          <div key={group.category} className="mt-9">
            <p className="m-0 font-mono text-xs font-semibold tracking-[0.1em] text-blue uppercase">
              {group.category}
            </p>
            <div className="mt-4 flex flex-col gap-2.5">
              {group.items.map((item) => {
                const isOpen = openKey === item.key;
                return (
                  <div key={item.key} className="overflow-hidden rounded-[14px] border border-line">
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : item.key)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-3 border-0 bg-transparent px-5 py-[18px] text-left font-display text-[15px] font-bold text-ink"
                    >
                      {item.question}
                      {isOpen ? (
                        <Minus size={16} className="shrink-0 text-ink-muted" aria-hidden />
                      ) : (
                        <Plus size={16} className="shrink-0 text-ink-muted" aria-hidden />
                      )}
                    </button>
                    {isOpen ? (
                      <p className="m-0 px-5 pb-5 text-sm leading-[1.65] text-ink-muted">
                        {item.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
