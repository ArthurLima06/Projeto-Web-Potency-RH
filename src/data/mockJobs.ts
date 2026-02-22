export interface Job {
  id: string;
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  location: string;
  contractType: 'clt' | 'pj' | 'temporary' | 'internship';
  category: string;
  salary?: {
    min?: number;
    max?: number;
    currency: string;
  };
  requirements: {
    pt: string[];
    en: string[];
  };
  benefits?: {
    pt: string[];
    en: string[];
  };
  postedAt: string;
  featured: boolean;
}

export const contractTypeLabels = {
  pt: {
    clt: 'CLT',
    pj: 'PJ',
    temporary: 'Temporário',
    internship: 'Estágio',
  },
  en: {
    clt: 'Full-time',
    pj: 'Contract',
    temporary: 'Temporary',
    internship: 'Internship',
  },
};

export const mockJobs: Job[] = [
  {
    id: '1',
    title: {
      pt: 'Analista de Recursos Humanos',
      en: 'Human Resources Analyst',
    },
    description: {
      pt: 'Buscamos um profissional experiente para atuar em processos de recrutamento e seleção, treinamento e desenvolvimento organizacional.',
      en: 'We are looking for an experienced professional to work on recruitment and selection processes, training and organizational development.',
    },
    location: 'São Paulo, SP',
    contractType: 'clt',
    category: 'rh',
    salary: {
      min: 5000,
      max: 7000,
      currency: 'BRL',
    },
    requirements: {
      pt: [
        'Graduação em Psicologia, Administração ou áreas afins',
        'Experiência mínima de 3 anos em RH',
        'Conhecimento em processos seletivos',
        'Excel avançado',
      ],
      en: [
        'Degree in Psychology, Business Administration or related fields',
        'Minimum 3 years experience in HR',
        'Knowledge in selection processes',
        'Advanced Excel',
      ],
    },
    benefits: {
      pt: ['Vale Refeição', 'Vale Transporte', 'Plano de Saúde', 'PLR'],
      en: ['Meal Voucher', 'Transport Voucher', 'Health Insurance', 'Profit Sharing'],
    },
    postedAt: '2024-01-15',
    featured: true,
  },
  {
    id: '2',
    title: {
      pt: 'Desenvolvedor Full Stack',
      en: 'Full Stack Developer',
    },
    description: {
      pt: 'Oportunidade para desenvolvedor com experiência em React e Node.js para atuar em projetos inovadores.',
      en: 'Opportunity for a developer with experience in React and Node.js to work on innovative projects.',
    },
    location: 'São Paulo, SP',
    contractType: 'pj',
    category: 'ti',
    salary: {
      min: 12000,
      max: 18000,
      currency: 'BRL',
    },
    requirements: {
      pt: [
        'Experiência com React e TypeScript',
        'Conhecimento em Node.js',
        'Banco de dados SQL e NoSQL',
        'Git e metodologias ágeis',
      ],
      en: [
        'Experience with React and TypeScript',
        'Knowledge in Node.js',
        'SQL and NoSQL databases',
        'Git and agile methodologies',
      ],
    },
    benefits: {
      pt: ['Trabalho remoto', 'Horário flexível'],
      en: ['Remote work', 'Flexible hours'],
    },
    postedAt: '2024-01-18',
    featured: true,
  },
  {
    id: '3',
    title: {
      pt: 'Assistente Administrativo',
      en: 'Administrative Assistant',
    },
    description: {
      pt: 'Vaga para profissional organizado e proativo para suporte às atividades administrativas da empresa.',
      en: 'Position for an organized and proactive professional to support the company administrative activities.',
    },
    location: 'Santo Amaro, SP',
    contractType: 'clt',
    category: 'administrativo',
    salary: {
      min: 2500,
      max: 3500,
      currency: 'BRL',
    },
    requirements: {
      pt: [
        'Ensino Médio completo',
        'Pacote Office',
        'Boa comunicação',
        'Organização',
      ],
      en: [
        'High school diploma',
        'Microsoft Office',
        'Good communication',
        'Organization skills',
      ],
    },
    benefits: {
      pt: ['Vale Refeição', 'Vale Transporte', 'Assistência Médica'],
      en: ['Meal Voucher', 'Transport Voucher', 'Medical Insurance'],
    },
    postedAt: '2024-01-20',
    featured: false,
  },
  {
    id: '4',
    title: {
      pt: 'Operador de Produção',
      en: 'Production Operator',
    },
    description: {
      pt: 'Contratação temporária para operador de linha de produção em indústria multinacional.',
      en: 'Temporary hiring for production line operator in a multinational industry.',
    },
    location: 'Guarulhos, SP',
    contractType: 'temporary',
    category: 'operacional',
    salary: {
      min: 2000,
      max: 2500,
      currency: 'BRL',
    },
    requirements: {
      pt: [
        'Ensino Fundamental completo',
        'Experiência em indústria',
        'Disponibilidade de horários',
      ],
      en: [
        'Elementary school diploma',
        'Industry experience',
        'Schedule flexibility',
      ],
    },
    benefits: {
      pt: ['Vale Transporte', 'Refeitório no local', 'Cesta básica'],
      en: ['Transport Voucher', 'On-site cafeteria', 'Food basket'],
    },
    postedAt: '2024-01-22',
    featured: false,
  },
  {
    id: '5',
    title: {
      pt: 'Estagiário de Marketing',
      en: 'Marketing Intern',
    },
    description: {
      pt: 'Oportunidade de estágio para estudantes de Marketing, Publicidade ou Comunicação.',
      en: 'Internship opportunity for Marketing, Advertising or Communication students.',
    },
    location: 'São Paulo, SP',
    contractType: 'internship',
    category: 'marketing',
    salary: {
      min: 1500,
      max: 1800,
      currency: 'BRL',
    },
    requirements: {
      pt: [
        'Cursando graduação em Marketing ou áreas afins',
        'Conhecimento em redes sociais',
        'Criatividade',
        'Inglês intermediário',
      ],
      en: [
        'Pursuing a degree in Marketing or related fields',
        'Social media knowledge',
        'Creativity',
        'Intermediate English',
      ],
    },
    benefits: {
      pt: ['Bolsa auxílio', 'Vale Transporte', 'Seguro de vida'],
      en: ['Scholarship', 'Transport Voucher', 'Life insurance'],
    },
    postedAt: '2024-01-25',
    featured: true,
  },
  {
    id: '6',
    title: {
      pt: 'Gerente Comercial',
      en: 'Sales Manager',
    },
    description: {
      pt: 'Posição para liderar equipe comercial e desenvolver estratégias de vendas B2B.',
      en: 'Position to lead commercial team and develop B2B sales strategies.',
    },
    location: 'São Paulo, SP',
    contractType: 'clt',
    category: 'comercial',
    salary: {
      min: 10000,
      max: 15000,
      currency: 'BRL',
    },
    requirements: {
      pt: [
        'Graduação em Administração, Marketing ou áreas afins',
        'Experiência mínima de 5 anos em vendas B2B',
        'Gestão de equipes',
        'CNH categoria B',
      ],
      en: [
        'Degree in Business Administration, Marketing or related fields',
        'Minimum 5 years experience in B2B sales',
        'Team management',
        "Driver's license",
      ],
    },
    benefits: {
      pt: ['Carro da empresa', 'Comissões', 'Plano de Saúde', 'PLR'],
      en: ['Company car', 'Commissions', 'Health Insurance', 'Profit Sharing'],
    },
    postedAt: '2024-01-28',
    featured: true,
  },
];

export const categories = {
  pt: {
    rh: 'Recursos Humanos',
    ti: 'Tecnologia da Informação',
    administrativo: 'Administrativo',
    operacional: 'Operacional',
    marketing: 'Marketing',
    comercial: 'Comercial',
  },
  en: {
    rh: 'Human Resources',
    ti: 'Information Technology',
    administrativo: 'Administrative',
    operacional: 'Operations',
    marketing: 'Marketing',
    comercial: 'Sales',
  },
};

export const locations = [
  'São Paulo, SP',
  'Santo Amaro, SP',
  'Guarulhos, SP',
  'Campinas, SP',
  'Remoto',
];
