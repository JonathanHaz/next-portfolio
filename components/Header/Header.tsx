"use client"
import { useState } from "react";
import styles from '../../styles/header.module.css'
import { AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";



const Header: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false)
    return (
        <>
        <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
      {isActive && <Sidebar />}
    </AnimatePresence>
      </>
    )
};

export default Header;