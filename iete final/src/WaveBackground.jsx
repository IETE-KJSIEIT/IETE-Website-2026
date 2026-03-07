



export default function WaveBackground() {
    return (
        <div
            aria-hidden
            className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
        >
            {/* ── Cyber grid ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,255,255,0.04) 1px, transparent 1px),' +
                        'linear-gradient(90deg, rgba(0,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '44px 44px',
                }}
            />

            {/* ── Scanline overlay ── */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)',
                }}
            />



            {/* ── Animated SVG neon waves ── */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
                style={{ height: '45vh', minHeight: '200px' }}
            >
                {/* Wave 1 — deep cyan */}
                <path
                    fill="none"
                    stroke="rgba(0,255,255,0.12)"
                    strokeWidth="2"
                >
                    <animate
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="
              M0,200 C240,140 480,260 720,200 C960,140 1200,260 1440,200 L1440,320 L0,320Z;
              M0,220 C240,160 480,280 720,220 C960,160 1200,280 1440,220 L1440,320 L0,320Z;
              M0,200 C240,140 480,260 720,200 C960,140 1200,260 1440,200 L1440,320 L0,320Z
            "
                    />
                </path>

                {/* Wave 2 — neon blue */}
                <path
                    fill="rgba(30,100,255,0.04)"
                    stroke="rgba(30,144,255,0.18)"
                    strokeWidth="1.5"
                >
                    <animate
                        attributeName="d"
                        dur="11s"
                        repeatCount="indefinite"
                        values="
              M0,250 C360,180 720,300 1080,240 C1260,210 1380,270 1440,250 L1440,320 L0,320Z;
              M0,270 C360,200 720,280 1080,260 C1260,230 1380,290 1440,270 L1440,320 L0,320Z;
              M0,250 C360,180 720,300 1080,240 C1260,210 1380,270 1440,250 L1440,320 L0,320Z
            "
                    />
                </path>

                {/* Wave 3 — deep fill */}
                <path
                    fill="rgba(0,255,255,0.03)"
                    stroke="rgba(0,255,255,0.08)"
                    strokeWidth="1"
                >
                    <animate
                        attributeName="d"
                        dur="15s"
                        repeatCount="indefinite"
                        values="
              M0,280 C480,220 960,310 1440,280 L1440,320 L0,320Z;
              M0,290 C480,240 960,300 1440,290 L1440,320 L0,320Z;
              M0,280 C480,220 960,310 1440,280 L1440,320 L0,320Z
            "
                    />
                </path>
            </svg>

            {/* ── Radial ambient glow — bottom left ── */}
            <div
                className="absolute"
                style={{
                    width: '50vw',
                    height: '50vw',
                    bottom: '-15vw',
                    left: '-10vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(30,144,255,0.06) 0%, transparent 65%)',
                }}
            />
            {/* ── Radial ambient glow — top right ── */}
            <div
                className="absolute"
                style={{
                    width: '40vw',
                    height: '40vw',
                    top: '-10vw',
                    right: '-8vw',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,255,255,0.06) 0%, transparent 65%)',
                }}
            />

            {/* ── Corner brackets ── */}
            {[
                { style: { top: 16, left: 16, borderTop: '2px solid rgba(0,255,255,0.35)', borderLeft: '2px solid rgba(0,255,255,0.35)' } },
                { style: { top: 16, right: 16, borderTop: '2px solid rgba(0,255,255,0.35)', borderRight: '2px solid rgba(0,255,255,0.35)' } },
                { style: { bottom: 16, left: 16, borderBottom: '2px solid rgba(0,255,255,0.35)', borderLeft: '2px solid rgba(0,255,255,0.35)' } },
                { style: { bottom: 16, right: 16, borderBottom: '2px solid rgba(0,255,255,0.35)', borderRight: '2px solid rgba(0,255,255,0.35)' } },
            ].map((c, i) => (
                <div key={i} className="absolute" style={{ width: 32, height: 32, ...c.style }} />
            ))}
        </div>
    )
}
