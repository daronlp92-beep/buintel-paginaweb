import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: 'Política de uso de cookies en el sitio web de Buintel Automations.',
  robots: { index: true, follow: true },
}

const cookieTypes = [
  {
    type: 'Técnicas / Esenciales',
    purpose: 'Necesarias para el funcionamiento básico del sitio web.',
    examples: 'Sesiones, preferencias de idioma, seguridad.',
    duration: 'Sesión o hasta 1 año',
    canDisable: false,
  },
  {
    type: 'Analíticas',
    purpose: 'Nos permiten entender cómo los usuarios interactúan con el sitio.',
    examples: 'Google Analytics (páginas visitadas, tiempo en sitio, fuente de tráfico).',
    duration: 'Hasta 2 años',
    canDisable: true,
  },
  {
    type: 'De funcionalidad',
    purpose: 'Permiten recordar tus preferencias para mejorar la experiencia.',
    examples: 'Preferencias de visualización, idioma seleccionado.',
    duration: 'Hasta 1 año',
    canDisable: true,
  },
]

export default function CookiesPage() {
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
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 mb-8 transition-colors"
            >
              ← Volver al inicio
            </Link>
            <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Política de Cookies
            </h1>
            <p className="text-neutral-500 text-sm">Última actualización: {updated}</p>
          </div>

          <div className="space-y-8">
            {/* What are cookies */}
            <section className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">¿Qué son las cookies?</h2>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web
                funcionen de manera más eficiente y para proporcionar información a los propietarios
                del sitio. Las cookies no contienen virus ni pueden acceder a información personal
                almacenada en tu dispositivo.
              </p>
            </section>

            {/* How we use them */}
            <section className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                ¿Cómo utilizamos las cookies?
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm mb-6">
                Buintel Automations utiliza cookies para mejorar tu experiencia en nuestro sitio
                web, analizar el tráfico y personalizar contenido. A continuación, describimos los
                tipos de cookies que utilizamos:
              </p>

              {/* Cookie types table */}
              <div className="space-y-4">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.type}
                    className="p-6 rounded-xl border border-neutral-800 bg-neutral-950/50"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-white text-sm">{cookie.type}</h3>
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          cookie.canDisable
                            ? 'bg-secondary-500/10 text-secondary-300 border border-secondary-500/30'
                            : 'bg-primary-500/10 text-primary-300 border border-primary-500/30'
                        }`}
                      >
                        {cookie.canDisable ? 'Opcional' : 'Necesaria'}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-xs mb-2">
                      <span className="text-neutral-300 font-medium">Propósito:</span>{' '}
                      {cookie.purpose}
                    </p>
                    <p className="text-neutral-400 text-xs mb-2">
                      <span className="text-neutral-300 font-medium">Ejemplos:</span>{' '}
                      {cookie.examples}
                    </p>
                    <p className="text-neutral-400 text-xs">
                      <span className="text-neutral-300 font-medium">Duración:</span>{' '}
                      {cookie.duration}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Control cookies */}
            <section className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                ¿Cómo controlar las cookies?
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm mb-4">
                Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las
                cookies que ya están en tu dispositivo y puedes configurar la mayoría de los
                navegadores para que no se acepten cookies. Sin embargo, si haces esto, es posible
                que tengas que ajustar manualmente algunas preferencias cada vez que visites un
                sitio.
              </p>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Para gestionar las cookies, accede a la configuración de tu navegador:
              </p>
              <ul className="mt-3 space-y-1">
                {[
                  'Google Chrome: Configuración → Privacidad y seguridad → Cookies',
                  'Mozilla Firefox: Opciones → Privacidad y seguridad',
                  'Safari: Preferencias → Privacidad',
                  'Microsoft Edge: Configuración → Privacidad, búsqueda y servicios',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-neutral-400">
                    <span className="text-primary-400 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Third party */}
            <section className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Cookies de terceros</h2>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Algunas cookies son colocadas por servicios de terceros que aparecen en nuestras
                páginas, como herramientas de análisis (Google Analytics). Estos servicios tienen
                sus propias políticas de privacidad y cookies, sobre las cuales Buintel Automations
                no tiene control. Te recomendamos revisar las políticas de privacidad de estos
                terceros.
              </p>
            </section>

            {/* Updates */}
            <section className="card-premium rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Actualizaciones de esta política
              </h2>
              <p className="text-neutral-400 leading-relaxed text-sm">
                Podemos actualizar esta política de cookies periódicamente para reflejar cambios en
                las cookies que utilizamos o por otras razones operativas, legales o
                reglamentarias. Por favor, visita esta página regularmente para mantenerte informado
                sobre el uso de cookies.
              </p>
            </section>
          </div>

          {/* Contact */}
          <div className="mt-10 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">¿Tienes dudas sobre las cookies?</h2>
            <p className="text-neutral-400 text-sm mb-5">Contáctanos y te ayudamos.</p>
            <a
              href="mailto:atencionaclientes@buintel.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-glow transition-all text-sm"
            >
              atencionaclientes@buintel.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
