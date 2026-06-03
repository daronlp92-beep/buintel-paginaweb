'use client'

import { useState } from 'react'
import { Mail, MessageSquare, Send, CalendarDays, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message
    const text = encodeURIComponent(
      `*Nueva consulta desde buintel.com*\n\n` +
        `*Nombre:* ${formData.name}\n` +
        `*Empresa:* ${formData.company}\n` +
        `*Email:* ${formData.email}\n` +
        `*Servicio de interés:* ${formData.service}\n` +
        `*Mensaje:* ${formData.message}`
    )
    window.open(`https://wa.me/528119762538?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section
      id="contacto"
      className="py-28 bg-[var(--bg-surface)] relative"
      aria-labelledby="contacto-heading"
    >
      <div className="absolute inset-0 dot-matrix opacity-20" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px shine-line"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="tech-badge inline-block px-3 py-1 rounded-full text-xs mb-4">
            Contacto
          </span>
          <h2
            id="contacto-heading"
            className="font-display text-4xl md:text-6xl font-light text-gradient-gold mb-6"
          >
            Comencemos a automatizar tu operación
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Agenda una sesión de diagnóstico gratuita de 30 minutos. Analizamos tus procesos
            e identificamos oportunidades de automatización con ROI claro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact options */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/528119762538?text=Hola%2C%20me%20interesa%20una%20sesi%C3%B3n%20de%20diagn%C3%B3stico%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium rounded-xl p-6 flex items-center gap-4 group hover:border-green-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#25d36622', border: '1px solid #25d36640' }}>
                <MessageSquare size={22} style={{ color: '#25d366' }} />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-0.5">WhatsApp Business</div>
                <div className="text-sm text-[var(--text-muted)]">+52 811 976 2538</div>
                <div className="text-xs text-green-400 mt-1">Respuesta inmediata</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:atencionaclientes@buintel.com"
              className="card-premium rounded-xl p-6 flex items-center gap-4 group hover:border-brand-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center shrink-0 group-hover:border-brand-500 transition-colors">
                <Mail size={22} className="text-brand-400" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-0.5">Correo electrónico</div>
                <div className="text-sm text-[var(--text-muted)] break-all">atencionaclientes@buintel.com</div>
              </div>
            </a>

            {/* Scheduling */}
            <a
              href="https://wa.me/528119762538?text=Hola%2C%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20diagn%C3%B3stico"
              target="_blank"
              rel="noopener noreferrer"
              className="card-premium rounded-xl p-6 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800 flex items-center justify-center shrink-0 group-hover:border-brand-500 transition-colors">
                <CalendarDays size={22} className="text-brand-400" />
              </div>
              <div>
                <div className="font-semibold text-[var(--text-primary)] mb-0.5">Sesión de diagnóstico</div>
                <div className="text-sm text-[var(--text-muted)]">Gratuita · 30 minutos</div>
                <div className="text-xs text-brand-400 mt-1">Sin compromiso</div>
              </div>
            </a>

            {/* Info */}
            <div className="glass rounded-xl p-6">
              <h3 className="font-semibold text-[var(--text-primary)] mb-3 text-sm">
                ¿Qué incluye la sesión gratuita?
              </h3>
              <ul className="space-y-2">
                {[
                  'Análisis de tus procesos actuales',
                  'Identificación de oportunidades',
                  'Estimación de ROI preliminar',
                  'Propuesta de tecnologías',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle size={13} className="text-brand-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-premium rounded-2xl p-12 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-brand-900 border border-brand-500 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-brand-400" />
                </div>
                <h3 className="font-display text-2xl text-[var(--text-primary)] mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-[var(--text-secondary)] text-sm max-w-sm">
                  Te hemos redirigido a WhatsApp con tu consulta. Nuestro equipo te
                  responderá en los próximos minutos.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 btn-outline px-5 py-2 rounded-lg text-sm text-[var(--text-secondary)] font-medium"
                >
                  Enviar otra consulta
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-premium rounded-2xl p-8 space-y-5"
                aria-label="Formulario de contacto"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[rgba(49,140,119,0.2)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[rgba(49,140,119,0.2)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[rgba(49,140,119,0.2)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[rgba(49,140,119,0.2)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-brand-500 transition-colors"
                    >
                      <option value="">Seleccionar servicio</option>
                      <option value="Automatización Financiera">Automatización Financiera</option>
                      <option value="Automatización Operativa">Automatización Operativa</option>
                      <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                      <option value="Desarrollo SaaS">Desarrollo SaaS</option>
                      <option value="Integraciones Empresariales">Integraciones Empresariales</option>
                      <option value="Automatización de Reportes">Automatización de Reportes</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu operación, los procesos que te gustaría automatizar o los retos que enfrentas..."
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-elevated)] border border-[rgba(49,140,119,0.2)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] text-sm focus:outline-none focus:border-brand-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-semibold text-sm"
                >
                  Enviar consulta por WhatsApp
                  <Send size={16} />
                </button>

                <p className="text-xs text-[var(--text-muted)] text-center">
                  Al enviar, aceptas nuestra{' '}
                  <a href="/privacy" className="text-brand-400 hover:text-brand-300 underline underline-offset-2">
                    Política de Privacidad
                  </a>
                  . Nunca compartimos tu información.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
