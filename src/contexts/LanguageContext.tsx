import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.jobs': 'Vagas',
    'nav.contact': 'Contato',
    'nav.login': 'Entrar',
    'nav.register': 'Cadastrar',
    'nav.dashboard': 'Painel',
    'nav.profile': 'Perfil',
    'nav.logout': 'Sair',

    // Hero
    'hero.title': 'Maximize o potencial da sua empresa ou negócio',
    'hero.subtitle': 'Encontre serviços de consultoria em RH experientes, ágeis e competentes para fortalecer seu departamento de Recursos Humanos e posicionar sua empresa no topo do mercado.',
    'hero.cta.jobs': 'Ver Vagas Abertas',
    'hero.cta.contact': 'Fale Conosco',

    // About
    'about.title': 'Sobre a Potency',
    'about.subtitle': 'Mais de 13 anos de excelência em Recursos Humanos',
    'about.description': 'A Potency é uma empresa de Recursos Humanos com mais de 13 anos de experiência, formada por profissionais altamente qualificados e especializados em serviços de RH. Focamos em entregar soluções ágeis e eficientes, sempre superando as expectativas dos nossos clientes.',
    'about.mission': 'Nossa Missão',
    'about.mission.text': 'Apoiar empresas na conquista de seus objetivos de negócios através da gestão estratégica de pessoas.',
    'about.stats.years': 'Anos de Experiência',
    'about.stats.clients': 'Clientes Atendidos',
    'about.stats.placements': 'Profissionais Colocados',
    'about.stats.satisfaction': 'Satisfação',

    // Services
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Soluções completas em Recursos Humanos para sua empresa',
    'services.recruitment.title': 'Recrutamento e Seleção',
    'services.recruitment.desc': 'Encontramos os melhores talentos para sua empresa através de processos seletivos eficientes e personalizados.',
    'services.temporary.title': 'Mão de Obra Temporária',
    'services.temporary.desc': 'Fornecemos profissionais qualificados para demandas sazonais ou projetos específicos.',
    'services.outsourcing.title': 'Terceirização de Serviços',
    'services.outsourcing.desc': 'Gestão completa de equipes terceirizadas com qualidade e conformidade legal.',
    'services.permanent.title': 'Contratação Permanente',
    'services.permanent.desc': 'Processo completo de admissão de colaboradores efetivos para sua organização.',
    'services.payroll.title': 'Administração de Folha',
    'services.payroll.desc': 'Gestão completa da folha de pagamento com precisão e pontualidade.',
    'services.taxes.title': 'Encargos Sociais e Tributos',
    'services.taxes.desc': 'Cálculo e recolhimento de todos os encargos trabalhistas e tributários.',
    'services.payments.title': 'Pagamento de Salários',
    'services.payments.desc': 'Processamento pontual de pagamentos aos colaboradores.',
    'services.compliance.title': 'Conformidade Legal',
    'services.compliance.desc': 'Cumprimento de todas as obrigações trabalhistas e fiscais.',

    // Jobs
    'jobs.title': 'Vagas Abertas',
    'jobs.subtitle': 'Encontre a oportunidade perfeita para sua carreira',
    'jobs.search': 'Buscar vagas...',
    'jobs.filter.location': 'Localização',
    'jobs.filter.type': 'Tipo de Contrato',
    'jobs.filter.category': 'Categoria',
    'jobs.apply': 'Candidatar-se',
    'jobs.viewAll': 'Ver Todas as Vagas',
    'jobs.details': 'Ver Detalhes',
    'jobs.featured': 'Vagas em Destaque',
    'jobs.noResults': 'Nenhuma vaga encontrada',

    // Company CTA
    'company.title': 'Empresa, anuncie sua vaga conosco!',
    'company.subtitle': 'Alcance milhares de candidatos qualificados e encontre o profissional ideal para sua equipe.',
    'company.cta': 'Anunciar Vaga',
    'company.benefit1': 'Ampla base de candidatos',
    'company.benefit2': 'Processo seletivo ágil',
    'company.benefit3': 'Suporte especializado',

    // Partners
    'partners.title': 'Nossos Parceiros',
    'partners.subtitle': 'Empresas que confiam em nosso trabalho',

    // Contact
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estamos prontos para atender sua empresa',
    'contact.form.name': 'Nome Completo',
    'contact.form.email': 'E-mail',
    'contact.form.phone': 'Telefone',
    'contact.form.subject': 'Assunto',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.info.address': 'Endereço',
    'contact.info.phone': 'Telefone',
    'contact.info.hours': 'Horário de Funcionamento',
    'contact.info.hours.weekdays': 'Segunda a Quinta: 08:00 - 18:00',
    'contact.info.hours.friday': 'Sexta: 08:00 - 17:00',

    // Footer
    'footer.rights': 'Todos os direitos reservados.',
    'footer.company': 'Empresa',
    'footer.services': 'Serviços',
    'footer.support': 'Suporte',

    // Auth
    'auth.login.title': 'Entrar na sua conta',
    'auth.login.subtitle': 'Acesse sua área do candidato',
    'auth.login.email': 'E-mail',
    'auth.login.password': 'Senha',
    'auth.login.remember': 'Lembrar-me',
    'auth.login.forgot': 'Esqueceu a senha?',
    'auth.login.submit': 'Entrar',
    'auth.login.noAccount': 'Não tem uma conta?',
    'auth.login.register': 'Cadastre-se',
    'auth.register.title': 'Criar sua conta',
    'auth.register.subtitle': 'Comece sua jornada profissional',
    'auth.register.name': 'Nome Completo',
    'auth.register.email': 'E-mail',
    'auth.register.password': 'Senha',
    'auth.register.confirm': 'Confirmar Senha',
    'auth.register.terms': 'Aceito os termos e condições',
    'auth.register.submit': 'Cadastrar',
    'auth.register.hasAccount': 'Já tem uma conta?',
    'auth.register.login': 'Faça login',

    // Dashboard
    'dashboard.welcome': 'Bem-vindo(a)',
    'dashboard.profile': 'Seu Perfil',
    'dashboard.resume': 'Currículo',
    'dashboard.applications': 'Suas Candidaturas',
    'dashboard.upload': 'Enviar Currículo',
    'dashboard.status.pending': 'Pendente',
    'dashboard.status.review': 'Em Análise',
    'dashboard.status.interview': 'Entrevista Agendada',
    'dashboard.status.accepted': 'Aceito',
    'dashboard.status.rejected': 'Não Selecionado',

    // Profile
    'profile.title': 'Meu Perfil',
    'profile.personal': 'Dados Pessoais',
    'profile.experience': 'Experiência Profissional',
    'profile.education': 'Formação Acadêmica',
    'profile.skills': 'Habilidades',
    'profile.languages': 'Idiomas',
    'profile.save': 'Salvar Alterações',

    // Common
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.cancel': 'Cancelar',
    'common.save': 'Salvar',
    'common.delete': 'Excluir',
    'common.edit': 'Editar',
    'common.view': 'Ver',
    'common.back': 'Voltar',
    'common.next': 'Próximo',
    'common.previous': 'Anterior',
    'common.learnMore': 'Saiba Mais',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.jobs': 'Jobs',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.dashboard': 'Dashboard',
    'nav.profile': 'Profile',
    'nav.logout': 'Logout',

    // Hero
    'hero.title': 'Maximize the potential of your company or business',
    'hero.subtitle': 'Find experienced, agile, and competent HR consulting services to strengthen your Human Resources department and position your company at the top of the market.',
    'hero.cta.jobs': 'View Open Positions',
    'hero.cta.contact': 'Contact Us',

    // About
    'about.title': 'About Potency',
    'about.subtitle': 'Over 13 years of excellence in Human Resources',
    'about.description': 'Potency is a Human Resources company with over 13 years of experience, formed by highly qualified professionals specialized in HR services. We focus on delivering agile and efficient solutions, always exceeding our clients\' expectations.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To support companies in achieving their business goals through strategic people management.',
    'about.stats.years': 'Years of Experience',
    'about.stats.clients': 'Clients Served',
    'about.stats.placements': 'Professionals Placed',
    'about.stats.satisfaction': 'Satisfaction',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete Human Resources solutions for your company',
    'services.recruitment.title': 'Recruitment and Selection',
    'services.recruitment.desc': 'We find the best talents for your company through efficient and personalized selection processes.',
    'services.temporary.title': 'Temporary Workforce',
    'services.temporary.desc': 'We provide qualified professionals for seasonal demands or specific projects.',
    'services.outsourcing.title': 'Outsourcing Services',
    'services.outsourcing.desc': 'Complete management of outsourced teams with quality and legal compliance.',
    'services.permanent.title': 'Permanent Hiring',
    'services.permanent.desc': 'Complete admission process for permanent employees in your organization.',
    'services.payroll.title': 'Payroll Administration',
    'services.payroll.desc': 'Complete payroll management with accuracy and punctuality.',
    'services.taxes.title': 'Social Charges and Tax Collection',
    'services.taxes.desc': 'Calculation and collection of all labor and tax charges.',
    'services.payments.title': 'Employee Salary Payments',
    'services.payments.desc': 'Timely processing of employee payments.',
    'services.compliance.title': 'Legal Compliance',
    'services.compliance.desc': 'Compliance with all labor and tax obligations.',

    // Jobs
    'jobs.title': 'Open Positions',
    'jobs.subtitle': 'Find the perfect opportunity for your career',
    'jobs.search': 'Search jobs...',
    'jobs.filter.location': 'Location',
    'jobs.filter.type': 'Contract Type',
    'jobs.filter.category': 'Category',
    'jobs.apply': 'Apply',
    'jobs.viewAll': 'View All Jobs',
    'jobs.details': 'View Details',
    'jobs.featured': 'Featured Jobs',
    'jobs.noResults': 'No jobs found',

    // Company CTA
    'company.title': 'Company, advertise your job opening with us!',
    'company.subtitle': 'Reach thousands of qualified candidates and find the ideal professional for your team.',
    'company.cta': 'Post a Job',
    'company.benefit1': 'Large candidate base',
    'company.benefit2': 'Fast selection process',
    'company.benefit3': 'Specialized support',

    // Partners
    'partners.title': 'Our Partners',
    'partners.subtitle': 'Companies that trust our work',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We are ready to serve your company',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.hours': 'Business Hours',
    'contact.info.hours.weekdays': 'Monday to Thursday: 08:00 AM - 06:00 PM',
    'contact.info.hours.friday': 'Friday: 08:00 AM - 05:00 PM',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.company': 'Company',
    'footer.services': 'Services',
    'footer.support': 'Support',

    // Auth
    'auth.login.title': 'Sign in to your account',
    'auth.login.subtitle': 'Access your candidate area',
    'auth.login.email': 'Email',
    'auth.login.password': 'Password',
    'auth.login.remember': 'Remember me',
    'auth.login.forgot': 'Forgot password?',
    'auth.login.submit': 'Sign In',
    'auth.login.noAccount': "Don't have an account?",
    'auth.login.register': 'Register',
    'auth.register.title': 'Create your account',
    'auth.register.subtitle': 'Start your professional journey',
    'auth.register.name': 'Full Name',
    'auth.register.email': 'Email',
    'auth.register.password': 'Password',
    'auth.register.confirm': 'Confirm Password',
    'auth.register.terms': 'I accept the terms and conditions',
    'auth.register.submit': 'Register',
    'auth.register.hasAccount': 'Already have an account?',
    'auth.register.login': 'Sign in',

    // Dashboard
    'dashboard.welcome': 'Welcome',
    'dashboard.profile': 'Your Profile',
    'dashboard.resume': 'Resume',
    'dashboard.applications': 'Your Applications',
    'dashboard.upload': 'Upload Resume',
    'dashboard.status.pending': 'Pending',
    'dashboard.status.review': 'Under Review',
    'dashboard.status.interview': 'Interview Scheduled',
    'dashboard.status.accepted': 'Accepted',
    'dashboard.status.rejected': 'Not Selected',

    // Profile
    'profile.title': 'My Profile',
    'profile.personal': 'Personal Information',
    'profile.experience': 'Professional Experience',
    'profile.education': 'Education',
    'profile.skills': 'Skills',
    'profile.languages': 'Languages',
    'profile.save': 'Save Changes',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.cancel': 'Cancel',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.learnMore': 'Learn More',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('potency-language');
      return (saved as Language) || 'pt';
    }
    return 'pt';
  });

  useEffect(() => {
    localStorage.setItem('potency-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
