import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'HOME', to: '/' },
    { label: 'OSCILLATION', to: '/oscillation' },
    { label: 'EVENTS', to: '/events' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isActive = (to) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.nav}>
                {/* Logo */}
                <Link to="/" className={styles.logo}>IETE KJSIT</Link>

                {/* Desktop links */}
                <div className={styles.links}>
                    {NAV_LINKS.map(({ label, to }) => (
                        <Link
                            key={label}
                            to={to}
                            className={`${styles.link} ${isActive(to) ? styles.active : ''}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* Mobile menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`}>
                {NAV_LINKS.map(({ label, to }) => (
                    <Link
                        key={label}
                        to={to}
                        className={`${styles.mobileLink} ${isActive(to) ? styles.mobileActive : ''}`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </header>
    );
}
