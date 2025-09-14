'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Project } from '@/types';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center py-16"
      >
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-secondary mb-2">
          Nessun progetto trovato
        </h3>
        <p className="text-muted-foreground">
          Prova a modificare i filtri o la ricerca per trovare altri progetti.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card group h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-lg mb-4">
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-4xl font-bold text-primary opacity-50">
              {project.title.charAt(0)}
            </span>
          )}
        </div>
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm flex items-center"
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Link>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              ⭐ In evidenza
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title and Category */}
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-secondary mb-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.category && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Tag className="w-3 h-3 mr-1" />
              <span className="capitalize">{project.category}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-muted-foreground text-xs">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-2 text-xs text-muted-foreground">
          {project.createdAt && (
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              <span>
                {new Date(project.createdAt).toLocaleDateString('it-IT', {
                  year: 'numeric',
                  month: 'long'
                })}
              </span>
            </div>
          )}
          
          {project.duration && (
            <div className="flex items-center">
              <span className="mr-1">⏱️</span>
              <span>{project.duration}</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex space-x-2">
            <Link
              href={`/projects/${project.id}`}
              className="flex-1 text-center py-2 px-3 bg-primary/10 text-primary rounded-lg text-sm font-medium
                         hover:bg-primary/20 transition-colors"
            >
              Dettagli
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-3 bg-accent/10 text-accent rounded-lg text-sm font-medium
                           hover:bg-accent/20 transition-colors"
              >
                Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

