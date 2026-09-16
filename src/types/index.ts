export type ServiceCategory = 'technology' | 'digital';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  capabilities: string[];
  technologies: string[];
  deliverables: string[];
  benefits: string[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export type ProjectCategory = 'all' | 'web' | 'software' | 'mobile' | 'ecommerce' | 'security' | 'digital';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  client: string;
  year: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  challenge: string;
  solution: string;
  architecture: {
    title: string;
    nodes: string[];
    description: string;
  };
  technologies: string[];
  results: {
    metric: string;
    label: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  featured: boolean;
}

export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: 'Engineering' | 'Cyber Security' | 'DevOps' | 'Digital Marketing' | 'SEO' | 'AI';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  coverImage?: string;
  content: {
    heading: string;
    paragraphs: string[];
    callout?: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  company: string;
  role: string;
  project: string;
  rating: number;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverable: string;
}
