import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import { COMPANY_INFO, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800/50 bg-neutral-950" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/buintel_logo_horizontal_dark.svg"
                alt="BUINTEL Automations"
                width={240}
                height={57}
                unoptimized
                className="h-14 w-auto"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm mb-6">
              {COMPANY_INFO.description}
            </p>
            <div className="flex items-center gap-3">
              {COMPANY_INFO.social.linkedin && (
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {COMPANY_INFO.social.twitter && (
                <a
                  href={COMPANY_INFO.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              )}
              {COMPANY_INFO.social.facebook && (
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {COMPANY_INFO.social.instagram && (
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-500 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Producto
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-5">
              Empresa
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-y border-neutral-800/50 bg-gradient-to-r from-neutral-900 to-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-white font-semibold text-lg">¿Listo para transformar tu operación?</h3>
            <p className="text-neutral-400 text-sm mt-1">Agenda una consulta gratuita con nuestros expertos</p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta`}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:shadow-glow transition-all whitespace-nowrap"
          >
            Contactar
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {year} {COMPANY_INFO.shortName}. Todos los derechos reservados.
          </p>
          <nav className="flex items-center gap-6 flex-wrap justify-center" aria-label="Legal">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-neutral-500 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
