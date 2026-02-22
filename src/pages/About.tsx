import { Layout } from '@/components/layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Target,
  Award,
  Users,
  Lightbulb,
  Heart,
  Shield,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: { pt: 'Foco no Cliente', en: 'Client Focus' },
      description: {
        pt: 'Colocamos as necessidades dos nossos clientes em primeiro lugar, buscando sempre superar suas expectativas.',
        en: 'We put our clients\' needs first, always striving to exceed their expectations.',
      },
    },
    {
      icon: Award,
      title: { pt: 'Excelência', en: 'Excellence' },
      description: {
        pt: 'Buscamos a excelência em tudo que fazemos, desde o atendimento até a entrega dos serviços.',
        en: 'We pursue excellence in everything we do, from service to delivery.',
      },
    },
    {
      icon: Heart,
      title: { pt: 'Humanização', en: 'Humanization' },
      description: {
        pt: 'Valorizamos as pessoas e suas histórias, tratando cada candidato e cliente com respeito e empatia.',
        en: 'We value people and their stories, treating each candidate and client with respect and empathy.',
      },
    },
    {
      icon: Shield,
      title: { pt: 'Ética', en: 'Ethics' },
      description: {
        pt: 'Atuamos com transparência e integridade em todas as nossas relações.',
        en: 'We act with transparency and integrity in all our relationships.',
      },
    },
    {
      icon: Lightbulb,
      title: { pt: 'Inovação', en: 'Innovation' },
      description: {
        pt: 'Estamos sempre em busca de novas soluções e tecnologias para melhorar nossos serviços.',
        en: 'We are always looking for new solutions and technologies to improve our services.',
      },
    },
    {
      icon: TrendingUp,
      title: { pt: 'Resultados', en: 'Results' },
      description: {
        pt: 'Focamos em entregar resultados concretos que impactam positivamente os negócios dos nossos clientes.',
        en: 'We focus on delivering concrete results that positively impact our clients\' businesses.',
      },
    },
  ];

  const timeline = [
    {
      year: '2011',
      title: { pt: 'Fundação', en: 'Foundation' },
      description: {
        pt: 'A Potency foi fundada com a missão de transformar a gestão de pessoas no Brasil.',
        en: 'Potency was founded with the mission to transform people management in Brazil.',
      },
    },
    {
      year: '2014',
      title: { pt: 'Expansão', en: 'Expansion' },
      description: {
        pt: 'Ampliamos nosso portfólio de serviços e conquistamos os primeiros grandes clientes.',
        en: 'We expanded our service portfolio and acquired our first major clients.',
      },
    },
    {
      year: '2018',
      title: { pt: 'Consolidação', en: 'Consolidation' },
      description: {
        pt: 'Nos consolidamos como referência em RH na região de São Paulo.',
        en: 'We established ourselves as an HR reference in the São Paulo region.',
      },
    },
    {
      year: '2024',
      title: { pt: 'Inovação Digital', en: 'Digital Innovation' },
      description: {
        pt: 'Lançamos nossa nova plataforma digital para conectar talentos às melhores oportunidades.',
        en: 'We launched our new digital platform to connect talents with the best opportunities.',
      },
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('about.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-6">
                {language === 'pt'
                  ? 'Conectando talentos às melhores oportunidades'
                  : 'Connecting talents to the best opportunities'}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="bg-gradient-orange p-6 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-2">{t('about.mission')}</h3>
                <p className="text-white/90">{t('about.mission.text')}</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '13+', label: t('about.stats.years') },
                { value: '500+', label: t('about.stats.clients') },
                { value: '10k+', label: t('about.stats.placements') },
                { value: '98%', label: t('about.stats.satisfaction') },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 p-6 rounded-2xl text-center hover:bg-secondary transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
              {language === 'pt' ? 'Nossos Valores' : 'Our Values'}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title[language]}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description[language]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-12">
              {language === 'pt' ? 'Nossa Trajetória' : 'Our Journey'}
            </h2>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title[language]}
                    </h3>
                    <p className="text-muted-foreground">{item.description[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Placeholder */}
          <div className="text-center p-8 md:p-12 bg-secondary/50 rounded-3xl">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              {language === 'pt' ? 'Nossa Equipe' : 'Our Team'}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'pt'
                ? 'Contamos com uma equipe de profissionais altamente qualificados e apaixonados por conectar talentos às melhores oportunidades.'
                : 'We have a team of highly qualified professionals passionate about connecting talents to the best opportunities.'}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-orange hover:opacity-90 group">
                {language === 'pt' ? 'Conheça Nossa Equipe' : 'Meet Our Team'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
