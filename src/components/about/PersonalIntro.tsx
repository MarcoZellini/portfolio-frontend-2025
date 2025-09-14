'use client';

import { motion } from 'framer-motion';
import { PersonalInfo } from '@/data/about';

interface PersonalIntroProps {
  data: PersonalInfo;
}

export default function PersonalIntro({ data }: PersonalIntroProps) {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Immagine e info personali */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <div className="w-80 h-80 mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-8">
                <div className="w-72 h-72 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  {data.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              {/* Decorazioni */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-warning rounded-full opacity-50"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              {data.name}
            </h1>
            <p className="text-xl text-primary mb-6 font-semibold">
              {data.role}
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              📍 {data.location}
            </p>
          </motion.div>

          {/* Bio e info di contatto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-semibold text-secondary mb-4">
                Chi sono
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {data.bio}
              </p>
            </div>

            {/* Info di contatto */}
            <div className="card">
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Informazioni di contatto
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📧</span>
                  <a 
                    href={`mailto:${data.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {data.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">📱</span>
                  <a 
                    href={`tel:${data.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary">💼</span>
                  <a 
                    href="https://linkedin.com/in/marco-zellini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
