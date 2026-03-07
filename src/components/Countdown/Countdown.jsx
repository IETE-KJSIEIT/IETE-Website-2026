import { useState, useEffect, useRef } from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Countdown.module.css';

function AnimatedFlipCard({ value, label }) {
    const [previous, setPrevious] = useState(value);
    const [isFlipping, setIsFlipping] = useState(false);

    useEffect(() => {
        if (value !== previous) {
            setIsFlipping(true);
            const timeout = setTimeout(() => {
                setPrevious(value);
                setIsFlipping(false);
            }, 600); // 600ms matches the total CSS animation duration
            return () => clearTimeout(timeout);
        }
    }, [value, previous]);

    return (
        <div className={styles.unit}>
            <div className={styles.flipCard}>
                {/* Static Top (always shows exactly what the newest value is) */}
                <div className={styles.cardTop}>
                    <span className={styles.num}>{value}</span>
                </div>

                {/* Static Bottom (shows the OLD value until the flip is totally finished) */}
                <div className={styles.cardBottom}>
                    <span className={styles.num}>{previous}</span>
                </div>

                {/* Using a key forces React to completely destroy and recreate these DOM nodes,
                    meaning the CSS animation triggers from 0% every single time `value` changes. */}
                <div key={value} className={styles.flapsContainer}>
                    {/* Animated Top Flap (shows OLD value, falls down to 90deg) */}
                    <div className={`${styles.cardFlapTop} ${isFlipping ? styles.flipping : ''}`}>
                        <span className={styles.num}>{previous}</span>
                    </div>

                    {/* Animated Bottom Flap (shows NEW value, falls from 90deg to 0deg) */}
                    <div className={`${styles.cardFlapBottom} ${isFlipping ? styles.flipping : ''}`}>
                        <span className={styles.num}>{value}</span>
                    </div>
                </div>

                {/* The "hinge" running through the center */}
                <div className={styles.hinge}></div>
            </div>
            <span className={styles.label}>{label}</span>
        </div>
    );
}

export default function Countdown() {
    const { days, hours, minutes, seconds } = useCountdown();
    const ref = useScrollReveal();

    return (
        <section id="countdown" className={styles.section}>
            <div className="section-container">
                <div ref={ref} className={`${styles.countdownWrapper} reveal`}>

                    <h2 className={styles.title}>LAUNCHING IN</h2>

                    <div className={styles.grid}>
                        <AnimatedFlipCard value={days} label="DAYS" />
                        <AnimatedFlipCard value={hours} label="HOURS" />
                        <AnimatedFlipCard value={minutes} label="MINUTES" />
                        <AnimatedFlipCard value={seconds} label="SECONDS" />
                    </div>
                </div>
            </div>
        </section>
    );
}
