import styles from './EventCards.module.css';
import { renaissanceTechEvents, renaissanceNonTechEvents } from '../../data/eventsData';

function EventCard({ event }) {
    const isCyan = event.color === 'cyan';
    return (
        <div className={`${styles.card} ${isCyan ? styles.cardCyan : styles.cardPurple}`}>
            <div className={styles.cardCornerTL} />
            <div className={styles.cardCornerBR} />
            <div className={styles.cardHeader}>
                <img src={event.logo} alt={event.title} className={styles.emoji} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            </div>
            <span className={styles.tagline}>{event.tagline}</span>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.desc}>{event.description}</p>
        </div>
    );
}

export default function EventsSection() {
    return (
        <section className={styles.section}>
            <div className="section-container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Renaissance 2025 Events</h2>
                    <p className={styles.sectionSub}>Events from IETE KJSIT's annual fest.</p>
                </div>

                {/* Tech Events group */}
                <div className={styles.groupLabel}>
                    <span className={styles.groupLine} />
                    <span className={`${styles.groupTag} ${styles.tagCyan}`}>⚡ TECH EVENTS</span>
                    <span className={styles.groupLine} />
                </div>
                <div className={styles.grid}>
                    {renaissanceTechEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
                </div>

                {/* Non-Tech Events group */}
                <div className={`${styles.groupLabel} ${styles.groupLabelMt}`}>
                    <span className={styles.groupLine} />
                    <span className={`${styles.groupTag} ${styles.tagPurple}`}>🎭 NON-TECH EVENTS</span>
                    <span className={styles.groupLine} />
                </div>
                <div className={styles.grid}>
                    {renaissanceNonTechEvents.map(ev => <EventCard key={ev.id} event={ev} />)}
                </div>
            </div>
        </section>
    );
}
