import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ScrollNavbar.module.css';

// Stable random offsets — SHORT local scatter, so items crystallize in-place
// like particles condensing into form, without sweeping through the hero butterfly below
function useScatterOffset() {
    return useMemo(() => {
        const angle = Math.random() * Math.PI * 2;   // all directions
        const dist = 15 + Math.random() * 60;       // only 15-75px from final position
        return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
    }, []);
}

function useScatterOffsets(text) {
    return useMemo(() =>
        text.split('').map((ch) => {
            if (ch === ' ') return { x: 0, y: 0 };
            const angle = Math.random() * Math.PI * 2;
            const dist = 30 + Math.random() * 90;   // chars travel 30-120px
            return { x: Math.cos(angle) * dist, y: Math.sin(angle) * dist };
        }), [text]);
}

// Scatters the individual characters
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

// Scatters an entire DOM element (box, line, button, etc)
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
    { label: 'HOME', to: '/', base: 0.1 },
    { label: 'OSCILLATION', to: '/oscillation', base: 0.15 },
    { label: 'EVENTS', to: '/events', base: 0.20 },
];

export default function ScrollNavbar({ scrollProgress }) {
    const { pathname } = useLocation();

    return (
        <header
            className={styles.navbarContainer}
            style={{ pointerEvents: scrollProgress > 0.4 ? 'auto' : 'none' }}
        >
            {/* The main background panel itself scatters into place */}
            <ScatterBox
                progress={scrollProgress}
                staggerBase={0}
                className={styles.navBg}
                seed="bg"
            />

            {/* The bottom accent line scatters in separately */}
            <ScatterBox
                progress={scrollProgress}
                staggerBase={0.05}
                className={styles.navBorder}
                seed="border"
            />

            <div className={styles.navContent}>
                {/* Official Logo Block */}
                <Link to="/" className={styles.logoLink}>
                    {/* The logo pill background scatters in */}
                    <ScatterBox progress={scrollProgress} staggerBase={0.05} className={styles.logoPill} seed="logobox" />
                    {/* The text inside the logo scatters in independently */}
                    <div className={styles.logoTextWrapper}>
                        <ScatterLabel text="IETE " progress={scrollProgress} staggerBase={0.08} className={styles.logoHighlight} />
                        <ScatterLabel text="KJSIT" progress={scrollProgress} staggerBase={0.12} className={styles.logoText} />
                    </div>
                </Link>

                {/* Central Navigation */}
                <nav className={styles.navMenu}>
                    {NAV_LINKS.map(({ label, to, base }) => {
                        const isActive = pathname === to;
                        return (
                            <Link key={to} to={to} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
                                {/* The text label scatters */}
                                <ScatterLabel text={label} progress={scrollProgress} staggerBase={base} />
                                {/* The active/hover underline indicator scatters as its own element! */}
                                <ScatterBox
                                    progress={scrollProgress}
                                    staggerBase={base + 0.1}
                                    className={styles.navIndicator}
                                    seed={`ind-${label}`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Contact CTA Button */}
                <a href="#contact" className={styles.contactWrapper}>
                    {/* The button background box scatters in */}
                    <ScatterBox progress={scrollProgress} staggerBase={0.25} className={styles.contactBtnBox} seed="contact" />
                    {/* The text inside it scatters in */}
                    <div className={styles.contactTextWrapper}>
                        <ScatterLabel text="CONTACT" progress={scrollProgress} staggerBase={0.3} className={styles.contactText} />
                    </div>
                </a>
            </div>
        </header>
    );
}
