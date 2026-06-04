import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: 'Aviso legal y condiciones de uso del sitio web de Buintel Automations.',
  robots: { index: true, follow: true },
}

export default function LegalPage() {
  const updated = '1 de enero de 2025'

  const sections = [
    {
      num: '1',
      title: 'Titular del sitio web',
      content:
        'El titular y responsable del sitio web buintel.com es Buintel Automations. Para cualquier consulta, puedes contactarnos en contacto@buintel.com o en el número de WhatsApp +52 811 976 2538.',
    },
    {
      num: '2',
      title: 'Objeto y ámbito de aplicación',
      content:
        'El presente Aviso Legal regula el acceso, navegación y uso del sitio web buintel.com, así como las responsabilidades derivadas de la utilización de sus contenidos. El acceso al sitio web y la utilización de sus servicios implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este aviso legal.',
    },
    {
      num: '3',
      title: 'Propiedad intelectual e industrial',
      content:
        'Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, gráficos, diseño, código fuente, y demás elementos, son propiedad exclusiva de Buintel Automations o de terceros que han autorizado su uso. Queda expresamente prohibida la reproducción, distribución, comunicación pública o transformación de estos contenidos sin la autorización expresa y escrita de Buintel Automations.',
    },
    {
      num: '4',
      title: 'Exclusión de responsabilidad',
      content:
        'Buintel Automations no garantiza la disponibilidad y continuidad del funcionamiento del sitio web. Asimismo, no se responsabiliza de los daños y perjuicios que pudieran derivarse de la falta de disponibilidad o de continuidad del sitio web, ni de los errores en los contenidos. Buintel Automations tampoco es responsable de los contenidos de los sitios web de terceros accesibles mediante enlaces desde este sitio.',
    },
    {
      num: '5',
      title: 'Política de enlaces',
      content:
        'El sitio web puede contener enlaces a páginas web de terceros. Buintel Automations no asume ninguna responsabilidad por el contenido, informaciones o servicios que aparezcan en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre Buintel Automations y las personas o entidades titulares de tales contenidos o titulares de los sitios donde se encuentren.',
    },
    {
      num: '6',
      title: 'Uso correcto del sitio web',
      content:
        'El usuario se compromete a utilizar el sitio web de conformidad con la ley, este aviso legal y las buenas costumbres y el orden público. Queda prohibido el uso del sitio web con fines ilícitos o lesivos contra Buintel Automations o cualquier tercero, o que puedan causar perjuicio o impedir el normal funcionamiento del sitio web.',
    },
    {
      num: '7',
      title: 'Legislación aplicable y jurisdicción',
      content:
        'La relación entre Buintel Automations y los usuarios del sitio web se rige por la legislación mexicana. Para la resolución de cualquier controversia que pudiera surgir, las partes se someten a la jurisdicción de los tribunales competentes de México, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.',
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Aviso Legal</h1>
            <p className="text-neutral-500 text-sm">Última actualización: {updated}</p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s) => (
              <section
                key={s.num}
                className="card-premium rounded-2xl p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-xs font-bold text-primary-400 shrink-0 mt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-3">{s.title}</h2>
                    <p className="text-neutral-400 leading-relaxed text-sm">{s.content}</p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">¿Tienes preguntas legales?</h2>
            <p className="text-neutral-400 text-sm mb-5">
              Contáctanos directamente y te responderemos a la brevedad.
            </p>
            <a
              href="mailto:contacto@buintel.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-glow transition-all text-sm"
            >
              contacto@buintel.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
