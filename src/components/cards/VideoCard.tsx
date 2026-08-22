import { Clock, Play } from 'lucide-react';
import { VIDEO_THUMBNAIL_URL, type TrainingVideo } from '../../constants/videos';
import { brand, fonts, t } from '../../constants/theme';

interface VideoCardProps {
  video: TrainingVideo;
  /** `feature` is the navy home preview tile; `library` is the videos page card. */
  variant?: 'feature' | 'library';
}

export function VideoCard({ video, variant = 'library' }: VideoCardProps) {
  if (variant === 'feature') {
    return (
      <div
        className="hy-lift"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: `linear-gradient(oklch(0.24 0.09 265 / 0.75), oklch(0.24 0.09 265 / 0.9)), url('${VIDEO_THUMBNAIL_URL}') center/cover`,
          border: '1px solid oklch(1 0 0 / 0.08)',
          borderRadius: 16,
          padding: 20,
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -30,
            bottom: -30,
            width: 150,
            height: 150,
            borderRadius: 999,
            background: 'radial-gradient(circle, oklch(0.79 0.135 84 / 0.25), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 46,
            width: 46,
            borderRadius: 999,
            background: 'oklch(0.79 0.135 84 / 0.18)',
            border: '1px solid oklch(0.79 0.135 84 / 0.5)',
            backdropFilter: 'blur(8px)',
            color: brand.goldLight,
          }}
        >
          <Play size={19} aria-hidden />
        </div>
        <p
          style={{
            position: 'relative',
            margin: '18px 0 0',
            fontFamily: fonts.mono,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: brand.gold,
          }}
        >
          {video.category}
        </p>
        <p
          style={{
            position: 'relative',
            margin: '8px 0 0',
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: 17,
            color: '#fff',
          }}
        >
          {video.title}
        </p>
        <p
          style={{
            position: 'relative',
            margin: '20px 0 0',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 12,
            color: 'oklch(1 0 0 / 0.55)',
          }}
        >
          <Clock size={12} aria-hidden />
          {video.duration}
        </p>
      </div>
    );
  }

  return (
    <div
      className="hy-lift"
      style={{
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        background: t.cardBg,
      }}
    >
      <div
        style={{
          position: 'relative',
          aspectRatio: '16 / 9',
          background: `linear-gradient(oklch(0.28 0.11 265 / 0.45), oklch(0.28 0.11 265 / 0.45)), url('${VIDEO_THUMBNAIL_URL}') center/cover`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            display: 'flex',
            height: 48,
            width: 48,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 999,
            background: brand.goldLight,
            color: brand.navyDeep,
          }}
        >
          <Play size={20} aria-hidden />
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: 8,
            right: 8,
            background: 'oklch(0 0 0 / 0.6)',
            color: '#fff',
            fontSize: 11,
            padding: '2px 7px',
            borderRadius: 5,
            fontFamily: fonts.mono,
          }}
        >
          {video.duration}
        </span>
      </div>
      <div style={{ padding: 18 }}>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 10,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: brand.blue,
          }}
        >
          {video.category}
        </span>
        <h3
          style={{ margin: '8px 0 0', fontFamily: fonts.display, fontWeight: 700, fontSize: 15 }}
        >
          {video.title}
        </h3>
        <p style={{ margin: '8px 0 0', fontSize: 13, color: t.textMuted, lineHeight: 1.5 }}>
          {video.description}
        </p>
      </div>
    </div>
  );
}
