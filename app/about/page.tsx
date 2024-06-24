"use client"
import Magnetic from '@/components/Magnetic';
import styles from '@/styles/pages/aboutp.module.css';
import Image from 'next/image';
import { useRef, useEffect } from "react";

interface MouseEvent {
    movementY: number;
    clientX: number;
}

const AboutPage: React.FC = () => {
    const path = useRef<SVGPathElement>(null);
    let progress = 0;
    let x = 0.5;
    let time = Math.PI / 2;
    let reqId: number | null = null;
  
    useEffect(() => {
      setPath(progress);
    }, []);
  
    const setPath = (progress: number) => {
      const width = window.innerWidth * .8;
  
      path.current?.setAttributeNS(
        null,
        "d",
        `M0 250 Q${width * x} ${250 + progress}, ${width} 250`
      );
    };
  
    const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;
  
    const manageMouseEnter = () => {
      if (reqId) {
        cancelAnimationFrame(reqId);
        resetAnimation();
      }
    };
  
    const manageMouseMove = (e: MouseEvent) => {
      const { movementY, clientX } = e;
      const pathBound = path.current?.getBoundingClientRect();
      if (pathBound) {
        x = (clientX - pathBound.left) / pathBound.width;
        progress += movementY;
        setPath(progress);
      }
    };
  
    const manageMouseLeave = () => {
      animateOut();
    };
  
    const animateOut = () => {
      const newProgress = progress * Math.sin(time);
      progress = lerp(progress, 0, 0.025);
      time += 0.2;
      setPath(newProgress);
      if (Math.abs(progress) > 0.75) {
        reqId = requestAnimationFrame(animateOut);
      } else {
        resetAnimation();
      }
    };
  
    const resetAnimation = () => {
      time = Math.PI / 2;
      progress = 0;
    };

    const favoriteGames = [
        { src: '/er.png', alt: 'Elden Ring' },
        { src: '/gt.png', alt: 'Ghost Of Tsushima' },
        { src: '/ssdt.png', alt: 'Sekiro' }
    ];

    const skills = [
        {
            category: 'Frontend',
            items: [
                { src: '/javascript-color.svg', alt: 'JavaScript' },
                { src: '/typescript-color.svg', alt: 'TypeScript' },
                { src: '/react-color.svg', alt: 'React' },
                { src: '/nextdotjs-color.svg', alt: 'Next.js' },
            ]
        },
        {
            category: 'Backend',
            items: [
                { src: '/nodedotjs-color.svg', alt: 'Node.js' },
                { src: '/express-color.svg', alt: 'Express' },
                { src: '/mongodb-color.svg', alt: 'MongoDB' },
                { src: '/prisma.svg', alt: 'Next.js' },

            ]
        },
        {
            category: 'Other',
            items: [
                { src: '/github-color.svg', alt: 'GitHub' },
                { src: '/adobephotoshop-color.svg', alt: 'Adobe Photoshop' },
                { src: '/adobeillustrator-color.svg', alt: 'Adobe Illustrator' },
            ]
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.about}>
                    <h1>About Me</h1>
                    <h2>Hi! I'm Jonathan, a full-stack developer born in France and based in Israel.</h2>
                    <p>I honed my coding skills at IITC College's bootcamp and discovered my passion for design back in high school. I love creating slick websites and powerful web apps.</p>
                    <p>When I'm not immersed in coding, I'm often diving into video games or experimenting with new recipes in the kitchen.
                        Video games have always played a significant role in my life. I love the intricate narratives, honing my reflexes and skill.
                        Whether I'm conquering a challenging souls-like game, or exploring the vast worlds of an RPG,
                        gaming helps me unwind and frequently sparks creative solutions for my projects.
                    </p>
                    <div className={styles.iconsContainer}>
                        <h1>Favorite Video Games</h1>
                        <div className={styles.icons}>
                            {favoriteGames.map((game, index) => (
                                <Image key={index} src={game.src} alt={game.alt} width={300} height={300} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src="/aboutimage.jpg" alt="profilePic" width={500} height={700} />
                </div>
            </div>

            <div className={styles.line}>
                <div onMouseEnter={manageMouseEnter} onMouseMove={manageMouseMove} onMouseLeave={manageMouseLeave} className={styles.box}></div>
                <svg>
                    <path ref={path}></path>
                </svg>
            </div>

            <div className={styles.skillsContainer}>
                <h1>Skills</h1>
                <div className={styles.skillsRow}>
                    {skills.map((skillCategory, index) => (
                        <div key={index} className={styles.skillCategory}>
                            <h2>{skillCategory.category}</h2>
                            <div className={styles.skills}>
                                {skillCategory.items.map((skill, i) => (
                                    <Magnetic key={i}>
                                        <Image src={skill.src} alt={skill.alt} width={50} height={50} />
                                    </Magnetic>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
