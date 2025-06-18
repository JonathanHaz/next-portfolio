"use client"
import styles from "./page.module.css";
import Home from "@/components/Sections/Home";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import Work from "@/components/Sections/Work/Work";
import Services from "@/components/Sections/Services";
import Contact from "@/components/Sections/Contact";


export default function page() {

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  }, [])

  return (
  <div  className={styles.container}>
    <div ref={container} className={styles.scrollContainer}>
    <Home scrollYProgress={scrollYProgress}/>
    <Work scrollYProgress={scrollYProgress}/>
    </div>
    <Services/>
    <div className={styles.contactWrapper}>
    <Contact/>
    </div>
  </div>
  )
}

