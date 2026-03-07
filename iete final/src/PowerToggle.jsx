import { useState, useEffect } from 'react'

export default function PowerToggle() {
    const [isOn, setIsOn] = useState(false)
    const [justToggled, setJustToggled] = useState(false)

    const handleToggle = () => {
        setJustToggled(true)
        setIsOn(prev => !prev)
        setTimeout(() => setJustToggled(false), 600)
    }

    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative overflow-hidden panel-flicker"
            style={{ fontFamily: "'Orbitron', 'Share Tech Mono', monospace" }}
        >
            {/* ── Background grid ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px),' +
                        'linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* ── Scanline overlay ── */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
                }}
            />

            {/* ── Corner decorations ── */}
            {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
                <div
                    key={i}
                    className={`absolute ${pos} w-8 h-8 pointer-events-none`}
                    style={{
                        borderTop: i < 2 ? '2px solid rgba(0,255,255,0.4)' : 'none',
                        borderBottom: i > 1 ? '2px solid rgba(0,255,255,0.4)' : 'none',
                        borderLeft: i % 2 === 0 ? '2px solid rgba(0,255,255,0.4)' : 'none',
                        borderRight: i % 2 === 1 ? '2px solid rgba(0,255,255,0.4)' : 'none',
                    }}
                />
            ))}

            {/* ── Ambient radial glow behind card ── */}
            <div
                className="absolute pointer-events-none"
                style={{
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: isOn
                        ? 'radial-gradient(circle, rgba(0,255,255,0.08) 0%, transparent 70%)'
                        : 'radial-gradient(circle, rgba(0,255,100,0.04) 0%, transparent 70%)',
                    transition: 'background 0.6s ease',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />

            {/* ──────────────────────────────────────── */}
            {/*  HEADING                                 */}
            {/* ──────────────────────────────────────── */}
            <h1
                className="text-center text-white font-bold mb-12 z-10 select-none leading-tight"
                style={{
                    fontSize: 'clamp(1.2rem, 3.5vw, 2.1rem)',
                    letterSpacing: '0.05em',
                    textShadow: '0 0 2px rgba(255,255,255,0.3)',
                }}
            >
                Are you ready to enter the&nbsp;
                <span
                    className="cyan-glow-text"
                    style={{ color: '#00FFFF', display: 'inline-block' }}
                >
                    IETE World?
                </span>
            </h1>

            {/* ──────────────────────────────────────── */}
            {/*  GLASSMORPHISM CARD                      */}
            {/* ──────────────────────────────────────── */}
            <div
                className="z-10 flex flex-col items-center gap-8 rounded-2xl border-pulse"
                style={{
                    background: 'rgba(255,255,255,0.04)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0,255,255,0.2)',
                    boxShadow: isOn
                        ? '0 0 40px rgba(0,255,255,0.15), inset 0 0 30px rgba(0,255,255,0.05)'
                        : '0 8px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.3)',
                    padding: 'clamp(2rem, 5vw, 3.5rem) clamp(2.5rem, 7vw, 5rem)',
                    transition: 'box-shadow 0.6s ease',
                    minWidth: '320px',
                }}
            >
                {/* ── CONTROL PANEL LABEL ── */}
                <div
                    className="text-xs tracking-widest uppercase"
                    style={{ color: 'rgba(0,255,255,0.5)', letterSpacing: '0.3em' }}
                >
                    ◈ Control Panel ◈
                </div>

                {/* ── STATUS TEXT ── */}
                <div
                    className="text-sm font-bold tracking-widest transition-all duration-500"
                    style={{
                        color: isOn ? '#00ffb4' : '#ff4444',
                        textShadow: isOn
                            ? '0 0 10px rgba(0,255,180,0.8)'
                            : '0 0 10px rgba(255,68,68,0.8)',
                        letterSpacing: '0.25em',
                    }}
                >
                    {isOn ? '◉  SYSTEM ONLINE' : '◎  SYSTEM OFFLINE'}
                </div>

                {/* ── TOGGLE SWITCH ── */}
                <div className="flex flex-col items-center gap-3">
                    {/* Track */}
                    <button
                        onClick={handleToggle}
                        aria-label={isOn ? 'Turn off' : 'Turn on'}
                        className="relative cursor-pointer focus:outline-none"
                        style={{
                            width: '96px',
                            height: '48px',
                            borderRadius: '24px',
                            border: isOn
                                ? '2px solid rgba(0,255,180,0.6)'
                                : '2px solid rgba(255,68,68,0.5)',
                            background: isOn
                                ? 'linear-gradient(135deg, rgba(0,30,20,0.9), rgba(0,60,40,0.8))'
                                : 'linear-gradient(135deg, rgba(30,0,0,0.9), rgba(60,10,10,0.8))',
                            boxShadow: isOn
                                ? '0 0 20px rgba(0,255,180,0.3), inset 0 2px 4px rgba(0,0,0,0.5)'
                                : '0 0 20px rgba(255,68,68,0.2), inset 0 2px 4px rgba(0,0,0,0.5)',
                            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        {/* Knob */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: isOn ? 'calc(100% - 44px)' : '6px',
                                transform: 'translateY(-50%)',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: isOn
                                    ? 'radial-gradient(circle at 35% 35%, #00ffcb, #00b084)'
                                    : 'radial-gradient(circle at 35% 35%, #ff6666, #cc2222)',
                                boxShadow: isOn
                                    ? '0 0 16px rgba(0,255,180,0.9), 0 2px 8px rgba(0,0,0,0.5)'
                                    : '0 0 16px rgba(255,68,68,0.8), 0 2px 8px rgba(0,0,0,0.5)',
                                transition: 'all 0.35s cubic-bezier(0.35, 1.5, 0.6, 1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                            }}
                        >
                            {/* Power icon inside knob */}
                            <span style={{ color: isOn ? '#003d2b' : '#5a0000', fontSize: '14px' }}>⏻</span>
                        </div>

                        {/* Track lines (decorative) */}
                        {[1, 2, 3].map(n => (
                            <div
                                key={n}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: `${20 + n * 18}px`,
                                    transform: 'translateY(-50%)',
                                    width: '1px',
                                    height: '12px',
                                    background: 'rgba(255,255,255,0.08)',
                                }}
                            />
                        ))}
                    </button>

                    {/* OFF / ON labels */}
                    <div className="flex gap-10 text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>
                        <span style={{ color: !isOn ? 'rgba(255,100,100,0.9)' : undefined, transition: 'color 0.3s' }}>OFF</span>
                        <span style={{ color: isOn ? 'rgba(0,255,180,0.9)' : undefined, transition: 'color 0.3s' }}>ON</span>
                    </div>
                </div>

                {/* ── LED INDICATORS ── */}
                <div className="flex items-center gap-8">
                    {/* Red LED */}
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className={!isOn ? 'led-red-glow' : ''}
                            style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                background: !isOn
                                    ? 'radial-gradient(circle at 35% 35%, #ff6666, #cc0000)'
                                    : 'rgba(80, 0, 0, 0.5)',
                                boxShadow: !isOn ? '' : 'none',
                                border: '1px solid rgba(255,50,50,0.3)',
                                transition: 'all 0.4s ease',
                            }}
                        />
                        <span
                            className="text-xs tracking-widest"
                            style={{ color: !isOn ? 'rgba(255,80,80,0.8)' : 'rgba(255,80,80,0.25)', transition: 'color 0.4s', fontSize: '9px' }}
                        >
                            PWR
                        </span>
                    </div>

                    {/* Separator */}
                    <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />

                    {/* Green LED */}
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className={isOn ? 'led-green-glow' : ''}
                            style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                background: isOn
                                    ? 'radial-gradient(circle at 35% 35%, #00ffcc, #00aa88)'
                                    : 'rgba(0, 40, 0, 0.5)',
                                border: '1px solid rgba(0,255,150,0.3)',
                                transition: 'all 0.4s ease',
                            }}
                        />
                        <span
                            className="text-xs tracking-widest"
                            style={{ color: isOn ? 'rgba(0,255,180,0.8)' : 'rgba(0,255,180,0.25)', transition: 'color 0.4s', fontSize: '9px' }}
                        >
                            RDY
                        </span>
                    </div>
                </div>

                {/* ── Serial number decoration ── */}
                <div
                    className="text-xs"
                    style={{ color: 'rgba(0,255,255,0.2)', letterSpacing: '0.15em', fontFamily: 'monospace' }}
                >
                    IETE-KJSIT / SN: 2024-XT-001
                </div>
            </div>

            {/* ── Bottom ticker ── */}
            <div
                className="absolute bottom-4 text-xs z-10"
                style={{ color: 'rgba(0,255,255,0.3)', letterSpacing: '0.2em', fontFamily: 'monospace' }}
            >
                ▸ IETE STUDENT CHAPTER — KJSIT ◂
            </div>
        </div>
    )
}
