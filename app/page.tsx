"use client"
import styles from "./page.module.css";
import Home from "@/components/Sections/Home";
import { useEffect } from "react";
import Lenis from "lenis";
import Work from "@/components/Sections/Work/Work";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact";


export default function page() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
  <div className={styles.container}>
    <div className={styles.scrollContainer}>
    <Home />
    <Work />
    </div>
    <Services/>
    <div className={styles.contactWrapper}>
    <Contact/>
    </div>
  </div>
  )
}

