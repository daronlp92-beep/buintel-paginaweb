import {
  Service,
  CaseStudy,
  Technology,
  ProcessStep,
  Benefit,
  Testimonial,
} from '@/lib/types';

export const services: Service[] = [
  {
    id: 'automation-processes',
    icon: 'Zap',
    title: 'Automatización de Procesos',
    description:
      'Elimina tareas repetitivas y errores manuales automatizando tus procesos operativos críticos.',
    features: [
      'Identificación de cuellos de botella',
      'Diseño de flujos optimizados',
      'Automatización end-to-end',
      'Monitoreo y alertas',
    ],
  },
  {
    id: 'ai-enterprise',
    icon: 'Brain',
    title: 'Inteligencia Artificial Empresarial',
    description:
      'Implementa agentes inteligentes que aprenden, toman decisiones y automatizan procesos complejos.',
    features: [
      'Agentes de IA especializados',
      'Procesamiento de lenguaje natural',
      'Integración con LLMs (OpenAI, Claude)',
      'Automatización inteligente de decisiones',
    ],
  },
  {
    id: 'systems-integration',
    icon: 'Link',
    title: 'Integración de Sistemas',
    description:
      'Conecta tus aplicaciones empresariales (ERP, CRM, etc.) en una orquestación única.',
    features: [
      'APIs REST y webhooks',
      'Sincronización de datos',
      'ETL automático',
      'Comunicación en tiempo real',
    ],
  },
  {
    id: 'dashboards-analytics',
    icon: 'BarChart3',
    title: 'Dashboards y Analítica',
    description:
      'Visualiza datos críticos en tiempo real con dashboards ejecutivos personalizados.',
    features: [
      'Power BI y Tableau',
      'KPIs en tiempo real',
      'Reportes automáticos',
      'Inteligencia de negocio',
    ],
  },
  {
    id: 'financial-automation',
    icon: 'DollarSign',
    title: 'Automatización Financiera',
    description:
      'Automatiza conciliaciones, facturación, cobranzas y procesos financieros complejos.',
    features: [
      'Conciliaciones automáticas',
      'Generación de facturas',
      'Cobranza inteligente',
      'Auditoría y compliance',
    ],
  },
  {
    id: 'supply-chain',
    icon: 'Truck',
    title: 'Automatización Supply Chain',
    description:
      'Optimiza inventarios, replenishment y logística con automatización integral.',
    features: [
      'Gestión de inventarios',
      'Replenishment automático',
      'Planogramas masivos',
      'Trazabilidad completa',
    ],
  },
  {
    id: 'commercial-automation',
    icon: 'TrendingUp',
    title: 'Automatización Comercial',
    description:
      'Impulsa ventas automatizando forecast, reportes y procesos comerciales.',
    features: [
      'Forecast de ventas',
      'Proyecciones financieras',
      'Reportes ejecutivos',
      'Inteligencia de mercado',
    ],
  },
  {
    id: 'saas-solutions',
    icon: 'Code',
    title: 'Desarrollo SaaS',
    description:
      'Creamos soluciones SaaS escalables personalizadas a tu industria.',
    features: [
      'Arquitectura en la nube',
      'Escalabilidad empresarial',
      'Multi-tenant',
      'API RESTful avanzada',
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'sade',
    title: 'SADE',
    subtitle: 'Sistema Automatizado de Diferencias de Efectivo',
    description:
      'Automatización de conciliaciones financieras entre sistemas ERP y empresas de traslado de valores. Implementado para una de las mayores empresas de retail en Latinoamérica.',
    image: '/images/cases/sade.jpg',
    results: [
      {
        metric: 'Reducción de tiempo',
        value: '95%',
        label: 'Operativo reducido',
      },
      {
        metric: 'Eliminación de errores',
        value: '99.8%',
        label: 'Precisión alcanzada',
      },
      {
        metric: 'Procesos por día',
        value: '1,000+',
        label: 'Conciliaciones automáticas',
      },
    ],
    technologies: ['Python', 'PostgreSQL', 'n8n', 'Azure'],
  },
  {
    id: 'saor',
    title: 'SAOR',
    subtitle: 'Sistema Automatizado de Operación de Replenishment',
    description:
      'Automatización integral de procesos de abastecimiento e inventario. Optimización de stock, reorden automático y predicción de demanda.',
    image: '/images/cases/saor.jpg',
    results: [
      {
        metric: 'Tiempo de reorden',
        value: '87%',
        label: 'Reducción',
      },
      {
        metric: 'Stockouts evitados',
        value: '92%',
        label: 'Mejora en disponibilidad',
      },
      {
        metric: 'ROI',
        value: '340%',
        label: 'En 12 meses',
      },
    ],
    technologies: ['Python', 'Machine Learning', 'SQL Server', 'Power BI'],
  },
  {
    id: 'saop',
    title: 'SAOP',
    subtitle: 'Sistema Automatizado de Operación de Planogramas',
    description:
      'Automatización masiva de generación de planogramas para puntos de venta. Reduce tiempo de creación de 5.4 minutos a menos de 50 segundos.',
    image: '/images/cases/saop.jpg',
    results: [
      {
        metric: 'Planogramas generados',
        value: '80,000+',
        label: 'Automáticamente',
      },
      {
        metric: 'Tiempo por planograma',
        value: '91%',
        label: 'Reducido',
      },
      {
        metric: 'Cobertura nacional',
        value: 'Escalable',
        label: 'Múltiples regiones',
      },
    ],
    technologies: ['n8n', 'Python', 'PostgreSQL', 'Azure'],
  },
];

const SI = 'https://cdn.simpleicons.org'

export const technologies: Technology[] = [
  { id: 'openai',       name: 'OpenAI',          icon: '🤖', logoUrl: `${SI}/openai/ffffff`,           category: 'IA' },
  { id: 'n8n',          name: 'n8n',              icon: '⚙️', logoUrl: `${SI}/n8n`,                     category: 'Automatización' },
  { id: 'python',       name: 'Python',           icon: '🐍', logoUrl: `${SI}/python`,                  category: 'Backend' },
  { id: 'postgresql',   name: 'PostgreSQL',       icon: '🗄️', logoUrl: `${SI}/postgresql`,              category: 'Base de Datos' },
  { id: 'azure',        name: 'Azure',            icon: '☁️', logoUrl: `${SI}/microsoftazure`,          category: 'Cloud' },
  { id: 'teams',        name: 'Microsoft Teams',  icon: '💬', logoUrl: `${SI}/microsoftteams`,          category: 'Integración' },
  { id: 'powerbi',      name: 'Power BI',         icon: '📊', logoUrl: `${SI}/powerbi`,                 category: 'Analytics' },
  { id: 'tableau',      name: 'Tableau',          icon: '📈', logoUrl: `${SI}/tableau`,                 category: 'Analytics' },
  { id: 'shopify',      name: 'Shopify',          icon: '🛍️', logoUrl: `${SI}/shopify`,                 category: 'E-commerce' },
  { id: 'sqlserver',    name: 'SQL Server',       icon: '💾', logoUrl: `${SI}/microsoftsqlserver`,      category: 'Base de Datos' },
  { id: 'github',       name: 'GitHub',           icon: '🐙', logoUrl: `${SI}/github/ffffff`,           category: 'DevOps' },
  { id: 'docker',       name: 'Docker',           icon: '🐳', logoUrl: `${SI}/docker`,                  category: 'DevOps' },
  { id: 'restapi',      name: 'APIs REST',         icon: '🔌', logoUrl: `${SI}/openapiinitiative/ffffff`, category: 'Integración' },
  { id: 'microsoft365', name: 'Microsoft 365',    icon: '📱', logoUrl: `${SI}/microsoftoffice`,         category: 'Integración' },
  { id: 'whatsapp',     name: 'WhatsApp',         icon: '💬', logoUrl: `${SI}/whatsapp`,                category: 'Integración' },
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Diagnóstico',
    description:
      'Analizamos tus procesos actuales, identificamos cuellos de botella y oportunidades de automatización.',
    icon: 'Search',
  },
  {
    number: 2,
    title: 'Diseño',
    description:
      'Diseñamos soluciones personalizadas que se adapten a tu estrategia y requisitos específicos.',
    icon: 'Pencil',
  },
  {
    number: 3,
    title: 'Automatización',
    description:
      'Desarrollamos e implementamos la solución utilizando las mejores prácticas y tecnologías.',
    icon: 'Zap',
  },
  {
    number: 4,
    title: 'Implementación',
    description:
      'Desplegamos en producción con pruebas rigurosas, documentación y capacitación de usuarios.',
    icon: 'Rocket',
  },
  {
    number: 5,
    title: 'Escalamiento',
    description:
      'Monitoreamos, optimizamos y escalamos la solución para garantizar resultados sostenidos.',
    icon: 'TrendingUp',
  },
];

export const benefits: Benefit[] = [
  {
    id: 'less-manual',
    icon: 'Zap',
    title: 'Menos Trabajo Manual',
    description:
      'Libera tu equipo de tareas repetitivas para enfocarse en trabajo estratégico.',
  },
  {
    id: 'fewer-errors',
    icon: 'CheckCircle',
    title: 'Menos Errores',
    description: 'Elimina errores humanos con procesos automatizados y validados.',
  },
  {
    id: 'higher-speed',
    icon: 'Zap',
    title: 'Mayor Velocidad',
    description:
      'Completa procesos en minutos que antes tomaban horas o días.',
  },
  {
    id: 'higher-profit',
    icon: 'TrendingUp',
    title: 'Mayor Rentabilidad',
    description:
      'Reduce costos operativos e incrementa márgenes de ganancia significativamente.',
  },
  {
    id: 'scalability',
    icon: 'Maximize2',
    title: 'Escalabilidad',
    description:
      'Crece sin aumentar proporcialmente tu equipo operativo o gastos.',
  },
  {
    id: 'data-insight',
    icon: 'BarChart3',
    title: 'Inteligencia de Datos',
    description:
      'Toma decisiones basadas en datos en tiempo real con dashboards ejecutivos.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Director de Operaciones',
    role: 'Director de Operaciones',
    company: 'Empresa Retail Major',
    text: 'La solución SADE transformó completamente nuestros procesos de conciliación. Pasamos de 8 horas diarias de trabajo manual a un proceso completamente automático.',
    stars: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Gerente de Supply Chain',
    role: 'Gerente Supply Chain',
    company: 'Distribuidora Multisector',
    text: 'Con SAOR reducimos significativamente nuestros stockouts y mejoramos la rotación de inventario. El ROI se alcanzó en menos de 6 meses.',
    stars: 5,
  },
  {
    id: 'testimonial-3',
    name: 'CFO',
    role: 'Chief Financial Officer',
    company: 'Empresa Financiera',
    text: 'La automatización de reportes financieros nos permitió cerrar los libros 3 días antes y con 99.8% de precisión.',
    stars: 5,
  },
];

export const faqItems = [
  {
    question: '¿Cuánto tiempo toma implementar una automatización?',
    answer:
      'Depende de la complejidad del proceso. Típicamente, un primer proyecto crítico puede estar automatizado en 2-4 semanas. Procesos simples pueden tomar días, mientras que soluciones complejas pueden tomar 2-3 meses.',
  },
  {
    question: '¿Necesito cambiar mi ERP/CRM actual?',
    answer:
      'No. Nos conectamos a tus sistemas actuales (SAP, Oracle, Salesforce, Excel, etc.) sin necesidad de reemplazarlos. Actuamos como una capa de inteligencia y automatización sobre ellos.',
  },
  {
    question: '¿Cuál es el ROI típico?',
    answer:
      'El ROI es inmediato al liberar horas de trabajo manual. Nuestros clientes típicamente ven retorno de inversión entre 30-90 días, con ahorros anuales entre 40-60% en costos operativos.',
  },
  {
    question: '¿Manejan la seguridad de datos?',
    answer:
      'Sí. La seguridad es prioridad. Podemos desplegar en tu infraestructura propia (On-Premise) o usar nuestra nube segura con encriptación de grado bancario.',
  },
  {
    question: '¿Pueden desplegar en mi nube (AWS, Azure, GCP)?',
    answer:
      'Sí, somos agnósticos a la nube. Podemos desplegar en tu infraestructura preferida, ya sea AWS, Azure, Google Cloud o en tus servidores locales.',
  },
  {
    question: '¿Qué soporte ofrecen post-implementación?',
    answer:
      'Ofrecemos monitoreo 24/7, mantenimiento preventivo, optimizaciones continuas y ajustes según tus necesidades operativas.',
  },
];
