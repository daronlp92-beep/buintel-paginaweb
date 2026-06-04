'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

function getIcon(iconName: string): LucideIcon {
  const iconMap: { [key: string]: LucideIcon } = {
    Zap: Icons.Zap,
    Brain: Icons.Brain,
    Link: Icons.Link,
    BarChart3: Icons.BarChart3,
    DollarSign: Icons.DollarSign,
    Truck: Icons.Truck,
    TrendingUp: Icons.TrendingUp,
    Code: Icons.Code,
  };
  return iconMap[iconName] || Icons.Zap;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = getIcon(service.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="h-full p-8 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-primary-500/50 transition-all duration-300 hover:shadow-glow">
        {/* Icon */}
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-6 group-hover:shadow-glow transition-all">
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

        {/* Description */}
        <p className="text-neutral-400 text-sm mb-6 line-clamp-3">{service.description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
              <span className="text-primary-400 mt-1 flex-shrink-0">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Learn More Link */}
        <Link
          href={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
        >
          Más información
          <span className="group-hover:translate-x-1 transition-transform">→</span>
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
  title = 'Nuestros Servicios',
  description = 'Soluciones integrales de automatización e IA',
}: ServicesGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
