'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface ProjectSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function ProjectSearch({ searchTerm, onSearchChange }: ProjectSearchProps) {
  const [isFocused, setIsFocused] = useState(false);

  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative max-w-2xl mx-auto"
    >
      <div className="relative">
        <Search 
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
            isFocused ? 'text-primary' : 'text-muted-foreground'
          }`} 
        />
        <input
          type="text"
          placeholder="Cerca progetti, tecnologie o descrizioni..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full pl-12 pr-12 py-4 bg-card border border-border rounded-lg 
                     focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                     text-secondary placeholder:text-muted-foreground
                     transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 transform -translate-y-1/2
                       text-muted-foreground hover:text-secondary transition-colors"
            aria-label="Cancella ricerca"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {searchTerm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 text-sm text-muted-foreground text-center"
        >
          Risultati per: <span className="text-primary font-medium">&quot;{searchTerm}&quot;</span>
        </motion.div>
      )}
    </motion.div>
  );
}

