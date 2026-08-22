import { site } from '../../constants/site';

/** Fixed WhatsApp call-to-action; the glyph is inlined exactly as in the mockup. */
export function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="hy-whatsapp"
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 58,
        height: 58,
        borderRadius: 999,
        background: '#25D366',
        boxShadow: '0 10px 30px -8px oklch(0 0 0 / 0.4)',
      }}
    >
      <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
        <path d="M17.47 14.38c-.29-.15-1.7-.84-1.96-.93-.26-.1-.46-.15-.65.15-.2.29-.75.93-.92 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.48.1-.2.05-.37-.02-.51-.08-.15-.65-1.58-.9-2.16-.24-.58-.48-.5-.65-.5-.17 0-.37-.02-.56-.02-.2 0-.51.07-.78.37-.26.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.14 4.99 4.41.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.12-.26-.19-.55-.34z" />
        <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.86.5 3.6 1.38 5.1L2 22l5.05-1.33A9.96 9.96 0 0 0 12.02 22c5.52 0 10-4.48 10-10S17.54 2 12.02 2zm0 18.1c-1.7 0-3.28-.49-4.62-1.34l-.33-.2-3 .79.8-2.92-.22-.34a8.1 8.1 0 0 1-1.24-4.3c0-4.49 3.65-8.15 8.15-8.15 4.49 0 8.15 3.66 8.15 8.15 0 4.49-3.66 8.15-8.15 8.15z" />
      </svg>
    </a>
  );
}
