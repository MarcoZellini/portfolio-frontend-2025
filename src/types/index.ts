// Tipi TypeScript per il portfolio

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'design' | 'other';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
  duration?: string;
  status: 'completed' | 'in-progress' | 'planned';
  
  // Case study details
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string;
    architecture?: string;
    keyFeatures: string[];
    challenges: string[];
    learnings: string[];
  };
  
  // Visual elements
  mockups?: string[];
  diagrams?: string[];
  codeSnippets?: {
    title: string;
    language: string;
    code: string;
    description?: string;
  }[];
  demoVideo?: string;
  
  // Metrics and results
  metrics?: {
    performance?: string;
    users?: string;
    feedback?: string;
    businessImpact?: string;
  };
  
  // Team and collaboration
  teamSize?: number;
  role?: string;
  collaboration?: string[];
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  social: {
    github?: string;
    linkedin?: string;
  };
}
