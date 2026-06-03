import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description: 'Términos y condiciones de uso de los servicios de Buintel Automations.',
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  const updated = '1 de enero de 2025'

  const sections = [
    {
      num: '1',
      title: 'Aceptación de los términos',
      content:
        'Al acceder y utilizar el sitio web de Buintel Automations (buintel.com) y/o contratar nuestros servicios, aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.',
    },
    {
      num: '2',
      title: 'Descripción de los servicios',
      content:
        'Buintel Automations ofrece servicios de automatización empresarial, desarrollo de soluciones de inteligencia artificial, integraciones de sistemas, desarrollo de plataformas SaaS y consultoría en transformación digital. Los servicios específicos se detallan en cada propuesta o contrato individual con el cliente.',
    },
    {
      num: '3',
      title: 'Propiedad intelectual',
      content:
        'Todo el contenido de este sitio web, incluyendo textos, gráficos, logotipos, íconos, imágenes, clips de audio y software, es propiedad de Buintel Automations y está protegido por las leyes de propiedad intelectual aplicables en México. Las soluciones y desarrollos entregados al cliente son propiedad del cliente una vez completado el pago correspondiente, salvo acuerdo en contrario por escrito.',
    },
    {
      num: '4',
      title: 'Confidencialidad',
      content:
        'Buintel Automations se compromete a mantener la confidencialidad de toda la información empresarial y operativa que el cliente comparta durante el proceso de diagnóstico, propuesta y ejecución de proyectos. Esta obligación se extiende a todos los empleados y colaboradores de Buintel Automations.',
    },
    {
      num: '5',
      title: 'Limitación de responsabilidad',
      content:
        'Buintel Automations no será responsable por daños indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar nuestros servicios. Nuestra responsabilidad máxima en cualquier circunstancia estará limitada al monto pagado por el cliente en los últimos 3 meses de servicio.',
    },
    {
      num: '6',
      title: 'Obligaciones del cliente',
      content:
        'El cliente se compromete a: (a) proporcionar información veraz y completa para el desarrollo de los proyectos, (b) realizar los pagos en los plazos acordados, (c) designar un punto de contacto responsable del proyecto, (d) no utilizar las soluciones desarrolladas para actividades ilegales o contrarias a la ética empresarial.',
    },
    {
      num: '7',
      title: 'Pagos y facturación',
      content:
        'Los términos de pago se especifican en cada contrato o propuesta individual. Buintel Automations emite facturas electrónicas conforme a la legislación fiscal mexicana. Los pagos no realizados en plazo podrán generar cargos por mora del 2% mensual sobre el saldo pendiente.',
    },
    {
      num: '8',
      title: 'Modificación y terminación de servicios',
      content:
        'Cualquier modificación al alcance del proyecto requiere acuerdo por escrito entre ambas partes. La terminación anticipada de un contrato por parte del cliente generará el cobro proporcional del trabajo realizado hasta esa fecha. Buintel Automations puede suspender servicios en caso de incumplimiento de pago, previa notificación con 5 días hábiles de anticipación.',
    },
    {
      num: '9',
      title: 'Garantía de los servicios',
      content:
        'Buintel Automations garantiza que los servicios serán prestados con el nivel de profesionalismo y calidad técnica descrito en cada propuesta. En caso de defectos en el trabajo entregado, nos comprometemos a realizar las correcciones necesarias sin costo adicional durante un período de 30 días naturales posterior a la entrega.',
    },
    {
      num: '10',
      title: 'Legislación aplicable',
      content:
        'Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa se someterá a la jurisdicción de los tribunales competentes de México, D.F./CDMX, renunciando las partes a cualquier otro fuero que pudiera corresponderles.',
    },
    {
      num: '11',
      title: 'Modificaciones a los términos',
      content:
        'Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor al momento de su publicación en el sitio web. El uso continuado de nuestros servicios después de la publicación de cambios constituye la aceptación de los nuevos términos.',
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
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] mb-8 transition-colors"
            >
              ← Volver al inicio
            </Link>
            <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl text-gradient-gold mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-[var(--text-muted)] text-sm">
              Última actualización: {updated}
            </p>
            <p className="text-[var(--text-secondary)] text-sm mt-3 max-w-2xl">
              Por favor, lee detenidamente estos términos antes de contratar o utilizar
              los servicios de Buintel Automations.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((s) => (
              <section key={s.num} className="card-premium rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-brand-950 border border-brand-800 flex items-center justify-center text-xs font-bold text-brand-400 shrink-0 mt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <h2 className="font-display text-xl text-[var(--text-primary)] mb-3">
                      {s.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                      {s.content}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Contact */}
          <div className="mt-10 glass rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl text-[var(--text-primary)] mb-3">
              ¿Tienes preguntas sobre estos términos?
            </h2>
            <p className="text-[var(--text-secondary)] text-sm mb-5">
              Nuestro equipo está disponible para aclarar cualquier duda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:atencionaclientes@buintel.com"
                className="btn-primary px-6 py-3 rounded-xl text-white font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                atencionaclientes@buintel.com
              </a>
              <a
                href="https://wa.me/528119762538"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-6 py-3 rounded-xl text-[var(--text-secondary)] font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                WhatsApp: +52 811 976 2538
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
