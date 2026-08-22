import { ServiceCard } from '../components/cards/ServiceCard';
import { PageBanner } from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { services } from '../constants/services';

export function ServicesScreen() {
  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title="Full-spectrum IT services"
        description="Certification training is our specialty, but our team supports the everyday technology needs of individuals, businesses, and schools."
      />
      <Section background="page">
        <div
          className="hy-grid-2"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} variant="detailed" />
          ))}
        </div>
      </Section>
    </>
  );
}
