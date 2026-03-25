import { useScrollReveal } from '../../hooks/useScrollReveal';
import { CURRENT_SPONSORS, PAST_SPONSORS } from '../../data/constants';
import styles from './Sponsors.module.css';

/**
 * Renders a single sponsor card
 * Supports either a `logo` image URL or fallback `initials` with a `gradient`
 */
function SponsorCard({ initials, name, type, gradient, logo, websiteUrl, size = 'normal' }) {
    const CardWrapper = websiteUrl && websiteUrl !== '#' ? 'a' : 'div';
    const wrapperProps = CardWrapper === 'a' ? {
        href: websiteUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
        style: { textDecoration: 'none', color: 'inherit', display: 'block' }
    } : {};

    return (
        <CardWrapper className={`${styles.card} ${size === 'large' ? styles.cardLarge : ''}`} {...wrapperProps}>
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
        </CardWrapper>
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

                {/* --- CURRENT SPONSORS (Showing Past Sponsors Data) --- */}
                <div className={`${styles.mainWrapper} ${styles.currentTheme}`}>
                    <div className={styles.headerBox}>
                        <h3 className={styles.headerText}>Our Sponsors</h3>
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

                {/* --- PAST SPONSORS --- */}
                {/*
                <div className={`${styles.mainWrapper} ${styles.pastWrapper} ${styles.pastTheme}`}>
                    <div className={styles.headerBox}>
                        <h3 className={styles.headerText}>Past Sponsors</h3>
                    </div>

                    <div className={styles.pastStack}>
                        {/* S Tier *\/}
                        <div className={styles.tierBox}>
                            <h4 className={styles.tierLabel}>S Tier Sponsors</h4>
                            <MarqueeRow sponsors={PAST_SPONSORS.sTier} />
                        </div>

                        {/* A Tier *\/}
                        <div className={styles.tierBox}>
                            <h4 className={styles.tierLabel}>A Tier Sponsors</h4>
                            <MarqueeRow sponsors={PAST_SPONSORS.aTier} reverse={true} />
                        </div>

                        {/* B Tier *\/}
                        <div className={styles.tierBox}>
                            <h4 className={styles.tierLabel}>B Tier Sponsors</h4>
                            <MarqueeRow sponsors={PAST_SPONSORS.bTier} />
                        </div>
                    </div>
                </div>
                */}

            </div>
        </section>
    );
}
