import { Link } from 'react-router-dom';
import logo from '../../assets/hyperion-logo.jpg';
import { certifications } from '../../constants/certifications';
import { footerCompanyLinks, routes } from '../../constants/navigation';
import { site } from '../../constants/site';

const columnHeadingClassName =
  'm-0 font-mono text-[11px] font-semibold tracking-[0.1em] text-gold-light uppercase';

export function Footer() {
  return (
    <footer className="bg-navy text-white/65">
      <div className="h-0.75 bg-[linear-gradient(120deg,var(--gold),var(--gold-light))]" />

      <div className="hy-footer-grid mx-auto grid max-w-[1280px] grid-cols-[2fr_1fr_1fr_1.3fr] gap-10 px-8 py-16">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10.5 w-10.5 items-center justify-center rounded-[10px] bg-white p-1">
              <img src={logo} alt={site.name} className="h-full w-full object-contain" />
            </span>
            <span className="font-display text-base font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-85 text-[13px] leading-[1.65]">{site.description}</p>
        </div>

        <div>
          <h4 className={columnHeadingClassName}>Company</h4>
          <div className="mt-4 flex flex-col gap-2.5">
            {footerCompanyLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hy-footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className={columnHeadingClassName}>Training</h4>
          <div className="mt-4 flex flex-col gap-2.5">
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
          <h4 className={columnHeadingClassName}>Contact</h4>
          <div className="mt-4 flex flex-col gap-2.5 text-[13px]">
            <span>{site.contact.addressShort}</span>
            <span>{site.contact.phone}</span>
            <span>{site.contact.email}</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-3 px-8 py-5 text-xs">
          <span>{site.copyright}</span>
          <span className="flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </span>
        </div>
        <div className="mx-auto max-w-[1280px] px-8 pb-5 text-[10.5px] leading-[1.6] text-white/35">
          {site.trademarkNotice}
        </div>
      </div>
    </footer>
  );
}
