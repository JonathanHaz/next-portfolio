"use client"
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
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
    
    // Simple scroll tracking for parallax
    const [scrollY, setScrollY] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Calculate parallax values based on scroll
    const parallaxY = scrollY * 0.3;
    const parallaxScale = 1 + (scrollY * 0.0003);
    const parallaxOpacity = Math.max(0.3, 1 - (scrollY * 0.001));
    
    const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
    const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
    const personalityInView = useInView(personalityRef, { once: true, amount: 0.3 });
    const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 });
    const experienceInView = useInView(experienceRef, { once: true, amount: 0.3 });

    // Animation variants
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

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, scale: 0.9 },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 100, scale: 0.8 },
        visible: { 
            opacity: 1, 
            x: 0,
            scale: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    const favoriteGames = [
        { src: '/er.png', alt: 'Elden Ring', title: 'Elden Ring' },
        { src: '/gt.png', alt: 'Ghost Of Tsushima', title: 'Ghost Of Tsushima' },
        { src: '/ssdt.png', alt: 'Sekiro', title: 'Sekiro' }
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

    const skills = [
        {
            category: 'Frontend',
            items: [
                { src: '/javascript-color.svg', alt: 'JavaScript', name: 'JavaScript' },
                { src: '/typescript-color.svg', alt: 'TypeScript', name: 'TypeScript' },
                { src: '/react-color.svg', alt: 'React', name: 'React' },
                { src: '/nextdotjs-color.svg', alt: 'Next.js', name: 'Next.js' },
            ],
            color: '#61dafb'
        },
        {
            category: 'Backend',
            items: [
                { src: '/nodedotjs-color.svg', alt: 'Node.js', name: 'Node.js' },
                { src: '/express-color.svg', alt: 'Express', name: 'Express' },
                { src: '/mongodb-color.svg', alt: 'MongoDB', name: 'MongoDB' },
                { src: '/prisma.svg', alt: 'Prisma', name: 'Prisma' },
            ],
            color: '#68d391'
        },
        {
            category: 'Tools & Design',
            items: [
                { src: '/github-color.svg', alt: 'GitHub', name: 'GitHub' },
                { src: '/adobephotoshop-color.svg', alt: 'Adobe Photoshop', name: 'Photoshop' },
                { src: '/adobeillustrator-color.svg', alt: 'Adobe Illustrator', name: 'Illustrator' },
            ],
            color: '#f093fb'
        }
    ];

    const experiences = [
        {
            company: 'Relyon.ai',
            role: 'Full-Stack Developer Intern',
            duration: '6 months',
            description: 'Gained valuable real-world experience at a cutting-edge personal safety platform leveraging AI, voice recognition, and mobile technology.',
            technologies: ['React', 'Node.js', 'AI Integration', 'Mobile Tech'],
            color: '#6366f1'
        },
        {
            company: 'Freelance',
            role: 'Web Developer',
            duration: 'Ongoing',
            description: 'Creating custom portfolios for content creators, TikTok influencers, and targeted landing pages for CRM and lead generation.',
            technologies: ['Next.js', 'Custom Design', 'CRM Integration', 'Lead Gen'],
            color: '#10b981'
        }
    ];

    return (
        <div ref={containerRef} className={styles.container}>
            {/* Hero Section */}
            <motion.section 
                ref={heroRef}
                className={styles.heroSection}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
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
                    <motion.div className={styles.heroText} variants={textVariants}>
                        <motion.div className={styles.heroLabel} variants={textVariants}>
                            <span>👋 Hello, I'm Jonathan</span>
                        </motion.div>
                        <motion.h1 variants={textVariants}>About Me</motion.h1>
                        <motion.h2 variants={textVariants}>
                            Full-Stack Developer & Creative Thinker
                        </motion.h2>
                        <motion.p variants={textVariants}>
                            Born in France, based in Israel, passionate about creating digital experiences that matter.
                        </motion.p>
                        
                        {/* Stats Section */}
                        <motion.div className={styles.heroStats} variants={containerVariants}>
                            <motion.div className={styles.statItem} variants={textVariants}>
                                <span className={styles.statNumber}>6+</span>
                                <span className={styles.statLabel}>Months at Relyon.ai</span>
                            </motion.div>
                            <motion.div className={styles.statItem} variants={textVariants}>
                                <span className={styles.statNumber}>10+</span>
                                <span className={styles.statLabel}>Projects Completed</span>
                            </motion.div>
                            <motion.div className={styles.statItem} variants={textVariants}>
                                <span className={styles.statNumber}>2+</span>
                                <span className={styles.statLabel}>Years Coding</span>
                            </motion.div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div className={styles.heroActions} variants={containerVariants}>
                            <motion.div variants={textVariants}>
                                <Rounded onClick={() => {
                                    const contactElement = document.getElementById('contact');
                                    if (contactElement) {
                                        contactElement.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}>
                                    <p>Let's Connect</p>
                                </Rounded>
                            </motion.div>
                            <motion.div variants={textVariants}>
                                <Rounded onClick={() => {
                                    window.open('https://www.dropbox.com/scl/fi/f587ix1gguloxglakk8e3/Jonathan-Hazan-CV-English.pdf?rlkey=xs7dpx5fy72xxv7trvsoas415&st=tk5tao2j&dl=0', '_blank');
                                }}>
                                    <p>View Resume</p>
                                </Rounded>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div className={styles.heroImageContainer} variants={imageVariants}>
                        <div className={styles.heroImage}>
                            <motion.div
                                style={{
                                    y: parallaxY,
                                    scale: parallaxScale,
                                    opacity: parallaxOpacity,
                                }}
                                className={styles.parallaxImage}
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
                <div className={styles.storyContent}>
                    <motion.div className={styles.storyText} variants={textVariants}>
                        <motion.h2 variants={textVariants}>My Journey</motion.h2>
                        <motion.div className={styles.storyParagraphs} variants={containerVariants}>
                            <motion.p variants={textVariants}>
                                I honed my coding skills at IITC College's bootcamp, where I discovered my true passion for full-stack development. This intensive program laid the foundation for my technical expertise and problem-solving approach.
                            </motion.p>
                            <motion.p variants={textVariants}>
                                My journey in tech began with a 6-month internship at Relyon.ai, where I gained invaluable real-world experience working with cutting-edge technologies including AI, voice recognition, and mobile platforms.
                            </motion.p>
                            <motion.p variants={textVariants}>
                                Today, I balance freelance projects creating custom portfolios for content creators and TikTok influencers while developing targeted landing pages for CRM and lead generation purposes.
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

            {/* Skills Section */}
            <motion.section 
                ref={skillsRef}
                className={styles.skillsSection}
                initial="hidden"
                animate={skillsInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h2 variants={textVariants}>Technical Skills</motion.h2>
                <motion.div className={styles.skillsGrid} variants={containerVariants}>
                    {skills.map((skillCategory, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillCard}
                            variants={cardVariants}
                        >
                            <div 
                                className={styles.skillHeader}
                                style={{ borderBottom: `3px solid ${skillCategory.color}` }}
                            >
                                <h3>{skillCategory.category}</h3>
                            </div>
                            <div className={styles.skillItems}>
                                {skillCategory.items.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        className={styles.skillItem}
                                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                                    >
                                        <Magnetic>
                                            <Image 
                                                src={skill.src} 
                                                alt={skill.alt} 
                                                width={50} 
                                                height={50}
                                            />
                                        </Magnetic>
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Experience Section */}
            <motion.section 
                ref={experienceRef}
                className={styles.experienceSection}
                initial="hidden"
                animate={experienceInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.h2 variants={textVariants}>Professional Experience</motion.h2>
                <motion.div className={styles.experienceGrid} variants={containerVariants}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className={styles.experienceCard}
                            variants={cardVariants}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                        >
                            <div 
                                className={styles.expHeader}
                                style={{ background: `linear-gradient(135deg, ${exp.color}, ${exp.color}20)` }}
                            >
                                <h3>{exp.company}</h3>
                                <span className={styles.duration}>{exp.duration}</span>
                            </div>
                            <h4>{exp.role}</h4>
                            <p>{exp.description}</p>
                            <div className={styles.technologies}>
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className={styles.techTag}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </div>
    );
}

export default AboutPage;
