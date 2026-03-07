import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CURRENT_SPONSORS, PAST_SPONSORS } from '../../data/constants';
import styles from './Sponsors.module.css';

/**
 * Renders a single sponsor card
 * Supports either a `logo` image URL or fallback `initials` with a `gradient`
 */
function SponsorCard({ initials, name, type, gradient, logo, size = 'normal' }) {
    return (
        <div className={`${styles.card} ${size === 'large' ? styles.cardLarge : ''}`}>
            <div className={styles.logoCircle} style={{ background: logo ? 'transparent' : gradient }}>
                {logo ? (
                    <img src={logo} alt={`${name} logo`} className={styles.logoImage} />
                ) : (
                    <span className={styles.initials}>{initials}</span>
                )}
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.type}>{type}</p>
            </div>
        </div>
    );
}

/**
 * Infinite scrolling marquee row for past sponsors
 */
function MarqueeRow({ sponsors, reverse = false }) {
    // Multiply array to ensure continuous seamless loop
    const loopItems = [...sponsors, ...sponsors, ...sponsors, ...sponsors];
    return (
        <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeTrack} ${reverse ? styles.trackReverse : ''}`}>
                {loopItems.map((sponsor, idx) => (
                    <SponsorCard key={`${sponsor.name}-${idx}`} {...sponsor} />
                ))}
            </div>
        </div>
    );
}

export default function Sponsors() {
    const titleRef = useScrollReveal();

    return (
        <section id="sponsors" className={styles.section}>
            <div className="section-container">
                <h2 ref={titleRef} className="section-title glow-purple reveal">SPONSORS</h2>
                <p className="section-subtitle">Proudly supported by industry leaders driving innovation forward.</p>

                {/* --- CURRENT SPONSORS --- */}
                <div className={`${styles.mainWrapper} ${styles.currentTheme}`}>
                    <div className={styles.headerBox}>
                        <h3 className={styles.headerText}>Current Sponsors</h3>
                    </div>

                    <div className={styles.currentGrid}>
                        {/* Major Sponsor - Left tall box */}
                        <div className={`${styles.tierBox} ${styles.majorTier}`}>
                            <h4 className={styles.tierLabel}>Major Sponsors</h4>
                            <div className={styles.staticListLarge}>
                                {CURRENT_SPONSORS.major.map((s) => (
                                    <SponsorCard key={s.initials} {...s} size="large" />
                                ))}
                            </div>
                        </div>

                        {/* Tier 2 & Tier 3 - Right stacked boxes */}
                        <div className={styles.rightCol}>
                            <div className={`${styles.tierBox} ${styles.tier2}`}>
                                <h4 className={styles.tierLabel}>Tier 2 Sponsors</h4>
                                <div className={styles.staticList}>
                                    {CURRENT_SPONSORS.tier2.map((s) => (
                                        <SponsorCard key={s.initials} {...s} />
                                    ))}
                                </div>
                            </div>

                            <div className={`${styles.tierBox} ${styles.tier3}`}>
                                <h4 className={styles.tierLabel}>Tier 3 Sponsors</h4>
                                <div className={styles.staticList}>
                                    {CURRENT_SPONSORS.tier3.map((s) => (
                                        <SponsorCard key={s.initials} {...s} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- PAST SPONSORS --- */}
                <div className={`${styles.mainWrapper} ${styles.pastWrapper} ${styles.pastTheme}`}>
                    <div className={styles.headerBox}>
                        <h3 className={styles.headerText}>Past Sponsors</h3>
                    </div>

                    <div className={styles.pastStack}>
                        {/* S Tier */}
                        <div className={styles.tierBox}>
                            <h4 className={styles.tierLabel}>S Tier Sponsors</h4>
                            <MarqueeRow sponsors={PAST_SPONSORS.sTier} />
                        </div>

                        {/* A Tier */}
                        <div className={styles.tierBox}>
                            <h4 className={styles.tierLabel}>A Tier Sponsors</h4>
                            <MarqueeRow sponsors={PAST_SPONSORS.aTier} reverse={true} />
                        </div>

                        {/* B Tier */}
                        <div className={styles.tierBox}>
                            <h4 className={styles.tierLabel}>B Tier Sponsors</h4>
                            <MarqueeRow sponsors={PAST_SPONSORS.bTier} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
