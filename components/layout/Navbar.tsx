'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAVIGATION, COMPANY_INFO } from '@/lib/constants'
import { Button } from '@/components/ui/Button'

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
          ? 'backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/50 py-3'
          : 'bg-transparent py-4'
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Navegación principal"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="BUINTEL Automations — Inicio">
          {/* Ícono engranaje */}
          <Image
            src="/buintel_icon.svg"
            alt="BUINTEL Automations"
            width={42}
            height={42}
            unoptimized
            className="group-hover:drop-shadow-[0_0_12px_rgba(0,200,240,0.6)] transition-all duration-300"
          />
          {/* Wordmark */}
          <span className="hidden sm:inline font-bold text-white text-lg tracking-[0.08em] leading-none uppercase">
            BUINTEL
            <span className="block text-[9px] font-light tracking-[0.42em] text-[#00C8F0] uppercase mt-0.5">
              Automations
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {NAVIGATION.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm text-neutral-300 hover:text-primary-400 rounded-md hover:bg-primary-500/10 transition-all duration-200 font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20soluciones%20de%20automatizaci%C3%B3n`}
            variant="primary"
            size="sm"
          >
            Contactar
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-neutral-300 hover:text-white p-2 rounded-md hover:bg-primary-500/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden backdrop-blur-md bg-neutral-900/80 border-t border-neutral-800/50 px-4 py-4">
          <ul className="flex flex-col gap-1" role="list">
            {NAVIGATION.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm text-neutral-300 hover:text-white rounded-md hover:bg-primary-500/10 transition-colors font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-3 px-4">
              <Button
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20soluciones%20de%20automatizaci%C3%B3n`}
                variant="primary"
                size="sm"
                className="w-full"
                onClick={() => setMobileOpen(false)}
              >
                Contactar
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
