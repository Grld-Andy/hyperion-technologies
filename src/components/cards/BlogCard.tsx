import { Link } from 'react-router-dom';
import { formatPostDate, type BlogPost } from '../../constants/blogPosts';
import { routes } from '../../constants/navigation';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={routes.blog}
      className="hy-lift flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card text-ink"
    >
      <img
        src={post.imgSrc}
        alt={post.title}
        loading="lazy"
        className="aspect-video w-full max-h-60 shrink-0 object-cover"
      />
      <div className="flex flex-1 flex-col px-4.5 pt-4 pb-5">
        <h3 className="hy-clamp-3 m-0 font-display text-[17px] font-bold leading-[1.3]">
          {post.title}
        </h3>
        <p className="hy-clamp-2 m-0 mt-2 text-sm leading-normal text-ink-muted">
          {post.excerpt}
        </p>
        <p className="m-0 mt-auto flex items-center gap-1.5 pt-3 text-[13px] text-ink-muted">
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
