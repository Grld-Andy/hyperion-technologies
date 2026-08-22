import { Link } from 'react-router-dom';
import logo from '../../assets/hyperion-logo.jpg';
import { certifications } from '../../constants/certifications';
import { footerCompanyLinks, routes } from '../../constants/navigation';
import { site } from '../../constants/site';
import { brand, fonts, layout } from '../../constants/theme';

const columnHeadingStyle = {
  margin: 0,
  fontFamily: fonts.mono,
  fontSize: 11,
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: brand.goldLight,
} as const;

export function Footer() {
  return (
    <footer style={{ background: brand.navy, color: 'oklch(1 0 0 / 0.65)' }}>
      <div
        style={{
          height: 3,
          background: `linear-gradient(120deg, ${brand.gold}, ${brand.goldLight})`,
        }}
      />

      <div
        className="hy-footer-grid"
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: `64px ${layout.gutter}px`,
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1.3fr',
          gap: 40,
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                display: 'flex',
                height: 42,
                width: 42,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                background: '#fff',
                padding: 4,
              }}
            >
              <img
                src={logo}
                alt={site.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </span>
            <span
              style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: 16, color: '#fff' }}
            >
              {site.name}
            </span>
          </div>
          <p style={{ margin: '16px 0 0', maxWidth: 340, fontSize: 13, lineHeight: 1.65 }}>
            {site.description}
          </p>
        </div>

        <div>
          <h4 style={columnHeadingStyle}>Company</h4>
          <div
            style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            {footerCompanyLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hy-footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={columnHeadingStyle}>Training</h4>
          <div
            style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}
          >
            {certifications.map((cert) => (
              <Link
                key={cert.slug}
                to={routes.certificationDetail(cert.slug)}
                className="hy-footer-link"
              >
                {cert.shortName}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 style={columnHeadingStyle}>Contact</h4>
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              fontSize: 13,
            }}
          >
            <span>{site.contact.addressShort}</span>
            <span>{site.contact.phone}</span>
            <span>{site.contact.email}</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid oklch(1 0 0 / 0.1)' }}>
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            padding: `20px ${layout.gutter}px`,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            fontSize: 12,
          }}
        >
          <span>{site.copyright}</span>
          <span style={{ display: 'flex', gap: 16 }}>
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </span>
        </div>
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            padding: `0 ${layout.gutter}px 20px`,
            fontSize: 10.5,
            lineHeight: 1.6,
            color: 'oklch(1 0 0 / 0.35)',
          }}
        >
          {site.trademarkNotice}
        </div>
      </div>
    </footer>
  );
}
