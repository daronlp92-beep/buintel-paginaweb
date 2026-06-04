import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { services } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Servicios - BUINTEL',
  description: 'Conoce nuestros servicios de automatización e IA',
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Nuestros Servicios</h1>
            <p className="text-xl text-neutral-300 max-w-3xl">
              Soluciones integrales de automatización e inteligencia artificial diseñadas para transformar tu
              operación empresarial y acelerar tu crecimiento.
            </p>
          </section>

          {/* Services Grid */}
          <ServicesGrid
            services={services}
            title="Ocho Pilares de Transformación"
            description="Soluciones especializadas para cada necesidad operativa"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
