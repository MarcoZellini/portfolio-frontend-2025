'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';

export default function ContactPricing() {
  const packages = [
    {
      name: "Starter",
      icon: Zap,
      price: "€2.500",
      period: "progetto",
      description: "Perfetto per progetti semplici e siti web",
      features: [
        "Sito web responsive",
        "Fino a 5 pagine",
        "Design personalizzato",
        "SEO base",
        "Form di contatto",
        "Supporto 30 giorni"
      ],
      popular: false,
      color: "text-blue-500"
    },
    {
      name: "Professional",
      icon: Star,
      price: "€7.500",
      period: "progetto",
      description: "Ideale per web app e e-commerce",
      features: [
        "Web app completa",
        "Database integrato",
        "Sistema di pagamento",
        "Dashboard admin",
        "API personalizzate",
        "Supporto 90 giorni",
        "Formazione inclusa"
      ],
      popular: true,
      color: "text-purple-500"
    },
    {
      name: "Enterprise",
      icon: Crown,
      price: "€15.000+",
      period: "progetto",
      description: "Soluzioni complesse e scalabili",
      features: [
        "Applicazione enterprise",
        "Architettura scalabile",
        "Integrazioni avanzate",
        "Sicurezza enterprise",
        "Supporto 6 mesi",
        "Consulenza strategica",
        "Manutenzione inclusa"
      ],
      popular: false,
      color: "text-orange-500"
    }
  ];

  const addOns = [
    {
      name: "Design UI/UX",
      price: "€1.500",
      description: "Design system completo e prototipi"
    },
    {
      name: "SEO Avanzato",
      price: "€800",
      description: "Ottimizzazione completa per i motori di ricerca"
    },
    {
      name: "Integrazione API",
      price: "€1.200",
      description: "Connessione con servizi esterni"
    },
    {
      name: "Supporto Esteso",
      price: "€200/mese",
      description: "Manutenzione e aggiornamenti continui"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Packages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-secondary mb-6">
          Pacchetti Servizi
        </h3>
        
        <div className="space-y-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-4 rounded-lg border transition-colors ${
                pkg.popular 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border bg-background hover:bg-accent/5'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <pkg.icon className={`w-5 h-5 mr-2 ${pkg.color}`} />
                  <div>
                    <h4 className="font-semibold text-secondary">
                      {pkg.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {pkg.description}
                    </p>
                  </div>
                </div>
                
                {pkg.popular && (
                  <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                    Popolare
                  </span>
                )}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-secondary">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-1">
                    {pkg.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Add-ons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-secondary mb-6">
          Servizi Aggiuntivi
        </h3>
        
        <div className="space-y-3">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between p-3 bg-background rounded-lg border border-border hover:bg-accent/5 transition-colors"
            >
              <div>
                <h4 className="font-medium text-secondary">
                  {addon.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {addon.description}
                </p>
              </div>
              <span className="font-semibold text-primary">
                {addon.price}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Custom Quote CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card bg-gradient-to-br from-primary/10 to-accent/10"
      >
        <div className="text-center">
          <h3 className="text-lg font-semibold text-secondary mb-2">
            Progetto Personalizzato?
          </h3>
          <p className="text-muted-foreground mb-4">
            Ogni progetto è unico. Contattami per un preventivo personalizzato 
            basato sulle tue esigenze specifiche.
          </p>
          <button className="btn-primary">
            Richiedi Preventivo
          </button>
        </div>
      </motion.div>
    </div>
  );
}
