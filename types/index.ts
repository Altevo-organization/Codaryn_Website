export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  results: string[];
  image: string;
  color: string;
}

export interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  number: string;
}
