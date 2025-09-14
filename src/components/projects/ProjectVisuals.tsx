'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight, Monitor, Zap } from 'lucide-react';
import Image from 'next/image';

interface ProjectVisualsProps {
  mockups?: string[];
  diagrams?: string[];
  demoVideo?: string;
}

export function ProjectVisuals({ mockups, diagrams, demoVideo }: ProjectVisualsProps) {
  const [activeTab, setActiveTab] = useState<'mockups' | 'diagrams' | 'video'>('mockups');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // RIMOSSO: const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasContent = mockups?.length || diagrams?.length || demoVideo;

  if (!hasContent) return null;

  const openImageModal = (image: string) => {
    setSelectedImage(image);
    // RIMOSSO: setCurrentImageIndex(index);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const images = activeTab === 'mockups' ? mockups : diagrams;
    if (images) {
      // RIMOSSO: setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    const images = activeTab === 'mockups' ? mockups : diagrams;
    if (images) {
      // RIMOSSO: setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-secondary">Elementi Visivi</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {mockups && mockups.length > 0 && (
          <button
            onClick={() => setActiveTab('mockups')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'mockups'
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent/10 text-accent hover:bg-accent/20'
            }`}
          >
            <Monitor className="w-4 h-4 mr-2 inline" />
            Mockup ({mockups.length})
          </button>
        )}
        
        {diagrams && diagrams.length > 0 && (
          <button
            onClick={() => setActiveTab('diagrams')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'diagrams'
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent/10 text-accent hover:bg-accent/20'
            }`}
          >
            <Zap className="w-4 h-4 mr-2 inline" />
            Diagrammi ({diagrams.length})
          </button>
        )}
        
        {demoVideo && (
          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'video'
                ? 'bg-primary text-primary-foreground'
                : 'bg-accent/10 text-accent hover:bg-accent/20'
            }`}
          >
            <Play className="w-4 h-4 mr-2 inline" />
            Video Demo
          </button>
        )}
      </div>

      {/* Content */}
      <div className="card">
        <AnimatePresence mode="wait">
          {activeTab === 'mockups' && mockups && (
            <motion.div
              key="mockups"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">Mockup e Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockups.map((mockup, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => openImageModal(mockup, index)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                      <Image
                        src={mockup}
                        alt={`Mockup ${index + 1}`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Clicca per ingrandire</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'diagrams' && diagrams && (
            <motion.div
              key="diagrams"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">Diagrammi Architetturali</h3>
              <div className="grid grid-cols-1 gap-4">
                {diagrams.map((diagram, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group cursor-pointer"
                    onClick={() => openImageModal(diagram, index)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                      <Image
                        src={diagram}
                        alt={`Diagramma ${index + 1}`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">Clicca per ingrandire</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'video' && demoVideo && (
            <motion.div
              key="video"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-secondary mb-4">Video Demo</h3>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  controls
                  className="w-full h-full"
                  poster="/api/placeholder/800/450"
                >
                  <source src={demoVideo} type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              <Image
                src={selectedImage}
                alt="Immagine ingrandita"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Navigation */}
              {(activeTab === 'mockups' && mockups && mockups.length > 1) || 
               (activeTab === 'diagrams' && diagrams && diagrams.length > 1) ? (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

