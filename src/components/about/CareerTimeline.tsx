'use client';

import { motion } from 'framer-motion';
import { CareerMilestone } from '@/data/about';

interface CareerTimelineProps {
  timeline: CareerMilestone[];
}

export default function CareerTimeline({ timeline }: CareerTimelineProps) {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Il mio percorso professionale
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un viaggio attraverso le esperienze che mi hanno portato a diventare lo sviluppatore che sono oggi.
          </p>
        </motion.div>

        <div className="relative">
          {/* Linea verticale */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>

          <div className="space-y-12">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Punto sulla timeline */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card z-10"></div>

                {/* Contenuto */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  {/* Card: background-color var(--background) come richiesto */}
                  <div
                    // bg-background = background-color: var(--background)
                    className="card group hover:border-primary/30 hover:shadow-lg transition-colors bg-background"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h3>
                    <p className="text-primary font-medium mb-3 group-hover:text-accent transition-colors">
                      {milestone.company}
                    </p>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {milestone.description}
                    </p>
                    {/* Tecnologie */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-secondary mb-2">
                        Tecnologie utilizzate:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {milestone.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium group-hover:bg-accent/20 group-hover:text-accent transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Risultati */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-2">
                        Risultati chiave:
                      </h4>
                      <ul className="space-y-1">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground text-sm flex items-start leading-relaxed">
                            <span className="text-primary mr-2">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
