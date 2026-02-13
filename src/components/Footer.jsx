import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: <FiGithub />, url: 'https://github.com/ashan2k02', label: 'GitHub' },
        { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/ashaneranga/', label: 'LinkedIn' },
        { icon: <FiTwitter />, url: 'https://twitter.com', label: 'Twitter' },
        { icon: <FiMail />, url: 'mailto:ashan2k02@gmail.com', label: 'Email' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-blue-500 bg-clip-text text-transparent mb-4">
                            Portfolio
                        </h3>
                        <p className="text-gray-400 mb-4">
                            A passionate React Developer and Computer Science student dedicated to creating
                            exceptional web experiences.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-all transform hover:scale-110"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="hover:text-primary-400 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="mailto:ashan2k02@gmail.com" className="hover:text-primary-400 transition-colors">
                                    ashan2k02@gmail.com
                                </a>
                            </li>
                            <li>Sri Lanka</li>
                            <li>Rajarata University of Sri Lanka</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400 flex items-center gap-2">
                            © {new Date().getFullYear()} Ashan Eranga Welivitigoda
                        </p>
                        <p className="text-sm text-gray-400">
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 p-4 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-all z-40"
                aria-label="Back to top"
            >
                <FiArrowUp className="w-6 h-6" />
            </motion.button>
        </footer>
    );
};

export default Footer;
