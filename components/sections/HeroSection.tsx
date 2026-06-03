'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }> = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(49, 140, 119, ${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(82, 196, 160, ${p.opacity})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Background layers */}
      <div className="absolute inset-0 tech-grid opacity-60" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(49,140,119,0.12) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-64"
        style={{
          background: 'linear-gradient(to top, var(--bg-base), transparent)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-28 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 tech-badge px-4 py-2 rounded-full mb-8 animate-fadeInUp">
          <Zap size={13} className="text-brand-400" />
          <span>Automatización Empresarial · IA · Transformación Digital</span>
        </div>

        {/* Headline */}
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-none tracking-tight"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="text-gradient-gold block">Automatizamos</span>
          <span className="text-[var(--text-secondary)] block font-extralight mt-1">
            el futuro de tu
          </span>
          <span className="text-gradient block">operación</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Transformamos empresas a través de automatización inteligente, agentes de IA y
          soluciones tecnológicas de vanguardia. Menos errores, más velocidad, escala sin límites.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://wa.me/528119762538?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20diagn%C3%B3stico%20gratuita%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-sm md:text-base"
          >
            Agendar sesión gratuita
            <ArrowRight size={18} />
          </a>
          <a
            href="#servicios"
            className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-[var(--text-secondary)] font-semibold text-sm md:text-base"
          >
            Explorar servicios
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto">
          {[
            { value: '95%', label: 'Reducción de errores' },
            { value: '10×', label: 'Velocidad operativa' },
            { value: '24/7', label: 'Operación autónoma' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number text-3xl md:text-4xl mb-1">{stat.value}</div>
              <div className="text-xs text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-[var(--text-muted)] tracking-widest uppercase font-mono">
          Scroll
        </span>
        <ChevronDown size={16} className="text-brand-500 animate-bounce" />
      </div>
    </section>
  )
}
