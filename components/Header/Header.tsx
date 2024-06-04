"use client"
import { useState, useEffect } from "react";
import styles from '../../styles/header.module.css'
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Magnetic from "../Magnetic";

const Header: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= window.innerHeight * 0.1) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`${styles.main} ${isVisible ? styles.visible : ""}`}>
                <div className={styles.header}>
                    <Magnetic>
                        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <AnimatePresence mode="wait">
                {isActive && <Sidebar setIsActive={setIsActive} isActive={isActive} />}
            </AnimatePresence>
        </>
    )
};

export default Header;
