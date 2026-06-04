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
  title: 'BUINTEL - Automatización Empresarial e Inteligencia Artificial',
  description:
    'Transformamos operaciones manuales en procesos inteligentes mediante automatización e IA. Soluciones empresariales con más de 12 años de experiencia.',
  keywords: [
    'automatización de procesos',
    'inteligencia artificial',
    'automatización empresarial',
    'transformación digital',
    'n8n',
    'OpenAI',
    'México',
  ],
  openGraph: {
    title: 'BUINTEL - Automatización Empresarial e IA',
    description: 'Transformamos operaciones manuales en procesos inteligentes',
    type: 'website',
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
