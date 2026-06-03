import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad y tratamiento de datos personales de Buintel Automations.',
  robots: { index: true, follow: true },
}

export default function PrivacyPage() {
  const updated = '1 de enero de 2025'

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
            >
              ← Volver al inicio
            </Link>
            <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
              Política de Privacidad
            </h1>
            <p className="text-[var(--text-muted)] text-sm">
              Última actualización: {updated}
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom space-y-10">
            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">1. Responsable del tratamiento</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                <strong className="text-[var(--text-primary)]">Buintel Automations</strong> es responsable del
                tratamiento de los datos personales que nos proporciones. Puedes contactarnos en:{' '}
                <a href="mailto:atencionaclientes@buintel.com" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
                  atencionaclientes@buintel.com
                </a>
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">2. Datos que recopilamos</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Recopilamos los siguientes tipos de datos personales:
              </p>
              <ul className="space-y-2">
                {[
                  'Nombre completo',
                  'Dirección de correo electrónico',
                  'Número de teléfono / WhatsApp',
                  'Nombre de la empresa',
                  'Información sobre tu operación empresarial (proporcionada voluntariamente)',
                  'Datos de navegación y uso del sitio web (cookies técnicas)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-brand-400 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">3. Finalidad del tratamiento</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Tus datos son utilizados únicamente para:
              </p>
              <ul className="space-y-2">
                {[
                  'Responder a tus consultas y solicitudes de información',
                  'Elaborar propuestas de soluciones de automatización',
                  'Agendar y realizar sesiones de diagnóstico',
                  'Gestionar la relación comercial y prestación de servicios',
                  'Enviar comunicaciones relacionadas con nuestros servicios (solo con tu consentimiento)',
                  'Mejorar la experiencia de nuestro sitio web',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-brand-400 mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">4. Base legal</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                El tratamiento de tus datos se basa en: (a) tu consentimiento explícito al
                contactarnos, (b) la ejecución de un contrato o medidas precontractuales, y
                (c) nuestro interés legítimo en proporcionar servicios de calidad a nuestros clientes.
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">5. Conservación de datos</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Conservamos tus datos personales durante el tiempo necesario para cumplir con
                las finalidades descritas, o durante el tiempo que la ley nos obligue a
                conservarlos. Una vez concluida la relación comercial, los datos serán
                eliminados de forma segura en un plazo máximo de 5 años.
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">6. Tus derechos (ARCO)</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Conforme a la Ley Federal de Protección de Datos Personales en Posesión de
                los Particulares (LFPDPPP), tienes derecho a:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { letter: 'A', right: 'Acceso', desc: 'Conocer qué datos tenemos sobre ti' },
                  { letter: 'R', right: 'Rectificación', desc: 'Corregir datos inexactos' },
                  { letter: 'C', right: 'Cancelación', desc: 'Solicitar la eliminación de tus datos' },
                  { letter: 'O', right: 'Oposición', desc: 'Oponerte a determinados tratamientos' },
                ].map((r) => (
                  <div key={r.letter} className="glass rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-6 h-6 rounded bg-brand-900 border border-brand-700 flex items-center justify-center text-xs font-bold text-brand-400">
                        {r.letter}
                      </span>
                      <span className="font-semibold text-sm text-[var(--text-primary)]">{r.right}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)]">{r.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-4">
                Para ejercer tus derechos, envía un correo a{' '}
                <a href="mailto:atencionaclientes@buintel.com" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
                  atencionaclientes@buintel.com
                </a>
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">7. Seguridad de datos</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para proteger tus
                datos personales contra acceso no autorizado, alteración, divulgación o
                destrucción. Nuestros sistemas utilizan cifrado SSL/TLS y acceso restringido
                por roles.
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">8. Transferencia de datos</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                No vendemos, arrendamos ni compartimos tus datos personales con terceros
                para fines de marketing. Solo compartimos datos con proveedores de servicios
                que nos asisten en la operación (como servicios cloud), bajo acuerdos de
                confidencialidad y solo en la medida necesaria.
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">9. Cambios a esta política</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Podemos actualizar esta política periódicamente. Te notificaremos de cambios
                significativos por correo electrónico o mediante un aviso destacado en nuestro
                sitio web. Te recomendamos revisar esta página regularmente.
              </p>
            </section>

            <section className="card-premium rounded-2xl p-8">
              <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">10. Contacto</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Para cualquier pregunta sobre esta política de privacidad, contáctanos:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-[var(--text-secondary)]">
                  📧{' '}
                  <a href="mailto:atencionaclientes@buintel.com" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
                    atencionaclientes@buintel.com
                  </a>
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  📱{' '}
                  <a href="https://wa.me/528119762538" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
                    +52 811 976 2538
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
