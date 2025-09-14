'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { use } from 'react';
import { projects } from '@/data/projects';
import { ProjectHeader } from '@/components/projects/ProjectHeader';
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy';
import { ProjectVisuals } from '@/components/projects/ProjectVisuals';
import { ProjectMetrics } from '@/components/projects/ProjectMetrics';
import { ProjectCodeSnippets } from '@/components/projects/ProjectCodeSnippets';
import { ProjectNavigation } from '@/components/projects/ProjectNavigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const project = projects.find(p => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Project Header */}
      <ProjectHeader project={project} />

      {/* Project Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Case Study */}
            {project.caseStudy && (
              <ProjectCaseStudy caseStudy={project.caseStudy} />
            )}

            {/* Visual Elements */}
            {(project.mockups || project.diagrams || project.demoVideo) && (
              <ProjectVisuals 
                mockups={project.mockups}
                diagrams={project.diagrams}
                demoVideo={project.demoVideo}
              />
            )}

            {/* Code Snippets */}
            {project.codeSnippets && project.codeSnippets.length > 0 && (
              <ProjectCodeSnippets codeSnippets={project.codeSnippets} />
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Informazioni Progetto
              </h3>
              
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Categoria</span>
                  <p className="text-secondary capitalize">{project.category}</p>
                </div>
                
                <div>
                  <span className="text-sm font-medium text-muted-foreground">Stato</span>
                  <p className="text-secondary capitalize">{project.status}</p>
                </div>
                
                {project.duration && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Durata</span>
                    <p className="text-secondary">{project.duration}</p>
                  </div>
                )}
                
                {project.createdAt && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Data Creazione</span>
                    <p className="text-secondary">
                      {new Date(project.createdAt).toLocaleDateString('it-IT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                
                {project.teamSize && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Team</span>
                    <p className="text-secondary">{project.teamSize} {project.teamSize === 1 ? 'persona' : 'persone'}</p>
                  </div>
                )}
                
                {project.role && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Ruolo</span>
                    <p className="text-secondary">{project.role}</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Tecnologie
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Metrics */}
            {project.metrics && (
              <ProjectMetrics metrics={project.metrics} />
            )}

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-secondary mb-4">
                Azioni
              </h3>
              
              <div className="space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary text-center block"
                  >
                    Vedi Demo
                  </a>
                )}
                
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary text-center block"
                  >
                    Vedi Codice
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Navigation */}
      <ProjectNavigation currentProjectId={project.id} />
      <Footer />
    </div>
  );
}

