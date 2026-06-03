import Link from 'next/link'
import { Mail, Phone, Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(49,140,119,0.15)] bg-[var(--bg-surface)]" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center">
                <span className="font-display font-bold text-white text-sm">B</span>
              </div>
              <span className="font-display text-lg font-semibold">
                <span className="text-gradient">Buintel</span>
                <span className="text-[var(--text-muted)] ml-1 font-light text-base">Automations</span>
              </span>
            </div>
            <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-sm mb-6">
              Transformamos las operaciones empresariales a través de automatización inteligente,
              inteligencia artificial y tecnología de vanguardia. Tu operación, automatizada.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/buintel-automations"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-[rgba(49,140,119,0.2)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-light)] hover:border-[rgba(49,140,119,0.4)] transition-all"
                aria-label="LinkedIn de Buintel Automations"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://twitter.com/buintel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-[rgba(49,140,119,0.2)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-light)] hover:border-[rgba(49,140,119,0.4)] transition-all"
                aria-label="Twitter de Buintel Automations"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://instagram.com/buintelautomations"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-md border border-[rgba(49,140,119,0.2)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-light)] hover:border-[rgba(49,140,119,0.4)] transition-all"
                aria-label="Instagram de Buintel Automations"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-sm tracking-wider uppercase mb-5">
              Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Automatización Financiera',
                'Automatización Operativa',
                'Inteligencia Artificial',
                'Desarrollo SaaS',
                'Integraciones Empresariales',
                'Automatización de Reportes',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="#servicios"
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[var(--text-primary)] font-semibold text-sm tracking-wider uppercase mb-5">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:atencionaclientes@buintel.com"
                  className="flex items-center gap-3 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
                >
                  <Mail size={15} className="text-brand-500 shrink-0" />
                  <span className="break-all">atencionaclientes@buintel.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/528119762538"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                >
                  <Phone size={15} className="text-brand-500 shrink-0" />
                  <span>+52 811 976 2538</span>
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://wa.me/528119762538?text=Hola%2C%20me%20interesa%20una%20sesi%C3%B3n%20de%20diagn%C3%B3stico%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
              >
                Sesión gratuita
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(49,140,119,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--text-muted)]">
            © {year} Buintel Automations. Todos los derechos reservados.
          </p>
          <nav className="flex items-center gap-6" aria-label="Legal">
            <Link
              href="/privacy"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
            >
              Términos y Condiciones
            </Link>
            <span className="text-xs text-[var(--text-muted)]">Aviso Legal</span>
          </nav>
        </div>
      </div>
    </footer>
  )
}
