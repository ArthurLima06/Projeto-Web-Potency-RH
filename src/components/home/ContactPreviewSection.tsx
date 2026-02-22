import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export const ContactPreviewSection = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: 'Rua Manuel Borba, 163 – Santo Amaro – São Paulo',
    },
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '(11) 5523-2311',
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: `${t('contact.info.hours.weekdays')}\n${t('contact.info.hours.friday')}`,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4">
              {t('contact.title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {t('contact.subtitle')}
            </h2>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="font-medium text-foreground whitespace-pre-line">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button size="lg" className="bg-gradient-orange hover:opacity-90 group">
                {t('contact.title')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Map Placeholder */}
          <div className="h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8477888177!2d-46.7014!3d-23.6486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50bce76f9ec7%3A0x4a9bb77b6eb2f0a4!2sR.%20Manuel%20Borba%2C%20163%20-%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1706123456789!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Potency Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
