'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Palette, Code, Rocket, HeadphonesIcon } from 'lucide-react';

export default function ContactProcess() {
  const processSteps = [
    {
      step: 1,
      icon: MessageCircle,
      title: "Consulenza Iniziale",
      description: "Analizziamo insieme le tue esigenze, obiettivi e requisiti del progetto durante una chiamata gratuita.",
      duration: "30-60 min",
      color: "text-blue-500"
    },
    {
      step: 2,
      icon: Palette,
      title: "Progettazione UX/UI",
      description: "Creo wireframe, mockup e prototipi interattivi per definire l'esperienza utente e l'interfaccia.",
      duration: "1-2 settimane",
      color: "text-purple-500"
    },
    {
      step: 3,
      icon: Code,
      title: "Sviluppo",
      description: "Implemento la soluzione con aggiornamenti settimanali e demo per mantenerti sempre informato.",
      duration: "2-8 settimane",
      color: "text-green-500"
    },
    {
      step: 4,
      icon: Rocket,
      title: "Deploy & Lancio",
      description: "Configuro l'hosting, ottimizzo le performance e lancio il progetto con formazione completa.",
      duration: "1 settimana",
      color: "text-orange-500"
    },
    {
      step: 5,
      icon: HeadphonesIcon,
      title: "Supporto Post-Lancio",
      description: "Offro supporto continuo, manutenzione e aggiornamenti per garantire il successo a lungo termine.",
      duration: "Ongoing",
      color: "text-pink-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Il Mio Processo di Lavoro
        </h2>
        <p className="text-muted-foreground">
          Seguo un processo strutturato e collaudato per garantire risultati eccellenti 
          e una comunicazione trasparente in ogni fase del progetto.
        </p>
      </div>

      <div className="space-y-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Connection Line */}
            {index < processSteps.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-16 bg-border" />
            )}

            <div className="flex items-start space-x-6">
              {/* Step Number & Icon */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>
                <div className="text-center mt-2">
                  <span className="text-xs font-medium text-muted-foreground">
                    Step {step.step}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-secondary">
                    {step.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-accent/10 px-2 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Additional Info for specific steps */}
                {step.step === 1 && (
                  <div className="mt-4 p-4 bg-blue-500/10 rounded-lg">
                    <h4 className="font-medium text-secondary mb-2">Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Analisi dei requisiti e obiettivi</li>
                      <li>• Valutazione tecnica e budget</li>
                      <li>• Definizione della timeline</li>
                      <li>• Proposta personalizzata</li>
                    </ul>
                  </div>
                )}

                {step.step === 2 && (
                  <div className="mt-4 p-4 bg-purple-500/10 rounded-lg">
                    <h4 className="font-medium text-secondary mb-2">Deliverables:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Wireframe e user flow</li>
                      <li>• Mockup desktop e mobile</li>
                      <li>• Prototipo interattivo</li>
                      <li>• Design system e brand guidelines</li>
                    </ul>
                  </div>
                )}

                {step.step === 3 && (
                  <div className="mt-4 p-4 bg-green-500/10 rounded-lg">
                    <h4 className="font-medium text-secondary mb-2">Include:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Sviluppo con tecnologie moderne</li>
                      <li>• Testing e debugging</li>
                      <li>• Demo settimanali</li>
                      <li>• Ottimizzazione performance</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg text-center"
      >
        <h3 className="text-lg font-semibold text-secondary mb-2">
          Pronto a Iniziare?
        </h3>
        <p className="text-muted-foreground mb-4">
          Prenota una consulenza gratuita e scopri come posso aiutarti a realizzare il tuo progetto.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary">
            Prenota Consulenza Gratuita
          </button>
          <button className="btn-secondary">
            Scarica Portfolio PDF
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
