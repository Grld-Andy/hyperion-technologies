import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/lib/data/site-content";

export default function GalleryPreview() {
  const preview = galleryImages.slice(0, 6);
  return (
    <section className="py-24 bg-card">
      <div className="container-hyperion">
        <SectionHeading
          eyebrow="Inside Hyperion"
          title="A look at our training environment"
          description="Labs, classrooms, and graduation moments from our student community."
        />
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {preview.map((img, i) => (
            <PlaceholderMedia
              key={img.id}
              label={img.title}
              aspect="square"
              className={i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/gallery">View Full Gallery</Button>
        </div>
      </div>
    </section>
  );
}
