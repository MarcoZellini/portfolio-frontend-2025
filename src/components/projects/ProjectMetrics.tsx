'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, Star, TrendingUp } from 'lucide-react';

interface ProjectMetricsProps {
  metrics: {
    performance?: string;
    users?: string;
    feedback?: string;
    businessImpact?: string;
  };
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  const metricItems = [
    {
      icon: BarChart3,
      label: 'Performance',
      value: metrics.performance,
      color: 'text-blue-500'
    },
    {
      icon: Users,
      label: 'Utenti',
      value: metrics.users,
      color: 'text-green-500'
    },
    {
      icon: Star,
      label: 'Feedback',
      value: metrics.feedback,
      color: 'text-yellow-500'
    },
    {
      icon: TrendingUp,
      label: 'Impatto Business',
      value: metrics.businessImpact,
      color: 'text-purple-500'
    }
  ].filter(item => item.value);

  if (metricItems.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card"
    >
      <h3 className="text-lg font-semibold text-secondary mb-4">
        Risultati e Metriche
      </h3>
      
      <div className="space-y-4">
        {metricItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-accent/5 rounded-lg"
          >
            <div className="flex items-center">
              <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
              <span className="text-sm font-medium text-secondary">{item.label}</span>
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {item.value}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

