export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'security' | 'marketing';
  description: string;
}

export const technologiesData: TechItem[] = [
  { name: 'Next.js', category: 'frontend', description: 'React framework for production-grade web applications with server-side rendering.' },
  { name: 'TypeScript', category: 'frontend', description: 'Static typing for rock-solid, scalable frontend and backend codebases.' },
  { name: 'React', category: 'frontend', description: 'Declarative component library for interactive user interfaces.' },
  { name: 'Tailwind CSS', category: 'frontend', description: 'Utility-first CSS framework for rapid, bespoke UI engineering.' },
  { name: 'Python', category: 'backend', description: 'Versatile language for high-performance backends, automation, and AI workflows.' },
  { name: 'Django', category: 'backend', description: 'Battle-tested web framework with built-in security and ORM architecture.' },
  { name: 'FastAPI', category: 'backend', description: 'Modern, high-performance async API framework powered by Python type hints.' },
  { name: 'Node.js', category: 'backend', description: 'Scalable event-driven JavaScript runtime for real-time services and microservices.' },
  { name: 'Flutter', category: 'mobile', description: 'Google UI toolkit for compiling natively compiled multi-platform applications.' },
  { name: 'PostgreSQL', category: 'database', description: 'The world’s most advanced open-source relational database engine.' },
  { name: 'Redis', category: 'database', description: 'Ultra-fast in-memory key-value cache and message broker.' },
  { name: 'Docker', category: 'devops', description: 'Containerization standard ensuring identical behavior from local dev to cloud production.' },
  { name: 'GitHub Actions', category: 'devops', description: 'Automated CI/CD pipelines for testing, building, and deploying software.' },
  { name: 'Cloudflare', category: 'devops', description: 'Global edge network providing DDoS mitigation, CDN caching, and edge compute.' },
  { name: 'AWS Cloud', category: 'devops', description: 'Scalable cloud infrastructure hosting databases, compute clusters, and storage buckets.' },
  { name: 'OWASP ZAP', category: 'security', description: 'Application security testing and vulnerability detection scanner.' },
  { name: 'Klaviyo', category: 'marketing', description: 'Retention email marketing and behavioral automation platform.' },
  { name: 'Google Analytics 4', category: 'marketing', description: 'Advanced behavioral event tracking and conversion analytics.' }
];

export const marqueeTechnologies = [
  'Python',
  'Django',
  'FastAPI',
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Flutter',
  'PostgreSQL',
  'Redis',
  'Docker',
  'GitHub Actions',
  'AWS',
  'Cloudflare',
  'OWASP Security',
  'LangChain AI',
  'Klaviyo'
];
