import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NavItem } from '../../constants/navigation';

interface NavDropdownProps {
  item: NavItem;
  isActive: boolean;
  isOpen: boolean;
  onOpen: (key: string) => void;
  onScheduleClose: () => void;
  onToggle: (key: string) => void;
  onNavigate: () => void;
}

/**
 * Reproduces the mockup's dropdown behaviour: hover opens immediately, leaving
 * schedules a short close (so the pointer can cross the gap), and clicking the
 * trigger toggles it for keyboard/touch users.
 */
export function NavDropdown({
  item,
  isActive,
  isOpen,
  onOpen,
  onScheduleClose,
  onToggle,
  onNavigate,
}: NavDropdownProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onScheduleClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onScheduleClose]);

  const triggerClassName = `flex items-center gap-1 rounded-lg border-none px-3 py-2.5 font-mono text-[11px] font-semibold tracking-[0.06em] uppercase cursor-pointer transition-colors duration-150 ${isOpen ? 'bg-alt' : 'bg-transparent'} ${isActive ? 'text-blue' : 'text-ink'}`;

  if (!item.children) {
    return (
      <Link to={item.to ?? '/'} className={triggerClassName} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => onOpen(item.key)}
      onMouseLeave={onScheduleClose}
    >
      <button
        type="button"
        onClick={() => onToggle(item.key)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        className={triggerClassName}
      >
        {item.label}
        <ChevronDown size={12} aria-hidden />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className="absolute top-full left-0 flex min-w-[190px] flex-col gap-0.5 rounded-xl border border-line bg-card p-2 shadow-lift"
        >
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              role="menuitem"
              className="hy-dropdown-item rounded-lg px-3 py-[9px] text-left font-body text-[13px] font-medium text-ink"
              onClick={onNavigate}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
