import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

// Items that scroll within the Oscillation (/) page
const SCROLL_ITEMS = [
    { label: 'HOME', href: '/#home' },
    { label: 'ABOUT', href: '/#about' },
    { label: 'SPONSORS', href: '/#sponsors' },
    { label: 'CONTACT', href: '/#contact' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isEventsPage = location.pathname === '/events';

    // Track scroll to shrink navbar
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Intersection Observer for active link (only on Oscillation page)
    useEffect(() => {
        if (isEventsPage) return;
        const sections = document.querySelectorAll('section[id], footer[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { threshold: 0.35 }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, [isEventsPage]);

    const handleScrollLink = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        if (isEventsPage) {
            navigate(href);
        } else {
            const id = href.replace('/#', '');
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                {isEventsPage
                    ? <Link to="/" className={styles.logo}>OSCILLATION</Link>
                    : <a href="#home" className={styles.logo}>OSCILLATION</a>
                }

                {/* Desktop links */}
                <div className={styles.links}>
                    {SCROLL_ITEMS.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            onClick={(e) => handleScrollLink(e, href)}
                            className={`${styles.link} ${!isEventsPage && active === href.replace('/#', '') ? styles.active : ''}`}
                        >
                            {label}
                        </a>
                    ))}
                    <Link
                        to="/events"
                        className={`${styles.link} ${isEventsPage ? styles.active : ''}`}
                        onClick={() => { handleLinkClick(); window.scrollTo(0, 0); }}
                    >
                        EVENTS
                    </Link>
                </div>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* Backdrop */}
            <div
                className={`${styles.mobileBackdrop} ${menuOpen ? styles.backdropOpen : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
                {/* Panel header */}
                <div className={styles.mobileMenuHeader}>
                    <a href="#home" className={styles.mobileMenuLogo} onClick={() => setMenuOpen(false)}>
                        OSCILLATION
                    </a>
                    <button className={styles.mobileMenuClose} onClick={() => setMenuOpen(false)} aria-label="Close menu">
                        ×
                    </button>
                </div>

                {/* Nav links */}
                <div className={styles.mobileLinks}>
                    {SCROLL_ITEMS.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className={`${styles.mobileLink} ${!isEventsPage && active === href.replace('/#', '') ? styles.mobileLinkActive : ''}`}
                            onClick={(e) => handleScrollLink(e, href)}
                        >
                            {label}
                            <span className={styles.mobileLinkArrow}>›</span>
                        </a>
                    ))}
                    <Link
                        to="/events"
                        className={`${styles.mobileLink} ${isEventsPage ? styles.mobileLinkActive : ''}`}
                        onClick={() => { handleLinkClick(); window.scrollTo(0, 0); }}
                    >
                        EVENTS
                        <span className={styles.mobileLinkArrow}>›</span>
                    </Link>
                </div>

                {/* Footer */}
                <div className={styles.mobileMenuFooter}>
                    IETE KJSIT · OSCILLATIONS 2026
                </div>
            </div>
        </header>
    );
}
