export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    description: string;
    href: string;
    icon: string;
  }[];
}

export const mainNavItems: NavItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      {
        title: 'Technology Studio',
        description: 'Web, Mobile, Custom Software, APIs, Cyber Security, DevOps & Cloud Systems.',
        href: '/solutions/technology',
        icon: 'Code2'
      },
      {
        title: 'Digital Growth Studio',
        description: 'SEO, Digital Marketing, Social Media, Brand Monitoring, Content & Retention.',
        href: '/solutions/digital',
        icon: 'TrendingUp'
      },
      {
        title: 'All Core Services',
        description: 'Comprehensive directory of all 14+ technology and digital capabilities.',
        href: '/solutions',
        icon: 'Layers'
      }
    ]
  },
  {
    label: 'Work',
    href: '/work'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Process',
    href: '/process'
  },
  {
    label: 'Insights',
    href: '/insights'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

export const footerLinks = {
  technology: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Software Engineering', href: '/services/software-development' },
    { label: 'Mobile Applications', href: '/services/mobile-development' },
    { label: 'API & Integrations', href: '/services/api-integrations' },
    { label: 'Cyber Security', href: '/services/cyber-security' },
    { label: 'DevOps & Cloud', href: '/services/devops-cloud' },
    { label: 'Automation Systems', href: '/services/automation-systems' },
    { label: 'AI Solutions', href: '/services/ai-solutions' }
  ],
  digital: [
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Technical SEO', href: '/services/seo' },
    { label: 'Social Media Management', href: '/services/social-media' },
    { label: 'Email Marketing & Retention', href: '/services/email-marketing' },
    { label: 'Brand Monitoring', href: '/services/brand-monitoring' },
    { label: 'Graphic Design & UI/UX', href: '/services/graphic-design' }
  ],
  company: [
    { label: 'About Zylux', href: '/about' },
    { label: 'Selected Work', href: '/work' },
    { label: 'Our Process', href: '/process' },
    { label: 'Insights & Research', href: '/insights' },
    { label: 'Start a Project', href: '/contact' }
  ],
  socials: [
    { label: 'WhatsApp', href: 'https://wa.me/94756388329', icon: 'MessageSquare' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
    { label: 'GitHub', href: 'https://github.com', icon: 'Github' },
    { label: 'X (Twitter)', href: 'https://x.com', icon: 'Twitter' },
    { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' }
  ]
};
