import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { CaseStudiesGrid } from '@/components/sections/CaseStudiesGrid';
import { caseStudies } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Casos de Éxito - BUINTEL',
  description: 'Proyectos exitosos de automatización con resultados medibles',
};

export default function CasesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Casos de Éxito</h1>
            <p className="text-xl text-neutral-300 max-w-3xl">
              Transformaciones reales con resultados medibles. Empresas como la tuya que lograron automatizar sus
              procesos críticos y acelerar su crecimiento.
            </p>
          </section>

          {/* Cases Grid */}
          <CaseStudiesGrid
            caseStudies={caseStudies}
            title="Transformaciones Exitosas"
            description="Proyectos implementados con resultados comprobados"
          />

          {/* CTA */}
          <section className="mt-20 p-12 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">¿Tu empresa necesita una transformación similar?</h2>
            <p className="text-neutral-300 mb-8">
              Agenda una sesión de diagnóstico gratuita con nuestros expertos para explorar cómo podemos ayudarte.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Iniciar Conversación
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
