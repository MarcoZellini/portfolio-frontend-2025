'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Upload, Calendar, MessageCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    files: null as FileList | null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, files: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      message: '',
      files: null
    });
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
          Invia un Messaggio
        </h2>
        <p className="text-muted-foreground">
          Compila il form per raccontarmi il tuo progetto. Più dettagli fornisci, 
          meglio potrò aiutarti a realizzare la tua visione.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary"
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
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary"
              placeholder="la.tua@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-secondary mb-2">
            Azienda/Organizzazione
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary"
            placeholder="Nome della tua azienda"
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-secondary mb-2">
              Tipo Progetto *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary"
            >
              <option value="">Seleziona tipo</option>
              <option value="website">Sito Web</option>
              <option value="webapp">Web App</option>
              <option value="mobile">App Mobile</option>
              <option value="ecommerce">E-commerce</option>
              <option value="api">API/Backend</option>
              <option value="consulting">Consulenza</option>
              <option value="other">Altro</option>
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-secondary mb-2">
              Budget Indicativo
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary"
            >
              <option value="">Seleziona budget</option>
              <option value="under-5k">Sotto €5.000</option>
              <option value="5k-10k">€5.000 - €10.000</option>
              <option value="10k-25k">€10.000 - €25.000</option>
              <option value="25k-50k">€25.000 - €50.000</option>
              <option value="over-50k">Oltre €50.000</option>
              <option value="discuss">Da discutere</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-secondary mb-2">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary"
            >
              <option value="">Seleziona timeline</option>
              <option value="asap">Il prima possibile</option>
              <option value="1-month">1 mese</option>
              <option value="2-3-months">2-3 mesi</option>
              <option value="3-6-months">3-6 mesi</option>
              <option value="6-months-plus">6+ mesi</option>
              <option value="flexible">Flessibile</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
            Descrizione del Progetto *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary resize-none"
            placeholder="Raccontami il tuo progetto, gli obiettivi che vuoi raggiungere, le funzionalità che ti servono..."
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="files" className="block text-sm font-medium text-secondary mb-2">
            Allegati (Brief, Mockup, Documenti)
          </label>
          <div className="relative">
            <input
              type="file"
              id="files"
              name="files"
              onChange={handleFileChange}
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,.zip"
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-secondary file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
            />
            <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Formati supportati: PDF, DOC, DOCX, JPG, PNG, GIF, ZIP (max 10MB)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                Invio in corso...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Invia Messaggio
              </>
            )}
          </motion.button>

          <motion.button
            type="button"
            className="btn-secondary flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Prenota Chiamata
          </motion.button>
        </div>

        {/* Additional Options */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-accent hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat Live
          </button>
          
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 text-accent hover:text-primary transition-colors"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </button>
        </div>
      </form>
    </motion.div>
  );
}
