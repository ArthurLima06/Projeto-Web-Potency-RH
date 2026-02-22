import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Users,
  Clock,
  Building2,
  UserCheck,
  Calculator,
  Receipt,
  CreditCard,
  FileCheck,
  ArrowRight,
} from 'lucide-react';

const services = [
  { key: 'recruitment', icon: Users },
  { key: 'temporary', icon: Clock },
  { key: 'outsourcing', icon: Building2 },
  { key: 'permanent', icon: UserCheck },
  { key: 'payroll', icon: Calculator },
  { key: 'taxes', icon: Receipt },
  { key: 'payments', icon: CreditCard },
  { key: 'compliance', icon: FileCheck },
];

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">
            {t('services.title')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t('services.subtitle')}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group relative bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gradient-orange group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`services.${service.key}.desc`)}
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline" className="group">
              {t('common.learnMore')}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
