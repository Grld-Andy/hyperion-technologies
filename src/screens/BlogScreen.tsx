import { FileText } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { routes } from '../constants/navigation';

export function BlogScreen() {
  return (
    <>
      <PageBanner eyebrow="Blog" title="Insights & Updates" />
      <Section background="page" padding="120px" align="center" maxWidth={480}>
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-alt">
          <FileText size={24} className="text-blue" aria-hidden />
        </span>
        <h2 className="mt-6 font-display text-[22px] font-bold">Posts are coming soon</h2>
        <p className="mt-3 text-sm leading-[1.6] text-ink-muted">
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
