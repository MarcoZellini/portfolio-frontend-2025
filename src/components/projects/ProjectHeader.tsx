'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag, Users, Clock } from 'lucide-react';
import { Project } from '@/types';

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-6"
            >
              ⭐ Progetto in evidenza
            </motion.div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {project.longDescription || project.description}
          </p>

          {/* Project Meta */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground mb-8">
            {project.category && (
              <div className="flex items-center">
                <Tag className="w-4 h-4 mr-2" />
                <span className="capitalize">{project.category}</span>
              </div>
            )}
            
            {project.duration && (
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>{project.duration}</span>
              </div>
            )}
            
            {project.createdAt && (
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  {new Date(project.createdAt).toLocaleDateString('it-IT', {
                    year: 'numeric',
                    month: 'long'
                  })}
                </span>
              </div>
            )}
            
            {project.teamSize && (
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                <span>{project.teamSize} {project.teamSize === 1 ? 'persona' : 'persone'}</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Vedi Demo
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 mr-2" />
                Vedi Codice
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}

