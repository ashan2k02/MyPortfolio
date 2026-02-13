import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiBook, FiHeart, FiCode } from 'react-icons/fi';
import groupImg from '../assets/images/group.jpg';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const interests = [
        { icon: <FiCode />, title: 'Web Development', description: 'Building modern web applications' },
        { icon: <FiAward />, title: 'UI/UX Design', description: 'Creating intuitive interfaces' },
        { icon: <FiBook />, title: 'Open Source', description: 'Contributing to community' },
        { icon: <FiHeart />, title: 'Problem Solving', description: 'Tackling challenges creatively' },
    ];

    return (
        <section id="about" ref={ref} className="bg-white dark:bg-gray-900 py-20">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={groupImg}
                                alt="About Me"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-xs"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                                <span className="font-bold text-primary-500">4+</span> Projects Completed
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                <span className="font-bold text-primary-500">2+</span> Years Learning
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                            Computer Science Student & React Developer
                        </h3>

                        <div className="space-y-4 text-gray-600 dark:text-gray-300">
                            <p>
                                I'm a passionate Computer Science undergraduate at <span className="font-semibold text-primary-500">Rajarata University of Sri Lanka</span>,
                                pursuing my BSc in Computer Science. I specialize in building modern, responsive web applications using React and other cutting-edge technologies.
                            </p>

                            <p>
                                My journey in web development started with a curiosity about how websites work, and it has grown into a passion for creating
                                seamless user experiences and solving complex problems through code.
                            </p>

                            <p>
                                I'm constantly learning new technologies and best practices to stay current in the ever-evolving world of web development.
                                When I'm not coding, you'll find me exploring open-source projects, reading tech blogs, or working on personal projects.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-primary-500 text-2xl mb-2">
                                        {interest.icon}
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {interest.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {interest.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
