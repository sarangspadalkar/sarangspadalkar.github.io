/**
 * Portfolio content — edit this file to update all copy across the site.
 */

export const site = {
  name: 'Sarang Padalkar',
  tagline: 'Backend, cloud, and AI-powered automation',
  role: 'Senior Software Engineer',
  company: "Jill's Office",
  email: 'mailto:jobs.padalkar.sarang@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sarang-padalkar/',
  github: 'https://github.com/sarangspadalkar',
  resume:
    'https://drive.google.com/file/d/1DgwQbDAIRYH1TZ_FFHmfy7_Mp_b8PJYz/view?usp=sharing',
  chess: 'https://www.chess.com/member/nimbus_oblivate',
} as const;

export const hero = {
  headline: 'I build backends that scale, automate, and stay secure.',
  subheadline:
    "Senior software engineer specializing in event-driven backends, cloud infrastructure, and AI-powered automation.",
  roleCompany: "Senior Software Engineer at Jill's Office",
  cta: 'View my work',
} as const;

export const about = {
  title: 'About Me',
  paragraphs: [
    "I'm a senior software engineer based in Dallas, TX, currently at Jill's Office. I've spent the last few years designing event-driven backends, building AI-powered voice automation on LiveKit and OpenAI's Realtime API, and championing infrastructure-as-code across identity, networking, and compute.",
    'My work tends to live at the intersection of backend systems, cloud infrastructure, and developer enablement — migrating monoliths to microservices, automating manual ops, and shipping platform features that unlock real product outcomes. I care about clean bounded contexts, secure-by-default systems, and code review cultures that make teams faster.',
  ],
  facts: [
    { label: 'Location', value: 'Dallas, TX' },
    { label: 'Experience', value: '8+ Years' },
    { label: 'Focus', value: 'Backend, Cloud & AI Systems' },
    { label: 'Current Role', value: "Senior Software Engineer at Jill's Office" },
  ],
} as const;

export const skillsByCategory = {
  Backend: ['Node.js', 'TypeScript', 'JavaScript', 'Python', 'GraphQL', 'RESTful APIs', 'WebSockets'],
  'Cloud & DevOps': ['AWS', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'AWS CodePipeline', 'AWS CDK'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Mongoose'],
  'Security & Identity': ['OAuth 2.0', 'AWS Cognito', 'Federated Identity', 'Google / Social IdPs', 'JWT'],
  Tools: ['OpenAI API (Realtime / GPT-4)', 'LiveKit (WebRTC)', 'Twilio', 'Zapier Platform', 'AssemblyAI'],
} as const;

export type SkillCategory = keyof typeof skillsByCategory;

export const experience = [
  {
    company: "Jill's Office",
    companyUrl: 'https://www.jillsoffice.com/',
    role: 'Senior Software Engineer',
    period: 'Jan 2024 - Present',
    location: 'Ogden, UT',
    metrics: [
      '75% reduction in post-call wrap-up time',
      '90% reduction in environment provisioning time',
      '15,000+ legacy accounts migrated to AWS Cognito',
    ],
    highlights: [
      "Engineered an asynchronous AI voice automation engine using LiveKit and OpenAI's Realtime API, orchestrating event-driven WebRTC streams to handle high-concurrency voice processing seamlessly.",
      'Migrated 15,000+ legacy user accounts from database-stored credentials to AWS Cognito, implementing OAuth 2.0 and Google SSO via custom REST endpoints to eliminate credential-maintenance security liabilities.',
      'Built an event-driven off-hours dispatch engine on AWS SQS and ECS Fargate to process multi-tiered SMS/Voice escalation queues — a critical feature that directly unlocked customer acquisition in enterprise HVAC and plumbing markets.',
      'Designed an end-to-end automated transcription pipeline using Twilio and AssemblyAI, with secure S3 presigned URLs for media transfer, reducing post-call wrap-up times by ~75%.',
      'Decoupled a legacy monolithic core into scalable microservices on Node.js and GraphQL, defining clear bounded contexts and data-ownership boundaries that drastically isolated blast radiuses and stabilized system reliability.',
      'Championed the organizational adoption of Infrastructure as Code by introducing AWS CDK (TypeScript), automating identity and cloud infrastructure to cut environment provisioning time by 90%.',
    ],
    tags: [
      'TypeScript',
      'Node.js',
      'GraphQL',
      'LiveKit',
      'OpenAI Realtime API',
      'AWS CDK',
      'AWS Cognito',
      'AWS SQS',
      'ECS Fargate',
      'OAuth 2.0',
      'Twilio',
      'AssemblyAI',
      'Microservices',
    ],
  },
  {
    company: "Jill's Office",
    companyUrl: 'https://www.jillsoffice.com/',
    role: 'Software Developer',
    period: 'Jun 2021 - Dec 2023',
    location: 'Ogden, UT',
    metrics: [
      '85% reduction in P99 API latency',
      '40% faster release deployment frequency',
    ],
    highlights: [
      'Migrated performance-critical backend endpoints from AWS Lambda to ECS Fargate, eliminating cold-start bottlenecks to slash P99 API latency by ~85% while permanently removing the compute cost of legacy cron-based "warmers."',
      'Established automated CI/CD pipelines on AWS CodePipeline and CodeBuild, replacing manual local builds with automated Docker image generation and ECR publishing to accelerate release deployment frequency by 40%.',
      'Integrated the OAuth 2.0 Google Calendar API into the core platform, enabling call center agents to query real-time external availability and eliminate manual appointment-setting friction.',
      'Contributed to a rigorous code review culture and mentored incoming junior developers on backend system design patterns, secure token handling, and database optimization.',
    ],
    tags: [
      'Node.js',
      'TypeScript',
      'GraphQL',
      'AWS Lambda',
      'ECS Fargate',
      'Docker',
      'AWS CodePipeline',
      'AWS CodeBuild',
      'OAuth 2.0',
      'Google Calendar API',
    ],
  },
  {
    company: 'Discovery Education',
    companyUrl: 'https://www.discoveryeducation.com/',
    role: 'Jr. Full Stack Developer Intern',
    period: 'Jul 2020 - Aug 2020',
    location: 'Charlotte, NC',
    metrics: [],
    highlights: [
      'Developed a full-stack MEAN web application that processed and rendered data visually for internal stakeholders.',
      'Designed interactive web pages on Angular for an internal application.',
      'Built RESTful API endpoints using Node.js and Azure Functions.',
      'Integrated third-party APIs to track and maintain licenses across the inventory management system.',
    ],
    tags: [
      'Angular',
      'Node.js',
      'Express',
      'MongoDB',
      'Azure Functions',
      'REST APIs',
      'MEAN Stack',
    ],
  },
  {
    company: 'Accenture Solutions Pvt. Ltd.',
    companyUrl: 'https://www.accenture.com/',
    role: 'Cloud Architect',
    period: 'Nov 2016 - Jun 2019',
    location: 'Pune, India',
    metrics: [
      '30 hours/day of manual ops automated away',
      'CMT APEX Award for Delivery & Profitability',
    ],
    highlights: [
      'Designed, implemented, and maintained all AWS infrastructure and services within a managed-service environment.',
      'Instituted Infrastructure as Code, security automation, and automation of routine maintenance tasks.',
      'Deployed Spacewalk to centrally patch all Linux EC2 instances across the AWS infrastructure.',
      "Used Linux scripting to automate manual operational work, saving the team 30 hours of daily effort — recognized with the CMT APEX Award for Delivery & Profitability.",
    ],
    tags: [
      'AWS',
      'EC2',
      'Infrastructure as Code',
      'Security Automation',
      'Spacewalk',
      'Linux',
      'Shell Scripting',
    ],
  },
] as const;

export const featuredProjects = [
  {
    id: 'ai-call-automation',
    title: 'AI-Driven Call Automation Engine',
    tag: 'Production',
    description:
      "Integrated the OpenAI Realtime API for intelligent, low-latency handling of customer calls. Built the underlying infrastructure on AWS CDK and LiveKit to manage real-time WebRTC audio streams, ensuring high-concurrency voice processing with extreme responsiveness.",
    stack: ['OpenAI Realtime API', 'LiveKit', 'AWS CDK', 'WebRTC', 'TypeScript'],
  },
  {
    id: 'federated-identity',
    title: 'Federated Identity & Google Auth Integration',
    tag: 'Production',
    description:
      'Architected a robust Identity Provider system using AWS Cognito and CDK, implementing Federated Identity for "Sign in with Google." Engineered the OAuth 2.0 Authorization Code Flow with JWT validation (issuer/audience checks) and secure, cross-domain HTTP-only cookie strategies.',
    stack: ['AWS Cognito', 'AWS CDK', 'OAuth 2.0', 'JWT', 'Federated Identity'],
  },
  {
    id: 'zapier-integration',
    title: 'Enterprise Zapier & Workflow Automation',
    tag: 'Platform',
    description:
      'Designed a custom Zapier Platform integration from scratch in TypeScript using REST hooks. Built secure OAuth 2.0 flows for third-party authorization, custom Actions for triggering outbound calls, and Triggers for real-time data sync between the core backend and external CRMs.',
    stack: ['Zapier Platform', 'TypeScript', 'REST Hooks', 'OAuth 2.0'],
  },
  {
    id: 'scheduling-system',
    title: 'Automated Scheduling System',
    tag: 'Production',
    description:
      'Built a secure, automated scheduling workflow on the Google Calendar API and Node.js. Implemented OAuth 2.0 for API access and an event-driven system that reduced manual appointment-setting for call center staff by 50%, directly improving operational throughput.',
    stack: ['Google Calendar API', 'Node.js', 'OAuth 2.0', 'Event-Driven'],
  },
] as const;

export const contact = {
  title: 'Get in touch',
  subtitle:
    'Open to discussing backend, distributed systems, identity, and AI-powered automation.',
  links: [
    { label: 'Email', href: 'mailto:jobs.padalkar.sarang@gmail.com', icon: 'Mail' },
    { label: 'GitHub', href: 'https://github.com/sarangspadalkar', icon: 'Github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarang-padalkar/', icon: 'Linkedin' },
  ],
} as const;
