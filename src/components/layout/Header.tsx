import { useCallback, useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/hyperion-logo.jpg';
import { navItems, routes } from '../../constants/navigation';
import { site } from '../../constants/site';
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
    <header className="sticky top-0 z-50 border-b border-line bg-header transition-colors duration-300">
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-4 px-8">
        <Link to={routes.home} className="flex items-center gap-2.5 text-ink">
          <img src={logo} alt={site.name} className="h-[42px] w-[42px] rounded-lg object-contain" />
          <span className="flex flex-col items-start leading-[1.15]">
            <span className="font-display text-base font-extrabold tracking-[-0.01em] text-ink">
              {site.wordmark}
            </span>
            <span className="font-mono text-[9px] font-medium tracking-[0.16em] text-ink-muted">
              {site.wordmarkSub}
            </span>
          </span>
        </Link>

        <nav className="hy-nav-links flex items-center gap-1" aria-label="Primary">
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

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggle}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9.5 w-9.5 shrink-0 cursor-pointer items-center justify-center rounded-full border border-line bg-transparent text-ink"
          >
            {mode === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="hy-navbar-cta">
            <Button to={routes.contact} variant="blue" style={{ padding: '11px 20px', fontSize: 13, fontWeight: 600 }}>
              Talk to an Advisor
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="hy-mobile-toggle hidden h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full border border-line bg-transparent text-ink"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="hy-mobile-menu flex flex-col gap-1 border-t border-line bg-header px-8 pt-3 pb-5">
          {navItems.map((item) => (
            <div key={item.key} className="flex flex-col">
              {item.to ? (
                <Link
                  to={item.to}
                  className="py-2.5 font-mono text-[11px] font-semibold tracking-[0.06em] text-ink uppercase"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="pt-2.5 pb-1 font-mono text-[11px] font-semibold tracking-[0.06em] text-ink-muted uppercase">
                  {item.label}
                </span>
              )}
              {item.children?.map((child) => (
                <Link key={child.to} to={child.to} className="py-2 pl-3 text-sm text-ink">
                  {child.label}
                </Link>
              ))}
            </div>
          ))}

          <Button to={routes.contact} variant="blue" fullWidth style={{ marginTop: 8 }}>
            Talk to an Advisor
          </Button>
        </div>
      ) : null}
    </header>
  );
}
