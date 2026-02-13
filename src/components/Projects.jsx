import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';

// Import images
import ieeeProjectImg from '../assets/images/ieee-project.png';
import portfolioImg from '../assets/images/portfolio_project.png';
import agrivisionImg from '../assets/images/uiux_agrivision.png';
import ieeeUIImg from '../assets/images/uiux_ieee.png';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [filter, setFilter] = useState('All');
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedProjectUrl, setSelectedProjectUrl] = useState('');

    const handleProjectClick = (url) => {
        if (url) {
            setSelectedProjectUrl(url);
            setShowConfirmModal(true);
        }
    };

    const confirmVisit = () => {
        if (selectedProjectUrl) {
            window.open(selectedProjectUrl, '_blank', 'noopener,noreferrer');
        }
        setShowConfirmModal(false);
        setSelectedProjectUrl('');
    };

    const cancelVisit = () => {
        setShowConfirmModal(false);
        setSelectedProjectUrl('');
    };

    const projects = [
        {
            title: 'IEEE RUSL Website',
            description: 'Full-stack official website for IEEE Student Branch at Rajarata University of Sri Lanka. Modern, responsive design with event management and member portal.',
            image: ieeeProjectImg,
            tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
            techIcons: [<FaReact />, <SiNextdotjs />, <FaNodeJs />, <SiMongodb />],
            github: 'https://github.com/ashan2k02',
            demo: 'https://ieee-rusl-frontend.vercel.app/',
            category: ['Frontend', 'Backend', 'Full Stack']
        },
        {
            title: 'Portfolio Website',
            description: 'Personal portfolio website showcasing projects and skills with custom cursor, code rain effects, and premium animations built with React and Tailwind CSS.',
            image: portfolioImg,
            tags: ['React', 'Tailwind', 'Framer Motion', 'Vite'],
            techIcons: [<FaReact />, <SiTailwindcss />],
            github: 'https://github.com/ashan2k02/MyPortfolio',
            demo: '',
            category: 'Frontend'
        },
        {
            title: 'AgriVision',
            description: 'Agricultural technology UI/UX design focusing on farm management and crop monitoring solutions with modern, user-friendly interfaces.',
            image: agrivisionImg,
            tags: ['Figma', 'UI Design', 'UX Design', 'AgriTech'],
            techIcons: [<FaFigma />],
            github: '',
            demo: 'https://www.figma.com/design/eq5jQSj2busACaxYJqxkLw/AgriVision?node-id=0-1&t=HFfvssBJsJhHgnJ4-1',
            category: 'UI/UX'
        },
        {
            title: 'UI/UX Design For IEEE RUSL',
            description: 'Modern user interface and experience design showcasing clean layouts, intuitive navigation, and aesthetic appeal created in Figma.',
            image: ieeeUIImg,
            tags: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
            techIcons: [<FaFigma />],
            github: '',
            demo: 'https://www.figma.com/design/R88RphjOErn5KbtDc0XffB/Untitled?node-id=0-1&t=vhRoidlB6UR1yKNu-1',
            category: 'UI/UX'
        }
    ];

    const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'UI/UX'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => {
            if (Array.isArray(project.category)) {
                return project.category.includes(filter);
            }
            return project.category === filter;
        });

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
                            className="card overflow-hidden group perspective cursor-pointer"
                            onClick={() => project.demo && handleProjectClick(project.demo)}
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
                                        {project.github && (
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
                                        )}
                                        {project.demo && (
                                            <motion.button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleProjectClick(project.demo);
                                                }}
                                                whileHover={{ scale: 1.2, rotate: 360 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="p-2 bg-white rounded-full hover:bg-primary-500 hover:text-white transition-all"
                                            >
                                                <FiExternalLink className="w-5 h-5" />
                                            </motion.button>
                                        )}
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

            {/* Confirmation Modal */}
            {showConfirmModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={cancelVisit}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FiExternalLink className="w-8 h-8 text-primary-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                Visit External Project?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                You're about to leave this site and visit an external project. Continue?
                            </p>
                            <div className="flex gap-3 justify-center">
                                <motion.button
                                    onClick={cancelVisit}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-gray-700 dark:text-gray-300"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    onClick={confirmVisit}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-3 rounded-lg bg-primary-500 hover:bg-primary-600 transition-colors font-medium text-white flex items-center gap-2"
                                >
                                    Visit Project
                                    <FiExternalLink className="w-4 h-4" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </section>
    );
};

export default Projects;
