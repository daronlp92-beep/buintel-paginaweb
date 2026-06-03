'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#casos', label: 'Casos de uso' },
  { href: '#tecnologias', label: 'Tecnologías' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass-strong border-b border-[rgba(49,140,119,0.2)] py-3'
          : 'bg-transparent py-5'
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Buintel Automations — Inicio">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-shadow duration-300">
              <span className="font-display font-bold text-white text-sm tracking-wider">B</span>
            </div>
            <div className="absolute inset-0 rounded-lg bg-brand-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
          </div>
          <span className="font-display text-lg font-semibold tracking-wide">
            <span className="text-gradient">Buintel</span>
            <span className="text-[var(--text-secondary)] font-light ml-1 text-base">Automations</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-md hover:bg-[rgba(49,140,119,0.08)] transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/528119762538?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20soluciones%20de%20automatizaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white"
          >
            Agendar sesión
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--text-secondary)] hover:text-white p-2 rounded-md hover:bg-[rgba(49,140,119,0.08)] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-[rgba(49,140,119,0.15)] px-6 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm text-[var(--text-secondary)] hover:text-white rounded-md hover:bg-[rgba(49,140,119,0.1)] transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <a
                href="https://wa.me/528119762538?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20soluciones%20de%20automatizaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center px-4 py-3 rounded-lg text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Agendar sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
