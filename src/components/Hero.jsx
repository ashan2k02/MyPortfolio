import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import CodeRain from './CodeRain';

const Hero = () => {
    const handleScrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative overflow-hidden">
            {/* Code Rain Effect */}
            <CodeRain />

            <div className="section-container relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-4"
                        >
                            <span className="text-primary-500 dark:text-primary-400 font-semibold text-lg">
                                Hello, I'm
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white"
                        >
                            Ashan Eranga Welivitigoda
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-primary-500 to-blue-600 bg-clip-text text-transparent"
                        >
                            React Developer | Computer Science Undergraduate
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0"
                        >
                            Passionate about building modern, scalable web applications that solve real-world problems.
                            Currently pursuing Computer Science at Rajarata University of Sri Lanka.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
                        >
                            <button
                                onClick={() => handleScrollToSection('#projects')}
                                className="btn-primary"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => handleScrollToSection('#contact')}
                                className="btn-outline"
                            >
                                Contact Me
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="flex gap-4 justify-center md:justify-start"
                        >
                            <a
                                href="https://github.com/ashan2k02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all transform hover:scale-110"
                            >
                                <FiGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ashaneranga/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all transform hover:scale-110"
                            >
                                <FiLinkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="mailto:ashan2k02@gmail.com"
                                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all transform hover:scale-110"
                            >
                                <FiMail className="w-6 h-6" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{
                                    rotate: [0, 5, 0, -5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-400 to-blue-600 p-2"
                            >
                                <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                    <img
                                        src="src/assets/images/profile.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
                            >
                                <span className="text-2xl">💻</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
                            >
                                <span className="text-2xl">⚡</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => handleScrollToSection('#about')}
                    >
                        <span className="text-gray-600 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
                        <FiArrowDown className="w-6 h-6 text-primary-500" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
