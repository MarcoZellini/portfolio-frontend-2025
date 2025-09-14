'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ProjectFilters } from '@/components/projects/ProjectFilters';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ProjectSearch } from '@/components/projects/ProjectSearch';
import { ProjectStats } from '@/components/projects/ProjectStats';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'featured' | 'recent' | 'alphabetical'>('featured');

  // Filtra e ordina i progetti
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filtro per ricerca
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filtro per categoria
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(project => 
        project.category === selectedCategory
      );
    }

    // Filtro per tecnologie
    if (selectedTechnologies.length > 0) {
      filtered = filtered.filter(project =>
        selectedTechnologies.every(tech =>
          project.technologies.includes(tech)
        )
      );
    }

    // Ordinamento
    switch (sortBy) {
      case 'featured':
        return filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
      case 'recent':
        return filtered.sort((a, b) => 
          new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime()
        );
      case 'alphabetical':
        return filtered.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return filtered;
    }
  }, [searchTerm, selectedCategory, selectedTechnologies, sortBy]);

  // Estrai tutte le tecnologie uniche per i filtri
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Estrai tutte le categorie uniche
  const allCategories = useMemo(() => {
    const categorySet = new Set<string>();
    projects.forEach(project => {
      if (project.category) categorySet.add(project.category);
    });
    return ['all', ...Array.from(categorySet).sort()];
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              I miei progetti
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Una raccolta completa dei progetti che ho sviluppato, mostrando le mie competenze 
              tecniche e la mia passione per la creazione di soluzioni innovative.
            </p>
            
            {/* Stats */}
            <ProjectStats 
              totalProjects={projects.length}
              featuredProjects={projects.filter(p => p.featured).length}
              technologies={allTechnologies.length}
            />
          </motion.div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Search */}
            <ProjectSearch 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
            />

            {/* Filters */}
            <ProjectFilters
              categories={allCategories}
              technologies={allTechnologies}
              selectedCategory={selectedCategory}
              selectedTechnologies={selectedTechnologies}
              sortBy={sortBy}
              onCategoryChange={setSelectedCategory}
              onTechnologiesChange={setSelectedTechnologies}
              onSortChange={setSortBy}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                Progetti
                <span className="text-muted-foreground ml-2">
                  ({filteredProjects.length})
                </span>
              </h2>
            </div>

            <ProjectGrid projects={filteredProjects} />
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

