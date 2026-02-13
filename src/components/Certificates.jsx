import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiAward, FiCalendar, FiCheckCircle } from 'react-icons/fi';

const Certificates = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [filter, setFilter] = useState('All');

    const certificates = [
        {
            title: 'React - The Complete Guide',
            issuer: 'Udemy',
            date: 'January 2024',
            credentialId: 'UC-XXXXX-XXXXX',
            image: '/api/placeholder/400/300',
            verifyUrl: 'https://www.udemy.com/certificate/',
            category: 'Web Development',
            skills: ['React', 'JavaScript', 'Hooks', 'Redux']
        },
        {
            title: 'Full Stack Web Development',
            issuer: 'Coursera',
            date: 'December 2023',
            credentialId: 'CERT-XXXXX',
            image: '/api/placeholder/400/300',
            verifyUrl: 'https://www.coursera.org/verify/',
            category: 'Web Development',
            skills: ['HTML', 'CSS', 'Node.js', 'MongoDB']
        },
        {
            title: 'UI/UX Design Fundamentals',
            issuer: 'LinkedIn Learning',
            date: 'November 2023',
            credentialId: 'LL-XXXXX-XXXXX',
            image: '/api/placeholder/400/300',
            verifyUrl: 'https://www.linkedin.com/learning/certificates/',
            category: 'Design',
            skills: ['Figma', 'Prototyping', 'User Research']
        }
    ];

    const categories = [
        'All',
        'Web Development',
        'Design',
        'Programming',
        'Cloud & DevOps',
        'Database',
        'Mobile Development',
        'AI/ML',
        'Cybersecurity',
        'Soft Skills'
    ];

    const filteredCertificates = filter === 'All'
        ? certificates
        : certificates.filter(cert => cert.category === filter);

    return (
        <section id="certificates" ref={ref} className="bg-gray-50 dark:bg-gray-800 py-20">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Certificates & Achievements
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Professional certifications and courses I've completed to enhance my skills
                </motion.p>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                ? 'bg-primary-500 text-white shadow-lg scale-105'
                                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Certificates Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCertificates.map((cert, index) => (
                        <motion.div
                            key={cert.credentialId}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card overflow-hidden group"
                        >
                            {/* Certificate Image */}
                            <div className="relative overflow-hidden h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/30 dark:to-blue-900/30">
                                <motion.img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.4 }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <motion.a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-primary-500 font-medium hover:bg-primary-500 hover:text-white transition-all"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <FiCheckCircle className="w-4 h-4" />
                                        Verify
                                    </motion.a>
                                </div>
                            </div>

                            {/* Certificate Content */}
                            <div className="p-6">
                                <div className="flex items-start gap-2 mb-3">
                                    <FiAward className="w-5 h-5 text-primary-500 mt-1 flex-shrink-0" />
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {cert.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                                    {cert.issuer}
                                </p>

                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                                    <FiCalendar className="w-4 h-4" />
                                    {cert.date}
                                </div>

                                <div className="mb-4">
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mb-1">
                                        Credential ID: {cert.credentialId}
                                    </p>
                                </div>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.1 }}
                                            className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredCertificates.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <FiAward className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No certificates found in this category
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Certificates;
