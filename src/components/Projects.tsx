'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Piattaforma e-commerce completa con carrello, pagamenti e dashboard admin. Realizzata con Next.js, TypeScript e Stripe.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "Prisma"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Applicazione per la gestione dei task con drag & drop, notifiche real-time e collaborazione in team.",
    image: "/api/placeholder/600/400",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/taskapp",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorologica con previsioni dettagliate, mappe interattive e notifiche personalizzate.",
    image: "/api/placeholder/600/400",
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/weather",
    featured: false
  },
  {
    id: 4,
    title: "Blog CMS",
    description: "Sistema di gestione contenuti per blog con editor markdown, SEO ottimizzato e sistema di commenti.",
    image: "/api/placeholder/600/400",
    tech: ["Next.js", "MDX", "Sanity", "Vercel"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/blog-cms",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "Template responsive per portfolio con dark mode, animazioni smooth e ottimizzato per le performance.",
    image: "/api/placeholder/600/400",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/portfolio-template",
    featured: false
  },
  {
    id: 6,
    title: "API RESTful",
    description: "API REST completa con autenticazione JWT, rate limiting, documentazione Swagger e test automatizzati.",
    image: "/api/placeholder/600/400",
    tech: ["Node.js", "Express", "JWT", "Swagger", "Jest"],
    demo: "https://api.example.com/docs",
    github: "https://github.com/example/api",
    featured: false
  }
];

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            I miei progetti
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Una selezione dei progetti che ho sviluppato, mostrando le mie competenze 
            tecniche e la mia passione per la creazione di soluzioni innovative.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
            Progetti in evidenza
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary opacity-50">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Link
                        href={project.demo}
                        className="btn-primary text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Link>
                      <Link
                        href={project.github}
                        className="btn-secondary text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-secondary mb-3">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-secondary mb-8 text-center">
            Altri progetti
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary opacity-50">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-2">
                      <Link
                        href={project.demo}
                        className="btn-primary text-xs px-3 py-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </Link>
                      <Link
                        href={project.github}
                        className="btn-secondary text-xs px-3 py-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-secondary mb-2">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
