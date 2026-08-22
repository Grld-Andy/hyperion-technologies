import { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/hyperion-logo.jpg';
import { navItems, routes } from '../../constants/navigation';
import { site } from '../../constants/site';
import { fonts, layout, t } from '../../constants/theme';
import { useTheme } from '../../hooks/useTheme';
import { Button } from '../ui/Button';
import { NavDropdown } from './NavDropdown';

const DROPDOWN_CLOSE_DELAY = 180;

export function Header() {
  const { mode, toggle } = useTheme();
  const { pathname } = useLocation();
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  const openDropdown = useCallback((key: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenKey(key);
  }, []);

  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenKey(null), DROPDOWN_CLOSE_DELAY);
  }, []);

  const toggleDropdown = useCallback((key: string) => {
    window.clearTimeout(closeTimer.current);
    setOpenKey((current) => (current === key ? null : key));
  }, []);

  // Any navigation closes whatever menu is open.
  useEffect(() => {
    setOpenKey(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  const isItemActive = (key: string, to?: string, matches?: string[]) => {
    if (to && pathname === to) return true;
    if (key === 'programs' && pathname.startsWith(routes.certifications)) return true;
    return Boolean(matches?.some((m) => pathname === m));
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: t.headerBg,
        borderBottom: `1px solid ${t.border}`,
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: `0 ${layout.gutter}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
          gap: 16,
        }}
      >
        <Link
          to={routes.home}
          style={{ display: 'flex', alignItems: 'center', gap: 10, color: t.text }}
        >
          <img
            src={logo}
            alt={site.name}
            style={{ height: 42, width: 42, objectFit: 'contain', borderRadius: 8 }}
          />
          <span
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              lineHeight: 1.15,
            }}
          >
            <span
              style={{
                fontFamily: fonts.display,
                fontWeight: 800,
                fontSize: 16,
                letterSpacing: '-0.01em',
                color: t.text,
              }}
            >
              {site.wordmark}
            </span>
            <span
              style={{
                fontFamily: fonts.mono,
                fontWeight: 500,
                fontSize: 9,
                letterSpacing: '0.16em',
                color: t.textMuted,
              }}
            >
              {site.wordmarkSub}
            </span>
          </span>
        </Link>

        <nav
          className="hy-nav-links"
          style={{ display: 'flex', alignItems: 'center', gap: 4 }}
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <NavDropdown
              key={item.key}
              item={item}
              isActive={isItemActive(item.key, item.to, item.matches)}
              isOpen={openKey === item.key}
              onOpen={openDropdown}
              onScheduleClose={scheduleClose}
              onToggle={toggleDropdown}
              onNavigate={() => setOpenKey(null)}
            />
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            type="button"
            onClick={toggle}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 38,
              width: 38,
              flexShrink: 0,
              borderRadius: 999,
              border: `1px solid ${t.border}`,
              background: 'none',
              color: t.text,
              cursor: 'pointer',
            }}
          >
            {mode === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Button to={routes.contact} variant="blue" style={{ padding: '11px 20px', fontSize: 13, fontWeight: 600 }}>
            Talk to an Advisor
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="hy-mobile-toggle"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              height: 38,
              width: 38,
              borderRadius: 999,
              border: `1px solid ${t.border}`,
              background: 'none',
              color: t.text,
              cursor: 'pointer',
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          className="hy-mobile-menu"
          style={{
            borderTop: `1px solid ${t.border}`,
            background: t.headerBg,
            padding: `12px ${layout.gutter}px 20px`,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {navItems.map((item) => (
            <div key={item.key} style={{ display: 'flex', flexDirection: 'column' }}>
              {item.to ? (
                <Link
                  to={item.to}
                  style={{
                    padding: '10px 0',
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: t.text,
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  style={{
                    padding: '10px 0 4px',
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: t.textMuted,
                  }}
                >
                  {item.label}
                </span>
              )}
              {item.children?.map((child) => (
                <Link
                  key={child.to}
                  to={child.to}
                  style={{ padding: '8px 0 8px 12px', fontSize: 14, color: t.text }}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
}
