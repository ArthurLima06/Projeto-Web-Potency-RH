import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Award, Users, Lightbulb } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: { pt: 'Foco em Resultados', en: 'Results Focused' },
      description: { pt: 'Entregamos soluções que geram impacto real nos negócios dos nossos clientes.', en: 'We deliver solutions that create real impact on our clients\' businesses.' },
    },
    {
      icon: Award,
      title: { pt: 'Excelência Profissional', en: 'Professional Excellence' },
      description: { pt: 'Equipe altamente qualificada e especializada em gestão de pessoas.', en: 'Highly qualified team specialized in people management.' },
    },
    {
      icon: Users,
      title: { pt: 'Atendimento Personalizado', en: 'Personalized Service' },
      description: { pt: 'Cada cliente recebe atenção dedicada às suas necessidades específicas.', en: 'Each client receives dedicated attention to their specific needs.' },
    },
    {
      icon: Lightbulb,
      title: { pt: 'Inovação Constante', en: 'Constant Innovation' },
      description: { pt: 'Acompanhamos as tendências do mercado para oferecer as melhores práticas.', en: 'We follow market trends to offer the best practices.' },
    },
  ];

  const { language } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-4">
              {t('about.title')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              {t('about.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Mission */}
            <div className="bg-gradient-orange p-6 rounded-2xl text-white mb-8">
              <h3 className="text-xl font-semibold mb-2">{t('about.mission')}</h3>
              <p className="text-white/90">{t('about.mission.text')}</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '13+', label: t('about.stats.years') },
                { value: '500+', label: t('about.stats.clients') },
                { value: '10k+', label: t('about.stats.placements') },
                { value: '98%', label: t('about.stats.satisfaction') },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-xl shadow-sm">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
