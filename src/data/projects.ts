import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Piattaforma e-commerce completa con carrello, checkout e gestione ordini.',
    longDescription: 'Una piattaforma e-commerce moderna e scalabile costruita con le tecnologie più avanzate. Il progetto include un sistema di gestione prodotti, carrello della spesa, checkout sicuro con Stripe, dashboard amministrativa e sistema di gestione ordini.',
    image: '/projects/ecommerce.jpg',
    images: ['/projects/ecommerce-1.jpg', '/projects/ecommerce-2.jpg', '/projects/ecommerce-3.jpg'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB', 'Prisma', 'NextAuth.js'],
    category: 'fullstack',
    githubUrl: 'https://github.com/tuo-username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-03-20',
    duration: '3 mesi',
    status: 'completed',
    
    caseStudy: {
      challenge: 'Creare una piattaforma e-commerce scalabile che potesse gestire migliaia di prodotti e utenti simultanei, con un\'esperienza utente fluida e sicura.',
      solution: 'Implementazione di un\'architettura moderna con Next.js per il frontend, MongoDB per la gestione dati, Stripe per i pagamenti e Prisma come ORM per garantire type safety.',
      results: 'Riduzione del 40% del tempo di caricamento, aumento del 60% delle conversioni e gestione di oltre 10.000 prodotti con performance ottimali.',
      architecture: 'Architettura serverless con Next.js API routes, database MongoDB Atlas, CDN per le immagini e caching intelligente.',
      keyFeatures: [
        'Sistema di ricerca avanzata con filtri',
        'Carrello persistente con sincronizzazione real-time',
        'Checkout multi-step con validazione',
        'Dashboard admin completa',
        'Sistema di recensioni e rating',
        'Gestione inventario automatica'
      ],
      challenges: [
        'Ottimizzazione delle performance per grandi cataloghi',
        'Implementazione sicura dei pagamenti',
        'Gestione dello stato globale complesso',
        'SEO per migliaia di pagine prodotto'
      ],
      learnings: [
        'Importanza del caching strategico per e-commerce',
        'Pattern di architettura per applicazioni scalabili',
        'Best practices per sicurezza dei pagamenti',
        'Ottimizzazione SEO per siti dinamici'
      ]
    },
    
    mockups: ['/mockups/ecommerce-desktop.jpg', '/mockups/ecommerce-mobile.jpg'],
    diagrams: ['/diagrams/ecommerce-architecture.png'],
    codeSnippets: [
      {
        title: 'Hook personalizzato per carrello',
        language: 'typescript',
        code: `const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addItem = useCallback((product: Product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);
  
  return { items, addItem, removeItem, clearCart };
};`,
        description: 'Hook personalizzato per gestire lo stato del carrello con ottimizzazioni per le performance.'
      }
    ],
    demoVideo: '/videos/ecommerce-demo.mp4',
    
    metrics: {
      performance: 'Lighthouse Score: 95/100',
      users: '1.200+ utenti attivi mensili',
      feedback: '4.8/5 stelle dalle recensioni',
      businessImpact: 'Aumento del 60% delle vendite online'
    },
    
    teamSize: 1,
    role: 'Full-Stack Developer',
    collaboration: ['UI/UX Designer per il design system']
  },
  
  {
    id: '2',
    title: 'Task Management App',
    description: 'Applicazione per la gestione di task con drag & drop, filtri e collaborazione in tempo reale.',
    longDescription: 'Un\'applicazione completa per la gestione dei task progettata per team di sviluppo. Include funzionalità avanzate come drag & drop, notifiche real-time, collaborazione in tempo reale e integrazione con sistemi di versioning.',
    image: '/projects/taskmanager.jpg',
    images: ['/projects/taskmanager-1.jpg', '/projects/taskmanager-2.jpg'],
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Firebase', 'Socket.io', 'Zustand'],
    category: 'frontend',
    githubUrl: 'https://github.com/tuo-username/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    featured: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-04-10',
    duration: '2 mesi',
    status: 'completed',
    
    caseStudy: {
      challenge: 'Creare un\'interfaccia intuitiva per la gestione di task complessi con collaborazione real-time e animazioni fluide.',
      solution: 'Utilizzo di React con TypeScript per type safety, Framer Motion per animazioni, Firebase per il backend e Socket.io per la sincronizzazione real-time.',
      results: 'Miglioramento del 50% dell\'efficienza del team, riduzione del 30% del tempo per completare i task e feedback positivo del 95% degli utenti.',
      keyFeatures: [
        'Drag & drop intuitivo per riorganizzare task',
        'Sincronizzazione real-time tra utenti',
        'Sistema di notifiche push',
        'Filtri e ricerca avanzata',
        'Timeline e scadenze visive',
        'Integrazione con GitHub'
      ],
      challenges: [
        'Gestione dello stato complesso con aggiornamenti real-time',
        'Ottimizzazione delle performance con molti task',
        'Sincronizzazione dei conflitti tra utenti',
        'Animazioni fluide senza impattare le performance'
      ],
      learnings: [
        'Pattern per gestione stato real-time',
        'Ottimizzazione delle animazioni in React',
        'Gestione dei conflitti in applicazioni collaborative',
        'Best practices per UX in app complesse'
      ]
    },
    
    mockups: ['/mockups/taskmanager-desktop.jpg', '/mockups/taskmanager-mobile.jpg'],
    codeSnippets: [
      {
        title: 'Componente Drag & Drop',
        language: 'typescript',
        code: `const TaskCard = ({ task }: { task: Task }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });
  
  const style = transform ? {
    transform: \`translate3d(\${transform.x}px, \${transform.y}px, 0)\`,
  } : undefined;
  
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={\`task-card \${isDragging ? 'dragging' : ''}\`}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
    </div>
  );
};`,
        description: 'Implementazione del drag & drop usando react-dnd per una UX fluida.'
      }
    ],
    
    metrics: {
      performance: 'Bundle size: 245KB gzipped',
      users: '500+ utenti attivi',
      feedback: '4.9/5 stelle',
      businessImpact: 'Aumento del 50% della produttività del team'
    },
    
    teamSize: 2,
    role: 'Frontend Lead',
    collaboration: ['Backend Developer per API design']
  },
  
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard meteorologica con previsioni dettagliate e mappe interattive.',
    longDescription: 'Una dashboard meteorologica completa che fornisce previsioni dettagliate, mappe interattive, allerte meteo e dati storici. Progettata per essere responsive e accessibile.',
    image: '/projects/weather.jpg',
    images: ['/projects/weather-1.jpg', '/projects/weather-2.jpg'],
    technologies: ['Next.js', 'Tailwind CSS', 'OpenWeather API', 'Chart.js', 'PWA'],
    category: 'frontend',
    githubUrl: 'https://github.com/tuo-username/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false,
    createdAt: '2024-01-10',
    updatedAt: '2024-02-15',
    duration: '1 mese',
    status: 'completed',
    
    caseStudy: {
      challenge: 'Creare una dashboard meteorologica che fosse veloce, accurata e funzionasse offline come PWA.',
      solution: 'Implementazione di Next.js con PWA capabilities, caching intelligente dei dati meteo e interfaccia ottimizzata per mobile.',
      results: 'Tempo di caricamento sotto 2 secondi, funzionalità offline complete e 4.7/5 stelle nelle recensioni.',
      keyFeatures: [
        'Previsioni a 7 giorni con dettagli orari',
        'Mappe interattive con layer meteo',
        'Allerte meteo personalizzate',
        'Funzionalità offline complete',
        'Grafici interattivi per dati storici',
        'Supporto per geolocalizzazione'
      ],
      challenges: [
        'Gestione efficiente delle API calls',
        'Implementazione PWA robusta',
        'Ottimizzazione per dispositivi mobili',
        'Gestione degli errori di rete'
      ],
      learnings: [
        'Pattern per caching di dati esterni',
        'Best practices per PWA',
        'Ottimizzazione per mobile-first',
        'Gestione degli stati di errore'
      ]
    },
    
    metrics: {
      performance: 'Lighthouse PWA Score: 100/100',
      users: '800+ installazioni PWA',
      feedback: '4.7/5 stelle',
      businessImpact: 'Riduzione del 70% delle chiamate API grazie al caching'
    },
    
    teamSize: 1,
    role: 'Frontend Developer'
  },
  
  {
    id: '4',
    title: 'Blog CMS',
    description: 'Sistema di gestione contenuti per blog con editor markdown, SEO ottimizzato e sistema di commenti.',
    longDescription: 'Un CMS completo per blog costruito con Next.js e Sanity. Include editor markdown avanzato, ottimizzazione SEO automatica, sistema di commenti e analytics integrati.',
    image: '/projects/blog-cms.jpg',
    technologies: ['Next.js', 'MDX', 'Sanity', 'Vercel', 'Tailwind CSS'],
    category: 'fullstack',
    githubUrl: 'https://github.com/tuo-username/blog-cms',
    liveUrl: 'https://blog-demo.com',
    featured: false,
    createdAt: '2023-12-01',
    updatedAt: '2024-01-20',
    duration: '2 mesi',
    status: 'completed',
    
    caseStudy: {
      challenge: 'Creare un CMS moderno che permettesse di scrivere contenuti ricchi mantenendo performance ottimali e SEO.',
      solution: 'Utilizzo di Sanity come headless CMS, MDX per contenuti ricchi, Next.js per SSG e ottimizzazioni SEO avanzate.',
      results: 'Tempo di caricamento sotto 1 secondo, 95+ Lighthouse SEO score e gestione di 200+ articoli senza problemi di performance.',
      keyFeatures: [
        'Editor markdown con preview live',
        'Sistema di tag e categorie',
        'Commenti con moderazione',
        'SEO automatico per ogni post',
        'Analytics integrati',
        'Sistema di backup automatico'
      ],
      challenges: [
        'Ottimizzazione delle performance con molti contenuti',
        'Implementazione SEO avanzata',
        'Gestione dei contenuti multimediali',
        'Sistema di commenti sicuro'
      ],
      learnings: [
        'Pattern per headless CMS',
        'Ottimizzazioni SEO per blog',
        'Gestione di contenuti dinamici',
        'Sicurezza nei sistemi di commenti'
      ]
    },
    
    teamSize: 1,
    role: 'Full-Stack Developer'
  },
  
  {
    id: '5',
    title: 'Portfolio Template',
    description: 'Template responsive per portfolio con dark mode, animazioni smooth e ottimizzato per le performance.',
    longDescription: 'Un template moderno e completamente personalizzabile per portfolio di sviluppatori. Include dark mode, animazioni fluide, ottimizzazioni SEO e design responsive.',
    image: '/projects/portfolio-template.jpg',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'TypeScript'],
    category: 'frontend',
    githubUrl: 'https://github.com/tuo-username/portfolio-template',
    liveUrl: 'https://portfolio-template-demo.com',
    featured: false,
    createdAt: '2023-11-15',
    updatedAt: '2024-02-01',
    duration: '1 mese',
    status: 'completed',
    
    caseStudy: {
      challenge: 'Creare un template di portfolio che fosse moderno, performante e facilmente personalizzabile.',
      solution: 'Sviluppo di un template modulare con React, animazioni con Framer Motion e design system completo con Tailwind CSS.',
      results: 'Template utilizzato da 100+ sviluppatori, 4.8/5 stelle su GitHub e performance Lighthouse 100/100.',
      keyFeatures: [
        'Design responsive mobile-first',
        'Dark mode con transizioni smooth',
        'Animazioni performanti',
        'SEO ottimizzato',
        'Facilmente personalizzabile',
        'Documentazione completa'
      ],
      challenges: [
        'Creare un design system scalabile',
        'Ottimizzare le animazioni per le performance',
        'Rendere il template facilmente personalizzabile',
        'Mantenere la compatibilità cross-browser'
      ],
      learnings: [
        'Design system per template',
        'Ottimizzazione delle animazioni',
        'Pattern per template riutilizzabili',
        'Documentazione per sviluppatori'
      ]
    },
    
    teamSize: 1,
    role: 'Frontend Developer'
  },
  
  {
    id: '6',
    title: 'API RESTful',
    description: 'API REST completa con autenticazione JWT, rate limiting, documentazione Swagger e test automatizzati.',
    longDescription: 'Un\'API REST robusta e scalabile costruita con Node.js ed Express. Include autenticazione JWT, rate limiting, validazione dati, documentazione Swagger e suite completa di test.',
    image: '/projects/api-rest.jpg',
    technologies: ['Node.js', 'Express', 'JWT', 'Swagger', 'Jest', 'MongoDB', 'Redis'],
    category: 'backend',
    githubUrl: 'https://github.com/tuo-username/api-rest',
    liveUrl: 'https://api-demo.com/docs',
    featured: false,
    createdAt: '2023-10-01',
    updatedAt: '2024-01-15',
    duration: '2 mesi',
    status: 'completed',
    
    caseStudy: {
      challenge: 'Creare un\'API scalabile e sicura che potesse gestire migliaia di richieste al minuto con documentazione completa.',
      solution: 'Implementazione di Express.js con middleware per sicurezza, Redis per caching, JWT per autenticazione e Swagger per documentazione automatica.',
      results: 'API in grado di gestire 10.000+ richieste/minuto, 99.9% uptime e documentazione completa con esempi interattivi.',
      keyFeatures: [
        'Autenticazione JWT con refresh token',
        'Rate limiting per prevenire abusi',
        'Validazione dati con Joi',
        'Documentazione Swagger interattiva',
        'Caching intelligente con Redis',
        'Suite completa di test automatizzati'
      ],
      challenges: [
        'Implementazione di sicurezza robusta',
        'Ottimizzazione delle performance',
        'Gestione degli errori e logging',
        'Creazione di documentazione completa'
      ],
      learnings: [
        'Pattern per API scalabili',
        'Sicurezza nelle API REST',
        'Testing automatizzato per backend',
        'Documentazione per API'
      ]
    },
    
    teamSize: 1,
    role: 'Backend Developer'
  }
];
