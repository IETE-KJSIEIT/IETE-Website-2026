import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const NAV_LINKS = [
    { label: 'Home', to: '/' },
    { label: 'Oscillation', to: '/oscillation' },
    { label: 'Events', to: '/events' },
];

const SOCIALS = [
    { label: 'Instagram', href: 'https://instagram.com/iete.kjsit', icon: <InstagramIcon /> },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/iete-kjsit', icon: <LinkedInIcon /> },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Grid background lines */}
            <div className={styles.gridBg} />

            <div className={styles.inner}>
                {/* ── Column 1: Socials + Contact ── */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Socials</h4>
                    <div className={styles.linkList}>
                        {SOCIALS.map(({ label, href, icon }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                                {icon}
                                {label}
                            </a>
                        ))}
                    </div>

                    <h4 className={`${styles.colTitle} ${styles.colTitleMt}`}>Contact Us</h4>
                    <a href="mailto:iete.tech@somaiya.edu" className={styles.textLink}>
                        iete.tech@somaiya.edu
                    </a>
                </div>

                {/* ── Column 2: Navigation ── */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Navigation</h4>
                    <div className={styles.linkList}>
                        {NAV_LINKS.map(({ label, to }) => (
                            <Link key={label} to={to} className={styles.textLink}>{label}</Link>
                        ))}
                        <a href="https://ietekjsit.in/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                            Past Events
                        </a>
                        <a href="https://ietekjsit.in/" target="_blank" rel="noopener noreferrer" className={styles.textLink}>
                            Team &amp; Faculty
                        </a>
                    </div>
                </div>

                {/* ── Column 3: Logos ── */}
                <div className={styles.logoCol}>
                    <div className={styles.logoRing}>
                        <img
                            src="/logos/iete-logo.png"
                            alt="IETE Logo"
                            className={styles.logoImg}
                            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                        />
                        <div className={styles.logoFallback} style={{ display: 'none' }}>
                            <span className={styles.logoText}>IETE</span>
                        </div>
                    </div>
                    <div className={styles.logoRing}>
                        <img
                            src="/logos/somaiya-logo.png"
                            alt="Somaiya Vidyavihar Logo"
                            className={styles.logoImg}
                            onError={e => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex'; }}
                        />
                        <div className={styles.logoFallback} style={{ display: 'none' }}>
                            <span className={styles.logoText}>SV</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className={styles.bottom}>
                <span>© 2025-2026 IETE KJSIT. All rights reserved.</span>
                <span className={styles.bottomSub}>Institution of Electronics and Telecommunication Engineers — K.J. Somaiya Institute of Technology</span>
            </div>
        </footer>
    );
}

function InstagramIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, flexShrink: 0 }}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, flexShrink: 0 }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}
