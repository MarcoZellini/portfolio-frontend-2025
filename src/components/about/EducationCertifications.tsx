'use client';

import { motion } from 'framer-motion';
import { Education, Certification } from '@/data/about';

interface EducationCertificationsProps {
  education: Education[];
  certifications: Certification[];
}

export default function EducationCertifications({ education, certifications }: EducationCertificationsProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Formazione e Certificazioni
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            L&apos;apprendimento continuo è alla base del mio successo professionale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formazione */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center lg:text-left">
              📚 Formazione
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-secondary mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-primary font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-secondary mb-2">
                      Corsi rilevanti:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificazioni */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-8 text-center lg:text-left">
              🏆 Certificazioni
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-primary font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {cert.description}
                  </p>

                  {cert.credentialId && (
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        ID: {cert.credentialId}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-accent transition-colors text-sm font-medium"
                        >
                          Verifica certificazione →
                        </a>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
