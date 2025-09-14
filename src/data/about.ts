// Strutture dati per la pagina About - Facilmente modificabili

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  bio: string;
  profileImage: string;
}

export interface CareerMilestone {
  year: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  relevantCourses: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
}

export interface Hobby {
  name: string;
  description: string;
  icon: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface Philosophy {
  title: string;
  description: string;
  principles: string[];
}

// Dati di esempio - DA PERSONALIZZARE
export const personalInfo: PersonalInfo = {
  name: "Marco Zellini",
  role: "Full Stack Developer",
  location: "Milano, Italia",
  email: "marco@example.com",
  phone: "+39 123 456 7890",
  website: "www.marcozellini.com",
  bio: "Sono un Full Stack Developer appassionato di creare esperienze web moderne e performanti. Con oltre 5 anni di esperienza nel settore, mi specializzo nello sviluppo di applicazioni scalabili e user-friendly. La mia passione è trasformare idee complesse in soluzioni eleganti e intuitive.",
  profileImage: "/api/placeholder/400/400"
};

export const careerTimeline: CareerMilestone[] = [
  {
    year: "2023 - Presente",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions SRL",
    description: "Sviluppo di applicazioni web complesse e architetture scalabili per clienti enterprise.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    achievements: [
      "Migliorato le performance del 40% per l'applicazione principale",
      "Implementato sistema di CI/CD che riduce i tempi di deploy del 60%",
      "Mentorato 3 sviluppatori junior"
    ]
  },
  {
    year: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Agency Pro",
    description: "Sviluppo di siti web e applicazioni per clienti di diverse dimensioni.",
    technologies: ["Vue.js", "Express", "MongoDB", "PostgreSQL"],
    achievements: [
      "Completati 25+ progetti con soddisfazione clienti del 100%",
      "Introdotto nuove tecnologie che hanno migliorato l'efficienza del team",
      "Gestito progetti da 10k€ a 100k€"
    ]
  },
  {
    year: "2019 - 2021",
    title: "Frontend Developer",
    company: "Startup Innovativa",
    description: "Sviluppo di interfacce utente moderne e responsive per applicazioni web.",
    technologies: ["React", "JavaScript", "CSS3", "Figma"],
    achievements: [
      "Creato design system utilizzato da tutto il team",
      "Migliorato l'accessibilità del 50%",
      "Ridotto il tempo di caricamento del 30%"
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Laurea in Informatica",
    institution: "Università degli Studi di Milano",
    year: "2019",
    description: "Formazione completa in informatica con focus su algoritmi, strutture dati e ingegneria del software.",
    relevantCourses: [
      "Algoritmi e Strutture Dati",
      "Basi di Dati",
      "Ingegneria del Software",
      "Sistemi Operativi",
      "Reti di Calcolatori"
    ]
  },
  {
    degree: "Certificazione AWS Solutions Architect",
    institution: "Amazon Web Services",
    year: "2022",
    description: "Certificazione professionale per l'architettura di soluzioni cloud su AWS.",
    relevantCourses: [
      "Architettura Cloud",
      "Sicurezza AWS",
      "Cost Optimization",
      "Disaster Recovery"
    ]
  }
];

export const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    year: "2022",
    credentialId: "AWS-123456",
    credentialUrl: "https://aws.amazon.com/verification/",
    description: "Certificazione per la progettazione e distribuzione di sistemi scalabili su AWS."
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    year: "2021",
    credentialId: "META-789012",
    credentialUrl: "https://www.meta.com/developers/",
    description: "Certificazione ufficiale per lo sviluppo di applicazioni React moderne."
  },
  {
    name: "Google Analytics Certified",
    issuer: "Google",
    year: "2020",
    description: "Certificazione per l'analisi e l'ottimizzazione delle performance web."
  }
];

export const hobbies: Hobby[] = [
  {
    name: "Fotografia",
    description: "Amo catturare momenti e paesaggi, specialmente durante i viaggi. La fotografia mi aiuta a vedere il mondo da prospettive diverse.",
    icon: "📸",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Cucina",
    description: "Sperimento con ricette di diverse culture. Cucinare è creatività e precisione, proprio come programmare.",
    icon: "👨‍🍳",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Escursionismo",
    description: "Camminare nella natura mi ricarica e mi ispira. Spesso le migliori idee arrivano durante una passeggiata.",
    icon: "🥾",
    image: "/api/placeholder/300/200"
  },
  {
    name: "Lettura",
    description: "Leggo principalmente libri di tecnologia, business e crescita personale. La conoscenza è la chiave del successo.",
    icon: "📚",
    image: "/api/placeholder/300/200"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Giulia Rossi",
    role: "Product Manager",
    company: "Tech Solutions SRL",
    content: "Marco è uno sviluppatore eccezionale. La sua attenzione ai dettagli e la capacità di risolvere problemi complessi sono impressionanti. Ha sempre consegnato progetti di alta qualità nei tempi previsti.",
    avatar: "/api/placeholder/80/80",
    rating: 5
  },
  {
    name: "Alessandro Bianchi",
    role: "CEO",
    company: "Digital Agency Pro",
    content: "Lavorare con Marco è stato fantastico. Non solo è tecnicamente preparato, ma sa anche comunicare efficacemente con clienti e team. Consigliatissimo!",
    avatar: "/api/placeholder/80/80",
    rating: 5
  },
  {
    name: "Maria Ferrari",
    role: "Designer",
    company: "Startup Innovativa",
    content: "Marco ha una grande sensibilità per l'UX e sa tradurre perfettamente i design in codice funzionale. È un piacere collaborare con lui.",
    avatar: "/api/placeholder/80/80",
    rating: 5
  }
];

export const philosophy: Philosophy = {
  title: "La mia filosofia di lavoro",
  description: "Credo che il successo di un progetto dipenda dall'equilibrio tra tecnica, creatività e comprensione delle esigenze del cliente.",
  principles: [
    "Codice pulito e manutenibile",
    "User experience al centro di ogni decisione",
    "Apprendimento continuo e aggiornamento costante",
    "Collaborazione e comunicazione efficace",
    "Qualità superiore alle scadenze",
    "Trasparenza e onestà in ogni fase del progetto"
  ]
};
