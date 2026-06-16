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
    id: 'ai-agents',
    icon: 'Bot',
    title: 'Agentes de IA',
    description:
      'Empleados digitales que trabajan 24/7 sin descanso, errores ni vacaciones. Responden, deciden y actúan de forma autónoma.',
    features: [
      'GPT-4o, Claude y modelos open-source',
      'Procesamiento de lenguaje natural',
      'Integración nativa con tus sistemas',
      'Aprendizaje y mejora continua',
    ],
  },
  {
    id: 'automation',
    icon: 'Zap',
    title: 'Automatizaciones Inteligentes',
    description:
      'Elimina el trabajo manual para siempre. Conectamos apps, APIs y bases de datos en flujos que corren solos.',
    features: [
      'n8n, Make y Zapier enterprise',
      'Flujos sin código y con código custom',
      'Disparadores en tiempo real',
      'Monitoreo 24/7 con alertas',
    ],
  },
  {
    id: 'custom-dev',
    icon: 'Code2',
    title: 'Desarrollos a Medida',
    description:
      'Software que resuelve exactamente TU problema. Sin plantillas genéricas, sin compromisos innecesarios.',
    features: [
      'Aplicaciones web y SaaS escalables',
      'Arquitectura cloud-native',
      'IA integrada desde el diseño',
      'Mantenimiento y evolución continua',
    ],
  },
  {
    id: 'systems-integration',
    icon: 'GitMerge',
    title: 'Integración de Sistemas',
    description:
      'Conecta tu ERP, CRM, e-commerce y todas tus apps en un ecosistema unificado e inteligente.',
    features: [
      'SAP, Oracle, Salesforce y más',
      'APIs REST y webhooks en tiempo real',
      'ETL y sincronización automática',
      'Sin cambiar tus sistemas actuales',
    ],
  },
  {
    id: 'analytics-ai',
    icon: 'BarChart3',
    title: 'Analítica con IA',
    description:
      'Toma decisiones basadas en datos, no en corazonadas. KPIs en tiempo real con predicciones de IA.',
    features: [
      'Dashboards ejecutivos en vivo',
      'IA predictiva y forecasting',
      'Power BI y visualizaciones custom',
      'Alertas inteligentes automáticas',
    ],
  },
  {
    id: 'ai-consulting',
    icon: 'Lightbulb',
    title: 'Consultoría Estratégica IA',
    description:
      'Tu hoja de ruta hacia la empresa inteligente. Identificamos y priorizamos tus mayores oportunidades de automatización.',
    features: [
      'Diagnóstico profundo de procesos',
      'Plan de transformación digital',
      'Cálculo de ROI proyectado',
      'Acompañamiento ejecutivo completo',
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
  { id: 'openai',       name: 'OpenAI',          icon: '🤖', logoUrl: '/tech/openai.svg',              category: 'IA' },
  { id: 'n8n',          name: 'n8n',              icon: '⚙️', logoUrl: `${SI}/n8n`,                     category: 'Automatización' },
  { id: 'python',       name: 'Python',           icon: '🐍', logoUrl: `${SI}/python`,                  category: 'Backend' },
  { id: 'postgresql',   name: 'PostgreSQL',       icon: '🗄️', logoUrl: `${SI}/postgresql`,              category: 'Base de Datos' },
  { id: 'azure',        name: 'Azure',            icon: '☁️', logoUrl: '/tech/azure.svg',               category: 'Cloud' },
  { id: 'teams',        name: 'Microsoft Teams',  icon: '💬', logoUrl: '/tech/teams.svg',               category: 'Integración' },
  { id: 'powerbi',      name: 'Power BI',         icon: '📊', logoUrl: '/tech/powerbi.svg',             category: 'Analytics' },
  { id: 'tableau',      name: 'Tableau',          icon: '📈', logoUrl: '/tech/tableau.svg',             category: 'Analytics' },
  { id: 'shopify',      name: 'Shopify',          icon: '🛍️', logoUrl: `${SI}/shopify`,                 category: 'E-commerce' },
  { id: 'sqlserver',    name: 'SQL Server',       icon: '💾', logoUrl: `${SI}/microsoftsqlserver`,      category: 'Base de Datos' },
  { id: 'github',       name: 'GitHub',           icon: '🐙', logoUrl: `${SI}/github/ffffff`,           category: 'DevOps' },
  { id: 'docker',       name: 'Docker',           icon: '🐳', logoUrl: `${SI}/docker`,                  category: 'DevOps' },
  { id: 'restapi',      name: 'APIs REST',         icon: '🔌', logoUrl: '/tech/restapi.svg',             category: 'Integración' },
  { id: 'microsoft365', name: 'Microsoft 365',    icon: '📱', logoUrl: '/tech/microsoft365.svg',        category: 'Integración' },
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
