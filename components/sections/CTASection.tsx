'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTASection({
  title = '¿Listo para transformar tu operación?',
  subtitle = 'Agenda una consulta gratuita con nuestros expertos en automatización e IA',
  ctaText = 'Agendar Consulta',
  ctaHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-purple/10 -z-10" />
      <div className="absolute top-10 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl -z-10" />

      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title.split(' ').map((word, idx) => (
            <span key={idx}>{word} </span>
          ))}
        </h2>

        <p className="text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href={ctaHref}>
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button variant="outline" size="lg" href="/about">
            Conocer más
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
