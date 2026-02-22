export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  resume?: {
    fileName: string;
    uploadedAt: string;
  };
  profile: {
    headline?: string;
    about?: string;
    location?: string;
    experience: Experience[];
    education: Education[];
    skills: string[];
    languages: Language[];
  };
  applications: Application[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
}

export interface Language {
  name: string;
  level: 'basic' | 'intermediate' | 'advanced' | 'fluent' | 'native';
}

export interface Application {
  id: string;
  jobId: string;
  jobTitle: {
    pt: string;
    en: string;
  };
  company: string;
  appliedAt: string;
  status: 'pending' | 'review' | 'interview' | 'accepted' | 'rejected';
}

export const mockUser: User = {
  id: '1',
  name: 'Maria Silva',
  email: 'maria.silva@email.com',
  phone: '(11) 99999-9999',
  avatar: undefined,
  resume: {
    fileName: 'curriculo_maria_silva.pdf',
    uploadedAt: '2024-01-10',
  },
  profile: {
    headline: 'Analista de Recursos Humanos | Especialista em Recrutamento e Seleção',
    about: 'Profissional com 5 anos de experiência em gestão de pessoas e processos seletivos. Apaixonada por conectar talentos às oportunidades certas.',
    location: 'São Paulo, SP',
    experience: [
      {
        id: '1',
        title: 'Analista de RH Pleno',
        company: 'Tech Solutions Ltda',
        location: 'São Paulo, SP',
        startDate: '2022-03',
        current: true,
        description: 'Responsável por todo o ciclo de recrutamento e seleção, desde a definição do perfil até a integração do novo colaborador.',
      },
      {
        id: '2',
        title: 'Assistente de RH',
        company: 'Empresa ABC',
        location: 'São Paulo, SP',
        startDate: '2019-06',
        endDate: '2022-02',
        current: false,
        description: 'Suporte em processos de admissão, folha de pagamento e benefícios.',
      },
    ],
    education: [
      {
        id: '1',
        degree: 'Pós-Graduação',
        institution: 'FGV',
        field: 'Gestão de Pessoas',
        startDate: '2021-02',
        endDate: '2022-12',
        current: false,
      },
      {
        id: '2',
        degree: 'Bacharelado',
        institution: 'Universidade de São Paulo',
        field: 'Psicologia',
        startDate: '2015-02',
        endDate: '2019-12',
        current: false,
      },
    ],
    skills: [
      'Recrutamento e Seleção',
      'Entrevistas por Competências',
      'Gestão de Talentos',
      'Treinamento e Desenvolvimento',
      'Excel Avançado',
      'SAP RH',
    ],
    languages: [
      { name: 'Português', level: 'native' },
      { name: 'Inglês', level: 'advanced' },
      { name: 'Espanhol', level: 'intermediate' },
    ],
  },
  applications: [
    {
      id: '1',
      jobId: '1',
      jobTitle: {
        pt: 'Analista de Recursos Humanos',
        en: 'Human Resources Analyst',
      },
      company: 'Global Tech Inc.',
      appliedAt: '2024-01-20',
      status: 'interview',
    },
    {
      id: '2',
      jobId: '6',
      jobTitle: {
        pt: 'Coordenador de RH',
        en: 'HR Coordinator',
      },
      company: 'Startup XYZ',
      appliedAt: '2024-01-15',
      status: 'review',
    },
    {
      id: '3',
      jobId: '3',
      jobTitle: {
        pt: 'Business Partner de RH',
        en: 'HR Business Partner',
      },
      company: 'Multinacional ABC',
      appliedAt: '2024-01-05',
      status: 'rejected',
    },
  ],
};

export const languageLevelLabels = {
  pt: {
    basic: 'Básico',
    intermediate: 'Intermediário',
    advanced: 'Avançado',
    fluent: 'Fluente',
    native: 'Nativo',
  },
  en: {
    basic: 'Basic',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    fluent: 'Fluent',
    native: 'Native',
  },
};

export const applicationStatusLabels = {
  pt: {
    pending: 'Pendente',
    review: 'Em Análise',
    interview: 'Entrevista Agendada',
    accepted: 'Aceito',
    rejected: 'Não Selecionado',
  },
  en: {
    pending: 'Pending',
    review: 'Under Review',
    interview: 'Interview Scheduled',
    accepted: 'Accepted',
    rejected: 'Not Selected',
  },
};
