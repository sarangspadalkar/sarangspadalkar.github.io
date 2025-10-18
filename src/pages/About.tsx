import {motion} from 'framer-motion';
import {Cloud, Code, Database, Shield, TrendingUp, Zap} from 'lucide-react';

const About = () => {
    const techStack = [
        {
            category: 'Languages',
            items: [
                'Node.js',
                'Python',
                'Go',
                'Java',
                'TypeScript',
            ],
        },
        {
            category: 'Databases',
            items: [
                'PostgreSQL',
                'Redis',
                'MongoDB',
                'MySQL',
                'Elasticsearch',
            ],
        },
        {
            category: 'Cloud & DevOps',
            items: [
                'AWS',
                'GCP',
                'Docker',
                'Kubernetes',
            ],
        },
        {
            category: 'APIs & Services',
            items: [
                'REST APIs',
                'GraphQL',
                'gRPC',
                'Microservices',
                'Message Queues',
            ],
        },
    ];

    const strengths = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'System Reliability',
            description:
                'Building fault-tolerant systems with 99.9%+ uptime and comprehensive monitoring',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Scalability',
            description: 'Designing architectures that handle millions of users and requests',
        },
        {
            icon: <Code className="w-6 h-6" />,
            title: 'Clean Architecture',
            description: 'Writing maintainable, testable code with SOLID principles',
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: 'Performance Optimization',
            description: 'Optimizing database queries, caching strategies, and system performance',
        },
        {
            icon: <Cloud className="w-6 h-6" />,
            title: 'Cloud Infrastructure',
            description: 'Expertise in AWS services, containerization, and infrastructure as code',
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: 'API Design',
            description: 'Creating intuitive, well-documented APIs that developers love to use',
        },
    ];

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
                            About Me
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Senior Backend Developer passionate about building scalable, reliable
                            systems
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bio Section */}
            <section className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            My Journey
                        </h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                With over 5 years of experience in backend development, I've had the
                                privilege of working on systems that serve millions of users across
                                various industries. My passion lies in designing and implementing
                                scalable architectures that not only meet current demands but are
                                built to handle future growth.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                I specialize in building robust APIs, optimizing database
                                performance, and implementing cloud-native solutions. My approach
                                combines deep technical expertise with a focus on business value,
                                ensuring that every system I build is not just technically sound but
                                also drives real business outcomes.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                When I'm not coding, you'll find me contributing to open-source
                                projects, or exploring new technologies to stay at the forefront of
                                backend development practices.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Tech Stack
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Technologies and tools I use to build robust backend systems
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {techStack.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="card p-6"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((item, itemIndex) => (
                                        <span
                                            key={itemIndex}
                                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strengths Section */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Key Strengths
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            What sets me apart as a backend developer
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {strengths.map((strength, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="card p-6 hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-primary-600 dark:text-primary-400 mb-4">
                                    {strength.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                    {strength.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {strength.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
