export default function AwardsSection() {
    return (
        <section
            style={{
                width: '100%',
                padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem)',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2.5rem',
                /* fully transparent background to show the waves */
                background: 'transparent',
                position: 'relative',
                zIndex: 10,
            }}
        >
            {/* ── Thin top divider ── */}
            <div style={{
                width: '70%',
                maxWidth: 800,
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(0,191,255,0.5) 40%, rgba(30,144,255,0.5) 60%, transparent)',
                marginBottom: '0.5rem',
            }} />

            {/* ── Rounded card ── */}
            <div
                className="awards-card"
                style={{
                    width: '100%',
                    maxWidth: 860,
                    borderRadius: 20,
                    border: '1.5px solid rgba(0,191,255,0.3)',
                    background: 'linear-gradient(145deg, rgba(0,25,60,0.7) 0%, rgba(0,10,30,0.85) 60%, rgba(0,30,70,0.6) 100%)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.8rem',
                    boxSizing: 'border-box',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Card inner corner accents */}
                {[
                    { top: 12, left: 12, borderTop: '2px solid rgba(0,191,255,0.5)', borderLeft: '2px solid rgba(0,191,255,0.5)' },
                    { top: 12, right: 12, borderTop: '2px solid rgba(0,191,255,0.5)', borderRight: '2px solid rgba(0,191,255,0.5)' },
                    { bottom: 12, left: 12, borderBottom: '2px solid rgba(0,191,255,0.5)', borderLeft: '2px solid rgba(0,191,255,0.5)' },
                    { bottom: 12, right: 12, borderBottom: '2px solid rgba(0,191,255,0.5)', borderRight: '2px solid rgba(0,191,255,0.5)' },
                ].map((s, i) => (
                    <div key={i} style={{ position: 'absolute', width: 18, height: 18, ...s }} />
                ))}

                {/* ── Award image ── */}
                <div
                    className="award-img-wrap"
                    style={{
                        width: '100%',
                        maxWidth: 680,
                        borderRadius: 14,
                        border: '1.5px solid rgba(0,191,255,0.35)',
                        overflow: 'hidden',
                        background: 'rgba(0,15,40,0.6)',
                        transition: 'box-shadow 0.35s ease, border-color 0.35s ease',
                        boxShadow: '0 0 10px rgba(0,100,255,0.08)',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0,191,255,0.2)'
                        e.currentTarget.style.borderColor = 'rgba(0,191,255,0.5)'
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0,100,255,0.08)'
                        e.currentTarget.style.borderColor = 'rgba(0,191,255,0.35)'
                    }}
                >
                    <img
                        src="/awards-photo.webp"
                        alt="IETE KJSIT — 3rd Best IETE ISF in Mumbai · Oscillations 2025"
                        style={{
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'cover',
                        }}
                    />
                </div>

                {/* ── Header badge ── */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.4rem 1.4rem',
                    border: '1px solid rgba(0,191,255,0.3)',
                    borderRadius: 999,
                    background: 'rgba(0,191,255,0.07)',
                    fontSize: '0.78rem',
                    letterSpacing: '0.22em',
                    color: '#00BFFF',
                    fontFamily: "'Orbitron', monospace",
                }}>
                    <span style={{ fontSize: '1rem' }}>🏆</span>
                    ACHIEVEMENT UNLOCKED
                </div>

                {/* ── Main title ── */}
                <h2
                    className="awards-title"
                    style={{
                        fontFamily: "'Orbitron', monospace",
                        fontSize: 'clamp(1.6rem, 4vw, 2.8rem)',
                        fontWeight: 900,
                        color: '#1E90FF',
                        margin: 0,
                        textAlign: 'center',
                        lineHeight: 1.15,
                        letterSpacing: '0.05em',
                    }}
                >
                    3RD BEST IETE ISF IN MUMBAI
                </h2>

                {/* ── Description ── */}
                <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(0.75rem, 1.5vw, 0.88rem)',
                    lineHeight: 1.9,
                    color: 'rgba(180,220,255,0.7)',
                    letterSpacing: '0.14em',
                    textAlign: 'center',
                    maxWidth: 620,
                    margin: 0,
                    textTransform: 'uppercase',
                }}>
                    Awarded by IETE-India for our outstanding contribution to technical
                    education and innovation by conduction of{' '}
                    <span style={{ color: '#00BFFF', fontWeight: 600 }}>Oscillations 2025</span>
                </p>

                {/* ── Footer label ── */}
                <div style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.28em',
                    color: 'rgba(0,191,255,0.3)',
                    fontFamily: 'monospace',
                }}>
                    IETE-KJSIT / OSCILLATIONS 2025
                </div>
            </div>
        </section>
    )
}
