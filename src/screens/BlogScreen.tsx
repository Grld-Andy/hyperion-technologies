import { FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { routes } from '../constants/navigation';
import { brand, fonts, t } from '../constants/theme';

/**
 * The mockup ships the blog as an intentional empty state (the three home-page
 * post cards are previews of content that isn't published yet).
 */
export function BlogScreen() {
  return (
    <>
      <PageBanner eyebrow="Blog" title="Insights & Updates" />
      <Section background="page" padding="120px" align="center" maxWidth={480}>
        <span
          style={{
            display: 'inline-flex',
            height: 56,
            width: 56,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 16,
            background: t.altBg,
          }}
        >
          <FileText size={24} color={brand.blue} aria-hidden />
        </span>
        <h2
          style={{
            margin: '24px 0 0',
            fontFamily: fonts.display,
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          Posts are coming soon
        </h2>
        <p style={{ margin: '12px 0 0', fontSize: 14, color: t.textMuted, lineHeight: 1.6 }}>
          We're writing up networking guides, certification tips, and stories from the classroom.
          Check back soon, or reach out directly if you have a question now.
        </p>
        <Button to={routes.contact} variant="blue" size="sm" style={{ marginTop: 24 }}>
          Contact Us
        </Button>
      </Section>
    </>
  );
}
