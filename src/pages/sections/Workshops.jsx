import styles from './Workshops.module.css';
import { workshops } from '../../data/eventsData';

export default function Workshops() {
    return (
        <section className={styles.section}>
            <div className="section-container">
                <div className={styles.sectionHeader}>
                    <span className={styles.pill}>PAST WORKSHOPS & EVENTS</span>
                    <h2 className={styles.sectionTitle}>Workshops & Events</h2>
                    <p className={styles.sectionSub}>Hands-on sessions, outreach programs, and competitions conducted by IETE KJSIT.</p>
                </div>

                <div className={styles.grid}>
                    {workshops.map((w) => (
                        <div key={w.id} className={styles.card}>
                            {/* Image area */}
                            <div className={styles.imgWrap}>
                                <img
                                    src={w.image}
                                    alt={w.title}
                                    className={styles.img}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <div className={styles.imgOverlay} />
                                {/* Category badge floats over image */}
                                <span className={styles.categoryBadge}>{w.category}</span>
                            </div>

                            {/* Content */}
                            <div className={styles.content}>
                                <div className={styles.titleRow}>
                                    <span className={styles.icon}>{w.icon}</span>
                                    <h3 className={styles.title}>{w.title}</h3>
                                </div>
                                <p className={styles.desc}>{w.description}</p>
                                <span className={styles.year}>{w.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
