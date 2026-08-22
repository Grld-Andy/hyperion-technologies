import { useMemo, useState } from 'react';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import {
  gallery,
  galleryCategoryImages,
  galleryFilters,
  type GalleryCategory,
} from '../constants/gallery';

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
        <div className="flex flex-wrap gap-2">
          {galleryFilters.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                aria-pressed={isActive}
                className={`cursor-pointer rounded-full border border-line px-4 py-2 text-[13px] font-semibold transition-colors duration-200 ${
                  isActive ? 'bg-navy text-white' : 'bg-card text-ink'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="hy-grid-4 mt-8 grid grid-cols-4 gap-4">
          {visible.map((item) => (
            <div key={item.id} className="hy-lift-sm flex flex-col gap-2">
              <img
                src={galleryCategoryImages[item.category]}
                alt={item.title}
                loading="lazy"
                className="aspect-square w-full rounded-[14px] border border-line bg-alt object-cover"
              />
              <p className="m-0 text-xs text-ink-muted">{item.category}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
