import styles from './AboutIETE.module.css';

export default function AboutIETE() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.contentBox}>
                    <h2 className={styles.title}>
                        WHAT WE'RE <span className={styles.highlight}>ABOUT.</span>
                    </h2>

                    <div className={styles.bodyWrap}>
                        <div className={styles.lineDecoration}></div>
                        <p className={styles.description}>
                            We are the IETE Student Chapter of KJSIT—a nexus for creators, thinkers, and pioneers.
                            We transcend the conventional, pushing the boundaries of technology and engineering
                            to build a smarter tomorrow. This is our digital hub.
                        </p>
                    </div>

                    <div className={styles.statsGrid}>
                        <div className={styles.statBox}>
                            <span className={styles.statNum}>10+</span>
                            <span className={styles.statLabel}>Workshops</span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statNum}>4</span>
                            <span className={styles.statLabel}>Flagship Events</span>
                        </div>
                        <div className={styles.statBox}>
                            <span className={styles.statNum}>200+</span>
                            <span className={styles.statLabel}>Active Members</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
