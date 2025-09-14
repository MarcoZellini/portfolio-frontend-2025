'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, Award, TrendingUp, Github, Linkedin } from 'lucide-react';

export default function ContactSocialProof() {
  const stats = [
    {
      icon: Users,
      label: 'Clienti Soddisfatti',
      value: '50+',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      label: 'Progetti Completati',
      value: '100+',
      color: 'text-green-500'
    },
    {
      icon: Star,
      label: 'Rating Medio',
      value: '4.9/5',
      color: 'text-yellow-500'
    },
    {
      icon: TrendingUp,
      label: 'Anni Esperienza',
      value: '5+',
      color: 'text-purple-500'
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      role: "CEO, TechStart",
      content: "Marco ha trasformato la nostra idea in una web app fantastica. Professionale, puntuale e sempre disponibile.",
      rating: 5
    },
    {
      name: "Sara Bianchi",
      role: "Founder, DesignStudio",
      content: "Lavoro eccezionale! Il sito che ha creato per noi ha aumentato le conversioni del 40%.",
      rating: 5
    },
    {
      name: "Luca Verdi",
      role: "CTO, InnovateLab",
      content: "Competenza tecnica eccellente e grande attenzione ai dettagli. Consigliatissimo!",
      rating: 5
    }
  ];

  const socialLinks = [
    {
      platform: 'GitHub',
      icon: Github,
      url: 'https://github.com/marcozellini',
      stats: '2.5k+ followers',
      color: 'text-gray-400 hover:text-white'
    },
    {
      platform: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/marco-zellini',
      stats: '1.2k+ connections',
      color: 'text-blue-400 hover:text-blue-300'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-secondary mb-6">
          I Miei Numeri
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-4 bg-accent/5 rounded-lg"
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-secondary mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-secondary mb-6">
          Cosa Dicono i Clienti
        </h3>
        
        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="p-4 bg-background rounded-lg border border-border"
            >
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm mb-3 italic">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div>
                <div className="font-medium text-secondary text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-secondary mb-6">
          Seguimi Online
        </h3>
        
        <div className="space-y-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex items-center p-3 bg-background rounded-lg border border-border hover:bg-accent/5 transition-colors group"
            >
              <social.icon className={`w-5 h-5 mr-3 ${social.color}`} />
              <div className="flex-1">
                <div className="font-medium text-secondary group-hover:text-primary transition-colors">
                  {social.platform}
                </div>
                <div className="text-xs text-muted-foreground">
                  {social.stats}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
