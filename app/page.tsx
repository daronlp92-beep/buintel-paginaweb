import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { BenefitsGrid } from '@/components/sections/BenefitsGrid';
import { TechnologiesGrid } from '@/components/sections/TechnologiesGrid';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import {
  services,
  technologies,
  processSteps,
  benefits,
  faqItems,
} from '@/lib/data';

export const metadata: Metadata = {
  title: 'BUINTEL | Agencia de Inteligencia Artificial y Automatización en México',
  description:
    'Agencia de IA en Monterrey: agentes inteligentes, automatizaciones a medida, desarrollos SaaS e integración de sistemas. Más de 12 años de experiencia, ROI en 30-90 días.',
  keywords: [
    'agencia inteligencia artificial México',
    'automatización de procesos empresariales',
    'agentes de IA empresariales',
    'automatización con n8n',
    'desarrollo software a medida',
    'transformación digital Monterrey',
    'consultoría IA México',
    'integración ERP CRM',
    'dashboards analítica empresarial',
    'automatización RPA',
    'OpenAI GPT empresas',
    'ahorro costos operativos',
  ],
  openGraph: {
    title: 'BUINTEL | Agencia de IA y Automatización · Monterrey, México',
    description:
      'Agentes de IA, automatizaciones inteligentes y desarrollos a medida para empresas que quieren escalar sin aumentar su equipo. 100+ proyectos entregados.',
    type: 'website',
    locale: 'es_MX',
  },
  alternates: {
    canonical: 'https://buintel.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ServicesGrid services={services} />
        <ProcessSteps steps={processSteps} />
        <BenefitsGrid benefits={benefits} />
        <TechnologiesGrid technologies={technologies} />
        <FAQSection items={faqItems} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
