import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiBriefcase, FiAward } from 'react-icons/fi';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const timeline = [
        {
            type: 'education',
            title: 'BSc in Computer Science',
            organization: 'Rajarata University of Sri Lanka',
            period: '2024 - 2027',
            description: 'Currently pursuing a Bachelor of Science\'s degree in Computer Science with a focus on software engineering, web technologies, and modern development practices.',
            achievements: [
                'Selected for Computer Science program in 2024',
                'Expected graduation in 2027',
                'Active participation in tech communities and projects'
            ],
            icon: <FiBook />
        },
        {
            type: 'work',
            title: 'Internship Developer',
            organization: 'PAYMEDIA',
            period: '2026 - Present',
            description: 'Working as an intern developer, gaining hands-on experience with real-world projects and modern development workflows.',
            achievements: [
                'Contributing to production-level applications',
                'Working with experienced development teams',
                'Learning industry best practices and modern tech stacks'
            ],
            icon: <FiBriefcase />
        },
        {
            type: 'work',
            title: 'Freelance Developer',
            organization: 'Self-Employed',
            period: '2024 - Present',
            description: 'Currently working on freelance projects, building custom web applications using React, Next.js, Laravel, and modern web technologies.',
            achievements: [
                'Successfully delivering projects for various clients',
                'Specializing in fullstack web development',
                'Creating responsive and user-friendly applications'
            ],
            icon: <FiBriefcase />
        },
        {
            type: 'achievement',
            title: 'Self-Learning Journey',
            organization: 'Udemy, Coursera & Self-Study',
            period: '2022 - 2024',
            description: 'Dedicated time to learning web development, React, fullstack development, UI/UX design, and Laravel through online platforms and self-study.',
            achievements: [
                'Completed courses in React, Web Development, Fullstack',
                'UI/UX design and Laravel development',
                'Built strong foundation in modern web technologies',
                'Continuously learning new technologies and best practices'
            ],
            icon: <FiAward />
        },
        {
            type: 'education',
            title: 'GCE Advanced Level',
            organization: 'Science Stream',
            period: '2022',
            description: 'Completed Advanced Level examination in Science stream, which led to selection for Computer Science degree program.',
            achievements: [
                'Successfully completed AL examination',
                'Science stream qualification',
                'Foundation for university-level computer science studies'
            ],
            icon: <FiBook />
        }
    ];

    return (
        <section id="experience" ref={ref} className="bg-gray-50 dark:bg-gray-800 py-20">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Experience & Education
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    My journey in tech and education
                </motion.p>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-600"></div>

                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                                    } md:w-1/2`}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute top-0 ${index % 2 === 0 ? 'left-6 md:right-0 md:left-auto md:-mr-4' : 'left-6 md:-ml-4'
                                    } w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg z-10`}>
                                    {item.icon}
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                    <div className="card p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.type === 'education'
                                                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                : item.type === 'work'
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                                                    : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                                                }`}>
                                                {item.type === 'education' ? 'Education' : item.type === 'work' ? 'Work' : 'Achievement'}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{item.period}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-primary-500 dark:text-primary-400 font-semibold mb-3">
                                            {item.organization}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {item.description}
                                        </p>

                                        <ul className="space-y-2">
                                            {item.achievements.map((achievement, i) => (
                                                <li
                                                    key={i}
                                                    className={`text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                                                        }`}
                                                >
                                                    <span className="text-primary-500 mt-1">•</span>
                                                    <span>{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Download CV Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <a
                        href="/cv.pdf"
                        download
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download CV
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
