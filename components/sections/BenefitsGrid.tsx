'use client';

import { motion } from 'framer-motion';
import { Benefit } from '@/lib/types';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  benefit: Benefit;
  index: number;
}

function getIcon(iconName: string): LucideIcon {
  const iconMap: { [key: string]: LucideIcon } = {
    Zap: Icons.Zap,
    CheckCircle: Icons.CheckCircle,
    TrendingUp: Icons.TrendingUp,
    Maximize2: Icons.Maximize2,
    BarChart3: Icons.BarChart3,
  };
  return iconMap[iconName] || Icons.Circle;
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = getIcon(benefit.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group p-8 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-primary-500/50 transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 group-hover:shadow-glow transition-all">
        <Icon className="w-6 h-6 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>

      {/* Description */}
      <p className="text-neutral-400 text-sm">{benefit.description}</p>
    </motion.div>
  );
}

interface BenefitsGridProps {
  benefits: Benefit[];
  title?: string;
  description?: string;
}

export function BenefitsGrid({
  benefits,
  title = 'Beneficios Clave',
  description = 'Lo que lograrás con nuestras soluciones',
}: BenefitsGridProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
