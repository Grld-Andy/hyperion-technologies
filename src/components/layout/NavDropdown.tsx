import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { NavItem } from '../../constants/navigation';
import { fonts, shadows, t } from '../../constants/theme';

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

  const triggerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    background: isOpen ? t.altBg : 'transparent',
    border: 'none',
    borderRadius: 8,
    cursor: 'pointer',
    padding: '10px 12px',
    fontFamily: fonts.mono,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: isActive ? 'var(--blue)' : t.text,
    transition: 'background 0.15s ease, color 0.15s ease',
  } as const;

  if (!item.children) {
    return (
      <Link to={item.to ?? '/'} style={triggerStyle} onClick={onNavigate}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative' }}
      onMouseEnter={() => onOpen(item.key)}
      onMouseLeave={onScheduleClose}
    >
      <button
        type="button"
        onClick={() => onToggle(item.key)}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        style={triggerStyle}
      >
        {item.label}
        <ChevronDown size={12} aria-hidden />
      </button>

      {isOpen ? (
        <div
          role="menu"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            minWidth: 190,
            background: t.cardBg,
            border: `1px solid ${t.border}`,
            borderRadius: 12,
            boxShadow: shadows.dropdown,
            padding: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {item.children.map((child) => (
            <Link
              key={child.to}
              to={child.to}
              role="menuitem"
              className="hy-dropdown-item"
              onClick={onNavigate}
              style={{
                textAlign: 'left',
                padding: '9px 12px',
                borderRadius: 8,
                fontFamily: fonts.body,
                fontSize: 13,
                fontWeight: 500,
                color: t.text,
              }}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
