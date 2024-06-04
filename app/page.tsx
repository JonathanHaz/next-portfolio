"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Home from "@/components/Sections/Home";
import Skills from "@/components/Sections/Skills";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import Lenis from "lenis";
import Work from "@/components/Sections/Work";


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
    <Skills scrollYProgress={scrollYProgress}/>
    </div>
    <Work/>
  </div>
  )
}

