import { Clock, Play } from 'lucide-react';
import { VIDEO_THUMBNAIL_URL, type TrainingVideo } from '../../constants/videos';

interface VideoCardProps {
  video: TrainingVideo;
  /** `feature` is the navy home preview tile; `library` is the videos page card. */
  variant?: 'feature' | 'library';
}

export function VideoCard({ video, variant = 'library' }: VideoCardProps) {
  if (variant === 'feature') {
    return (
      <div
        className="hy-lift relative overflow-hidden rounded-2xl border border-white/8 p-5"
        style={{
          background: `linear-gradient(oklch(0.24 0.09 265 / 0.75), oklch(0.24 0.09 265 / 0.9)), url('${VIDEO_THUMBNAIL_URL}') center/cover`,
        }}
      >
        <div className="absolute -right-[30px] -bottom-[30px] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle,oklch(0.79_0.135_84/0.25),transparent_70%)]" />
        <div className="relative flex h-[46px] w-[46px] items-center justify-center rounded-full border border-gold/50 bg-gold/18 text-gold-light backdrop-blur">
          <Play size={19} aria-hidden />
        </div>
        <p className="relative m-0 mt-4.5 font-mono text-[11px] font-semibold tracking-[0.08em] text-gold uppercase">
          {video.category}
        </p>
        <p className="relative m-0 mt-2 font-display text-[17px] font-bold text-white">
          {video.title}
        </p>
        <p className="relative m-0 mt-5 flex items-center gap-1.5 text-xs text-white/55">
          <Clock size={12} aria-hidden />
          {video.duration}
        </p>
      </div>
    );
  }

  return (
    <div className="hy-lift overflow-hidden rounded-2xl border border-line bg-card">
      <div
        className="relative flex aspect-video items-center justify-center"
        style={{
          background: `linear-gradient(oklch(0.28 0.11 265 / 0.45), oklch(0.28 0.11 265 / 0.45)), url('${VIDEO_THUMBNAIL_URL}') center/cover`,
        }}
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-light text-navy-deep">
          <Play size={20} aria-hidden />
        </span>
        <span className="absolute right-2 bottom-2 rounded-[5px] bg-black/60 px-[7px] py-0.5 font-mono text-[11px] text-white">
          {video.duration}
        </span>
      </div>
      <div className="p-4.5">
        <span className="font-mono text-[10px] tracking-[0.08em] text-blue uppercase">
          {video.category}
        </span>
        <h3 className="m-0 mt-2 font-display text-[15px] font-bold">{video.title}</h3>
        <p className="m-0 mt-2 text-[13px] leading-normal text-ink-muted">{video.description}</p>
      </div>
    </div>
  );
}
