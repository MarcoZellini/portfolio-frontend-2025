// Costanti per il portfolio

export const SITE_CONFIG = {
  name: "Marco Zellini",
  title: "Portfolio | Sviluppatore Full Stack",
  description: "Portfolio personale di uno sviluppatore full stack.\nCreo esperienze web moderne e performanti.",
  url: "https://www.marcozellini.com",
  ogImage: "/og-image.jpg",
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/MarcoZellini",
  linkedin: "https://linkedin.com/in/marco-zellini",
} as const;
