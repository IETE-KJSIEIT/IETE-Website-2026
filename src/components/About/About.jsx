import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './About.module.css';

const STATS = [
    { icon: '👥', number: '5000+', label: 'Participants' },
    { icon: '🎯', number: '50+', label: 'Events Hosted' },
    { icon: '⚡', number: '25', label: 'Years Running', highlight: true },
];

export default function About() {
    const titleRef = useScrollReveal();
    const textRef = useScrollReveal();

    return (
        <section id="about" className={styles.section}>
            <div className="section-container">
                <h2 ref={titleRef} className="section-title glow-purple reveal">ABOUT OSCILLATION</h2>
                <p ref={textRef} className={`${styles.text} reveal`}>
                    Oscillation is the flagship annual tech fest organized by the IETE Student Chapter at
                    KJ Somaiya Institute of Technology, Mumbai. A multi-day celebration of technology,
                    creativity, and collaboration — Oscillation brings together students, industry experts,
                    and innovators for hackathons, workshops, keynote talks, and electrifying competitions.
                    Whether you're a coder, designer, or dreamer, Oscillation is where ideas come alive.
                </p>

                <div className={styles.statsGrid}>
                    {STATS.map(({ icon, number, label, highlight }, i) => (
                        <StatCard
                            key={label}
                            icon={icon}
                            number={number}
                            label={label}
                            highlight={highlight}
                            delay={i + 1}
                        />
                    ))}
                </div>

                <a href="#events" className="btn btn-secondary">REGISTER NOW</a>
            </div>
        </section>
    );
}

function StatCard({ icon, number, label, highlight, delay }) {
    const ref = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`${styles.card} ${highlight ? styles.highlight : ''} reveal reveal-delay-${delay}`}
        >
            <span className={styles.icon}>{icon}</span>
            <h3 className={styles.number}>{number}</h3>
            <p className={styles.label}>{label}</p>
        </div>
    );
}
