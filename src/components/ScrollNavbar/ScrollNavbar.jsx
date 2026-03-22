import { useMemo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ScrollNavbar.module.css';

function useScatterOffset() {
    return useMemo(() => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 15 + Math.random() * 60;
        return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
    }, []);
}

function useScatterOffsets(text) {
    return useMemo(() =>
        text.split('').map((ch) => {
            if (ch === ' ') return { x: 0, y: 0 };
            const angle = Math.random() * Math.PI * 2;
            const dist = 30 + Math.random() * 90;
            return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
        }), [text]);
}

function ScatterLabel({ text, progress, staggerBase, className }) {
    const offsets = useScatterOffsets(text);
    return (
        <span className={`${styles.labelWrap} ${className || ''}`}>
            {text.split('').map((ch, i) => {
                const charProgress = Math.max(0, Math.min(1,
                    (progress - staggerBase - i * 0.015) / 0.5
                ));
                const ease = 1 - Math.pow(1 - charProgress, 3);
                return (
                    <span
                        key={i}
                        className={styles.char}
                        style={{
                            transform: `translate(${offsets[i].x * (1 - ease)}px, ${offsets[i].y * (1 - ease)}px)`,
                            opacity: ease,
                        }}
                    >{ch === ' ' ? '\u00a0' : ch}</span>
                );
            })}
        </span>
    );
}

function ScatterBox({ children, progress, staggerBase, className, style, as: Component = 'div', seed = 'box', ...props }) {
    const offset = useScatterOffset(seed);
    const boxProgress = Math.max(0, Math.min(1, (progress - staggerBase) / 0.5));
    const ease = 1 - Math.pow(1 - boxProgress, 3);
    return (
        <Component
            className={className}
            style={{
                ...style,
                transform: `translate(${offset.x * (1 - ease)}px, ${offset.y * (1 - ease)}px)`,
                opacity: ease,
                willChange: 'transform, opacity'
            }}
            {...props}
        >
            {children}
        </Component>
    );
}

const NAV_LINKS = [
    { label: 'HOME', to: '/' },
    { label: 'OSCILLATION', to: '/oscillation' },
    { label: 'EVENTS', to: '/events' },
];

export default function ScrollNavbar({ scrollProgress }) {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header
            className={styles.navbarContainer}
            style={{ pointerEvents: scrollProgress > 0.4 || menuOpen ? 'auto' : 'none' }}
        >
            <ScatterBox progress={scrollProgress} staggerBase={0} className={styles.navBg} seed="bg" />
            <ScatterBox progress={scrollProgress} staggerBase={0.05} className={styles.navBorder} seed="border" />

            <div className={styles.navContent}>
                <Link to="/" className={styles.logoLink}>
                    <ScatterBox progress={scrollProgress} staggerBase={0.05} className={styles.logoPill} seed="logobox" />
                    <div className={styles.logoTextWrapper}>
                        <ScatterLabel text="IETE " progress={scrollProgress} staggerBase={0.08} className={styles.logoHighlight} />
                        <ScatterLabel text="KJSIT" progress={scrollProgress} staggerBase={0.12} className={styles.logoText} />
                    </div>
                </Link>

                <nav className={styles.navMenu}>
                    {NAV_LINKS.map(({ label, to }) => {
                        const isActive = pathname === to;
                        return (
                            <Link key={to} to={to} className={`${styles.navLink} ${isActive ? styles.active : ''}`} onClick={() => window.scrollTo(0, 0)}>
                                <ScatterLabel text={label} progress={scrollProgress} staggerBase={0.1} />
                                <ScatterBox progress={scrollProgress} staggerBase={0.2} className={styles.navIndicator} seed={`ind-${label}`} />
                            </Link>
                        );
                    })}
                </nav>

                <a href="#contact" className={styles.contactWrapper}>
                    <ScatterBox progress={scrollProgress} staggerBase={0.25} className={styles.contactBtnBox} seed="contact" />
                    <div className={styles.contactTextWrapper}>
                        <ScatterLabel text="CONTACT" progress={scrollProgress} staggerBase={0.3} className={styles.contactText} />
                    </div>
                </a>

                {/* Hamburger — mobile only */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                    style={{ pointerEvents: 'auto' }}
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Backdrop */}
            <div
                className={`${styles.mobileBackdrop} ${menuOpen ? styles.backdropOpen : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile slide-in panel */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <div className={styles.mobileMenuHeader}>
                    <Link to="/" className={styles.mobileMenuLogo} onClick={() => setMenuOpen(false)}>
                        IETE KJSIT
                    </Link>
                    <button className={styles.mobileMenuClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                        ×
                    </button>
                </div>

                <div className={styles.mobileLinks}>
                    {NAV_LINKS.map(({ label, to }) => (
                        <Link
                            key={to}
                            to={to}
                            className={`${styles.mobileLink} ${pathname === to ? styles.mobileLinkActive : ''}`}
                            onClick={() => { setMenuOpen(false); window.scrollTo(0, 0); }}
                        >
                            {label}
                            <span className={styles.mobileLinkArrow}>›</span>
                        </Link>
                    ))}
                    <a href="#contact" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                        CONTACT
                        <span className={styles.mobileLinkArrow}>›</span>
                    </a>
                </div>

                <div className={styles.mobileMenuFooter}>
                    IETE KJSIT · OSCILLATIONS 2026
                </div>
            </div>
        </header>
    );
}
