import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    demoUrl?: string;
    image?: string;
    category: 'backend' | 'api' | 'infrastructure' | 'database';
}

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState<string>('all');

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-Commerce Microservices Platform',
            description: 'Built a scalable e-commerce platform using microservices architecture. Handles 100K+ concurrent users with 99.9% uptime. Features include order processing, inventory management, payment integration, and real-time analytics.',
            technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS'],
            githubUrl: 'https://github.com/sarangspadalkar/ecommerce-platform',
            category: 'backend'
        },
        {
            id: 2,
            title: 'Real-time Chat API',
            description: 'Developed a high-performance real-time chat system using WebSockets and Redis pub/sub. Supports 10K+ concurrent connections with message persistence and user presence tracking.',
            technologies: ['Node.js', 'WebSocket', 'Redis', 'MongoDB', 'Socket.io'],
            githubUrl: 'https://github.com/sarangspadalkar/chat-api',
            demoUrl: 'https://chat-demo.example.com',
            category: 'api'
        },
        {
            id: 3,
            title: 'Data Pipeline & Analytics Engine',
            description: 'Created an ETL pipeline processing 1TB+ daily data with real-time analytics. Includes data validation, transformation, and visualization dashboards with sub-second query response times.',
            technologies: ['Python', 'Apache Kafka', 'Elasticsearch', 'PostgreSQL', 'Docker'],
            githubUrl: 'https://github.com/sarangspadalkar/data-pipeline',
            category: 'backend'
        },
        {
            id: 4,
            title: 'Payment Gateway Integration',
            description: 'Built a secure payment processing system supporting multiple payment providers (Stripe, PayPal, Square). Features fraud detection, webhook handling, and transaction reconciliation.',
            technologies: ['Node.js', 'PostgreSQL', 'Redis', 'Stripe API', 'Docker'],
            githubUrl: 'https://github.com/sarangspadalkar/payment-gateway',
            category: 'api'
        },
        {
            id: 5,
            title: 'Kubernetes Cluster Management',
            description: 'Designed and implemented a multi-region Kubernetes cluster with automated scaling, monitoring, and disaster recovery. Reduced deployment time by 80% and improved resource utilization.',
            technologies: ['Kubernetes', 'Terraform', 'AWS', 'Prometheus', 'Grafana'],
            githubUrl: 'https://github.com/sarangspadalkar/k8s-cluster',
            category: 'infrastructure'
        },
        {
            id: 6,
            title: 'Database Optimization & Migration',
            description: 'Optimized a legacy MySQL database serving 5M+ users. Implemented read replicas, query optimization, and zero-downtime migration to PostgreSQL, improving performance by 300%.',
            technologies: ['PostgreSQL', 'MySQL', 'Redis', 'Python', 'AWS RDS'],
            githubUrl: 'https://github.com/sarangspadalkar/db-migration',
            category: 'database'
        }
    ];

    const allTechnologies = Array.from(
        new Set(projects.flatMap(project => project.technologies))
    ).sort();

    const filteredProjects = selectedFilter === 'all'
        ? projects
        : projects.filter(project =>
            project.technologies.includes(selectedFilter) ||
            project.category === selectedFilter
        );

    const filterOptions = [
        { value: 'all', label: 'All Projects' },
        { value: 'backend', label: 'Backend Systems' },
        { value: 'api', label: 'APIs' },
        { value: 'infrastructure', label: 'Infrastructure' },
        { value: 'database', label: 'Database' },
        ...allTechnologies.map(tech => ({ value: tech, label: tech }))
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            My Projects
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Showcasing backend systems that power real-world applications
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="section-padding bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-4"
                    >
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            <span className="text-lg font-medium text-gray-900 dark:text-white">
                                Filter by:
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {filterOptions.map((option) => (
                                <button
                                    key={option.value}
                                    onClick={() => setSelectedFilter(option.value)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${selectedFilter === option.value
                                            ? 'bg-primary-600 text-white'
                                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                                aria-label="View on GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                                aria-label="View demo"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
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

                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16"
                        >
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                No projects found with the selected filter. Try a different filter option.
                            </p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Interested in working together?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Let's discuss how I can help build scalable backend solutions for your project.
                        </p>
                        <a
                            href="/contact"
                            className="btn-primary inline-flex items-center"
                        >
                            Get In Touch
                            <ExternalLink className="ml-2 w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects; 