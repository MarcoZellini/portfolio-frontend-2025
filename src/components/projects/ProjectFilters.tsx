'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown } from 'lucide-react';

interface ProjectFiltersProps {
  categories: string[];
  technologies: string[];
  selectedCategory: string;
  selectedTechnologies: string[];
  sortBy: 'featured' | 'recent' | 'alphabetical';
  onCategoryChange: (category: string) => void;
  onTechnologiesChange: (technologies: string[]) => void;
  onSortChange: (sort: 'featured' | 'recent' | 'alphabetical') => void;
}

export function ProjectFilters({
  categories,
  technologies,
  selectedCategory,
  selectedTechnologies,
  sortBy,
  onCategoryChange,
  onTechnologiesChange,
  onSortChange
}: ProjectFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTechDropdown, setShowTechDropdown] = useState(false);

  const handleTechnologyToggle = (tech: string) => {
    if (selectedTechnologies.includes(tech)) {
      onTechnologiesChange(selectedTechnologies.filter(t => t !== tech));
    } else {
      onTechnologiesChange([...selectedTechnologies, tech]);
    }
  };

  const clearAllFilters = () => {
    onCategoryChange('all');
    onTechnologiesChange([]);
    onSortChange('featured');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedTechnologies.length > 0;

  return (
    <div className="space-y-4">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-full py-3 px-4 bg-card border border-border rounded-lg
                     hover:bg-accent/5 transition-colors"
        >
          <Filter className="w-5 h-5 mr-2" />
          <span>Filtri</span>
          <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap items-center gap-4">
          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-secondary">Categoria:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent/10 text-accent hover:bg-accent/20'
                  }`}
                >
                  {category === 'all' ? 'Tutti' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-secondary">Tecnologie:</span>
            <div className="relative">
              <button
                onClick={() => setShowTechDropdown(!showTechDropdown)}
                className="flex items-center px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium
                           hover:bg-accent/20 transition-colors"
              >
                {selectedTechnologies.length > 0 
                  ? `${selectedTechnologies.length} selezionate`
                  : 'Seleziona tecnologie'
                }
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showTechDropdown ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showTechDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-card border border-border rounded-lg shadow-lg z-10"
                  >
                    <div className="p-2 space-y-1">
                      {technologies.map((tech) => (
                        <label
                          key={tech}
                          className="flex items-center space-x-2 p-2 hover:bg-accent/5 rounded cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTechnologies.includes(tech)}
                            onChange={() => handleTechnologyToggle(tech)}
                            className="rounded border-border"
                          />
                          <span className="text-sm text-secondary">{tech}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Sort Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-secondary">Ordina:</span>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as 'featured' | 'recent' | 'alphabetical')}
              className="px-3 py-1 bg-card border border-border rounded text-sm text-secondary
                         focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              <option value="featured">In evidenza</option>
              <option value="recent">Più recenti</option>
              <option value="alphabetical">Alfabetico</option>
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="flex items-center px-3 py-1 text-muted-foreground hover:text-secondary transition-colors"
            >
              <X className="w-4 h-4 mr-1" />
              <span className="text-sm">Cancella filtri</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Filters */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden space-y-4 p-4 bg-card border border-border rounded-lg"
          >
            {/* Category Filter */}
            <div>
              <span className="text-sm font-medium text-secondary block mb-2">Categoria</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-accent/10 text-accent hover:bg-accent/20'
                    }`}
                  >
                    {category === 'all' ? 'Tutti' : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Technology Filter */}
            <div>
              <span className="text-sm font-medium text-secondary block mb-2">Tecnologie</span>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {technologies.map((tech) => (
                  <label
                    key={tech}
                    className="flex items-center space-x-2 p-2 hover:bg-accent/5 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTechnologies.includes(tech)}
                      onChange={() => handleTechnologyToggle(tech)}
                      className="rounded border-border"
                    />
                    <span className="text-sm text-secondary">{tech}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sort Filter */}
            <div>
              <span className="text-sm font-medium text-secondary block mb-2">Ordina per</span>
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value as 'featured' | 'recent' | 'alphabetical')}
                className="w-full px-3 py-2 bg-background border border-border rounded text-sm text-secondary
                           focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="featured">In evidenza</option>
                <option value="recent">Più recenti</option>
                <option value="alphabetical">Alfabetico</option>
              </select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="w-full flex items-center justify-center px-3 py-2 text-muted-foreground 
                           hover:text-secondary transition-colors border border-border rounded"
              >
                <X className="w-4 h-4 mr-1" />
                <span className="text-sm">Cancella tutti i filtri</span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

