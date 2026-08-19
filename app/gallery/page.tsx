import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Student Gallery",
  description:
    "Explore photos from Hyperion Technologies' Cisco and CompTIA training labs, classrooms, and graduation ceremonies in Accra, Ghana.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <section className="bg-primary-deep py-20 text-primary-foreground">
        <div className="container-hyperion text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Gallery</span>
          <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Student Gallery</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            A look inside our labs, classrooms, and graduation moments.
          </p>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container-hyperion">
          <p className="mx-auto mb-10 max-w-2xl text-center text-xs uppercase tracking-widest text-muted-foreground/50">
            Placeholder images — each tile maps to /public/images/gallery, ready to be replaced with real photos
          </p>
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
