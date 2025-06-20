import Form from '@/components/Form';
import Magnetic from '@/components/Magnetic';
import Rounded from '@/components/Rounded';
import styles from '@/styles/pages/contactp.module.css'
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Jonathan Hazan | Hire Fullstack Developer",
  description: "Get in touch with Jonathan Hazan for web development projects, freelance work, and collaboration opportunities. Available for React, Next.js, and fullstack development projects.",
  keywords: ["contact Jonathan Hazan", "hire fullstack developer", "React developer for hire", "Next.js freelancer", "web development services", "custom website development", "freelance developer Israel"],
  openGraph: {
    title: "Contact Jonathan Hazan | Hire Fullstack Developer",
    description: "Ready to bring your web project to life? Contact Jonathan Hazan for professional fullstack development services.",
    type: "website",
  },
  twitter: {
    title: "Contact Jonathan Hazan | Hire Fullstack Developer",
    description: "Ready to bring your web project to life? Contact Jonathan Hazan for professional fullstack development services.",
  },
};

const ContactPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.section1}>
                <h1>Let's partner up!</h1>
            </div>
            <div className={styles.section2}>
                <div className={styles.formContainer}>
                    <Form/>
                </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.arrow}>
                <Image id='arrow' src="/arrow.svg" alt="mousedown" width={80} height={80} />
                    </div>
                    <h5>Details</h5>
                    <ul className={styles.linkWrapper}>
                        <Image src="/profilePic.png" alt="profilePic" width={80} height={80} />
                        <Magnetic><li><a href="mailto:yonatanhazan1337@gmail.com">yonatanhazan1337@gmail.com</a></li></Magnetic>
                        <Magnetic> <li><a href="whatsapp://send?phone=972586775225">+972586775225</a></li></Magnetic>
                        <li>Location: Israel</li>
                        <div className={styles.icons}>
                            <Magnetic><li><a href="https://www.linkedin.com/in/jonathanhaz/" target='_blank'><FaLinkedin/></a></li></Magnetic>
                            <Magnetic><li><a href="https://www.instagram.com/jonathan.hazan1/" target='_blank'><FaInstagram/></a></li></Magnetic>
                            <Magnetic><li><a href="https://github.com/JonathanHaz" target='_blank'><FaGithub/></a></li></Magnetic>
                        </div>
                    </ul>
                </div>
            </div>
            <div className={styles.section3}>
               
            </div>
        </div>
    )
}

export default ContactPage;