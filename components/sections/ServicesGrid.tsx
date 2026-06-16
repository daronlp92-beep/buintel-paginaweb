'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '@/lib/types';

function getIcon(iconName: string): LucideIcon {
  const iconMap: { [key: string]: LucideIcon } = {
    Bot: Icons.Bot,
    Zap: Icons.Zap,
    Code2: Icons.Code2,
    GitMerge: Icons.GitMerge,
    BarChart3: Icons.BarChart3,
    Lightbulb: Icons.Lightbulb,
    Brain: Icons.Brain,
    Link: Icons.Link,
    DollarSign: Icons.DollarSign,
    Truck: Icons.Truck,
    TrendingUp: Icons.TrendingUp,
    Code: Icons.Code,
  };
  return iconMap[iconName] || Icons.Zap;
}

const iconGradients = [
  'from-primary-600 to-secondary-500',
  'from-secondary-500 to-primary-400',
  'from-accent-purple to-primary-500',
  'from-primary-500 to-accent-purple',
  'from-secondary-400 to-primary-600',
  'from-primary-500 to-secondary-400',
];

const glowColors = [
  'rgba(0,102,255,0.25)',
  'rgba(0,217,255,0.2)',
  'rgba(124,58,237,0.25)',
  'rgba(0,102,255,0.2)',
  'rgba(0,217,255,0.25)',
  'rgba(0,102,255,0.2)',
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = getIcon(service.icon);
  const gradient = iconGradients[index % iconGradients.length];
  const glow = glowColors[index % glowColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div
        className="cyber-card h-full p-7 rounded-2xl flex flex-col"
        style={{ '--glow-color': glow } as React.CSSProperties}
      >
        {/* Icon */}
        <div className="mb-6">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
            style={{ boxShadow: `0 0 24px ${glow}` }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
        </div>

        {/* Description */}
        <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2.5 mb-7">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-400">
              <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-primary-500/15 border border-primary-500/30 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-secondary-400" />
              </span>
              <span className="group-hover:text-neutral-300 transition-colors duration-200">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary-400 hover:text-secondary-300 transition-colors duration-200 mt-auto"
        >
          Saber más
          <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

interface ServicesGridProps {
  services: Service[];
  title?: string;
  description?: string;
}

export function ServicesGrid({
  services,
  title = 'Servicios de IA y Automatización',
  description = 'Todo lo que necesitas para convertir tu empresa en una organización inteligente, eficiente y escalable.',
}: ServicesGridProps) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 cyber-grid-dense opacity-30 -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-secondary-500 border border-secondary-500/30 bg-secondary-500/5 px-4 py-1.5 rounded-full">
            Servicios
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* Grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-500 text-sm mb-4">
            ¿No encuentras exactamente lo que buscas?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-secondary-300 font-semibold text-sm transition-colors"
          >
            Cuéntanos tu reto y lo resolvemos
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
