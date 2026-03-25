import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const TAGS = ['TECH EVENTS', 'GAMING', 'CREATIVE SHOWDOWNS', 'CULTURAL FEST'];

function RotatingTag() {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIdx((i) => (i + 1) % TAGS.length);
                setVisible(true);
            }, 300);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`${styles.rotatingTag} ${visible ? styles.tagVisible : styles.tagHidden}`}>
            {TAGS[idx]}
        </span>
    );
}

const STATS = [
    { value: '9+', label: 'Events' },
    { value: '300+', label: 'Participants' },
    { value: '3', label: 'Days' },
    { value: '₹50K+', label: 'Prizes' },
];

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.glow1} />
            <div className={styles.glow2} />

            <div className={styles.inner}>
                {/* ── LEFT ── */}
                <div className={styles.left}>
                    <div className={styles.eyebrow}>
                        <span className={styles.dot} />
                        IETE KJSIT PRESENTS
                    </div>

                    <div className={styles.titleBlock}>
                        <h1 className={styles.title}>OSCILLATION</h1>
                        <span className={styles.year}>2026</span>
                    </div>

                    <p className={styles.taglineLine}>
                        Annual Fest of &nbsp;<RotatingTag />
                    </p>

                    <p className={styles.about}>
                        Oscillation is <strong>IETE KJSIT</strong>'s flagship annual fest — a high-voltage
                        convergence of competitive tech events, creative showdowns, gaming
                        and cultural experiences at KJ Somaiya Institute of Technology, Mumbai.
                    </p>

                    <div className={styles.ctas}>
                        <a href="#events" className="btn btn-primary">EXPLORE EVENTS</a>

                    </div>
                </div>

                {/* ── RIGHT ── */}
                <div className={styles.right}>
                    {/* Central orb */}
                    <div className={styles.orbWrap}>
                        <div className={styles.ring1} />
                        <div className={styles.ring2} />
                        <div className={styles.orbCore}>
                            <span className={styles.orbYear}>2026</span>
                            <span className={styles.orbSub}>APR 01</span>
                            <span className={styles.orbKjsit}>KJSIT</span>
                        </div>
                    </div>

                    {/* Stats in a 2×2 grid */}
                    <div className={styles.statsGrid}>
                        {STATS.map((s) => (
                            <div key={s.label} className={styles.statBox}>
                                <span className={styles.statVal}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span className={styles.scrollArrow}>&#8964;</span>
            </div>
        </section>
    );
}
