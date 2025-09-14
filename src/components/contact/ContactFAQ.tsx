'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo ci vuole per completare un progetto?",
      answer: "I tempi variano in base alla complessità del progetto. Un sito web semplice può richiedere 2-4 settimane, mentre un'applicazione complessa può richiedere 3-6 mesi. Durante la consulenza iniziale definiremo insieme una timeline realistica."
    },
    {
      question: "Quali sono le vostre tariffe?",
      answer: "Le tariffe dipendono dal tipo e dalla complessità del progetto. Offro pacchetti personalizzati che vanno da €2.500 per progetti semplici fino a €25.000+ per applicazioni enterprise. Possiamo discutere il budget durante la prima chiamata."
    },
    {
      question: "Fornite supporto post-lancio?",
      answer: "Sì, offro supporto completo post-lancio che include manutenzione, aggiornamenti, monitoraggio delle performance e assistenza tecnica. I pacchetti di supporto partono da €200/mese."
    },
    {
      question: "Lavorate con clienti internazionali?",
      answer: "Assolutamente! Ho esperienza con clienti in tutta Europa e negli Stati Uniti. Gestisco progetti in remoto con comunicazione regolare via video call e strumenti di project management."
    },
    {
      question: "Quali tecnologie utilizzate?",
      answer: "Utilizzo le tecnologie più moderne e affidabili: React, Next.js, TypeScript, Node.js, Python, MongoDB, PostgreSQL, AWS, Vercel. Scelgo sempre la stack tecnologica più adatta al progetto specifico."
    },
    {
      question: "Come funziona il processo di sviluppo?",
      answer: "Il processo include: 1) Consulenza e analisi dei requisiti, 2) Progettazione UX/UI, 3) Sviluppo con aggiornamenti settimanali, 4) Testing e ottimizzazione, 5) Deploy e formazione, 6) Supporto post-lancio."
    },
    {
      question: "Posso vedere esempi di progetti simili?",
      answer: "Certamente! Nella sezione Progetti del mio portfolio troverai esempi dettagliati di progetti completati, inclusi case study, tecnologie utilizzate e risultati ottenuti. Posso anche fornire referenze di clienti soddisfatti."
    },
    {
      question: "Offrite servizi di SEO e marketing?",
      answer: "Sì, oltre allo sviluppo, offro servizi di SEO tecnico, ottimizzazione delle performance, integrazione con strumenti di analytics e consulenza per strategie digitali. Posso anche collaborare con specialisti di marketing."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-secondary mb-4">
          Domande Frequenti
        </h2>
        <p className="text-muted-foreground">
          Ecco le risposte alle domande più comuni. Non trovi quello che cerchi? 
          Contattami direttamente!
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left bg-card hover:bg-accent/5 transition-colors flex items-center justify-between"
            >
              <span className="font-medium text-secondary pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-background border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-secondary mb-2">
          Non hai trovato la risposta che cercavi?
        </h3>
        <p className="text-muted-foreground mb-4">
          Sono qui per aiutarti! Contattami direttamente per una consulenza gratuita.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary">
            Chiamata Gratuita
          </button>
          <button className="btn-secondary">
            Invia Email
          </button>
        </div>
      </div>
    </motion.div>
  );
}
