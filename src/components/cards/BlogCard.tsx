import { Link } from 'react-router-dom';
import { formatPostDate, type BlogPost } from '../../constants/blogPosts';
import { routes } from '../../constants/navigation';
import { fonts, t } from '../../constants/theme';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={routes.blog}
      className="hy-lift"
      style={{
        background: t.cardBg,
        border: `1px solid ${t.border}`,
        borderRadius: 16,
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        color: t.text,
      }}
    >
      <img
        src={post.imgSrc}
        alt={post.title}
        loading="lazy"
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          maxHeight: 240,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3
          className="hy-clamp-3"
          style={{ margin: 0, fontFamily: fonts.display, fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}
        >
          {post.title}
        </h3>
        <p
          className="hy-clamp-2"
          style={{ margin: '8px 0 0', fontSize: 14, lineHeight: 1.5, color: t.textMuted }}
        >
          {post.excerpt}
        </p>
        <p
          style={{
            margin: 'auto 0 0',
            paddingTop: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: 13,
            color: t.textMuted,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
          {formatPostDate(post.date)}
        </p>
      </div>
    </Link>
  );
}
