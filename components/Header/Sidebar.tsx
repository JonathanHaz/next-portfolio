import Link from "next/link";
import styles from '../../styles/sidebar.module.css'
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Curve from "./Curve";
import Magnetic from "../Magnetic";


const Sidebar: React.FC = () => {
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

    return (
        <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
            <div className={styles.body}>
            <div className={styles.nav}>
            <ul>
                {navItems.map((link, index) => (
                  <li key={index}>
                         <Link href={link.href}>
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
