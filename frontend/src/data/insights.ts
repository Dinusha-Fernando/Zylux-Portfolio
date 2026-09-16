import { InsightArticle } from '@/types';

export const insightsData: InsightArticle[] = [
  {
    id: 'future-of-secure-infrastructure',
    slug: 'future-of-secure-infrastructure',
    title: 'The Future of Secure Digital Infrastructure: Moving Beyond Perimeter Defense',
    summary: 'Why zero-trust architecture, automated CI/CD security audits, and edge-native compute have become non-negotiable for modern software systems.',
    category: 'Cyber Security',
    readTime: '7 min read',
    publishedDate: 'January 2026',
    author: {
      name: 'W.M. Dinusha Kalhara Fernando',
      role: 'CEO & Founder, Zylux Software Solutions',
      avatar: '/assets/founder-ceo.jpg'
    },
    coverImage: '/assets/insight-future-of-secure-infrastructure.jpg',
    content: [
      {
        heading: 'The Death of the Corporate Perimeter',
        paragraphs: [
          'Traditional cybersecurity was built on a castle-and-moat model: everything inside the corporate firewall was deemed trusted, while external traffic was treated with suspicion.',
          'In 2026, with distributed cloud environments, microservices, third-party webhook integrations, and remote workforces, the moat has evaporated. A compromised developer credential or an insecure third-party dependency can expose internal databases in seconds.'
        ],
        callout: 'Zero-trust is not a product you purchase off the shelf; it is an architectural mindset where every request must be authenticated, authorized, and encrypted.'
      },
      {
        heading: 'Automating Security in the CI/CD Pipeline',
        paragraphs: [
          'Security cannot be an audit that happens once a year before compliance certification. By shifting security left into GitHub Actions pipelines, every commit is automatically analyzed for hardcoded secrets, outdated packages, and OWASP vulnerability patterns.',
          'When vulnerabilities are caught during pull requests, remediation costs are measured in minutes rather than hundreds of thousands of dollars in incident recovery.'
        ]
      },
      {
        heading: 'Edge Computing and DDoS Resilience',
        paragraphs: [
          'Modern web applications must absorb malicious traffic at the edge before it reaches origin database clusters. Leveraging Cloudflare and containerized API gateways allows businesses to filter bots and rate-limit abusive requests without degrading real user latencies.'
        ]
      }
    ]
  },
  {
    id: 'how-to-secure-modern-web-application',
    slug: 'how-to-secure-modern-web-application',
    title: 'How to Secure a Modern Web Application: From Next.js SSR to Database Hardening',
    summary: 'A developer-first engineering guide to sanitizing inputs, securing JWT sessions, configuring Content Security Policy, and preventing SSR injection.',
    category: 'Engineering',
    readTime: '8 min read',
    publishedDate: 'December 2025',
    author: {
      name: 'W.M. Dinusha Kalhara Fernando',
      role: 'CEO & Founder, Zylux Software Solutions',
      avatar: '/assets/founder-ceo.jpg'
    },
    coverImage: '/assets/insight-how-to-secure-modern-web-application.jpg',
    content: [
      {
        heading: 'Server-Side Rendering (SSR) Security Pitfalls',
        paragraphs: [
          'While Next.js App Router provides extraordinary speed and SEO advantages, server-side data fetching requires strict attention to secret isolation and environmental boundaries.',
          'Accidentally exposing server API keys to the browser bundle via public environment variables remains one of the most common oversights in modern web projects.'
        ]
      },
      {
        heading: 'Hardening Authentication: Beyond Basic JWTs',
        paragraphs: [
          'Storing raw JWT tokens in browser localStorage exposes sessions to Cross-Site Scripting (XSS) extraction. Best practice dictates HTTP-only, Secure, SameSite cookies combined with short-lived access tokens and Redis-backed refresh token revocation lists.'
        ]
      }
    ]
  },
  {
    id: 'growth-engineering-vs-traditional-marketing',
    slug: 'growth-engineering-vs-traditional-marketing',
    title: 'Growth Engineering vs Traditional Marketing: Why Code Wins More Customers',
    summary: 'How combining programmatic landing pages, technical SEO, and automated email lifecycle sequences generates compounding customer acquisition.',
    category: 'Digital Marketing',
    readTime: '6 min read',
    publishedDate: 'November 2025',
    author: {
      name: 'W.M. Dinusha Kalhara Fernando',
      role: 'CEO & Founder, Zylux Software Solutions',
      avatar: '/assets/founder-ceo.jpg'
    },
    coverImage: '/assets/insight-growth-engineering-vs-traditional-marketing.jpg',
    content: [
      {
        heading: 'Bridging the Chasm Between Code and Marketing',
        paragraphs: [
          'The biggest bottleneck in most companies is the friction between marketing teams that want to test new landing pages and developers who consider marketing requests low-priority tickets.',
          'Growth engineering treats marketing as a software problem. By building modular design systems and programmatic SEO templates, marketing teams can deploy and test dozens of high-speed variations without needing developer intervention.'
        ]
      }
    ]
  }
];
