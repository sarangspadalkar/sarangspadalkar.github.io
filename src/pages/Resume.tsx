import {motion} from 'framer-motion';
import {Award, Building, Calendar, Code, Download, MapPin} from 'lucide-react';

const Resume = () => {
    const experience = [
        {
            id: 1,
            title: 'Senior Backend Engineer',
            company: 'TechCorp Inc.',
            location: 'San Francisco, CA',
            period: '2022 - Present',
            description: [
                'Led development of microservices architecture serving 2M+ users',
                'Optimized database performance, reducing query time by 60%',
                'Implemented CI/CD pipelines reducing deployment time by 80%',
                'Mentored 5 junior developers and conducted code reviews',
            ],
            technologies: [
                'Node.js',
                'PostgreSQL',
                'Redis',
                'Docker',
                'Kubernetes',
                'AWS',
            ],
        },
        {
            id: 2,
            title: 'Backend Developer',
            company: 'StartupXYZ',
            location: 'Austin, TX',
            period: '2020 - 2022',
            description: [
                'Built RESTful APIs handling 500K+ daily requests',
                'Designed and implemented real-time notification system',
                'Integrated third-party payment gateways (Stripe, PayPal)',
                'Improved system reliability achieving 99.9% uptime',
            ],
            technologies: [
                'Python',
                'Django',
                'PostgreSQL',
                'Redis',
                'Celery',
                'AWS',
            ],
        },
        {
            id: 3,
            title: 'Full Stack Developer',
            company: 'Digital Solutions Ltd.',
            location: 'New York, NY',
            period: '2018 - 2020',
            description: [
                'Developed e-commerce platform processing $10M+ in transactions',
                'Implemented caching strategies improving response time by 40%',
                'Created automated testing suite with 90% code coverage',
                'Collaborated with cross-functional teams in agile environment',
            ],
            technologies: [
                'MySQL',
                'Redis',
                'Docker',
                'Jenkins',
            ],
        },
        {
            id: 4,
            title: 'Software Engineer',
            company: 'Innovation Labs',
            location: 'Seattle, WA',
            period: '2016 - 2018',
            description: [
                'Built data processing pipelines handling 1TB+ daily data',
                'Developed internal tools improving team productivity by 30%',
                'Participated in system architecture design and planning',
                'Contributed to open-source projects and technical documentation',
            ],
            technologies: [
                'Python',
                'Apache Kafka',
                'Elasticsearch',
                'MongoDB',
                'Docker',
            ],
        },
    ];

    const education = [
        {
            degree: 'Master of Science in Computer Science',
            school: 'Stanford University',
            period: '2014 - 2016',
            location: 'Stanford, CA',
        },
        {
            degree: 'Bachelor of Science in Computer Engineering',
            school: 'University of California, Berkeley',
            period: '2010 - 2014',
            location: 'Berkeley, CA',
        },
    ];

    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            year: '2023',
        },
        {
            name: 'Kubernetes Administrator (CKA)',
            issuer: 'Cloud Native Computing Foundation',
            year: '2022',
        },
        {
            name: 'PostgreSQL Performance Tuning',
            issuer: 'PostgreSQL University',
            year: '2021',
        },
    ];

    const skills = {
        'Programming Languages': [
            'Node.js',
            'Python',
            'Go',
            'TypeScript',
            'JavaScript',
        ],
        Databases: [
            'PostgreSQL',
            'Redis',
            'MongoDB',
            'MySQL',
            'Elasticsearch',
        ],
        'Cloud & DevOps': [
            'AWS',
            'Docker',
            'Kubernetes',
            'Terraform',
            'Jenkins',
            'Git',
        ],
        'APIs & Services': [
            'REST APIs',
            'GraphQL',
            'gRPC',
            'Microservices',
            'Message Queues',
        ],
        'Tools & Frameworks': [
            'Express.js',
            'Django',
            'Socket.io',
            'Apache Kafka',
        ],
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Resume
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Senior Backend Developer with 10+ years of
                            experience in scalable system design
                        </p>
                        <button className="btn-primary inline-flex items-center">
                            <Download className="mr-2 w-5 h-5" />
                            Download PDF
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                            <Building className="w-8 h-8 mr-3 text-primary-600 dark:text-primary-400" />
                            Professional Experience
                        </h2>

                        <div className="space-y-8">
                            {experience.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{once: true}}
                                    className="card p-6"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {job.title}
                                            </h3>
                                            <p className="text-lg text-primary-600 dark:text-primary-400">
                                                {job.company}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 mt-2 md:mt-0">
                                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {job.period}
                                            </div>
                                            <div className="flex items-center text-gray-600 dark:text-gray-400">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {job.location}
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                                        {job.description.map(
                                            (item, itemIndex) => (
                                                <li key={itemIndex}>{item}</li>
                                            ),
                                        )}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {job.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                            <Code className="w-8 h-8 mr-3 text-primary-600 dark:text-primary-400" />
                            Technical Skills
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(skills).map(
                                (
                                    [
                                        category,
                                        skillList,
                                    ],
                                    index,
                                ) => (
                                    <motion.div
                                        key={category}
                                        initial={{opacity: 0, y: 20}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{once: true}}
                                        className="card p-6"
                                    >
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                            {category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skillList.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Education & Certifications */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Education */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                                Education
                            </h2>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="card p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                                            {edu.school}
                                        </p>
                                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {edu.period}
                                            </div>
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {edu.location}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            viewport={{once: true}}
                        >
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                                <Award className="w-8 h-8 mr-3 text-primary-600 dark:text-primary-400" />
                                Certifications
                            </h2>
                            <div className="space-y-6">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="card p-6">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {cert.name}
                                        </h3>
                                        <p className="text-lg text-primary-600 dark:text-primary-400 mb-2">
                                            {cert.issuer}
                                        </p>
                                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {cert.year}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary-600 dark:bg-primary-700">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to work together?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Let's discuss how my experience can benefit your
                            project.
                        </p>
                        <a
                            href="/contact"
                            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
                        >
                            Get In Touch
                            <Download className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Resume;
