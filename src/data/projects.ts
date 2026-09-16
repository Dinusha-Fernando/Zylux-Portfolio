import { Project } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'abdul-fandom',
    slug: 'abdul-fandom',
    title: 'Abdul Fandom',
    subtitle: 'Global E-Commerce & Merchandising Platform',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Platform',
    client: 'Abdul Fandom Global',
    year: '2025',
    heroImage: '/assets/project-abdul-fandom.jpg',
    galleryImages: [
      '/projects/abdul-fandom-1.webp',
      '/projects/abdul-fandom-2.webp'
    ],
    overview: 'A bespoke high-concurrency e-commerce platform built to handle sudden viral traffic spikes during limited-edition drops, featuring multi-currency checkout, fraud mitigation, and warehouse fulfillment automation.',
    challenge: 'The client previously experienced server crashes and stock desynchronization during merchandise flash drops, losing tens of thousands of dollars in lost checkouts and customer frustration.',
    solution: 'Zylux re-architected the entire digital presence from the ground up: Next.js frontend with edge caching on Cloudflare, containerized Django backend APIs with Redis queue throttling, and Stripe webhook idempotency.',
    architecture: {
      title: 'Decoupled Edge-Ready Commerce Architecture',
      nodes: [
        'Cloudflare CDN Edge Cache',
        'Next.js 14 SSR Storefront',
        'Django REST API Core',
        'PostgreSQL + Redis Queue',
        'Stripe Payments & Webhooks',
        'Warehouse Inventory Sync'
      ],
      description: 'Traffic spikes are absorbed at the edge while Redis message queues throttle concurrent checkout requests to maintain inventory consistency without database deadlocks.'
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Cloudflare'],
    results: [
      { metric: '99.99%', label: 'Uptime During Flash Drops' },
      { metric: '3.4x', label: 'Increase in Checkout Speed' },
      { metric: '+142%', label: 'Year-over-Year Revenue Growth' },
      { metric: '<400ms', label: 'Global Average Page Load' }
    ],
    testimonial: {
      quote: 'Zylux transformed our merchandising business. Our flash sales now run flawlessly without a millisecond of lag, and our conversion rate jumped dramatically.',
      author: 'Tariq Al-Mansoor',
      role: 'Operations Director',
      company: 'Abdul Fandom'
    },
    featured: true
  },
  {
    id: 'chronosentinel',
    slug: 'chronosentinel',
    title: 'ChronoSentinel',
    subtitle: 'Real-Time Cybersecurity Threat Intelligence Platform',
    category: 'security',
    categoryLabel: 'Security Intelligence',
    client: 'Sentinel Cyber Labs',
    year: '2025',
    heroImage: '/assets/project-chronosentinel.jpg',
    galleryImages: [
      '/projects/chronosentinel-1.webp'
    ],
    overview: 'An enterprise security observability platform that ingests millions of telemetry events, correlates anomalous network behaviors, and automatically isolates compromised endpoints using AI heuristics.',
    challenge: 'Security analysts were overwhelmed with alert fatigue and high false-positive rates from distributed microservices, taking an average of 42 minutes to detect and isolate threats.',
    solution: 'Engineered a high-performance ingestion pipeline using FastAPI and Redis Pub/Sub, coupled with an interactive dark-mode dashboard providing real-time threat maps, automated mitigation playbooks, and forensic audit logs.',
    architecture: {
      title: 'High-Throughput Threat Telemetry Architecture',
      nodes: [
        'Ingress Gateway & WAF',
        'FastAPI Async Event Ingestion',
        'Redis Cluster (Buffer & Pub/Sub)',
        'PostgreSQL (TimescaleDB)',
        'AI Anomaly Classifier',
        'Next.js Real-time Dashboard'
      ],
      description: 'Distributed sensor agents stream encrypted telemetry into an asynchronous FastAPI cluster, processed against machine-learned behavioral baselines to pinpoint genuine anomalies in milliseconds.'
    },
    technologies: ['React', 'FastAPI', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Tailwind CSS', 'AI Classifiers'],
    results: [
      { metric: '< 2.1s', label: 'Mean Time to Detect (MTTD)' },
      { metric: '10M+', label: 'Daily Events Processed' },
      { metric: '-86%', label: 'Reduction in Alert Fatigue' },
      { metric: '100%', label: 'Audit Trail Compliance' }
    ],
    testimonial: {
      quote: 'ChronoSentinel gives our SOC team superpowers. The speed, intuitive UX, and automated playbooks built by Zylux are lightyears ahead of legacy security suites.',
      author: 'Marcus Vance',
      role: 'Chief Information Security Officer',
      company: 'Sentinel Labs'
    },
    featured: true
  },
  {
    id: 'aussie-supplements',
    slug: 'aussie-supplements',
    title: 'Aussie Supplements',
    subtitle: 'High-Growth Fitness Nutrition Brand & Subscriptions',
    category: 'digital',
    categoryLabel: 'Growth & E-Commerce',
    client: 'Aussie Supplements Group',
    year: '2024',
    heroImage: '/assets/project-aussie-supplements.jpg',
    galleryImages: [
      '/projects/aussie-supplements-1.webp'
    ],
    overview: 'Complete digital overhaul of Australia’s premier sports nutrition brand, combining high-speed headless e-commerce, custom recurring subscription billing, and performance digital marketing campaigns.',
    challenge: 'High customer churn on recurring supplement orders and escalating Google/Meta advertising customer acquisition costs.',
    solution: 'Designed an integrated recurring subscription engine, personalized quiz-based product recommendation funnel, and full-funnel retention email sequences in Klaviyo with targeted technical SEO.',
    architecture: {
      title: 'Headless Subscription Commerce & Growth Engine',
      nodes: [
        'Interactive Quiz Engine',
        'Headless Next.js Storefront',
        'Custom Subscription Billing API',
        'Klaviyo Retention Automation',
        'GA4 & Meta Conversion API'
      ],
      description: 'User quiz responses feed directly into customized nutritional bundles, triggering automated retention workflows based on replenishment cycles.'
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe Subscriptions', 'Klaviyo', 'Tailwind CSS', 'SEO Engine'],
    results: [
      { metric: '+215%', label: 'Subscription Customer LTV' },
      { metric: '+64%', label: 'Organic Search Traffic' },
      { metric: '3.8x', label: 'Return on Ad Spend (ROAS)' },
      { metric: '32%', label: 'Cart Conversion Rate' }
    ],
    testimonial: {
      quote: 'Zylux is the rare partner that delivers world-class engineering and world-class digital marketing under one roof. Our monthly recurring revenue skyrocketed.',
      author: 'Liam Henderson',
      role: 'Managing Director',
      company: 'Aussie Supplements'
    },
    featured: true
  },
  {
    id: 'sparkler-automation',
    slug: 'sparkler',
    title: 'Sparkler',
    subtitle: 'Automated Multi-Channel Marketing & Campaign Orchestration',
    category: 'software',
    categoryLabel: 'Automation & SaaS',
    client: 'Sparkler Media',
    year: '2025',
    heroImage: '/assets/project-sparkler-media.jpg',
    galleryImages: [
      '/projects/sparkler-1.webp'
    ],
    overview: 'An intelligent marketing automation SaaS that coordinates email sequences, SMS alerts, social post syndication, and CRM updates across multiple client brands from a single interface.',
    challenge: 'Marketing agencies were spending 15+ hours per week manually copy-pasting campaign assets and cross-scheduling across separate tools with frequent human errors.',
    solution: 'Built a multi-tenant cloud application with intuitive visual workflow builders, scheduled background workers, unified analytics aggregation, and automated campaign health diagnostics.',
    architecture: {
      title: 'Event-Driven Marketing Workflow Engine',
      nodes: [
        'React Flow Drag-and-Drop Builder',
        'Next.js 14 Management Console',
        'FastAPI Background Scheduler',
        'Celery Task Queue with Redis',
        'Multi-Provider API Connectors'
      ],
      description: 'Campaign nodes trigger idempotent asynchronous workers executing marketing actions across external APIs with comprehensive failure-retry policies.'
    },
    technologies: ['React', 'Next.js', 'FastAPI', 'Python', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
    results: [
      { metric: '15 hrs/wk', label: 'Saved per Account Manager' },
      { metric: '99.98%', label: 'Task Execution Reliability' },
      { metric: '250k+', label: 'Automated Actions Daily' },
      { metric: '4.9/5', label: 'User Satisfaction Rating' }
    ],
    testimonial: {
      quote: 'Sparkler gave our agency the scalability we were missing. What used to take a whole team of coordinators now runs on autopilot seamlessly.',
      author: 'Chloe Dupont',
      role: 'VP of Growth',
      company: 'Sparkler Media'
    },
    featured: true
  },
  {
    id: 'return-buddies',
    slug: 'return-buddies',
    title: 'Return Buddies',
    subtitle: 'NYC On-Demand Reverse Logistics & Delivery Management Platform',
    category: 'mobile',
    categoryLabel: 'Logistics & Mobile Suite',
    client: 'Return Buddies Inc. (New York, USA)',
    year: '2025',
    heroImage: '/assets/project-return-buddies.jpg',
    galleryImages: ['/projects/return-buddies-1.webp'],
    overview: 'A high-throughput delivery and reverse-logistics management ecosystem built for a New York based parcel return service, featuring a React web dispatch console, Node.js + MongoDB real-time APIs, and a mission-critical React Native mobile app for on-demand couriers.',
    challenge: 'The client’s couriers operating across Manhattan and Brooklyn experienced severe React Native mobile app crashes during barcode scanning, network dropouts, and race conditions during high-volume NYC holiday return periods.',
    solution: 'Zylux performed an in-depth codebase audit to debug and resolve native threading and memory leaks in the React Native driver app, architected an event-driven Node.js backend cluster with geospatial MongoDB indexing, and built an interactive React web dispatch console with live telemetry and Mapbox routing.',
    architecture: {
      title: 'Real-Time Event-Driven Dispatch & Fleet Telematics',
      nodes: [
        'React Native Courier Mobile App',
        'Native Barcode & Camera Scanner Engine',
        'Node.js Express Clustered Backend',
        'MongoDB Geospatial & Time-Series DB',
        'WebSocket Fleet Telemetry Broker',
        'React Web Dispatch Console'
      ],
      description: 'Couriers stream live GPS coordinates and package pickup scan verification through WebSocket brokers into MongoDB geospatial collections, allowing dispatchers to automatically batch and optimize NYC routes in sub-seconds.'
    },
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'WebSockets', 'Mapbox GL', 'Docker', 'Express'],
    results: [
      { metric: '0.00%', label: 'Crash Rate (React Native Fixed)' },
      { metric: '99.9%', label: 'Route Dispatch Reliability' },
      { metric: '+140%', label: 'Daily Return Volume Handled' },
      { metric: '< 15 min', label: 'Average NYC Pickup Window' }
    ],
    testimonial: {
      quote: 'Zylux rescued our mobile app right before our busiest quarter. Their team resolved our persistent React Native crashes in days, stabilized our MongoDB architecture, and delivered a dispatch system that revolutionized our NYC operations.',
      author: 'Brendan Vance',
      role: 'Chief Operating Officer',
      company: 'Return Buddies (NYC)'
    },
    featured: true
  }
];
