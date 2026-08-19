"use client";

import { useState } from "react";
import { X } from "lucide-react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { galleryImages, type GalleryCategory } from "@/lib/data/site-content";

const categories: (GalleryCategory | "All")[] = [
  "All",
  "Cisco Training",
  "CompTIA Training",
  "Networking Labs",
  "Graduation",
  "Practical Sessions",
  "Events",
];

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((g) => g.category === active);

  const active_image = galleryImages.find((g) => g.id === lightbox);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "border-royal-700 bg-royal-700 text-white"
                : "border-mid-gray text-slate hover:border-royal-400 hover:text-royal-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style layout via CSS columns */}
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setLightbox(img.id)}
            className="motion-card motion-card-sheen block w-full rounded-2xl text-left"
            aria-label={`View ${img.title}`}
          >
            <PlaceholderMedia
              label={img.title}
              aspect={
                i % 3 === 0 ? "portrait" : i % 3 === 1 ? "square" : "video"
              }
              className="transition-transform duration-300 hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {active_image && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div className="w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
            <PlaceholderMedia label={active_image.title} aspect="wide" />
            <p className="mt-4 text-center text-sm text-white/80">
              {active_image.title} · {active_image.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
