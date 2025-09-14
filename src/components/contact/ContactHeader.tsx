'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactHeader() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'marco@example.com',
      href: 'mailto:marco@example.com'
    },
    {
      icon: Phone,
      label: 'Telefono',
      value: '+39 123 456 7890',
      href: 'tel:+391234567890'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Milano, Italia',
      href: '#'
    },
    {
      icon: Clock,
      label: 'Orari',
      value: 'Lun-Ven 9:00-18:00',
      href: '#'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Contattami
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Hai un progetto in mente? Sono qui per aiutarti a trasformare le tue idee 
            in soluzioni digitali innovative. Iniziamo a collaborare!
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group card text-center hover:bg-accent/5 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {item.label}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary transition-colors">
                {item.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
