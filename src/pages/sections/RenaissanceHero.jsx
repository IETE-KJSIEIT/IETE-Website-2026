import styles from './RenaissanceHero.module.css';
import { renaissanceInfo } from '../../data/eventsData';

export default function RenaissanceHero() {
    return (
        <section className={styles.section}>
            <div className={styles.glow1} />
            <div className={styles.glow2} />
            <div className={styles.gridOverlay} />

            <div className={styles.inner}>
                <div className={styles.badge}>
                    <span className={styles.dot} />
                    IETE KJSIT &nbsp;·&nbsp; ANNUAL FEST
                </div>

                <div className={styles.titleBlock}>
                    <h1 className={styles.title}>{renaissanceInfo.title}</h1>
                    <span className={styles.year}>{renaissanceInfo.year}</span>
                </div>

                <p className={styles.tagline}>{renaissanceInfo.tagline}</p>

                <p className={styles.desc}>{renaissanceInfo.description}</p>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>📅</span>
                        <span>{renaissanceInfo.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                        <span className={styles.metaIcon}>📍</span>
                        <span>{renaissanceInfo.venue}</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
