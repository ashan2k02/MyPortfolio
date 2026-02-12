import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: 'IEEE RUSL Website',
            description: 'Official website for IEEE Student Branch at Rajarata University of Sri Lanka. Modern, responsive design with event management and member portal.',
            image: 'src/assets/images/ieee-project.png',
            tags: ['React', 'Next.js', 'Tailwind', 'TypeScript'],
            techIcons: [<FaReact />, <SiNextdotjs />, <SiTailwindcss />, <SiTypescript />],
            github: 'https://github.com/ashan2k02',
            demo: 'https://ieee-rusl-frontend.vercel.app/',
            category: 'Full Stack'
        },
        {
            title: 'Task Management App',
            description: 'A modern task management application with drag-and-drop functionality and real-time updates.',
            image: '/api/placeholder/600/400',
            tags: ['React', 'TypeScript', 'Tailwind'],
            techIcons: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
            github: 'https://github.com',
            demo: 'https://demo.com',
            category: 'Frontend'
        },
        {
            title: 'Blog Platform',
            description: 'A Next.js-based blog platform with markdown support, commenting system, and SEO optimization.',
            image: '/api/placeholder/600/400',
            tags: ['Next.js', 'TypeScript', 'Tailwind'],
            techIcons: [<SiNextdotjs />, <SiTypescript />, <SiTailwindcss />],
            github: 'https://github.com',
            demo: 'https://demo.com',
            category: 'Full Stack'
        },
        {
            title: 'Weather Dashboard',
            description: 'A responsive weather application that displays current weather and forecasts using external APIs.',
            image: '/api/placeholder/600/400',
            tags: ['React', 'Tailwind', 'API'],
            techIcons: [<FaReact />, <SiTailwindcss />],
            github: 'https://github.com',
            demo: 'https://demo.com',
            category: 'Frontend'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring dark mode.',
            image: '/api/placeholder/600/400',
            tags: ['React', 'Tailwind', 'Framer Motion'],
            techIcons: [<FaReact />, <SiTailwindcss />],
            github: 'https://github.com',
            demo: 'https://demo.com',
            category: 'Frontend'
        },
        {
            title: 'Social Media API',
            description: 'RESTful API for a social media platform with authentication, posts, comments, and likes.',
            image: '/api/placeholder/600/400',
            tags: ['Node.js', 'MongoDB', 'Express'],
            techIcons: [<FaNodeJs />, <SiMongodb />],
            github: 'https://github.com',
            demo: 'https://demo.com',
            category: 'Backend'
        }
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" ref={ref} className="bg-white dark:bg-gray-900 py-20">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Featured Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    Here are some of my recent projects that showcase my skills and passion for web development
                </motion.p>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                ? 'bg-primary-500 text-white shadow-lg'
                                : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="card overflow-hidden group perspective"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden h-48">
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.15, rotate: 2 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiGithub className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-all"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    </div>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                                    {project.description}
                                </p>

                                {/* Tech Icons */}
                                <div className="flex gap-3 mb-4 text-2xl text-gray-700 dark:text-gray-300">
                                    {project.techIcons.map((icon, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ scale: 1.3, rotate: 360, color: '#0ea5e9' }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                            className="hover:text-primary-500 transition-colors cursor-pointer"
                                        >
                                            {icon}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 + tagIndex * 0.05 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com/ashan2k02"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 btn-outline"
                    >
                        <FiGithub className="w-5 h-5" />
                        View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
