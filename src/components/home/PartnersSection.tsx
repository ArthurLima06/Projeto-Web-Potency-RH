import { useLanguage } from '@/contexts/LanguageContext';
import partner1 from '@/assets/partner-1.png';
import partner2 from '@/assets/partner-2.png';

export const PartnersSection = () => {
  const { t } = useLanguage();

  // Partners array - designed for easy addition of new partners
  const partners = [
    { id: 1, name: 'Partner 1', logo: partner1 },
    { id: 2, name: 'Partner 2', logo: partner2 },
    // Add more partners here as images are uploaded
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-primary font-semibold mb-4">
            {t('partners.title')}
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            {t('partners.subtitle')}
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Placeholder for more partners */}
        {partners.length < 4 && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            {/* This text won't show in production - just for development reference */}
          </p>
        )}
      </div>
    </section>
  );
};
