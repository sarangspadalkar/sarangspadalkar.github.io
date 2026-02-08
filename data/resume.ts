/**
 * Portfolio content — edit this file to update all copy across the site.
 */

export const site = {
  name: 'Sarang Padalkar',
  tagline: 'Building Scalable Distributed Systems & AI-Driven Infrastructure',
  role: "Senior Software Engineer",
  company: "Jill's Office",
  email: 'mailto:jobs.padalkar.sarang@gmail.com',
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
    period: 'Jun 2021 - Present',
    location: 'Ogden, Utah',
    metrics: [
      '30% improvement in API performance',
      '40% increase in deployment frequency',
      '35% gain in operational efficiency (AI solutions)',
      '60% reduction in unauthorized access incidents',
      '90% reduction in infrastructure setup time',
    ],
    highlights: [
      'Led a team of engineers to design and develop microservices architecture using Node.js and GraphQL, achieving a 30% improvement in API performance and scalability.',
      'Delivered end-to-end software solutions by automating deployment pipelines with AWS CodePipeline, increasing deployment frequency by 40%.',
      'Designed and deployed AI-powered solutions, including an AI-driven call automation system leveraging OpenAI APIs and AWS CDK, increasing operational efficiency by 35%.',
      'Implemented secure authentication systems with OAuth 2.0 and JWT, enhancing API security and reducing unauthorized access incidents by 60%.',
      'Championed the adoption of Infrastructure as Code (IaC) to streamline provisioning, cutting infrastructure setup time by 90% and reducing deployment errors.',
      'Mentored junior engineers, fostering a culture of excellence and ensuring adherence to best practices in software development and DevOps.',
    ],
  },
  {
    company: 'Discovery Education',
    companyUrl: 'https://www.discoveryeducation.com/',
    role: 'Jr. Full Stack Developer Intern',
    period: 'Jul 2020 - Aug 2020',
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
    period: 'Nov 2016 - Jun 2019',
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
    id: 'hangman-game',
    title: 'Hangman Game',
    description:
      'Classic Hangman guessing US state and territory names. Built with React 18 and TypeScript: 6 lives, QWERTY keyboard (click or type), win/lose screens, and accessible focus styles and reduced motion.',
    tech: ['React 18', 'TypeScript', 'Create React App', 'CSS Modules'],
    href: 'https://sarangspadalkar.github.io/hangman-game/',
    icon: 'Gamepad2',
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
      'OAuth 2.0-based integration with webhooks for bi-directional sync and event-driven automation with external platforms.',
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
    { label: 'Email', href: 'mailto:jobs.padalkar.sarang@gmail.com', icon: 'Mail' },
  ],
} as const;
