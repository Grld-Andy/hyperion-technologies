import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { DEFAULT_OPEN_FAQ_KEY, groupedFaqs } from '../constants/faq';
import { brand, fonts, t } from '../constants/theme';

export function FaqScreen() {
  const [openKey, setOpenKey] = useState<string | null>(DEFAULT_OPEN_FAQ_KEY);

  return (
    <>
      <PageBanner eyebrow="FAQ" title="Frequently Asked Questions" />

      <Section background="page" padding="56px" maxWidth={760} style={{ paddingBottom: 96 }}>
        {groupedFaqs.map((group) => (
          <div key={group.category} style={{ marginTop: 36 }}>
            <p
              style={{
                margin: 0,
                fontFamily: fonts.mono,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: brand.blue,
              }}
            >
              {group.category}
            </p>
            <div
              style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              {group.items.map((item) => {
                const isOpen = openKey === item.key;
                return (
                  <div
                    key={item.key}
                    style={{
                      border: `1px solid ${t.border}`,
                      borderRadius: 14,
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenKey(isOpen ? null : item.key)}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '18px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 12,
                        fontFamily: fonts.display,
                        fontWeight: 700,
                        fontSize: 15,
                        color: t.text,
                      }}
                    >
                      {item.question}
                      {isOpen ? (
                        <Minus size={16} style={{ flexShrink: 0, color: t.textMuted }} aria-hidden />
                      ) : (
                        <Plus size={16} style={{ flexShrink: 0, color: t.textMuted }} aria-hidden />
                      )}
                    </button>
                    {isOpen ? (
                      <p
                        style={{
                          margin: 0,
                          padding: '0 20px 20px',
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: t.textMuted,
                        }}
                      >
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
