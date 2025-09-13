'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Chi sono
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sono un <strong className="text-primary">Full Stack Developer</strong> appassionato di 
                creare esperienze web moderne e performanti. Con oltre 5 anni di esperienza nel settore, 
                mi specializzo nello sviluppo di applicazioni scalabili e user-friendly.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                La mia passione è trasformare idee complesse in soluzioni eleganti e intuitive. 
                Credo fermamente nell&apos;importanza di un codice pulito, delle best practices e 
                di un&apos;esperienza utente eccezionale.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Quando non sto programmando, amo esplorare nuove tecnologie, contribuire a progetti 
                open source e condividere le mie conoscenze con la community tech.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  MZ
                </div>
              </div>
              
              {/* Decorazioni */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-warning rounded-full opacity-50"></div>
            </div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Anni di esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Progetti completati</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Clienti soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Soddisfazione</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
