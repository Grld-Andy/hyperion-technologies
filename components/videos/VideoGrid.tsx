"use client";

import { useMemo, useState } from "react";
import { Search, X, Play } from "lucide-react";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import { videos, type VideoCategory } from "@/lib/data/site-content";

const categories: (VideoCategory | "All")[] = [
  "All",
  "Cisco Networking",
  "Routing & Switching",
  "Network Cabling",
  "IP Addressing",
  "VLAN Configuration",
  "Packet Tracer",
  "Network Security",
  "Data Center",
  "Wireless Networking",
  "Troubleshooting",
  "CompTIA Network+",
  "Computer Hardware",
  "Systems Administration",
];

export default function VideoGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const featured = videos.find((v) => v.featured);

  const filtered = useMemo(() => {
    return videos.filter((v) => {
      const matchesCategory = category === "All" || v.category === category;
      const matchesQuery = v.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const playing = videos.find((v) => v.id === playingId);

  return (
    <div>
      {featured && (
        <button
          onClick={() => setPlayingId(featured.id)}
          className="motion-card motion-card-sheen group relative block w-full overflow-hidden rounded-2xl text-left"
        >
          <PlaceholderMedia
            label={`Featured: ${featured.title}`}
            kind="video"
            aspect="wide"
          />
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
            <div>
              <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-royal-950">
                Featured
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">
                {featured.title}
              </h3>
              <p className="mt-1 text-sm text-white/70">
                {featured.category} · {featured.duration}
              </p>
            </div>
          </div>
        </button>
      )}

      <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-xs">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate/50" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search videos…"
            className="w-full rounded-full border border-mid-gray py-2.5 pl-10 pr-4 text-sm outline-none focus:border-royal-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                category === c
                  ? "border-royal-700 bg-royal-700 text-white"
                  : "border-mid-gray text-slate hover:border-royal-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => (
          <button
            key={v.id}
            onClick={() => setPlayingId(v.id)}
            className="motion-card motion-card-sheen group rounded-2xl p-2 text-left hover:bg-royal-50"
          >
            <div className="relative">
              <PlaceholderMedia label={v.title} kind="video" aspect="video" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-royal-900">
                  <Play className="h-5 w-5" fill="currentColor" />
                </span>
              </div>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-gold-600">
              {v.category}
            </p>
            <h3 className="mt-1 font-display text-sm font-semibold text-royal-950">
              {v.title}
            </h3>
            <p className="mt-1 text-xs text-slate">{v.duration}</p>
          </button>
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-slate">
            No videos match your search.
          </p>
        )}
      </div>

      {playing && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setPlayingId(null)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={() => setPlayingId(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderMedia
              label={`Now Playing: ${playing.title}`}
              kind="video"
              aspect="video"
            />
            <p className="mt-4 text-center text-sm text-white/80">
              {playing.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
