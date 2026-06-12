// Color Scheme for BUINTEL
// Based on brand identity

export const COLORS = {
  primary: {
    main: '#0066FF', // Primary Blue
    light: '#E6F0FF',
    dark: '#004DBF',
  },
  secondary: {
    main: '#00D9FF', // Cyan Accent
    light: '#E6F9FF',
    dark: '#00A8CC',
  },
  accent: {
    orange: '#FF6B35',
    purple: '#7C3AED',
    green: '#10B981',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
    950: '#030712',
  },
  gradient: {
    primary: 'linear-gradient(135deg, #0066FF 0%, #00D9FF 100%)',
    dark: 'linear-gradient(135deg, #111827 0%, #1F2937 100%)',
    tech: 'linear-gradient(135deg, #0066FF 0%, #7C3AED 50%, #00D9FF 100%)',
  },
};

export const COMPANY_INFO = {
  name: 'BUINTEL AUTOMATIONS',
  shortName: 'BUINTEL',
  description:
    'Transformamos operaciones manuales en procesos inteligentes mediante Automatización e Inteligencia Artificial.',
  tagline: 'Automatización Empresarial + Inteligencia Artificial',
  email: 'atencionaclientes@buintel.com',
  phone: '+52 811 225 9630',
  whatsapp: '528112259630',
  address: 'Monterrey, Nuevo León, México',
  year_founded: 2024,
  social: {
    linkedin: 'https://linkedin.com/company/buintel',
    twitter: 'https://twitter.com/buintel',
    facebook: 'https://facebook.com/buintel',
    instagram: 'https://instagram.com/buintel',
    github: 'https://github.com/buintel',
  },
};

export const NAVIGATION = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contact' },
];

export const FOOTER_LINKS = {
  product: [
    { label: 'Servicios', href: '/services' },
    { label: 'Tecnologías', href: '#technologies' },
    { label: 'Blog', href: '/blog' },
  ],
  company: [
    { label: 'Contacto', href: '/contact' },
    { label: 'Carreras', href: '#careers' },
    { label: 'Prensa', href: '#press' },
  ],
  legal: [
    { label: 'Política de Privacidad', href: '/privacy' },
    { label: 'Términos y Condiciones', href: '/terms' },
    { label: 'Aviso Legal', href: '/legal' },
    { label: 'Política de Cookies', href: '/cookies' },
  ],
};

export const SEO_KEYWORDS = [
  'Automatización de procesos',
  'Inteligencia Artificial México',
  'Consultoría IA',
  'Automatización empresarial',
  'n8n',
  'OpenAI',
  'Automatización financiera',
  'Supply Chain Automation',
  'Digital Transformation',
  'RPA',
  'Workflow Automation',
  'Business Process Automation',
  'Microsoft 365 Integration',
  'Integración de sistemas',
  'Dashboards ejecutivos',
];
