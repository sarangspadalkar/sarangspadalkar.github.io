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
    tools: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'EJS', 'express-validator'],
    situation:
      'Marathon and distance runners needed a central place to discover, create, and join running meetups (5K, 10K, Half Marathon, Full Marathon) and manage their connections.',
    action:
      'Built a full-stack meetup-style web application with browse/create/RSVP flows, session-based authentication, a "My Connections" dashboard, and input validation. Implemented MVC-style Express architecture and reusable validation middleware.',
    result:
      'Users can discover events by topic, create meetups with location and date/time, RSVP (Yes/No/Maybe), and manage saved connections in a responsive dark-themed UI.',
    projectLink: 'https://running-is-our-therapy.herokuapp.com/',
    icon: 'Users',
  },
  {
    id: 'hangman-game',
    title: 'Hangman Game',
    tools: ['React 18', 'TypeScript', 'Create React App', 'CSS Modules'],
    situation:
      'Wanted a portable, accessible word game that could run in the browser and work well for all users, including those using keyboards and screen readers.',
    action:
      'Built a classic Hangman game guessing US state and territory names using React 18 and TypeScript. Implemented 6-lives logic, QWERTY keyboard (click or type), win/lose screens, and added focus styles, ARIA labels, and optional reduced motion.',
    result:
      'A deployable, accessible game with clear feedback (correct letters green, wrong red), end screen with answer and "Play again," and GitHub Pages deployment via GitHub Actions.',
    projectLink: 'https://sarangspadalkar.github.io/hangman-game/',
    icon: 'Gamepad2',
  },
  {
    id: 'ai-media-pipeline',
    title: 'AI Media Pipeline',
    tools: ['AWS CDK', 'OpenAI', 'SQS', 'Lambda', 'S3'],
    situation:
      'Media assets needed to be processed at scale using AI (e.g., transcription, analysis) with reliable queuing and minimal operational overhead.',
    action:
      'Designed and implemented a serverless pipeline: ingest via S3, queue work with SQS, process with Lambda and OpenAI APIs, and store results. Defined infrastructure as code with AWS CDK.',
    result:
      'A scalable, event-driven pipeline that improves operational efficiency and can be extended for additional AI use cases without managing servers.',
    projectLink: '#',
    icon: 'Workflow',
  },
  {
    id: 'zapier-integration',
    title: 'Custom Zapier Integration',
    tools: ['OAuth 2.0', 'Webhooks', 'Node.js', 'REST'],
    situation:
      'External platforms and internal systems needed bi-directional sync and event-driven automation without manual steps.',
    action:
      'Built a custom integration using OAuth 2.0 for secure authorization and webhooks for real-time events. Implemented Node.js services and REST APIs to handle sync and automation logic.',
    result:
      'Seamless connectivity with third-party tools, reduced manual work, and consistent data flow between systems.',
    projectLink: '#',
    icon: 'Plug',
  },
  {
    id: 'scheduling-system',
    title: 'Automated Scheduling System',
    tools: ['Google Calendar API', 'Node.js', 'REST'],
    situation:
      'Teams needed to expose availability and support booking or scheduling without double-booking or manual calendar checks.',
    action:
      'Implemented calendar automation and scheduling logic using the Google Calendar API. Built Node.js services and REST endpoints for availability and booking flows.',
    result:
      'Automated availability resolution and booking, reducing back-and-forth and calendar errors.',
    projectLink: '#',
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
