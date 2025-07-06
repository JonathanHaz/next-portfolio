import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import styles from '@/styles/Sections/services.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const Services = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.1 });
    const [activeCard, setActiveCard] = useState<number | null>(null);
    
    // Smooth scroll progress
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.1"]
    });

    const services = [
        {
            title: 'Portfolio Websites',
            description: 'Professional portfolio websites that showcase your work with sophisticated animations and clean design.',
            features: ['Advanced Animations', 'Clean Design', 'Performance Optimized', 'Modern Architecture'],
            number: '01',
            color: 'var(--primary)'
        },
        {
            title: 'Landing Pages',
            description: 'High-converting landing pages with smooth interactions and purposeful motion design.',
            features: ['Conversion Focus', 'Smooth Interactions', 'Motion Design', 'User Experience'],
            number: '02',
            color: 'var(--secondary)'
        },
        {
            title: 'Business Applications',
            description: 'Custom web applications with sophisticated user interfaces and seamless functionality.',
            features: ['Custom UI/UX', 'Seamless Flow', 'Advanced Features', 'Scalable Architecture'],
            number: '03',
            color: 'var(--primary)'
        },
        {
            title: 'Full-Stack Solutions',
            description: 'Complete web solutions with backend integration and content management systems.',
            features: ['Full Integration', 'CMS Solutions', 'Database Design', 'API Development'],
            number: '04',
            color: 'var(--secondary)'
        }
    ];

    // Advanced text animation with character splitting
    useEffect(() => {
        if (!titleRef.current) return;
        
        const title = titleRef.current;
        const text = title.textContent || '';
        
        // Split text into characters
        title.innerHTML = text.split('').map((char, i) => 
            `<span class="${styles.char}" style="--i:${i}">${char === ' ' ? '&nbsp;' : char}</span>`
        ).join('');

        // Animate characters
        gsap.fromTo(`.${styles.char}`, 
            { 
                opacity: 0, 
                y: 100,
                rotationX: -90,
                transformOrigin: '50% 50% -20px'
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: title,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, []);

    // Sophisticated service card animations
    useEffect(() => {
        const cards = gsap.utils.toArray(`.${styles.serviceCard}`);
        
        cards.forEach((card: any, index) => {
            // Create morphing animation
            gsap.set(card, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
            });

            // Scroll-triggered reveal
            gsap.to(card, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    end: 'bottom 60%',
                    toggleActions: 'play none none reverse'
                }
            });

            // Advanced hover morphing
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    scale: 1.02,
                    y: -8,
                    duration: 0.6,
                    ease: 'power2.out'
                });
                
                gsap.to(card.querySelector(`.${styles.serviceNumber}`), {
                    scale: 1.2,
                    rotation: 10,
                    duration: 0.4,
                    ease: 'back.out(1.7)'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out'
                });
                
                gsap.to(card.querySelector(`.${styles.serviceNumber}`), {
                    scale: 1,
                    rotation: 0,
                    duration: 0.4,
                    ease: 'back.out(1.7)'
                });
            });
        });

        return () => ScrollTrigger.getAll().forEach(st => st.kill());
    }, []);

    // Smooth progress bar animation
    const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Professional text reveal animation
    const textReveal = {
        hidden: { 
            opacity: 0,
            y: 50,
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)'
        },
        visible: {
            opacity: 1,
            y: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Stagger animation for cards
    const containerAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    return (
        <motion.section 
            ref={containerRef}
            className={styles.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerAnimation}
        >
            {/* Progress indicator */}
            <div className={styles.progressContainer}>
                <motion.div 
                    className={styles.progressBar}
                    style={{ width: progressWidth }}
                />
            </div>

            <div className={styles.header}>
                <h1 ref={titleRef} className={styles.title}>
                    Services
                </h1>
                <motion.p 
                    className={styles.subtitle}
                    variants={textReveal}
                >
                    Crafting digital experiences with purposeful motion and clean design
                </motion.p>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={styles.serviceCard}
                        variants={textReveal}
                        onHoverStart={() => setActiveCard(index)}
                        onHoverEnd={() => setActiveCard(null)}
                    >
                        <div className={styles.cardContent}>
                            <div className={styles.serviceNumber}>
                                {service.number}
                            </div>
                            
                            <h3 className={styles.serviceTitle}>
                                {service.title}
                            </h3>
                            
                            <p className={styles.serviceDescription}>
                                {service.description}
                            </p>
                            
                            <div className={styles.features}>
                                {service.features.map((feature, i) => (
                                    <span 
                                        key={i} 
                                        className={styles.feature}
                                        style={{ 
                                            '--delay': `${i * 0.1}s`,
                                            '--color': service.color
                                        } as React.CSSProperties}
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                        
                        {/* Morphing background shape */}
                        <div 
                            className={styles.morphingShape}
                            style={{ 
                                '--service-color': service.color,
                                opacity: activeCard === index ? 0.1 : 0
                            } as React.CSSProperties}
                        />
                    </motion.div>
                ))}
            </div>


        </motion.section>
    );
};

export default Services; 