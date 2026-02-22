import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Building2, Users, Zap, ArrowRight } from 'lucide-react';

export const CompanyCTASection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Users, label: t('company.benefit1') },
    { icon: Zap, label: t('company.benefit2') },
    { icon: Building2, label: t('company.benefit3') },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-black/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Building2 className="w-4 h-4" />
            <span className="text-sm font-medium">
              {t('company.cta')}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            {t('company.title')}
          </h2>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t('company.subtitle')}
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <benefit.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{benefit.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold group"
            >
              {t('company.cta')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
