'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Target, BarChart3 } from 'lucide-react';

interface ProjectCaseStudyProps {
  caseStudy: {
    challenge: string;
    solution: string;
    results: string;
    architecture?: string;
    keyFeatures: string[];
    challenges: string[];
    learnings: string[];
  };
}

export function ProjectCaseStudy({ caseStudy }: ProjectCaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-secondary mb-8">Case Study</h2>

      {/* Challenge, Solution, Results */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center mb-4">
            <Target className="w-6 h-6 text-primary mr-3" />
            <h3 className="text-xl font-semibold text-secondary">Sfida</h3>
          </div>
          <p className="text-muted-foreground">{caseStudy.challenge}</p>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <Lightbulb className="w-6 h-6 text-accent mr-3" />
            <h3 className="text-xl font-semibold text-secondary">Soluzione</h3>
          </div>
          <p className="text-muted-foreground">{caseStudy.solution}</p>
        </div>

        <div className="card">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-green-500 mr-3" />
            <h3 className="text-xl font-semibold text-secondary">Risultati</h3>
          </div>
          <p className="text-muted-foreground">{caseStudy.results}</p>
        </div>
      </div>

      {/* Architecture */}
      {caseStudy.architecture && (
        <div className="card">
          <h3 className="text-xl font-semibold text-secondary mb-4">Architettura</h3>
          <p className="text-muted-foreground">{caseStudy.architecture}</p>
        </div>
      )}

      {/* Key Features */}
      <div className="card">
        <h3 className="text-xl font-semibold text-secondary mb-6">Funzionalità Principali</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {caseStudy.keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start"
            >
              <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Challenges and Learnings */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-semibold text-secondary mb-4">Sfide Affrontate</h3>
          <ul className="space-y-3">
            {caseStudy.challenges.map((challenge, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">{challenge}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-secondary mb-4">Cosa Ho Imparato</h3>
          <ul className="space-y-3">
            {caseStudy.learnings.map((learning, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-muted-foreground">{learning}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

