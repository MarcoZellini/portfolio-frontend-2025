'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione invio form (sostituire con logica reale)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "marco@example.com",
      link: "mailto:marco@example.com"
    },
    {
      icon: "📱",
      title: "Telefono",
      value: "+39 123 456 7890",
      link: "tel:+391234567890"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Milano, Italia",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Contattami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hai un progetto in mente? Sono qui per aiutarti a realizzarlo. 
            Scrivimi e risponderò il prima possibile!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-xl font-semibold text-secondary mb-6">
              Invia un messaggio
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Nome *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-card text-secondary"
                  placeholder="Il tuo nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-card text-secondary"
                  placeholder="la.tua@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Messaggio *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 bg-card text-secondary resize-none"
                  placeholder="Raccontami il tuo progetto..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg text-success text-center">
                  Messaggio inviato con successo! Ti risponderò presto.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-center">
                  Errore nell&apos;invio del messaggio. Riprova più tardi.
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-6">
                Informazioni di contatto
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/10 transition-colors duration-200 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-2xl group-hover:bg-primary/20 transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-secondary group-hover:text-primary transition-colors duration-200">
                        {info.title}
                      </div>
                      <div className="text-muted-foreground">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-secondary mb-4">
                Seguimi
              </h4>
              
              <div className="flex space-x-4">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors duration-200"
                >
                  <span className="text-xl">🐙</span>
                </motion.a>
                
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:bg-accent/10 hover:border-accent transition-colors duration-200"
                >
                  <span className="text-xl">💼</span>
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="font-medium text-secondary">Disponibile per nuovi progetti</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Attualmente disponibile per collaborazioni e progetti freelance. 
                Tempo di risposta medio: 24 ore.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
