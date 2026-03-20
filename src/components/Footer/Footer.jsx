import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    const handleNavigation = () => {
        window.scrollTo(0, 0);
    };
    return (
        <footer className={styles.footer}>


            {/* Main columns */}
            <div className={styles.inner}>

                {/* Socials + Contact */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Socials</h4>
                    <a href="https://www.instagram.com/iete_kjsit" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                    <a href="https://www.linkedin.com/company/iete-kjsit-student-chapter" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>

                    <h4 className={styles.colTitle} style={{ marginTop: '2rem' }}>Contact Us</h4>
                    <a href="mailto:iete.tech@somaiya.edu" className={styles.link}>iete.tech@somaiya.edu</a>
                </div>

                {/* Navigation */}
                <div className={styles.col}>
                    <h4 className={styles.colTitle}>Navigation</h4>
                    <Link to="/" className={styles.link} onClick={handleNavigation}>Home</Link>
                    <Link to="/oscillation" className={styles.link} onClick={handleNavigation}>Oscillation</Link>
                    <Link to="/events" className={styles.link} onClick={handleNavigation}>Past Events</Link>
                </div>

                {/* Logos */}
                <div className={styles.logos}>
                    <div className={styles.logoBubble}>
                        <img src="/logos/iete-logo.png" alt="IETE" className={`${styles.logoImg} ${styles.logoImgRound}`} onError={e => e.target.style.display = 'none'} />

                    </div>
                    <div className={styles.logoBubble}>
                        <img src="/logos/kjsit-logo.png" alt="KJSIT" className={styles.logoImg} onError={e => e.target.style.display = 'none'} />

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.bottom}>
                <p>2025-2026 IETE KJSIT. All rights reserved.</p>
            </div>
        </footer>
    );
}
