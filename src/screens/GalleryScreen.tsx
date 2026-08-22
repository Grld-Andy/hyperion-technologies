import { useMemo, useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { gallery, galleryFilters, type GalleryCategory } from '../constants/gallery';
import { brand, fonts, t } from '../constants/theme';

type Filter = 'All' | GalleryCategory;

export function GalleryScreen() {
  const [filter, setFilter] = useState<Filter>('All');

  const visible = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)),
    [filter],
  );

  return (
    <>
      <PageBanner eyebrow="Gallery" title="Life at Hyperion" />

      <Section background="page" padding="56px" style={{ paddingBottom: 96 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {galleryFilters.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={isActive}
                style={{
                  background: isActive ? brand.navy : t.cardBg,
                  color: isActive ? '#ffffff' : t.text,
                  border: `1px solid ${t.border}`,
                  borderRadius: 999,
                  padding: '8px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div
          className="hy-grid-4"
          style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
          }}
        >
          {visible.map((item) => (
            <div
              key={item.id}
              className="hy-lift-sm"
              style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
            >
              {/*
                The mockup left every gallery slot empty (no uploaded photos),
                so each tile renders as a labelled placeholder.
              */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 14,
                  background: t.altBg,
                  border: `1px solid ${t.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  padding: 16,
                  textAlign: 'center',
                }}
              >
                <ImageIcon size={22} color={t.textMuted} aria-hidden />
                <span
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    lineHeight: 1.45,
                    color: t.textMuted,
                  }}
                >
                  {item.title}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: t.textMuted }}>{item.category}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
