import SectionHeading from "@/components/ui/SectionHeading";
import PlaceholderMedia from "@/components/ui/PlaceholderMedia";
import Button from "@/components/ui/Button";
import { videos } from "@/lib/data/site-content";

export default function VideoPreview() {
  const preview = videos.slice(0, 3);
  return (
    <section className="bg-primary-deep py-24">
      <div className="container-hyperion">
        <SectionHeading eyebrow="Watch & Learn" title="Training videos" light />
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {preview.map((v) => (
            <div key={v.id} className="group">
              <PlaceholderMedia label={v.title} kind="video" aspect="video" />
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-gold-soft">{v.category}</p>
              <h3 className="mt-1 font-display text-base font-semibold text-primary-foreground">{v.title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/60">{v.duration}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/videos" variant="secondary">
            View All Videos
          </Button>
        </div>
      </div>
    </section>
  );
}
