import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { fonts, t } from '../../constants/theme';
import { Footer } from './Footer';
import { Header } from './Header';
import { WhatsAppButton } from './WhatsAppButton';

/** Restores the mockup's `window.scrollTo(0, 0)` on every page change. */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  return (
    <div
      style={{
        fontFamily: fonts.body,
        color: t.text,
        background: t.pageBg,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
