import type { Metadata } from "next";
import VideoGrid from "@/components/videos/VideoGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Training Videos",
  description:
    "Browse Hyperion Technologies' training video library covering Cisco networking, routing and switching, VLANs, network security, and CompTIA topics.",
  path: "/videos",
});

export default function VideosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-royal-950 to-royal-800 py-20 text-white">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">Videos</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Training Video Library</h1>
          <p className="mx-auto mt-4 max-w-2xl text-royal-100/80">
            Bite-sized lessons covering the concepts our students ask about most.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-hyperion">
          <p className="mx-auto mb-10 max-w-2xl text-center text-xs uppercase tracking-widest text-slate/50">
            Placeholder videos — wire real, embeddable video URLs into components/videos/VideoGrid.tsx when ready
          </p>
          <VideoGrid />
        </div>
      </section>
    </>
  );
}
