'use client';

import { motion } from 'framer-motion';

interface ProjectStatsProps {
  totalProjects: number;
  featuredProjects: number;
  technologies: number;
}

export function ProjectStats({ totalProjects, featuredProjects, technologies }: ProjectStatsProps) {
  const stats = [
    {
      label: 'Progetti totali',
      value: totalProjects,
      icon: '📁'
    },
    {
      label: 'In evidenza',
      value: featuredProjects,
      icon: '⭐'
    },
    {
      label: 'Tecnologie',
      value: technologies,
      icon: '🛠️'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="text-center"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-muted-foreground">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

