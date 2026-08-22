import { useMemo } from 'react';
import { CertCard } from '../components/cards/CertCard';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { certGroupCopy, certifications } from '../constants/certifications';

export type CertGroup = 'all' | 'cisco' | 'comptia';

/**
 * Serves three routes that differ only by vendor filter and banner copy:
 * `/certifications`, `/cisco-training`, `/comptia-training`.
 */
export function CertificationsScreen({ group = 'all' }: { group?: CertGroup }) {
  const copy = certGroupCopy[group];
  const visible = useMemo(() => {
    if (group === 'cisco') return certifications.filter((c) => c.vendor === 'Cisco');
    if (group === 'comptia') return certifications.filter((c) => c.vendor === 'CompTIA');
    return certifications;
  }, [group]);

  return (
    <>
      <PageBanner
        eyebrow={copy.eyebrow}
        title={copy.title}
        description={copy.description}
      />
      <Section background="page">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
          {visible.map((cert) => (
            <CertCard key={cert.slug} cert={cert} />
          ))}
        </div>
      </Section>
    </>
  );
}
