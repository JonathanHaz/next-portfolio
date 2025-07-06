"use client"
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import Lenis from 'lenis';
import Magnetic from '@/components/Magnetic';
import Rounded from '@/components/Rounded';
import styles from '@/styles/pages/aboutp.module.css';
import Image from 'next/image';

const AboutPage: React.FC = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const storyRef = useRef(null);
    const personalityRef = useRef(null);
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);
    
    // State for managing which cards are open
    const [openStoryCard, setOpenStoryCard] = useState<number | null>(null);
    const [openMilestoneCard, setOpenMilestoneCard] = useState<number | null>(null);
    
    // Click handlers for story and milestone cards
    const handleStoryClick = (index: number) => {
        setOpenStoryCard(openStoryCard === index ? null : index);
    };
    
    const handleMilestoneClick = (index: number) => {
        setOpenMilestoneCard(openMilestoneCard === index ? null : index);
    };
    
    // Parallax using the same approach as Home page
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Create parallax transform for content
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    
    // Story section parallax
    const { scrollYProgress: storyScrollProgress } = useScroll({
        target: storyRef,
        offset: ["start end", "end start"]
    });
    
    const storyBackgroundY = useTransform(storyScrollProgress, [0, 1], ["0%", "30%"]);
    
    const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
    const personalityInView = useInView(personalityRef, { once: true, amount: 0.3 });
    const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
    const experienceInView = useInView(experienceRef, { once: true, amount: 0.3 });

    // Lenis smooth scroll setup
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // Hero Section - Advanced Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                when: "beforeChildren"
            }
        }
    };

    // Advanced text variants for hero section
    const heroTextVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95,
            filter: "blur(8px)"
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                filter: { duration: 0.6 }
            }
        }
    };

    // Simple text variants for other sections
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    // Simple card variants for other sections
    const cardVariants = {
        hidden: { opacity: 0.6, y: 60, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { duration: 0.3,  }
        }
    };

    // Advanced text reveal animation for hero titles
    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const letterVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            rotateX: 90,
            filter: "blur(4px)"
        },
        visible: { 
            opacity: 1, 
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: { 
                duration: 0.6, 
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    // Advanced image reveal for hero
    const imageRevealVariants = {
        hidden: { 
            scale: 1.2,
            opacity: 0,
            filter: "blur(20px)"
        },
        visible: { 
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            transition: { 
                duration: 1.4, 
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const favoriteGames = [
        { src: '/er.png', alt: 'Elden Ring', title: ' ' },
        { src: '/gt.png', alt: 'Ghost Of Tsushima', title: '' },
        { src: '/ssdt.png', alt: 'Sekiro', title: '' }
    ];

    const personalityCards = [
        {
            title: 'Gaming Enthusiast',
            description: 'Passionate about challenging souls-like games and immersive RPG worlds that inspire creative solutions.',
            icon: '🎮',
            color: '#6366f1'
        },
        {
            title: 'Culinary Explorer',
            description: 'Love experimenting with new recipes and flavors, bringing creativity from kitchen to code.',
            icon: '👨‍🍳',
            color: '#f59e0b'
        },
        {
            title: 'Design Thinker',
            description: 'Discovered my passion for design in high school, now bringing aesthetic vision to every project.',
            icon: '🎨',
            color: '#10b981'
        }
    ];

    const constellationSkills = [
        // Frontend Constellation
        { 
            src: '/javascript-color.svg', 
            alt: 'JavaScript', 
            name: 'JavaScript', 
            position: { x: 15, y: 20 }, 
            size: 'large',
            color: '#f7df1e',
            category: 'frontend'
        },
        { 
            src: '/typescript-color.svg', 
            alt: 'TypeScript', 
            name: 'TypeScript', 
            position: { x: 35, y: 15 }, 
            size: 'large',
            color: '#3178c6',
            category: 'frontend'
        },
        { 
            src: '/react-color.svg', 
            alt: 'React', 
            name: 'React', 
            position: { x: 25, y: 35 }, 
            size: 'large',
            color: '#61dafb',
            category: 'frontend'
        },
        { 
            src: '/nextdotjs-color.svg', 
            alt: 'Next.js', 
            name: 'Next.js', 
            position: { x: 45, y: 30 }, 
            size: 'medium',
            color: '#000000',
            category: 'frontend'
        },
        
        // Backend Constellation
        { 
            src: '/nodedotjs-color.svg', 
            alt: 'Node.js', 
            name: 'Node.js', 
            position: { x: 65, y: 25 }, 
            size: 'large',
            color: '#68a063',
            category: 'backend'
        },
        { 
            src: '/express-color.svg', 
            alt: 'Express', 
            name: 'Express', 
            position: { x: 75, y: 40 }, 
            size: 'medium',
            color: '#000000',
            category: 'backend'
        },
        { 
            src: '/mongodb-color.svg', 
            alt: 'MongoDB', 
            name: 'MongoDB', 
            position: { x: 85, y: 20 }, 
            size: 'medium',
            color: '#4db33d',
            category: 'backend'
        },
        { 
            src: '/prisma.svg', 
            alt: 'Prisma', 
            name: 'Prisma', 
            position: { x: 70, y: 10 }, 
            size: 'small',
            color: '#2d3748',
            category: 'backend'
        },
        
        // Tools & Design Constellation
        { 
            src: '/github-color.svg', 
            alt: 'GitHub', 
            name: 'GitHub', 
            position: { x: 20, y: 60 }, 
            size: 'medium',
            color: '#333',
            category: 'tools'
        },
        { 
            src: '/adobephotoshop-color.svg', 
            alt: 'Adobe Photoshop', 
            name: 'Photoshop', 
            position: { x: 40, y: 70 }, 
            size: 'medium',
            color: '#31a8ff',
            category: 'tools'
        },
        { 
            src: '/adobeillustrator-color.svg', 
            alt: 'Adobe Illustrator', 
            name: 'Illustrator', 
            position: { x: 60, y: 65 }, 
            size: 'medium',
            color: '#ff9a00',
            category: 'tools'
        },
        { 
            src: '/firebase-color.svg', 
            alt: 'Firebase', 
            name: 'Firebase', 
            position: { x: 80, y: 60 }, 
            size: 'small',
            color: '#ffca28',
            category: 'tools'
        }
    ];

    // Constellation connections (defines which skills connect to each other)
    const connections = [
        [0, 1], [1, 2], [2, 3], [0, 2], // Frontend connections
        [4, 5], [5, 6], [6, 7], [4, 7], // Backend connections
        [8, 9], [9, 10], [10, 11], [8, 11], // Tools connections
        [1, 4], [2, 5], [3, 6], // Cross-category connections
        [9, 2], [10, 4] // Design-Dev connections
    ];

    const journeyExperiences = [
        {
            company: 'Self-Learning Journey',
            role: 'Aspiring Developer',
            duration: '2022',
            description: 'Started my coding journey with curiosity and determination, learning the fundamentals through online resources and personal projects.',
            technologies: ['HTML', 'CSS', 'JavaScript Basics'],
            color: '#8b5cf6',
            year: '2022',
            milestone: 'Beginning',
            position: { x: 10, y: 20 }
        },
        {
            company: 'IITC College',
            role: 'Full-Stack Bootcamp Student',
            duration: '6 months',
            description: 'Intensive full-stack development program where I discovered my true passion and built a solid foundation in modern web technologies.',
            technologies: ['JavaScript', 'React', 'Firebase', 'Node.js', 'MongoDB'],
            color: '#f59e0b',
            year: '2023',
            milestone: 'Foundation',
            position: { x: 35, y: 40 }
        },
        {
            company: 'Relyon.ai',
            role: 'Full-Stack Developer Intern',
            duration: '6 months',
            description: 'Gained valuable real-world experience at a cutting-edge personal safety platform leveraging AI, voice recognition, and mobile technology.',
            technologies: ['Next.js', 'TypeScript', 'React Native'],
            color: '#6366f1',
            year: '2023-2024',
            milestone: 'Professional',
            position: { x: 65, y: 25 }
        },
        {
            company: 'Freelance Career',
            role: 'Independent Web Developer',
            duration: 'Ongoing',
            description: 'Creating custom portfolios for content creators, TikTok influencers, full stack websites for businesses, and targeted landing pages for CRM and lead generation.',
            technologies: ['Next.js', 'Custom Design', 'Sanity CMS', 'Client Relations'],
            color: '#10b981',
            year: '2024',
            milestone: 'Current',
            position: { x: 85, y: 60 }
        }
    ];

    // Path connections for the timeline
    const timelinePath = [
        { from: 0, to: 1 },
        { from: 1, to: 2 },
        { from: 2, to: 3 }
    ];

    // Story transition points that explain the journey between milestones
    const storyTransitions = [
        {
            title: "The Spark",
            story: "Countless hours on YouTube tutorials, Stack Overflow deep-dives, and building my first 'Hello World' - the addiction to problem-solving was born.",
            position: { x: 22, y: 30 },
            color: '#a855f7',
            fromMilestone: 0,
            toMilestone: 1
        },
        {
            title: "Taking the Leap", 
            story: "Realized I needed structure and mentorship. Applied to IITC's intensive bootcamp to transform passion into professional skills.",
            position: { x: 50, y: 32 },
            color: '#f97316',
            fromMilestone: 1,
            toMilestone: 2
        },
        {
            title: "The Breakthrough",
            story: "Bootcamp portfolio caught Relyon.ai's attention. First real chance to apply skills in a professional environment with cutting-edge tech.",
            position: { x: 75, y: 42 },
            color: '#3b82f6',
            fromMilestone: 2,
            toMilestone: 3
        }
    ];

    return (
        <div ref={containerRef} className={styles.container}>
                {/* Hero Section */}
                <motion.section 
                    ref={heroRef}
                    className={styles.heroSection}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Parallax Background Layer */}
                    <motion.div 
                        className={styles.backgroundLayer}
                        style={{ y: contentY }}
                    />
                    {/* Background decorative elements */}
                    <div className={styles.heroBackground}>
                        <motion.div 
                            className={styles.floatingElement}
                            animate={{ 
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ 
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <span>💻</span>
                        </motion.div>
                        <motion.div 
                            className={styles.floatingElement}
                            style={{ top: '20%', right: '15%' }}
                            animate={{ 
                                y: [0, 15, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{ 
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <span>🎨</span>
                        </motion.div>
                        <motion.div 
                            className={styles.floatingElement}
                            style={{ bottom: '25%', left: '10%' }}
                            animate={{ 
                                y: [0, -10, 0],
                                rotate: [0, 3, 0]
                            }}
                            transition={{ 
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        >
                            <span>⚡</span>
                        </motion.div>
                    </div>

                    <div className={styles.heroContent}>
                        <motion.div className={styles.heroText} variants={heroTextVariants}>
                            <motion.div className={styles.heroLabel} variants={heroTextVariants}>
                                <span>👋 Hello, I'm Jonathan</span>
                            </motion.div>
                            <motion.h1 
                                variants={titleVariants}
                                className={styles.heroTitle}
                            >
                                {"About Me".split("").map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letterVariants}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </motion.span>
                                ))}
                            </motion.h1>
                            <motion.h2 
                                variants={titleVariants}
                                className={styles.heroSubtitle}
                            >
                                {"Full-Stack Developer & Creative Thinker".split(" ").map((word, index) => (
                                    <motion.span
                                        key={index}
                                        variants={letterVariants}
                                        style={{ display: 'inline-block', marginRight: '0.3em' }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.p variants={heroTextVariants}>
                                Born in France, passionate about creating digital experiences that matter.
                            </motion.p>
                            
                            {/* Stats Section */}
                            <motion.div className={styles.heroStats} variants={containerVariants}>
                                <motion.div className={styles.statItem} variants={heroTextVariants}>
                                    <span className={styles.statNumber}>6+</span>
                                    <span className={styles.statLabel}>Months at Relyon.ai</span>
                                </motion.div>
                                <motion.div className={styles.statItem} variants={heroTextVariants}>
                                    <span className={styles.statNumber}>10+</span>
                                    <span className={styles.statLabel}>Projects Completed</span>
                                </motion.div>
                                <motion.div className={styles.statItem} variants={heroTextVariants}>
                                    <span className={styles.statNumber}>2+</span>
                                    <span className={styles.statLabel}>Years Coding</span>
                                </motion.div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div className={styles.heroActions} variants={containerVariants}>
                                <motion.div variants={heroTextVariants}>
                                    <Rounded onClick={() => {
                                        const contactElement = document.getElementById('contact');
                                        if (contactElement) {
                                            contactElement.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}>
                                        <p>Let's Connect</p>
                                    </Rounded>
                                </motion.div>
                                <motion.div variants={heroTextVariants}>
                                    <Rounded onClick={() => {
                                        window.open('https://www.dropbox.com/scl/fi/f587ix1gguloxglakk8e3/Jonathan-Hazan-CV-English.pdf?rlkey=xs7dpx5fy72xxv7trvsoas415&st=tk5tao2j&dl=0', '_blank');
                                    }}>
                                        <p>View Resume</p>
                                    </Rounded>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div className={styles.heroImageContainer}>
                            <div className={styles.heroImage}>
                                <motion.div
                                    style={{
                                        y: contentY,
                                    }}
                                    className={styles.parallaxImage}
                                    initial="hidden"
                                    animate="visible"
                                    variants={imageRevealVariants}
                                >
                                    <Image 
                                        src="/aboutimage.jpg" 
                                        alt="Jonathan - Full-Stack Developer" 
                                        width={480} 
                                        height={600}
                                        priority
                                    />
                                </motion.div>
                                {/* Tech stack floating badges */}
                                <motion.div 
                                    className={styles.techBadge}
                                    style={{ top: '12%', right: '5%' }}
                                    animate={{ 
                                        y: [0, -10, 0],
                                        rotate: [0, 5, 0]
                                    }}
                                    transition={{ 
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <Image src="/react-color.svg" alt="React" width={30} height={30} />
                                    <span>React</span>
                                </motion.div>
                                <motion.div 
                                    className={styles.techBadge}
                                    style={{ bottom: '20%', left: '8%' }}
                                    animate={{ 
                                        y: [0, 8, 0],
                                        rotate: [0, -3, 0]
                                    }}
                                    transition={{ 
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                >
                                    <Image src="/nextdotjs-color.svg" alt="Next.js" width={30} height={30} />
                                    <span>Next.js</span>
                                </motion.div>
                                <motion.div 
                                    className={styles.techBadge}
                                    style={{ top: '45%', left: '5%' }}
                                    animate={{ 
                                        y: [0, -5, 0],
                                        rotate: [0, 2, 0]
                                    }}
                                    transition={{ 
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                >
                                    <Image src="/nodedotjs-color.svg" alt="Node.js" width={30} height={30} />
                                    <span>Node.js</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Story Section */}
                <motion.section 
                    ref={storyRef}
                    className={styles.storySection}
                    initial="hidden"
                    animate={storyInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Parallax Background Layer */}
                    <motion.div 
                        className={styles.storyBackgroundLayer}
                        style={{ y: storyBackgroundY }}
                    />
                    <div className={styles.storyContent}>
                        <motion.div className={styles.storyText}>
                            <motion.h2 variants={textVariants}>My Journey</motion.h2>
                            <motion.div className={styles.storyParagraphs}>
                                <motion.p variants={textVariants}>
                                    I honed my coding skills at IITC College's bootcamp, where I discovered my true passion for full-stack development. This intensive program laid the foundation for my technical expertise and problem-solving approach.
                                </motion.p>
                                <motion.p variants={textVariants}>
                                    My journey in tech began with a 6-month internship at Relyon.ai, where I gained invaluable real-world experience working with cutting-edge technologies including AI, voice recognition, and mobile platforms.
                                </motion.p>
                                <motion.p variants={textVariants}>
                                    Today, I balance coding and freelancing, playing video games, and exploring new recipes in the kitchen.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Personality Section */}
                <motion.section 
                    ref={personalityRef}
                    className={styles.personalitySection}
                    initial="hidden"
                    animate={personalityInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2 variants={textVariants}>Beyond The Code</motion.h2>
                    <motion.div className={styles.personalityGrid} variants={containerVariants}>
                        {personalityCards.map((card, index) => (
                            <motion.div
                                key={index}
                                className={styles.personalityCard}
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div 
                                    className={styles.cardIcon}
                                    style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}90)` }}
                                >
                                    <span>{card.icon}</span>
                                </div>
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Favorite Games */}
                    <motion.div className={styles.gamesSection} variants={textVariants}>
                        <motion.h3 variants={textVariants}>Favorite Games</motion.h3>
                        <motion.div className={styles.gamesGrid} variants={containerVariants}>
                            {favoriteGames.map((game, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.gameCard}
                                    variants={cardVariants}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                >
                                    <Magnetic>
                                        <Image 
                                            src={game.src} 
                                            alt={game.alt} 
                                            width={120} 
                                            height={120}
                                        />
                                    </Magnetic>
                                    <p>{game.title}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Skills Constellation Section */}
                <motion.section 
                    ref={skillsRef}
                    className={styles.constellationSection}
                    initial="hidden"
                    animate={skillsInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2 variants={textVariants}>Technical Constellation</motion.h2>
                    <motion.div className={styles.constellationContainer} variants={containerVariants}>
                        {/* Constellation Background */}
                        <div className={styles.constellationBackground}>
                            {/* Animated connection lines */}
                            <svg className={styles.connectionLines} viewBox="0 0 100 100" preserveAspectRatio="none">
                                {connections.map((connection, index) => {
                                    const [startIndex, endIndex] = connection;
                                    const startSkill = constellationSkills[startIndex];
                                    const endSkill = constellationSkills[endIndex];
                                    
                                    return (
                                        <motion.line
                                            key={index}
                                            x1={`${startSkill.position.x}%`}
                                            y1={`${startSkill.position.y}%`}
                                            x2={`${endSkill.position.x}%`}
                                            y2={`${endSkill.position.y}%`}
                                            stroke={`url(#gradient-${index})`}
                                            strokeWidth="0.1"
                                            initial={{ pathLength: 0, opacity: 0 }}
                                            animate={skillsInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
                                            transition={{ duration: 2, delay: index * 0.1 }}
                                        />
                                    );
                                })}
                                {/* Gradients for connection lines */}
                                <defs>
                                    {connections.map((connection, index) => {
                                        const [startIndex, endIndex] = connection;
                                        const startSkill = constellationSkills[startIndex];
                                        const endSkill = constellationSkills[endIndex];
                                        
                                        return (
                                            <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={startSkill.color} stopOpacity="0.6" />
                                                <stop offset="100%" stopColor={endSkill.color} stopOpacity="0.6" />
                                            </linearGradient>
                                        );
                                    })}
                                </defs>
                            </svg>
                            
                            {/* Floating skill nodes */}
                            {constellationSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.skillNode} ${styles[skill.size]} ${styles[skill.category]}`}
                                    style={{
                                        left: `${skill.position.x}%`,
                                        top: `${skill.position.y}%`,
                                    }}
                                    initial={{ 
                                        opacity: 0, 
                                        scale: 0,
                                        rotate: -180
                                    }}
                                    animate={skillsInView ? { 
                                        opacity: 1, 
                                        scale: 1,
                                        rotate: 0
                                    } : { 
                                        opacity: 0, 
                                        scale: 0,
                                        rotate: -180
                                    }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    whileHover={{ 
                                        scale: 1.2, 
                                        rotate: 360,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <div 
                                        className={styles.skillOrb}
                                        style={{
                                            background: `radial-gradient(circle at 30% 30%, ${skill.color}40, ${skill.color}20, transparent 70%)`,
                                            boxShadow: `0 0 20px ${skill.color}40, 0 0 40px ${skill.color}20, inset 0 0 20px ${skill.color}10`
                                        }}
                                    >
                                        <Magnetic>
                                            <div className={styles.skillIcon}>
                                                <Image 
                                                    src={skill.src} 
                                                    alt={skill.alt} 
                                                    width={skill.size === 'large' ? 50 : skill.size === 'medium' ? 40 : 30} 
                                                    height={skill.size === 'large' ? 50 : skill.size === 'medium' ? 40 : 30}
                                                />
                                            </div>
                                        </Magnetic>
                                        <div className={styles.skillGlow} style={{ backgroundColor: skill.color }} />
                                    </div>
                                    <div className={styles.skillLabel}>
                                        <span>{skill.name}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Category Legend */}
                        <motion.div className={styles.constellationLegend} variants={textVariants}>
                            <div className={styles.legendItem}>
                                <div className={styles.legendColor} style={{ backgroundColor: '#61dafb' }} />
                                <span>Frontend</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={styles.legendColor} style={{ backgroundColor: '#68a063' }} />
                                <span>Backend</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={styles.legendColor} style={{ backgroundColor: '#ff9a00' }} />
                                <span>Tools & Design</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Journey Timeline Section */}
                <motion.section 
                    ref={experienceRef}
                    className={styles.timelineSection}
                    initial="hidden"
                    animate={experienceInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    <motion.h2 variants={textVariants}>My Journey</motion.h2>
                    <motion.div className={styles.timelineContainer} variants={containerVariants}>
                        {/* Timeline Path */}
                        <div className={styles.timelinePath}>
                            <svg className={styles.pathSvg} viewBox="0 0 100 100" preserveAspectRatio="none">
                                {timelinePath.map((connection, index) => {
                                    const fromExp = journeyExperiences[connection.from];
                                    const toExp = journeyExperiences[connection.to];
                                    
                                    return (
                                        <motion.path
                                            key={index}
                                            d={`M ${fromExp.position.x} ${fromExp.position.y} Q ${(fromExp.position.x + toExp.position.x) / 2} ${Math.min(fromExp.position.y, toExp.position.y) - 10} ${toExp.position.x} ${toExp.position.y}`}
                                            stroke={`url(#pathGradient-${index})`}
                                            strokeWidth="0.3"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={experienceInView ? { pathLength: 1 } : { pathLength: 0 }}
                                            transition={{ 
                                                duration: 2, 
                                                delay: 0.5 + (index * 0.8),
                                                ease: "easeInOut"
                                            }}
                                        />
                                    );
                                })}
                                
                                {/* Path gradients */}
                                <defs>
                                    {timelinePath.map((connection, index) => {
                                        const fromExp = journeyExperiences[connection.from];
                                        const toExp = journeyExperiences[connection.to];
                                        
                                        return (
                                            <linearGradient key={index} id={`pathGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor={fromExp.color} stopOpacity="0.8" />
                                                <stop offset="100%" stopColor={toExp.color} stopOpacity="0.8" />
                                            </linearGradient>
                                        );
                                    })}
                                </defs>
                            </svg>
                        </div>

                        {/* Story Transition Points */}
                        {storyTransitions.map((story, index) => (
                            <motion.div
                                key={`story-${index}`}
                                className={`${styles.storyTransition} ${openStoryCard === index ? styles.active : ''}`}
                                style={{
                                    left: `${story.position.x}%`,
                                    top: `${story.position.y}%`,
                                }}
                                initial={{ 
                                    opacity: 0, 
                                    scale: 0 
                                }}
                                animate={experienceInView ? { 
                                    opacity: 1, 
                                    scale: 1
                                } : { 
                                    opacity: 0, 
                                    scale: 0
                                }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 2.5 + (index * 0.4),
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 25
                                }}
                                whileHover={{ 
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                }}
                                onClick={() => handleStoryClick(index)}
                            >
                                {/* Story Node */}
                                <div 
                                    className={styles.storyNode}
                                    style={{
                                        background: `radial-gradient(circle at 30% 30%, ${story.color}80, ${story.color}40)`,
                                        boxShadow: `0 0 15px ${story.color}30`
                                    }}
                                >
                                    <div className={styles.storyIcon}>✦</div>
                                    <div 
                                        className={styles.storyGlow}
                                        style={{ backgroundColor: story.color }}
                                    />
                                </div>
                                


                                {/* Story Card */}
                                <motion.div 
                                    className={styles.storyCard}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ 
                                        opacity: openStoryCard === index ? 1 : 0, 
                                        y: openStoryCard === index ? 0 : 20,
                                        scale: openStoryCard === index ? 1 : 0.8
                                    }}
                                    transition={{ 
                                        duration: 0.3,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    style={{
                                        pointerEvents: openStoryCard === index ? 'auto' : 'none'
                                    }}
                                >
                                    <div 
                                        className={styles.storyHeader}
                                        style={{ background: `linear-gradient(135deg, ${story.color}, ${story.color}90)` }}
                                    >
                                        <h4>{story.title}</h4>
                                        <span className={styles.storyBadge}>Story</span>
                                    </div>
                                    <div className={styles.storyContent}>
                                        <p>{story.story}</p>
                                        <div className={styles.storyConnection}>
                                            <span>
                                                {journeyExperiences[story.fromMilestone].milestone} → {journeyExperiences[story.toMilestone].milestone}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Journey Milestones */}
                        {journeyExperiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className={`${styles.timelineMilestone} ${openMilestoneCard === index ? styles.active : ''}`}
                                style={{
                                    left: `${exp.position.x}%`,
                                    top: `${exp.position.y}%`,
                                }}
                                initial={{ 
                                    opacity: 0, 
                                    scale: 0,
                                    y: 50
                                }}
                                animate={experienceInView ? { 
                                    opacity: 1, 
                                    scale: 1,
                                    y: 0
                                } : { 
                                    opacity: 0, 
                                    scale: 0,
                                    y: 50
                                }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: 1 + (index * 0.3),
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.3 }
                                }}
                                onClick={() => handleMilestoneClick(index)}
                            >
                                {/* Milestone Node */}
                                <div 
                                    className={styles.milestoneNode}
                                    style={{
                                        background: `radial-gradient(circle at 30% 30%, ${exp.color}, ${exp.color}80)`,
                                        boxShadow: `0 0 20px ${exp.color}40, 0 0 40px ${exp.color}20`
                                    }}
                                >
                                    <div className={styles.milestoneYear}>{exp.year}</div>
                                    <div 
                                        className={styles.milestoneGlow}
                                        style={{ backgroundColor: exp.color }}
                                    />
                                </div>

                                {/* Milestone Label */}
                                <div className={styles.milestoneLabel}>
                                    <span className={styles.milestoneType}>{exp.milestone}</span>
                                </div>

                                {/* Experience Card */}
                                <motion.div 
                                    className={`${styles.timelineCard} ${index === 0 ? styles.timelineCardLeft : ''} ${index === 3 ? styles.timelineCardRight : ''}`}
                                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                    animate={{ 
                                        opacity: openMilestoneCard === index ? 1 : 0, 
                                        y: openMilestoneCard === index ? 0 : 20,
                                        scale: openMilestoneCard === index ? 1 : 0.8
                                    }}
                                    transition={{ 
                                        duration: 0.3,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    }}
                                    style={{
                                        pointerEvents: openMilestoneCard === index ? 'auto' : 'none'
                                    }}
                                >
                                    <div 
                                        className={styles.cardHeader}
                                        style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}90)` }}
                                    >
                                        <h3>{exp.company}</h3>
                                        <span className={styles.milestoneBadge}>{exp.milestone}</span>
                                    </div>
                                    <div className={styles.cardContent}>
                                        <h4>{exp.role}</h4>
                                        <p className={styles.cardDuration}>{exp.duration}</p>
                                        <p className={styles.cardDescription}>{exp.description}</p>
                                        <div className={styles.cardTechnologies}>
                                            {exp.technologies.map((tech, i) => (
                                                <span 
                                                    key={i} 
                                                    className={styles.cardTechBadge}
                                                    style={{ borderColor: exp.color }}
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}

                        {/* Journey Progress Indicator */}
                    
                    </motion.div>
                </motion.section>
            </div>
    );
}

export default AboutPage;
