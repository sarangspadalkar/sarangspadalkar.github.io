import {motion} from 'framer-motion';
import {ArrowRight, Cloud, Code, Database, Zap} from 'lucide-react';
import {Link} from 'react-router-dom';

const Home = () => {
    const features = [
        {
            icon: <Code className="w-8 h-8" />,
            title: 'Scalable Architecture',
            description:
                'Designing robust backend systems that handle millions of requests',
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: 'Data Engineering',
            description:
                'Optimizing databases and data pipelines for performance',
        },
        {
            icon: <Cloud className="w-8 h-8" />,
            title: 'Cloud Infrastructure',
            description: 'AWS, Docker, Kubernetes deployment and management',
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'API Development',
            description:
                'Building RESTful and GraphQL APIs with best practices',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6}}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                                I build scalable backend systems that{' '}
                                <span className="text-primary-600 dark:text-primary-400">
                                    power real-world applications
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                                Senior Backend Developer with 10+ years of
                                experience in designing, building, and
                                maintaining high-performance systems that serve
                                millions of users.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/projects"
                                    className="btn-primary inline-flex items-center justify-center"
                                >
                                    View My Work
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    to="/contact"
                                    className="btn-secondary inline-flex items-center justify-center"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        viewport={{once: true}}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            What I Do Best
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Specializing in backend development with a focus on
                            scalability, performance, and reliability.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="card p-6 text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to build something amazing?
                        </h2>
                        <p className="text-xl text-primary-100 mb-8">
                            Let's discuss how I can help bring your backend
                            vision to life.
                        </p>
                        <Link
                            to="/contact"
                            className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
                        >
                            Start a Conversation
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
