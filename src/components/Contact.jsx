import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // EmailJS configuration
            const serviceID = 'service_iutx6ml';
            const templateID = 'template_6b11q8b'; // Main template (to you)
            const autoReplyTemplateID = 'template_me0dn2n'; // Auto-reply template (to visitor)
            const publicKey = 'yha14yxlEihvxSEOi';

            // Send email to you (the owner)
            await emailjs.sendForm(
                serviceID,
                templateID,
                formRef.current,
                publicKey
            );

            // Send auto-reply to the visitor
            await emailjs.send(
                serviceID,
                autoReplyTemplateID,
                {
                    to_email: formData.email,
                    to_name: formData.name,
                },
                publicKey
            );

            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } catch (error) {
            console.error('Email sending failed:', error);
            setSubmitStatus('error');

            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FiMail />,
            title: 'Email',
            value: 'ashan2k02@gmail.com',
            link: 'mailto:ashan2k02@gmail.com'
        },
        {
            icon: <FiPhone />,
            title: 'Phone',
            value: '+94 76 083 7729',
            link: 'tel:+94760837729'
        },
        {
            icon: <FiMapPin />,
            title: 'Location',
            value: 'Sri Lanka',
            link: null
        }
    ];

    const socialLinks = [
        { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/ashan2k02', color: 'hover:text-gray-800 dark:hover:text-white' },
        { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://www.linkedin.com/in/ashaneranga/', color: 'hover:text-blue-600' },
        { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' },
    ];

    return (
        <section id="contact" ref={ref} className="bg-white dark:bg-gray-900 py-20">
            <div className="section-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Contact Information
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-8">
                            Feel free to contact me through any of the following channels. I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-500 rounded-lg">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 transition-all transform hover:scale-110 ${social.color}`}
                                        aria-label={social.name}
                                    >
                                        <span className="text-2xl">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="card p-8"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Send a Message
                        </h3>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="input-field"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="input-field resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend />
                                        Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-center"
                                >
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-center"
                                >
                                    ❌ Failed to send message. Please try again or contact me directly via email.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
