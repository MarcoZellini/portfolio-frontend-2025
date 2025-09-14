'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Grid3X3 } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectNavigationProps {
  currentProjectId: string;
}

export function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(p => p.id === currentProjectId);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-gradient-to-br from-primary/5 to-accent/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Previous Project */}
          <div className="flex-1">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.id}`}
                className="group flex items-center p-4 bg-card border border-border rounded-lg hover:bg-accent/5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mr-3" />
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Progetto Precedente</p>
                  <p className="font-medium text-secondary truncate group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div className="p-4 bg-card/50 border border-border rounded-lg opacity-50">
                <div className="flex items-center">
                  <ArrowLeft className="w-5 h-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Progetto Precedente</p>
                    <p className="font-medium text-muted-foreground">Nessuno</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Back to Projects */}
          <div className="flex-shrink-0">
            <Link
              href="/projects"
              className="flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Grid3X3 className="w-5 h-5 mr-2" />
              Tutti i Progetti
            </Link>
          </div>

          {/* Next Project */}
          <div className="flex-1">
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.id}`}
                className="group flex items-center p-4 bg-card border border-border rounded-lg hover:bg-accent/5 transition-colors"
              >
                <div className="min-w-0 text-right">
                  <p className="text-sm text-muted-foreground">Prossimo Progetto</p>
                  <p className="font-medium text-secondary truncate group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors ml-3" />
              </Link>
            ) : (
              <div className="p-4 bg-card/50 border border-border rounded-lg opacity-50">
                <div className="flex items-center justify-end">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Prossimo Progetto</p>
                    <p className="font-medium text-muted-foreground">Nessuno</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground ml-3" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

