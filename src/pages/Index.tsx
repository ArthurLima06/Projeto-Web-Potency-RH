import { Layout } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  JobsPreviewSection,
  CompanyCTASection,
  PartnersSection,
  ContactPreviewSection,
} from '@/components/home';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <JobsPreviewSection />
      <CompanyCTASection />
      <PartnersSection />
      <ContactPreviewSection />
    </Layout>
  );
};

export default Index;
