import { ProcessStage } from '@/types';

export const processStages: ProcessStage[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the business, users, and objectives',
    description: 'We begin by diagnosing the operational landscape, uncovering user pain points, clarifying competitive advantages, and defining measurable KPIs before a single line of code is written.',
    activities: [
      'Stakeholder Interviews & Goal Alignment',
      'User Journey & Persona Mapping',
      'Technical Feasibility & Architecture Audit',
      'KPI & Success Criteria Definition'
    ],
    deliverable: 'Project Discovery Brief & Scope Specification'
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Define architecture, scope, and technical roadmap',
    description: 'We engineer the blueprint. We select the optimal technology stack, define database schemas, architect microservices or serverless boundaries, and model the security threat landscape.',
    activities: [
      'System Architecture & Database Schema Design',
      'Security Threat Modeling (OWASP & Zero-Trust)',
      'Third-Party API & Infrastructure Sizing',
      'Milestone-Driven Development Roadmap'
    ],
    deliverable: 'Technical Architecture Document & Sprint Plan'
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Create the experience, brand, and interactive interface',
    description: 'Design at Zylux balances clean visual sophistication with rigorous usability. We build comprehensive design systems in Figma, ensuring typography, spacing, and micro-interactions elevate your brand.',
    activities: [
      'Figma Component Library & Design Tokens',
      'High-Fidelity Wireframes & Prototypes',
      'Responsive Layouts (Mobile, Tablet, Desktop)',
      'Accessibility (WCAG 2.1 AA) Compliance Review'
    ],
    deliverable: 'Interactive Figma Prototype & Design System Kit'
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Develop, integrate, test, and secure',
    description: 'Our engineering sprints translate designs into robust, production-grade software. We enforce strict TypeScript typing, automated CI/CD unit testing, automated security scans, and code reviews.',
    activities: [
      'Agile Two-Week Sprints with Staging Previews',
      'Automated CI/CD Pipelines with Docker',
      'Vulnerability Scanning & Penetration Testing',
      'Cross-Browser & Device Conformance Testing'
    ],
    deliverable: 'Staging Environment & Tested Source Code'
  },
  {
    number: '05',
    title: 'LAUNCH & GROW',
    subtitle: 'Deploy, monitor, market, and optimize',
    description: 'Launch is just the beginning. We manage zero-downtime production deployment, configure 24/7 server health observability, and activate digital growth campaigns to accelerate customer acquisition.',
    activities: [
      'Zero-Downtime Production Deployment & DNS Setup',
      'Real-Time Telemetry & Uptime Monitoring',
      'Technical SEO Schema & Analytics Ingestion',
      'Continuous Iteration & Growth Optimization'
    ],
    deliverable: 'Live Production System & Growth Monitoring Dashboard'
  }
];

export const journeyTimeline = [
  { step: '01', name: 'IDEA', category: 'Strategy' },
  { step: '02', name: 'STRATEGY', category: 'Strategy' },
  { step: '03', name: 'DESIGN', category: 'Experience' },
  { step: '04', name: 'DEVELOPMENT', category: 'Engineering' },
  { step: '05', name: 'SECURITY', category: 'Engineering' },
  { step: '06', name: 'DEPLOYMENT', category: 'DevOps' },
  { step: '07', name: 'MARKETING', category: 'Growth' },
  { step: '08', name: 'GROWTH', category: 'Growth' },
  { step: '09', name: 'OPTIMIZATION', category: 'Retention' }
];
