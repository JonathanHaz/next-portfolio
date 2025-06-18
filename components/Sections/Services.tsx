import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import styles from '@/styles/Sections/services.module.css';
import Magnetic from '../Magnetic';
import Rounded from '../Rounded';
import gsap from 'gsap';

const Services = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });

    const services = [
        {
            title: 'Portfolio Websites',
            description: 'Professional portfolio websites to showcase your work and skills with modern animations and responsive design.',
            features: ['Responsive Design', 'Modern Animations', 'SEO Optimized', 'Fast Loading'],
            icon: '💼',
            color: '#6366f1'
        },
        {
            title: 'Landing Pages',
            description: 'High-converting landing pages designed to capture leads and drive conversions for your business.',
            features: ['Conversion Focused', 'Mobile Optimized', 'A/B Test Ready', 'Analytics Integration'],
            icon: '🚀',
            color: '#f59e0b'
        },
        {
            title: 'Business Apps',
            description: 'Custom web applications for small businesses like barber shops, nail salons, and service providers.',
            features: ['Booking System', 'Client Management', 'Service Catalog', 'Mobile Friendly'],
            icon: '✂️',
            color: '#10b981'
        },
        {
            title: 'Business Websites with CMS',
            description: 'Full-stack business websites with content management systems and database integration for easy content updates.',
            features: ['Content Management', 'Database Integration', 'Admin Dashboard', 'Custom Features'],
            icon: '🏢',
            color: '#ef4444'
        }
    ];

    // GSAP Animation for icons
    useEffect(() => {
        const icons = document.querySelectorAll(`.${styles.serviceIcon}`);
        
        icons.forEach((icon, index) => {
            const tl = gsap.timeline({ paused: true });
            
            tl.to(icon, {
                scale: 1.2,
                rotation: 10,
                duration: 0.3,
                ease: "power2.out"
            })
            .to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });

            icon.addEventListener('mouseenter', () => tl.play());
        });

        // Cleanup
        return () => {
            icons.forEach(icon => {
                icon.removeEventListener('mouseenter', () => {});
            });
        };
    }, []);

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    // Card animation variants
    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.9,
            rotateX: -15
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Header text animation variants
    const textVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            filter: "blur(10px)"
        },
        visible: { 
            opacity: 1, 
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    // Feature tag animations
    const featureVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "backOut"
            }
        })
    };

    const handleContactClick = () => {
        const contactElement = document.getElementById('contact');
        if (contactElement) {
            const yOffset = -80;
            const y = contactElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <motion.div 
            ref={containerRef}
            className={styles.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <motion.div className={styles.header} variants={textVariants}>
                <motion.h1 variants={textVariants}>Services</motion.h1>
                <motion.p variants={textVariants}>
                    I help businesses and individuals create their digital presence with custom web solutions
                </motion.p>
            </motion.div>
            
            <motion.div className={styles.servicesGrid} variants={containerVariants}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={styles.serviceCard}
                        variants={cardVariants}
                       
                        whileTap={{ scale: 0.98 }}
                    >
                            <motion.div 
                                className={styles.serviceIcon}
                                style={{ background: `linear-gradient(135deg, ${service.color}, ${service.color}90)` }}
                                whileHover={{ 
                                    boxShadow: `0 10px 30px ${service.color}40`,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <span>{service.icon}</span>
                            </motion.div>
                        
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                        >
                            {service.title}
                        </motion.h3>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        >
                            {service.description}
                        </motion.p>
                        
                        <motion.div 
                            className={styles.features}
                            initial="hidden"
                            animate="visible"
                        >
                            {service.features.map((feature, i) => (
                                <motion.span 
                                    key={i} 
                                    className={styles.feature}
                                    variants={featureVariants}
                                    custom={i}
                                    whileHover={{ 
                                        scale: 1.05,
                                        backgroundColor: service.color + '20',
                                        color: service.color,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {feature}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

        
        </motion.div>
    );
};

export default Services; 