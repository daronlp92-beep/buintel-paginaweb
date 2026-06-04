'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar con HubSpot o servicio de email
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <section className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contacta con Nosotros</h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              ¿Tienes preguntas? Nos encantaría escucharte. Contáctanos y agenda tu sesión de diagnóstico gratuita.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/20 border border-primary-500/50">
                    <Mail className="h-6 w-6 text-primary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:contacto@buintel.com"
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    contacto@buintel.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-500/20 border border-secondary-500/50">
                    <Phone className="h-6 w-6 text-secondary-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">WhatsApp</h3>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                    className="text-neutral-400 hover:text-secondary-400 transition-colors"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-green/20 border border-accent-green/50">
                    <MapPin className="h-6 w-6 text-accent-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Ubicación</h3>
                  <p className="text-neutral-400">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="tu@empresa.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="+52 (XX) XXXX-XXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu necesidad..."
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {submitted ? 'Mensaje Enviado ✓' : 'Enviar Mensaje'}
                </Button>

                {/* Disclaimer */}
                <p className="text-xs text-neutral-500 text-center">
                  Al enviar este formulario, aceptas nuestra política de privacidad y términos de servicio.
                </p>
              </form>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <section className="p-12 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Prefiero contactar por WhatsApp</h2>
            <p className="text-neutral-300 mb-8">Obtén respuesta inmediata directamente en tu teléfono</p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola%2C%20me%20gustaría%20agendar%20una%20consulta`}
              className="inline-block px-8 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors"
            >
              Iniciar Chat en WhatsApp
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
