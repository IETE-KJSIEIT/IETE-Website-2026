export default function AboutSection({ onToggleOff }) {
    return (
        /* Full-screen page — visibility controlled by parent slide transition */
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 10,
                fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
            }}
        >
            {/* ── Corner brackets ── */}
            {[
                { top: 20, left: 20, borderTop: '2px solid rgba(0,191,255,0.4)', borderLeft: '2px solid rgba(0,191,255,0.4)' },
                { top: 20, right: 20, borderTop: '2px solid rgba(0,191,255,0.4)', borderRight: '2px solid rgba(0,191,255,0.4)' },
                { bottom: 20, left: 20, borderBottom: '2px solid rgba(0,191,255,0.4)', borderLeft: '2px solid rgba(0,191,255,0.4)' },
                { bottom: 20, right: 20, borderBottom: '2px solid rgba(0,191,255,0.4)', borderRight: '2px solid rgba(0,191,255,0.4)' },
            ].map((s, i) => (
                <div key={i} style={{ position: 'absolute', width: 28, height: 28, ...s }} />
            ))}

            {/* ── Back button ── */}
            <button
                onClick={onToggleOff}
                title="Back to home"
                style={{
                    position: 'absolute',
                    top: 24,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'transparent',
                    border: '1px solid rgba(0,191,255,0.3)',
                    borderRadius: 999,
                    color: 'rgba(0,191,255,0.6)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    padding: '0.3rem 1.1rem',
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                    transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.color = '#00BFFF'
                    e.currentTarget.style.borderColor = 'rgba(0,191,255,0.7)'
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(0,191,255,0.6)'
                    e.currentTarget.style.borderColor = 'rgba(0,191,255,0.3)'
                }}
            >
                ← BACK
            </button>

            {/* ── Main content ── */}
            <section
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    padding: '0 clamp(1.5rem, 4vw, 3rem)',
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 'clamp(2rem, 4vw, 4rem)',
                    alignItems: 'center',
                    boxSizing: 'border-box',
                }}
            >
                {/* ─────────────────── LEFT 60% ─────────────────── */}
                <div style={{ flex: '0 0 60%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Pre-label */}
                    <div style={{
                        fontSize: '0.7rem', letterSpacing: '0.35em',
                        color: 'rgba(0,191,255,0.6)', fontFamily: 'monospace',
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                    }}>
                        <span style={{ display: 'inline-block', width: 36, height: 1, background: 'rgba(0,191,255,0.5)' }} />
                        SYSTEM INFO
                    </div>

                    {/* Title */}
                    <h2
                        className="neon-blue-title"
                        style={{
                            fontFamily: "'Orbitron', monospace",
                            fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)',
                            fontWeight: 900,
                            lineHeight: 1.05,
                            color: '#00BFFF',
                            margin: 0,
                        }}
                    >
                        What We're<br />About.
                    </h2>

                    {/* Divider */}
                    <div style={{
                        width: '100%', maxWidth: 340, height: 1,
                        background: 'linear-gradient(90deg, rgba(0,191,255,0.7) 0%, rgba(0,191,255,0.1) 70%, transparent 100%)',
                    }} />

                    {/* Body */}
                    <p style={{
                        fontFamily: "'Inter', 'Rajdhani', sans-serif",
                        fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
                        lineHeight: 1.85,
                        color: 'rgba(210,235,255,0.88)',
                        maxWidth: 580,
                        margin: 0,
                    }}>
                        We are the{' '}
                        <span style={{ color: '#00BFFF', fontWeight: 600 }}>
                            IETE Student Chapter of KJSIT
                        </span>
                        —a nexus for creators, thinkers, and pioneers. We transcend the
                        conventional, pushing the boundaries of technology and engineering
                        to build a smarter tomorrow. This is our digital hub.
                    </p>

                    {/* Join Our Family button */}
                    <div style={{ marginTop: '0.5rem' }}>
                        <button
                            style={{
                                padding: '0.75rem 2.2rem',
                                border: '1.5px solid rgba(0,191,255,0.6)',
                                borderRadius: 999,
                                fontSize: '0.88rem',
                                letterSpacing: '0.18em',
                                color: '#00BFFF',
                                background: 'rgba(0,191,255,0.08)',
                                fontFamily: "'Orbitron', monospace",
                                cursor: 'pointer',
                                transition: 'all 0.25s ease',
                                boxShadow: '0 0 14px rgba(0,191,255,0.2)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(0,191,255,0.18)'
                                e.currentTarget.style.boxShadow = '0 0 28px rgba(0,191,255,0.5)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(0,191,255,0.08)'
                                e.currentTarget.style.boxShadow = '0 0 14px rgba(0,191,255,0.2)'
                            }}
                        >
                            JOIN OUR FAMILY
                        </button>
                    </div>
                </div>

                {/* ─────────────────── RIGHT 40% ─────────────────── */}
                <div style={{ flex: '0 0 40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div
                        className="image-placeholder-card"
                        style={{
                            width: '100%',
                            aspectRatio: '4/5',
                            maxWidth: 360,
                            borderRadius: 16,
                            border: '1.5px solid rgba(0,191,255,0.45)',
                            background: 'linear-gradient(145deg, rgba(0,191,255,0.04) 0%, rgba(0,10,30,0.6) 40%, rgba(0,100,255,0.03) 100%)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Corner accents */}
                        {[
                            { top: 10, left: 10, borderTop: '2px solid rgba(0,191,255,0.7)', borderLeft: '2px solid rgba(0,191,255,0.7)' },
                            { top: 10, right: 10, borderTop: '2px solid rgba(0,191,255,0.7)', borderRight: '2px solid rgba(0,191,255,0.7)' },
                            { bottom: 10, left: 10, borderBottom: '2px solid rgba(0,191,255,0.7)', borderLeft: '2px solid rgba(0,191,255,0.7)' },
                            { bottom: 10, right: 10, borderBottom: '2px solid rgba(0,191,255,0.7)', borderRight: '2px solid rgba(0,191,255,0.7)' },
                        ].map((s, i) => (
                            <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...s }} />
                        ))}

                        {/* Placeholder icon */}
                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.35 }}>
                            <rect x="2" y="2" width="52" height="52" rx="6" stroke="rgba(0,191,255,0.8)" strokeWidth="1.5" strokeDasharray="6 4" />
                            <circle cx="21" cy="22" r="7" stroke="rgba(0,191,255,0.8)" strokeWidth="1.5" />
                            <path d="M2 42 L16 30 L26 40 L36 28 L54 44" stroke="rgba(0,191,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                        <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', color: 'rgba(0,191,255,0.45)', fontFamily: 'monospace' }}>
                            IMAGE.SLOT / READY
                        </span>
                    </div>
                </div>
            </section>

            {/* Bottom ticker */}
            <div style={{
                position: 'absolute', bottom: 16,
                color: 'rgba(0,191,255,0.25)', letterSpacing: '0.2em', fontFamily: 'monospace', fontSize: '0.7rem',
            }}>
                ▸ IETE STUDENT CHAPTER — KJSIT ◂
            </div>
        </div>
    )
}
