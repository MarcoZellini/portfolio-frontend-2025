import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Piattaforma e-commerce completa con carrello, checkout e gestione ordini. Realizzata con Next.js e Stripe.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com/tuo-username/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Applicazione per la gestione di task con drag & drop, filtri e collaborazione in tempo reale.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Firebase'],
    githubUrl: 'https://github.com/tuo-username/task-manager',
    liveUrl: 'https://taskmanager-demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard meteorologica con previsioni dettagliate e mappe interattive.',
    image: '/projects/weather.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'OpenWeather API'],
    githubUrl: 'https://github.com/tuo-username/weather-dashboard',
    liveUrl: 'https://weather-demo.com',
    featured: false,
  },
];
