'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, MapPin, Clock, Video, Phone } from 'lucide-react';

export default function ContactInteractive() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: false },
    { time: '17:00', available: true }
  ];

  const quickActions = [
    {
      icon: Video,
      title: "Video Call",
      description: "Chiamata video gratuita",
      action: "Prenota ora",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Chiamata",
      description: "Parlami direttamente",
      action: "Chiama",
      color: "text-green-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Messaggio rapido",
      action: "Scrivi",
      color: "text-green-400"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Calendar Booking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-primary mr-2" />
          <h3 className="text-lg font-semibold text-secondary">
            Prenota una Chiamata
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">
          Scegli un orario per una consulenza gratuita di 30 minuti.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Seleziona Data
            </label>
            <input
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-secondary mb-2">
              Orari Disponibili
            </label>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => setSelectedTimeSlot(slot.time)}
                  disabled={!slot.available}
                  className={`p-2 text-sm rounded-lg border transition-colors ${
                    selectedTimeSlot === slot.time
                      ? 'border-primary bg-primary/10 text-primary'
                      : slot.available
                      ? 'border-border bg-background hover:bg-accent/5 text-secondary'
                      : 'border-border bg-muted/20 text-muted-foreground cursor-not-allowed'
                  }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>

          {selectedTimeSlot && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="p-4 bg-primary/10 rounded-lg"
            >
              <p className="text-sm text-secondary mb-2">
                Hai selezionato: {selectedTimeSlot}
              </p>
              <button className="btn-primary text-sm">
                Conferma Prenotazione
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="card"
      >
        <h3 className="text-lg font-semibold text-secondary mb-4">
          Contatto Rapido
        </h3>
        
        <div className="space-y-3">
          {quickActions.map((action, index) => (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="w-full flex items-center p-3 bg-background rounded-lg border border-border hover:bg-accent/5 transition-colors group"
            >
              <action.icon className={`w-5 h-5 mr-3 ${action.color}`} />
              <div className="flex-1 text-left">
                <div className="font-medium text-secondary group-hover:text-primary transition-colors">
                  {action.title}
                </div>
                <div className="text-sm text-muted-foreground">
                  {action.description}
                </div>
              </div>
              <span className="text-sm font-medium text-primary">
                {action.action}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Location & Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="card"
      >
        <div className="flex items-center mb-4">
          <MapPin className="w-5 h-5 text-primary mr-2" />
          <h3 className="text-lg font-semibold text-secondary">
            Dove Mi Trovo
          </h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="w-4 h-4 text-muted-foreground mr-2 mt-0.5" />
            <div>
              <p className="text-secondary font-medium">Milano, Italia</p>
              <p className="text-sm text-muted-foreground">
                Disponibile per progetti remoti in tutta Europa
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-4 h-4 text-muted-foreground mr-2 mt-0.5" />
            <div>
              <p className="text-secondary font-medium">Orari di Lavoro</p>
              <p className="text-sm text-muted-foreground">
                Lun-Ven: 9:00-18:00 CET
              </p>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-4 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Mappa interattiva
            </p>
          </div>
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="card bg-gradient-to-br from-accent/10 to-primary/10"
      >
        <h3 className="text-lg font-semibold text-secondary mb-2">
          Newsletter
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          Ricevi aggiornamenti sui miei progetti e consigli di sviluppo.
        </p>
        
        <div className="space-y-3">
          <input
            type="email"
            placeholder="La tua email"
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 text-secondary text-sm"
          />
          <button className="w-full btn-secondary text-sm">
            Iscriviti
          </button>
        </div>
      </motion.div>
    </div>
  );
}
