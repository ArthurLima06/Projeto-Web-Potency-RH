import { Layout } from '@/components/layout';
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
  CheckCircle2,
} from 'lucide-react';

const servicesData = [
  {
    key: 'recruitment',
    icon: Users,
    details: {
      pt: [
        'Análise e definição do perfil ideal',
        'Divulgação em múltiplos canais',
        'Triagem e avaliação de candidatos',
        'Entrevistas por competências',
        'Aplicação de testes técnicos e comportamentais',
        'Acompanhamento pós-contratação',
      ],
      en: [
        'Analysis and definition of the ideal profile',
        'Multi-channel job posting',
        'Candidate screening and evaluation',
        'Competency-based interviews',
        'Technical and behavioral testing',
        'Post-hire follow-up',
      ],
    },
  },
  {
    key: 'temporary',
    icon: Clock,
    details: {
      pt: [
        'Contratação rápida e flexível',
        'Gestão completa da documentação',
        'Substituição de colaboradores',
        'Projetos sazonais ou específicos',
        'Cobertura de férias e licenças',
        'Conformidade legal garantida',
      ],
      en: [
        'Fast and flexible hiring',
        'Complete documentation management',
        'Employee replacement',
        'Seasonal or specific projects',
        'Vacation and leave coverage',
        'Guaranteed legal compliance',
      ],
    },
  },
  {
    key: 'outsourcing',
    icon: Building2,
    details: {
      pt: [
        'Gestão de equipes terceirizadas',
        'Supervisão e acompanhamento',
        'Treinamento dos colaboradores',
        'Relatórios de desempenho',
        'Substituição imediata se necessário',
        'Redução de custos operacionais',
      ],
      en: [
        'Outsourced team management',
        'Supervision and monitoring',
        'Employee training',
        'Performance reports',
        'Immediate replacement if needed',
        'Operational cost reduction',
      ],
    },
  },
  {
    key: 'permanent',
    icon: UserCheck,
    details: {
      pt: [
        'Processo seletivo completo',
        'Análise de documentação',
        'Exames admissionais',
        'Registro em carteira',
        'Integração do colaborador',
        'Suporte no período de experiência',
      ],
      en: [
        'Complete selection process',
        'Document analysis',
        'Admission exams',
        'Work permit registration',
        'Employee integration',
        'Trial period support',
      ],
    },
  },
  {
    key: 'payroll',
    icon: Calculator,
    details: {
      pt: [
        'Cálculo mensal da folha',
        'Gestão de benefícios',
        'Controle de ponto',
        'Férias e 13º salário',
        'Emissão de holerites',
        'Relatórios gerenciais',
      ],
      en: [
        'Monthly payroll calculation',
        'Benefits management',
        'Time tracking',
        'Vacation and 13th salary',
        'Payslip generation',
        'Management reports',
      ],
    },
  },
  {
    key: 'taxes',
    icon: Receipt,
    details: {
      pt: [
        'Cálculo de INSS e FGTS',
        'Recolhimento de impostos',
        'IRRF e contribuições sindicais',
        'Declarações acessórias',
        'eSocial e DCTFWEB',
        'Auditoria trabalhista',
      ],
      en: [
        'INSS and FGTS calculation',
        'Tax collection',
        'IRRF and union contributions',
        'Accessory declarations',
        'eSocial and DCTFWEB',
        'Labor audit',
      ],
    },
  },
  {
    key: 'payments',
    icon: CreditCard,
    details: {
      pt: [
        'Processamento de pagamentos',
        'Depósito em conta',
        'Pagamento de benefícios',
        'Adiantamentos salariais',
        'Rescisões e verbas',
        'Controle de custos',
      ],
      en: [
        'Payment processing',
        'Direct deposit',
        'Benefits payment',
        'Salary advances',
        'Termination payments',
        'Cost control',
      ],
    },
  },
  {
    key: 'compliance',
    icon: FileCheck,
    details: {
      pt: [
        'Cumprimento da CLT',
        'Normas de segurança do trabalho',
        'Documentação sempre em dia',
        'Preparação para fiscalizações',
        'Gestão de passivos trabalhistas',
        'Consultoria especializada',
      ],
      en: [
        'CLT compliance',
        'Workplace safety standards',
        'Up-to-date documentation',
        'Inspection preparation',
        'Labor liability management',
        'Specialized consulting',
      ],
    },
  },
];

const Services = () => {
  const { language, t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.key}
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={isEven ? 'order-1' : 'order-1 md:order-2'}>
                    <div className="w-16 h-16 bg-gradient-orange rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      {t(`services.${service.key}.title`)}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {t(`services.${service.key}.desc`)}
                    </p>
                    <ul className="space-y-3">
                      {service.details[language].map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${isEven ? 'order-2' : 'order-2 md:order-1'} bg-secondary/50 rounded-3xl p-8 md:p-12 flex items-center justify-center`}
                  >
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-gradient-orange rounded-full flex items-center justify-center opacity-80">
                      <Icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-8 md:p-12 bg-gradient-orange rounded-3xl text-white">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              {language === 'pt'
                ? 'Precisa de ajuda com RH?'
                : 'Need help with HR?'}
            </h3>
            <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
              {language === 'pt'
                ? 'Entre em contato conosco para uma consultoria personalizada e descubra como podemos ajudar sua empresa.'
                : 'Contact us for personalized consulting and discover how we can help your company.'}
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
                {t('nav.contact')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
