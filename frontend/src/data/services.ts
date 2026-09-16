import { ServiceDetail } from '@/types';

export const servicesData: ServiceDetail[] = [
  // --- TECHNOLOGY SERVICES ---
  {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    category: 'technology',
    tagline: 'High-performance web applications built for speed, conversion, and global scale.',
    shortDescription: 'Modern websites, responsive enterprise platforms, and Next.js / React web applications engineered for speed and conversion.',
    fullDescription: 'We build modern, ultra-responsive web applications and platforms designed to serve demanding user bases. Utilizing modern frameworks like Next.js, React, and TypeScript with secure backend APIs, our web systems deliver sub-second load speeds, resilient uptime, and clean maintainable codebases.',
    iconName: 'Globe',
    capabilities: [
      'Next.js & React Architecture',
      'High-Conversion Corporate Portals',
      'Progressive Web Applications (PWA)',
      'Headless CMS & Content Workflows',
      'Sub-Second Core Web Vitals',
      'Global CDN & Edge Routing'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vercel / Cloudflare'],
    deliverables: [
      'Production-Ready Source Code',
      'Component Design System',
      'SEO Architecture & Meta Schema',
      'CI/CD Deployment Pipelines',
      'System Architecture Documentation'
    ],
    benefits: [
      'Guaranteed 95+ Core Web Vitals performance score',
      'Seamless multi-device responsiveness',
      'Search engine friendly server-side rendering',
      'Extensible modular architecture ready for growth'
    ],
    workflow: [
      { step: '01', title: 'UX & Architecture', description: 'Interactive wireframing, component inventory, and data flow modeling.' },
      { step: '02', title: 'Modular Build', description: 'Component-driven engineering with type safety and responsive breakpoints.' },
      { step: '03', title: 'API & Performance', description: 'Backend integration, image optimization, edge caching, and stress testing.' },
      { step: '04', title: 'Launch & Observability', description: 'Zero-downtime deployment, DNS provisioning, and analytics setup.' }
    ],
    faq: [
      { question: 'Which tech stack do you recommend for high-performance websites?', answer: 'We primarily leverage Next.js with TypeScript and Tailwind CSS, backed by headless APIs in Python or Node.js, ensuring maximum speed, SEO indexing, and ease of scaling.' },
      { question: 'Do you handle migrations from legacy CMS or platforms?', answer: 'Yes, we regularly architect zero-loss content and data migrations from WordPress, Drupal, or proprietary legacy systems.' }
    ]
  },
  {
    id: 'software-development',
    slug: 'software-development',
    title: 'Software Development',
    category: 'technology',
    tagline: 'Custom business software engineered around your specific operational workflows.',
    shortDescription: 'Bespoke software systems, SaaS products, and enterprise tools engineered around business workflows.',
    fullDescription: 'From high-throughput data processing tools to internal operations dashboards, we engineer custom software systems that replace fragmented spreadsheets and manual work with dependable automated logic.',
    iconName: 'Code2',
    capabilities: [
      'Full-Cycle SaaS Development',
      'Enterprise Workflow Platforms',
      'Microservice & Monolith Architecture',
      'Role-Based Access Control (RBAC)',
      'Real-time Data Processing',
      'Legacy Modernization'
    ],
    technologies: ['Python', 'Django', 'FastAPI', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    deliverables: [
      'Scalable Backend API & Database Schema',
      'Web-based Management Dashboards',
      'Automated Test Suites (Unit & E2E)',
      'Data Migration Scripts',
      'Admin Documentation & Runbooks'
    ],
    benefits: [
      'Automates tedious manual operations by up to 80%',
      'Single source of truth for business intelligence',
      'Scales horizontally as customer volume grows',
      'Full source code ownership without vendor lock-in'
    ],
    workflow: [
      { step: '01', title: 'Requirements & Domain Modeling', description: 'Deep-dive into business workflows, edge cases, and user personas.' },
      { step: '02', title: 'Schema & Architecture', description: 'Normalized database structure, authentication, and state management design.' },
      { step: '03', title: 'Sprint-Based Development', description: 'Bi-weekly builds with automated test validation and staging reviews.' },
      { step: '04', title: 'Security Audit & Rollout', description: 'Penetration testing, backup procedures, and enterprise deployment.' }
    ],
    faq: [
      { question: 'Can Zylux develop multi-tenant SaaS applications?', answer: 'Yes, we architect multi-tenant SaaS platforms with tenant isolation, Stripe billing subscriptions, and custom role permissions.' }
    ]
  },
  {
    id: 'mobile-development',
    slug: 'mobile-development',
    title: 'Mobile Applications',
    category: 'technology',
    tagline: 'Native and cross-platform mobile apps that delight users and drive retention.',
    shortDescription: 'Cross-platform and native-ready iOS & Android apps designed for speed, fluidity, and offline resilience.',
    fullDescription: 'We build polished iOS and Android applications combining fluid gesture-driven UI with robust offline-first synchronization and real-time push notifications.',
    iconName: 'Smartphone',
    capabilities: [
      'Cross-Platform iOS & Android Apps',
      'Flutter & React Native Engineering',
      'Offline-First Data Storage',
      'Biometric & Token Authentication',
      'In-App Purchases & Subscriptions',
      'App Store & Play Store Submissions'
    ],
    technologies: ['Flutter', 'React Native', 'TypeScript', 'Firebase', 'SQLite', 'Fastlane'],
    deliverables: [
      'iOS & Android Binary Packages',
      'App Store & Play Store Assets',
      'Push Notification Infrastructure',
      'Crashlytics & Telemetry Pipeline'
    ],
    benefits: [
      'One unified codebase reducing maintenance overhead by 40%',
      'Fluid 60fps animations across all screen sizes',
      'Zero downtime sync with cloud databases'
    ],
    workflow: [
      { step: '01', title: 'Prototyping & Flow', description: 'Figma interactive mobile wireframes and user interaction maps.' },
      { step: '02', title: 'Client-Side Engineering', description: 'State management, local storage, and component rendering.' },
      { step: '03', title: 'Backend & Sync', description: 'Secure token exchange, push services, and offline sync.' },
      { step: '04', title: 'Store Deployment', description: 'Store guidelines compliance, TestFlight betas, and public publishing.' }
    ],
    faq: [
      { question: 'Do you help with App Store approval and guidelines?', answer: 'Yes, we manage the complete submission process, guideline verification, privacy nutrition labels, and app store listings.' }
    ]
  },
  {
    id: 'api-integrations',
    slug: 'api-integrations',
    title: 'API & Integrations',
    category: 'technology',
    tagline: 'Reliable, well-documented APIs and third-party data pipelines.',
    shortDescription: 'REST and GraphQL APIs, third-party payment gateways, CRM connections, and webhook infrastructure.',
    fullDescription: 'We build secure, high-throughput APIs and integrate complex enterprise systems (Stripe, HubSpot, Salesforce, ERPs, and custom webhooks) with guaranteed fault tolerance.',
    iconName: 'Network',
    capabilities: [
      'RESTful & GraphQL API Architecture',
      'Rate-Limiting & Token Throttling',
      'Webhook Ingestion Engines',
      'Payment Gateway Integrations (Stripe, PayPal)',
      'CRM & ERP Synchronization',
      'OpenAPI & Swagger Documentation'
    ],
    technologies: ['FastAPI', 'Node.js', 'Express', 'Redis', 'PostgreSQL', 'Swagger'],
    deliverables: ['Interactive Swagger Docs', 'Postman Collections', 'HMAC Webhook Handlers', 'Automated Health Monitoring'],
    benefits: ['Zero data duplication across platforms', 'Sub-50ms endpoint latencies', 'Fault-tolerant retry mechanisms'],
    workflow: [
      { step: '01', title: 'Contract Definition', description: 'Designing OpenAPI specs and defining data schemas.' },
      { step: '02', title: 'Endpoint Construction', description: 'Building endpoints with validation, caching, and rate limiting.' },
      { step: '03', title: 'Stress & Load Testing', description: 'Benchmarking concurrency under high-throughput conditions.' },
      { step: '04', title: 'Documentation & SDKs', description: 'Generating developer documentation and client libraries.' }
    ],
    faq: [
      { question: 'Can you handle asynchronous webhooks with retry logic?', answer: 'Yes, we use Redis-backed message queues like Celery or BullMQ to ensure zero webhooks are dropped during network outages.' }
    ]
  },
  {
    id: 'cyber-security',
    slug: 'cyber-security',
    title: 'Cyber Security',
    category: 'technology',
    tagline: 'Proactive application security, penetration testing, and infrastructure hardening.',
    shortDescription: 'Application security audits, vulnerability assessments, penetration testing, and infrastructure hardening.',
    fullDescription: 'Security is not an afterthought at Zylux; it is engineered into every layer. We identify attack vectors, audit application logic, secure authentication flows, and harden cloud infrastructure against OWASP Top 10 vulnerabilities.',
    iconName: 'ShieldCheck',
    capabilities: [
      'Vulnerability Assessment & Pen Testing (VAPT)',
      'OWASP Top 10 Hardening',
      'API Security & OAuth2 / JWT Auditing',
      'Database Encryption at Rest & in Transit',
      'Continuous Threat Monitoring & Alerting',
      'Security Compliance Readiness (SOC2 / GDPR)'
    ],
    technologies: ['WAF', 'Cloudflare', 'OWASP ZAP', 'Nmap', 'Burp Suite', 'Fail2ban', 'TLS 1.3'],
    deliverables: [
      'Executive Security Summary & Risk Matrix',
      'Technical Remediation Playbook',
      'Hardened Cloud Configuration Files',
      'Automated Vulnerability Scan Pipeline'
    ],
    benefits: [
      'Eliminate critical vulnerabilities before malicious actors find them',
      'Build client and investor trust with verified security postures',
      'Prevent catastrophic data leaks and ransomware threats'
    ],
    workflow: [
      { step: '01', title: 'Reconnaissance', description: 'Surface mapping, port scanning, and threat modeling.' },
      { step: '02', title: 'Active Vulnerability Testing', description: 'Manual and automated penetration testing against application logic.' },
      { step: '03', title: 'Remediation Engineering', description: 'Directly patching code vulnerabilities, sanitizing inputs, and re-testing.' },
      { step: '04', title: 'Hardening & Observability', description: 'WAF rules, automated alerts, and continuous audit schedules.' }
    ],
    faq: [
      { question: 'Do you provide a formal security audit report for investors or clients?', answer: 'Yes, our audits come with an executive summary suitable for stakeholders alongside technical proof-of-concept remediation guides for developers.' }
    ]
  },
  {
    id: 'devops-cloud',
    slug: 'devops-cloud',
    title: 'DevOps & Cloud',
    category: 'technology',
    tagline: 'Automated CI/CD pipelines, containerized deployments, and resilient cloud architectures.',
    shortDescription: 'CI/CD automation, Dockerization, cloud infrastructure, Nginx configuration, and observability.',
    fullDescription: 'We bridge the gap between development and production. We design automated continuous delivery pipelines, containerize applications with Docker, configure reverse proxies with Nginx/Cloudflare, and monitor uptime 24/7.',
    iconName: 'Terminal',
    capabilities: [
      'Docker & Container Orchestration',
      'GitHub Actions Automated CI/CD Pipelines',
      'Nginx Reverse Proxy & Load Balancing',
      'AWS / DigitalOcean / Hetzner Cloud Infrastructure',
      'Automated Database Backup & Disaster Recovery',
      'Prometheus, Grafana & Uptime Observability'
    ],
    technologies: ['Docker', 'GitHub Actions', 'Nginx', 'Cloudflare', 'Linux', 'AWS', 'Grafana'],
    deliverables: [
      'Infrastructure as Code (IaC) Scripts',
      'Multi-Stage Dockerfiles',
      'Automated CI/CD Pipeline Definitions',
      'Real-Time Health Monitoring Dashboards'
    ],
    benefits: [
      'Deploy updates in minutes with zero manual server SSH commands',
      'Immediate automated rollbacks if tests fail',
      'Slashes server hosting expenses through optimized resource usage'
    ],
    workflow: [
      { step: '01', title: 'Infrastructure Audit', description: 'Review current hosting overhead, single points of failure, and release bottlenecks.' },
      { step: '02', title: 'Containerization & Pipeline', description: 'Writing efficient Dockerfiles and setting up automated GitHub Actions.' },
      { step: '03', title: 'Staging & Production Clusters', description: 'Setting up isolated environments with automated SSL and health probes.' },
      { step: '04', title: 'Monitoring & Handoff', description: 'Configuring telemetry alerts via Slack/Email and providing runbook instructions.' }
    ],
    faq: [
      { question: 'Can you migrate our applications from expensive cloud setups to cost-effective servers?', answer: 'Absolutely. We frequently help companies move to high-performance dedicated servers or modern VPS clusters, cutting cloud bills by up to 60% without performance loss.' }
    ]
  },
  {
    id: 'automation-systems',
    slug: 'automation-systems',
    title: 'Automation & Custom Systems',
    category: 'technology',
    tagline: 'Eliminate repetitive manual bottlenecks with intelligent background software.',
    shortDescription: 'Scheduled bots, data synchronization pipelines, automated reporting, and custom business tools.',
    fullDescription: 'We build custom background workers, automated ETL pipelines, and internal tools that eliminate repetitive administrative tasks, saving thousands of work hours annually.',
    iconName: 'Cpu',
    capabilities: [
      'ETL & Data Scraping Pipelines',
      'Automated PDF / Invoice Generation',
      'Third-Party CRM / Database Synchronization',
      'Scheduled Cron & Message Queue Bots',
      'Event-Driven Webhook Automation'
    ],
    technologies: ['Python', 'Celery', 'Redis', 'Node.js', 'Playwright', 'PostgreSQL'],
    deliverables: ['Fault-Tolerant Automation Worker', 'Task Queue Dashboard', 'Audit Logs & Alert Channels'],
    benefits: ['Zero human error in repetitive data transfers', 'Free up staff to focus on revenue-generating strategy'],
    workflow: [
      { step: '01', title: 'Bottleneck Mapping', description: 'Calculating manual hours spent per workflow and defining triggers.' },
      { step: '02', title: 'Automation Worker Build', description: 'Developing resilient scripts with error handling and idempotency.' },
      { step: '03', title: 'Testing & Fallbacks', description: 'Running sandbox simulations to guarantee edge cases fail gracefully.' },
      { step: '04', title: 'Live Execution', description: 'Deploying workers with real-time exception notifications.' }
    ],
    faq: [
      { question: 'What happens if a third-party service is temporarily down?', answer: 'Our workers utilize exponential backoff and persistent queues so tasks retry automatically once the service recovers.' }
    ]
  },
  {
    id: 'ai-solutions',
    slug: 'ai-solutions',
    title: 'AI Solutions & Workflows',
    category: 'technology',
    tagline: 'Practical AI integration, intelligent assistants, and semantic data workflows.',
    shortDescription: 'AI-powered assistants, document intelligence, classification engines, and custom model integrations.',
    fullDescription: 'We build practical, ROI-driven AI solutions. Whether augmenting customer support with intelligent retrieval-augmented agents, parsing complex documents, or classifying unstructured data, we bring AI into actual production workflows.',
    iconName: 'Sparkles',
    capabilities: [
      'RAG (Retrieval-Augmented Generation) Systems',
      'Custom LLM API Integrations (OpenAI, Claude, Gemini)',
      'Vector Database Setup (Pinecone, pgvector)',
      'Document Intelligence & OCR Extraction',
      'Smart Customer Support Agents',
      'Automated Content Moderation'
    ],
    technologies: ['Python', 'LangChain', 'FastAPI', 'OpenAI API', 'Gemini API', 'pgvector'],
    deliverables: ['Production AI API Endpoints', 'Embeddings Pipeline', 'Admin Prompt Engineering Console'],
    benefits: ['Sub-second answers grounded directly in your proprietary company documents', '24/7 autonomous support triage'],
    workflow: [
      { step: '01', title: 'Use Case Validation', description: 'Identifying high-impact opportunities where AI delivers measurable accuracy.' },
      { step: '02', title: 'Data Ingestion & Chunking', description: 'Vectorizing your company knowledge base with clean semantic splits.' },
      { step: '03', title: 'Prompt & Pipeline Tuning', description: 'Calibrating guardrails, temperature, and verification heuristics.' },
      { step: '04', title: 'Deploy & Monitor', description: 'Evaluating hallucination rates, token costs, and user satisfaction.' }
    ],
    faq: [
      { question: 'Does our proprietary data leak to public AI training models?', answer: 'No. We configure enterprise private API endpoints and zero-data-retention agreements to protect confidential intellectual property.' }
    ]
  },

  // --- DIGITAL GROWTH SERVICES ---
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Growth',
    category: 'digital',
    tagline: 'Multi-channel acquisition strategies designed to capture high-intent customers.',
    shortDescription: 'Data-driven performance marketing, multi-channel campaigns, conversion rate optimization, and ROI tracking.',
    fullDescription: 'We treat digital marketing as a science. Combining paid acquisition, content distribution, and rigorous conversion rate optimization, we build growth engines that predictably turn clicks into paying customers.',
    iconName: 'TrendingUp',
    capabilities: [
      'Paid Search & Social Campaigns (Google, Meta, LinkedIn)',
      'Conversion Rate Optimization (CRO)',
      'Landing Page Engineering & A/B Testing',
      'Attribution Modeling & Analytics',
      'Audience Segmentation & Retargeting',
      'Full-Funnel Campaign Strategy'
    ],
    technologies: ['Google Analytics 4', 'Google Tag Manager', 'Meta Pixel', 'Hotjar', 'Looker Studio'],
    deliverables: ['Weekly Performance Dashboards', 'High-Converting Ad Creatives', 'A/B Test Variant Playbooks', 'Audience Segment Lists'],
    benefits: ['Lower Customer Acquisition Cost (CAC)', 'Data-backed decision making with zero guesswork', 'Transparent revenue attribution'],
    workflow: [
      { step: '01', title: 'Funnel Audit', description: 'Analyzing traffic drop-off points, current cost per lead, and competitive landscape.' },
      { step: '02', title: 'Campaign Architecture', description: 'Creating targeted ad sets, compelling copy, and tailored landing pages.' },
      { step: '03', title: 'Launch & A/B Testing', description: 'Testing hooks, headlines, visual assets, and bidding strategies.' },
      { step: '04', title: 'Scale & Optimize', description: 'Allocating budget to top-performing segments and lowering acquisition costs.' }
    ],
    faq: [
      { question: 'How do you measure marketing success?', answer: 'We measure success through bottom-line business metrics: Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and qualified pipeline value.' }
    ]
  },
  {
    id: 'seo',
    slug: 'seo',
    title: 'SEO & Search Strategy',
    category: 'digital',
    tagline: 'Dominate organic search rankings with technical precision and authoritative content.',
    shortDescription: 'Technical SEO audits, keyword strategy, schema markup, and long-term organic authority building.',
    fullDescription: 'Because we are software engineers, our SEO goes far deeper than basic keywords. We optimize technical architecture, Core Web Vitals, dynamic OpenGraph schemas, and crawl efficiency to earn top organic search visibility.',
    iconName: 'Search',
    capabilities: [
      'Technical SEO Audits & Crawl Optimization',
      'High-Intent Keyword Research',
      'Programmatic SEO & Content Clusters',
      'Structured Data (JSON-LD) & Rich Snippets',
      'Local SEO & Google Business Optimization',
      'Link Building & Digital PR Outreach'
    ],
    technologies: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Schema.org'],
    deliverables: ['Comprehensive Technical Audit Report', 'Content Strategy Roadmap', 'JSON-LD Schema Implementation', 'Monthly Keyword Ranking Reports'],
    benefits: ['Sustainable long-term traffic that compounds without ad spend', 'Higher conversion rates from high-intent searchers'],
    workflow: [
      { step: '01', title: 'Technical Crawl & Remediation', description: 'Fixing 404s, redirect loops, canonical issues, and mobile indexing problems.' },
      { step: '02', title: 'Keyword Mapping', description: 'Identifying high-volume, high-intent terms your target customers search for.' },
      { step: '03', title: 'On-Page & Schema Optimization', description: 'Refining page structure, metadata, heading hierarchy, and rich snippets.' },
      { step: '04', title: 'Content & Authority Scaling', description: 'Publishing editorial content clusters and building natural domain authority.' }
    ],
    faq: [
      { question: 'How long before we see SEO results?', answer: 'Technical fixes often yield improvements in indexation within weeks, while substantive organic ranking gains typically compound strongly within 3 to 6 months.' }
    ]
  },
  {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Management',
    category: 'digital',
    tagline: 'Build an engaged, loyal community around your brand across modern platforms.',
    shortDescription: 'Content calendars, community engagement, brand voice cultivation, and high-impact visual assets.',
    fullDescription: 'We craft authentic social media presences that position your company as an industry authority, engaging followers with consistent editorial posts, video snippets, and responsive community interactions.',
    iconName: 'Share2',
    capabilities: [
      'Editorial Calendar Planning',
      'High-Impact Graphic & Motion Creatives',
      'Community Engagement & Response Management',
      'LinkedIn Thought Leadership for Executives',
      'Hashtag & Algorithm Optimization',
      'Influencer & Partnership Outreach'
    ],
    technologies: ['Figma', 'Adobe Premiere', 'Buffer', 'Hootsuite', 'Sprout Social'],
    deliverables: ['Monthly Scheduled Content Grid', 'Custom Branded Visual Templates', 'Monthly Engagement & Reach Reports'],
    benefits: ['Strengthened brand credibility when prospective clients search your company', 'Consistent organic referral pipeline'],
    workflow: [
      { step: '01', title: 'Brand Tone & Pillar Definition', description: 'Establishing themes, visual style, and corporate voice.' },
      { step: '02', title: 'Content Production', description: 'Creating graphics, copy, carousels, and video clips.' },
      { step: '03', title: 'Scheduling & Engagement', description: 'Publishing at peak audience windows and actively responding to comments.' },
      { step: '04', title: 'Monthly Insights', description: 'Evaluating top performing content formats and doubling down on engagement.' }
    ],
    faq: [
      { question: 'Which platforms do you focus on?', answer: 'We tailor platforms to your audience: LinkedIn and X for B2B/tech companies, Instagram and TikTok for consumer and lifestyle brands.' }
    ]
  },
  {
    id: 'email-marketing',
    slug: 'email-marketing',
    title: 'Email Marketing & Retention',
    category: 'digital',
    tagline: 'Turn one-time subscribers into lifelong brand advocates and repeat buyers.',
    shortDescription: 'Automated lifecycle drips, weekly newsletters, churn reduction flows, and segmentation.',
    fullDescription: 'Email remains the highest-ROI channel in digital commerce. We build automated onboarding sequences, behavioral re-engagement triggers, and value-packed newsletters that maximize customer lifetime value (LTV).',
    iconName: 'Mail',
    capabilities: [
      'Automated Onboarding & Welcome Sequences',
      'Abandoned Cart & Behavioral Re-Engagement',
      'Advanced Customer Segmentation',
      'Responsive HTML Email Template Design',
      'Deliverability & Domain Health (SPF, DKIM, DMARC)',
      'A/B Subject Line & CTA Testing'
    ],
    technologies: ['Klaviyo', 'Mailchimp', 'Brevo', 'Postmark', 'Litmus'],
    deliverables: ['Complete Automated Flow Setup', 'Modular Branded Email Templates', 'Deliverability Setup & Verification'],
    benefits: ['Generates consistent predictable revenue on autopilot', 'Builds direct customer ownership unthreatened by algorithm changes'],
    workflow: [
      { step: '01', title: 'List Hygiene & DNS Auth', description: 'Configuring SPF, DKIM, and DMARC to guarantee inbox placement.' },
      { step: '02', title: 'Lifecycle Mapping', description: 'Identifying crucial conversion milestones: signup, first purchase, repeat.' },
      { step: '03', title: 'Design & Copywriting', description: 'Crafting responsive, beautiful email layouts with compelling CTAs.' },
      { step: '04', title: 'Continuous A/B Testing', description: 'Testing send times, subject lines, and preview text for maximum open rates.' }
    ],
    faq: [
      { question: 'How do you prevent emails from going to spam?', answer: 'We ensure 100% compliance with modern Gmail/Yahoo deliverability requirements: strict domain authentication, clean subscriber lists, and high text-to-image ratios.' }
    ]
  },
  {
    id: 'brand-monitoring',
    slug: 'brand-monitoring',
    title: 'Brand Monitoring & Reputation',
    category: 'digital',
    tagline: 'Track sentiment, protect company reputation, and intercept customer inquiries instantly.',
    shortDescription: 'Real-time social listening, review management, sentiment analysis, and competitor intelligence.',
    fullDescription: 'Know what the internet is saying about your brand in real time. We monitor review sites, social channels, forums, and tech communities to protect your brand reputation and respond to customer sentiment swiftly.',
    iconName: 'Eye',
    capabilities: [
      'Real-Time Web & Social Brand Listening',
      'Review Management & Rating Improvement',
      'Crisis Detection & Rapid Response Protocol',
      'Competitor Mention Tracking',
      'Sentiment Analysis & Executive Summaries'
    ],
    technologies: ['Brand24', 'Mention', 'Google Alerts', 'Trustpilot', 'Social Searcher'],
    deliverables: ['Real-Time Alert Channels', 'Monthly Sentiment Dashboard', 'Crisis Response Communication Template'],
    benefits: ['Defuse negative reviews before they impact prospective deals', 'Discover organic advocacy opportunities and testimonials'],
    workflow: [
      { step: '01', title: 'Keyword & Competitor Setup', description: 'Configuring tracking across brand variations, executives, and competitors.' },
      { step: '02', title: 'Alert Pipeline Integration', description: 'Connecting alerts to your team’s Slack or email for instant awareness.' },
      { step: '03', title: 'Active Intervention', description: 'Directing responses to reviews, complaints, and praise.' },
      { step: '04', title: 'Monthly Analysis', description: 'Quantifying brand sentiment score trends over time.' }
    ],
    faq: [
      { question: 'Can you help remove malicious or fake reviews?', answer: 'We help dispute and report fraudulent reviews with platforms like Google and Trustpilot while executing strategies to build authentic positive reviews.' }
    ]
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    title: 'Graphic Design & UI/UX',
    category: 'digital',
    tagline: 'Stunning visual assets, design systems, and interfaces that elevate your brand.',
    shortDescription: 'Product UI/UX design, marketing assets, presentation pitch decks, and brand identity guidelines.',
    fullDescription: 'We create visually arresting designs that make companies look like market leaders. From complete design systems in Figma to investor pitch decks and social assets, our design work commands immediate authority.',
    iconName: 'Palette',
    capabilities: [
      'Figma Product UI/UX Design',
      'Complete Brand Style Guides & Tokens',
      'Investor & Sales Presentation Pitch Decks',
      'Marketing Collateral & Digital Banners',
      'Custom Vector Iconography & Illustrations',
      'Interactive Design Prototypes'
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects'],
    deliverables: ['Figma Design Files & Component Library', 'Vector Brand Assets (SVG, EPS, PNG)', 'Pitch Deck Presentation', 'Design Tokens Spec'],
    benefits: ['Cohesive, premium aesthetic across all customer touchpoints', 'Slashes developer implementation time with clean design tokens'],
    workflow: [
      { step: '01', title: 'Moodboard & Visual Direction', description: 'Exploring typography, color palettes, and editorial aesthetic.' },
      { step: '02', title: 'Component & Layout Crafting', description: 'Building high-fidelity interfaces and marketing materials.' },
      { step: '03', title: 'Feedback & Refinement', description: 'Iterative review cycles ensuring pixel-perfect execution.' },
      { step: '04', title: 'Design System Handoff', description: 'Exporting organized asset kits ready for developers and marketers.' }
    ],
    faq: [
      { question: 'Do you deliver Figma files organized for developers?', answer: 'Yes! All Figma components include auto-layout, named variables, and hover state variants ready for seamless frontend coding.' }
    ]
  }
];
