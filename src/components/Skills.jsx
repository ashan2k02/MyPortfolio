import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaFigma
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql
} from 'react-icons/si';
import { DiCode } from 'react-icons/di';
import CodeRain from './CodeRain';

const Skills = () => {
    const ref = useRef(null);
    const scrollContainerRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 420; // Card width + gap
            const newPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };

    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 90, icon: <FaReact className="text-cyan-500" /> },
                { name: 'Next.js', level: 85, icon: <SiNextdotjs className="text-black dark:text-white" /> },
                { name: 'JavaScript', level: 88, icon: <FaJs className="text-yellow-500" /> },
                { name: 'TypeScript', level: 80, icon: <SiTypescript className="text-blue-600" /> },
                { name: 'HTML5', level: 95, icon: <FaHtml5 className="text-orange-600" /> },
                { name: 'CSS3', level: 90, icon: <FaCss3Alt className="text-blue-500" /> },
                { name: 'Tailwind CSS', level: 92, icon: <SiTailwindcss className="text-cyan-400" /> },
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 75, icon: <FaNodeJs className="text-green-600" /> },
                { name: 'Express.js', level: 70, icon: <SiExpress className="text-gray-700 dark:text-gray-300" /> },
            ]
        },
        {
            title: 'Database',
            skills: [
                { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-500" /> },
                { name: 'MySQL', level: 70, icon: <SiMysql className="text-blue-600" /> },
            ]
        },
        {
            title: 'Tools',
            skills: [
                { name: 'Git', level: 85, icon: <FaGitAlt className="text-orange-500" /> },
                { name: 'GitHub', level: 85, icon: <FaGithub className="text-gray-800 dark:text-white" /> },
                { name: 'Figma', level: 75, icon: <FaFigma className="text-purple-500" /> },
                { name: 'VS Code', level: 90, icon: <DiCode className="text-blue-600" /> },
            ]
        }
    ];

    const SkillBar = ({ skill, delay }) => {
        const [width, setWidth] = useState(0);

        useEffect(() => {
            if (isInView) {
                const timer = setTimeout(() => {
                    setWidth(skill.level);
                }, delay);
                return () => clearTimeout(timer);
            }
        }, [isInView, skill.level, delay]);

        return (
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay }}
                className="mb-6"
            >
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-primary-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${width}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary-500 to-blue-600 rounded-full relative"
                    >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                </div>
            </motion.div>
        );
    };

    return (
        <section id="skills" ref={ref} className="bg-gray-50 dark:bg-gray-800 py-16 relative overflow-hidden">
            {/* Code Rain Effect */}
            <CodeRain />

            <div className="section-container relative" style={{ zIndex: 20 }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Skills & Technologies
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Here are the technologies and tools I work with to bring ideas to life
                </motion.p>

                {/* Horizontal Scrollable Skills */}
                <div className="relative">
                    {/* Left Arrow */}
                    <motion.button
                        onClick={() => scroll('left')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hidden md:flex items-center justify-center"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    {/* Right Arrow */}
                    <motion.button
                        onClick={() => scroll('right')}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hidden md:flex items-center justify-center"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>

                    <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 min-w-[320px] md:min-w-[400px] snap-start flex-shrink-0"
                            >
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                                    <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-blue-600 rounded-full"></span>
                                    {category.title}
                                </h3>
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillBar
                                        key={skill.name}
                                        skill={skill}
                                        delay={0.3 + categoryIndex * 0.1 + skillIndex * 0.05}
                                    />
                                ))}
                            </motion.div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                        {skillCategories.map((_, index) => (
                            <div key={index} className="w-2 h-2 rounded-full bg-primary-500/30"></div>
                        ))}
                    </div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Always learning and exploring new technologies to expand my skillset
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
