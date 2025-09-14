'use client';

import { motion } from 'framer-motion';
import { Hobby } from '@/data/about';

interface PersonalHobbiesProps {
  hobbies: Hobby[];
}

export default function PersonalHobbies({ hobbies }: PersonalHobbiesProps) {
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
            Oltre al coding
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Le mie passioni e interessi che mi rendono la persona che sono, dentro e fuori dal lavoro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <span className="text-3xl">{hobby.icon}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-secondary mb-3 group-hover:text-primary transition-colors">
                  {hobby.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
