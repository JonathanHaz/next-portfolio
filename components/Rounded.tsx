import React, { useEffect, useRef, ReactNode } from 'react';
import styles from '@/styles/rounded.module.css';
import gsap from 'gsap';
import Magnetic from '@/components/Magnetic';

interface RoundedButtonProps {
    children?: ReactNode; 
    backgroundColor?: string;
    onClick?: () => void; 
}

const Rounded: React.FC<RoundedButtonProps> = ({ children, onClick, backgroundColor = "#295a7a", ...attributes }) => {
    const circle = useRef<HTMLDivElement>(null);
    let timeline = useRef<gsap.core.Timeline | null>(null);
    let timeoutId: NodeJS.Timeout | null = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current?.tweenFromTo('enter', 'exit');        
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current?.play();
        }, 300);
    };

    return (
        <Magnetic>
            <div
                className={styles.roundedButton}
                style={{ overflow: "hidden" }}
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
                onClick={onClick} // Attach the onClick event here
                {...attributes}
            >
                {children}
                <div ref={circle} style={{ backgroundColor }} className={styles.circle}></div>
            </div>
        </Magnetic>
    );
};

export default Rounded;
