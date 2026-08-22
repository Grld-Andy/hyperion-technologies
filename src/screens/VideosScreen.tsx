import { VideoCard } from '../components/cards/VideoCard';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { videos } from '../constants/videos';

export function VideosScreen() {
  return (
    <>
      <PageBanner eyebrow="Videos" title="Training Video Library" />
      <Section background="page" padding="56px" style={{ paddingBottom: 96 }}>
        <div className="hy-grid-3 grid grid-cols-3 gap-5">
          {videos.map((video) => (
            <VideoCard key={video.title} video={video} />
          ))}
        </div>
      </Section>
    </>
  );
}
