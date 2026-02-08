/**
 * Portfolio content — edit this file to update all copy across the site.
 */

export const site = {
  name: 'Sarang Padalkar',
  tagline: 'Building Scalable Distributed Systems & AI-Driven Infrastructure',
  role: "Senior Software Engineer",
  company: "Jill's Office",
  email: 'mailto:spadalka@uncc.edu',
  linkedin: 'https://www.linkedin.com/in/sarang-padalkar/',
  github: 'https://github.com/sarangspadalkar',
} as const;

export const hero = {
  headline: "Hi, I'm Sarang Padalkar",
  subheadline: "Building Scalable Distributed Systems & AI-Driven Infrastructure",
  roleCompany: "Senior Software Engineer at Jill's Office",
  cta: "View my work",
} as const;

export const skillsByCategory = {
  Languages: ['TypeScript', 'JavaScript', 'Node.js', 'Python', 'GraphQL'],
  'Cloud / AWS': ['Lambda', 'SQS', 'S3', 'API Gateway', 'CDK', 'CloudFormation', 'EC2', 'IAM'],
  'Backend / Microservices': ['REST', 'GraphQL', 'Event-Driven', 'Message Queues', 'Serverless'],
  Databases: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'Redis'],
  DevOps: ['CI/CD', 'GitHub Actions', 'Docker', 'Linux', 'Infrastructure as Code'],
} as const;

export type SkillCategory = keyof typeof skillsByCategory;

export const experience = [
  {
    company: "Jill's Office",
    companyUrl: 'https://www.jillsoffice.com/',
    role: 'Senior Software Engineer',
    period: 'Jun 2021 – Present',
    metrics: [
      '30% improvement in API performance',
      '90% reduction in environment setup time',
    ],
    highlights: [
      'Implemented full-stack features using TypeScript, GraphQL, and Node.js.',
      'Designed and architected AWS infrastructure for staging with CDK/CloudFormation.',
      'Built CI/CD pipelines with GitHub Actions.',
      'Integrated Mocha testing framework and improved test coverage.',
    ],
  },
  {
    company: 'Discovery Education',
    companyUrl: 'https://www.discoveryeducation.com/',
    role: 'Jr. Full Stack Developer Intern',
    period: 'Jul 2020 – Aug 2020',
    metrics: [
      'Delivered full-stack MEAN application for data visualization',
      'Integrated third-party APIs for inventory and license tracking',
    ],
    highlights: [
      'Designed interactive Angular-based pages for internal tools.',
      'Created RESTful API endpoints using Node.js and Azure Functions.',
      'Developed full-stack MEAN app for processing and rendering data visually.',
      'Integrated third-party APIs for license and inventory management.',
    ],
  },
  {
    company: 'Accenture',
    companyUrl: 'https://www.accenture.com/',
    role: 'Application Development Analyst',
    period: 'Nov 2016 – Jun 2019',
    metrics: [
      'Saved 30 hours of team time daily via automation',
      'CMT APEX Award for Delivery & Profitability',
    ],
    highlights: [
      'Design, deploy and maintain enterprise-class security, network, and systems management applications within an AWS environment.',
      'Institute infrastructure as code to launch fully functional stacks.',
      'Automated mundane manual tasks using Linux scripting, which saved 30 hours of team\'s daily.',
      'Recognized with the CMT APEX Award for Delivery & Profitability by Accenture.',
    ],
  },
] as const;

export const featuredProjects = [
  {
    id: 'riot',
    title: 'RIOT — Running Is Our Therapy',
    description:
      'Node.js meetup-style web app for marathon and distance runners. Browse, create, and RSVP to running events (5K, 10K, Half/Full Marathon). Session-based auth, My Connections dashboard, and responsive dark-themed UI.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'EJS', 'express-validator'],
    href: 'https://running-is-our-therapy.herokuapp.com/',
    icon: 'Users',
  },
  {
    id: 'ai-media-pipeline',
    title: 'AI Media Pipeline',
    description:
      'Serverless pipeline for processing media with AI: ingest via S3, queue with SQS, process with Lambda and OpenAI, store results. Built with AWS CDK.',
    tech: ['AWS CDK', 'OpenAI', 'SQS', 'Lambda', 'S3'],
    href: '#',
    icon: 'Workflow',
  },
  {
    id: 'zapier-integration',
    title: 'Custom Zapier Integration',
    description:
      'OAuth 2.0–based integration with webhooks for bi-directional sync and event-driven automation with external platforms.',
    tech: ['OAuth 2.0', 'Webhooks', 'Node.js', 'REST'],
    href: '#',
    icon: 'Plug',
  },
  {
    id: 'scheduling-system',
    title: 'Automated Scheduling System',
    description:
      'Calendar automation and scheduling logic powered by Google Calendar API for availability and booking.',
    tech: ['Google Calendar API', 'Node.js', 'REST'],
    href: '#',
    icon: 'Calendar',
  },
] as const;

export const contact = {
  title: 'Get in touch',
  subtitle: 'Open to discussing backend, distributed systems, and platform engineering.',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarang-padalkar/', icon: 'Linkedin' },
    { label: 'GitHub', href: 'https://github.com/sarangspadalkar', icon: 'Github' },
    { label: 'Email', href: 'mailto:spadalka@uncc.edu', icon: 'Mail' },
  ],
} as const;
