import Link from "next/link";
import styles from '../../styles/sidebar.module.css'
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./Curve";

interface SidebarProps {
  isActive: boolean;
  setIsActive: (isActive: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive }) => {
    const navItems = [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Work",
          href: "/work",
        },
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Contact",
          href: "/contact",
        },
    ];

    const handleLinkClick = () => {
        setIsActive(false); 
    };

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <ul>
                        {navItems.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} onClick={handleLinkClick}>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Curve/>
        </motion.div>
    );
};

export default Sidebar;
