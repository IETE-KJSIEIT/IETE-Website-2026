import { useState, useCallback, useEffect, useRef } from 'react';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import WaveBackground from '../components/WaveBackground/WaveBackground';
import ParticleHero from '../components/ParticleHero/ParticleHero';
import AboutIETE from '../components/AboutIETE/AboutIETE';
import ScrollNavbar from '../components/ScrollNavbar/ScrollNavbar';
import Footer from '../components/Footer/Footer';
import styles from './IETEHomePage.module.css';

export default function IETEHomePage() {
    const [loaded, setLoaded] = useState(false);
    const handleDone = useCallback(() => setLoaded(true), []);

    // scrollProgress: 0 = top, 1 = when About section top hits viewport
    const [scrollProgress, setScrollProgress] = useState(0);
    const aboutRef = useRef(null);

    useEffect(() => {
        function onScroll() {
            const aboutEl = aboutRef.current;
            if (!aboutEl) return;

            // Trigger zone: hero exit = 1 viewport height
            // Full reveal = when about section top is at viewport center
            const heroH = window.innerHeight;
            const aboutTop = aboutEl.getBoundingClientRect().top + window.scrollY;
            const fullRevealAt = aboutTop; // navbar fully revealed when about starts

            const progress = Math.min(1, Math.max(0, window.scrollY / fullRevealAt));
            setScrollProgress(progress);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={styles.page}>
            {!loaded && <LoadingScreen onDone={handleDone} />}

            <div className={`${styles.content} ${loaded ? styles.visible : ''}`}>
                <WaveBackground />

                {/* Scroll-driven navbar — hidden at top, reveals as user scrolls */}
                <ScrollNavbar scrollProgress={scrollProgress} />

                {/* Particle text hero — full viewport, no navbar */}
                <ParticleHero />

                {/* About Section — ref used to calculate when navbar is fully revealed */}
                <div ref={aboutRef}>
                    <AboutIETE />
                </div>

                <Footer />
            </div>
        </div>
    );
}
