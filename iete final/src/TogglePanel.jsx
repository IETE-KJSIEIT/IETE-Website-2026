import React from 'react';

export default function TogglePanel({ isOn, onToggle }) {
    return (
        <div
            className="flex flex-col items-center justify-center relative w-full h-screen"
            style={{
                backgroundColor: '#050a14',
                backgroundImage: `
                    linear-gradient(rgba(0,191,255,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,191,255,0.05) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
            }}
        >
            {/* The main Toggle Container */}
            <div className="flex flex-col items-center gap-6 z-10 transition-transform duration-500 hover:scale-105">
                <h1
                    className="text-center text-white font-bold mb-4 select-none leading-tight"
                    style={{
                        fontSize: 'clamp(1.2rem, 3.5vw, 2.1rem)',
                        letterSpacing: '0.05em',
                        textShadow: '0 0 2px rgba(255,255,255,0.3)',
                    }}
                >
                    Are you ready to enter the&nbsp;
                    <span className="cyan-glow-text" style={{ color: '#00FFFF', display: 'inline-block' }}>
                        IETE World?
                    </span>
                </h1>

                {/* The futuristic sliding toggle switch */}
                <button
                    onClick={onToggle}
                    aria-label={isOn ? 'Turn off' : 'Turn on'}
                    className="relative cursor-pointer focus:outline-none"
                    style={{
                        width: '120px',
                        height: '56px',
                        borderRadius: '28px',
                        border: isOn ? '2px solid rgba(0, 255, 255, 0.6)' : '2px solid rgba(255, 50, 50, 0.5)',
                        background: isOn
                            ? 'linear-gradient(135deg, rgba(0, 40, 50, 0.9), rgba(0, 80, 100, 0.8))'
                            : 'linear-gradient(135deg, rgba(40, 0, 0, 0.9), rgba(80, 10, 10, 0.8))',
                        boxShadow: isOn
                            ? '0 0 30px rgba(0, 255, 255, 0.4), inset 0 2px 4px rgba(0,0,0,0.5)'
                            : '0 0 30px rgba(255, 50, 50, 0.3), inset 0 2px 4px rgba(0,0,0,0.5)',
                        transition: 'all 0.4s ease',
                    }}
                >
                    {/* The Knob */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: isOn ? 'calc(100% - 50px)' : '6px',
                            transform: 'translateY(-50%)',
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: isOn
                                ? 'radial-gradient(circle at 35% 35%, #00ffff, #008888)'
                                : 'radial-gradient(circle at 35% 35%, #ff5555, #aa0000)',
                            boxShadow: isOn
                                ? '0 0 20px rgba(0, 255, 255, 0.9), 0 2px 8px rgba(0,0,0,0.5)'
                                : '0 0 20px rgba(255, 50, 50, 0.9), 0 2px 8px rgba(0,0,0,0.5)',
                            transition: 'left 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                    </div>
                </button>

                {/* Status Text Below Switch */}
                <div
                    className="text-lg font-bold tracking-widest"
                    style={{
                        color: isOn ? '#00FFFF' : '#ff4444',
                        textShadow: isOn ? '0 0 15px rgba(0,255,255,0.8)' : '0 0 15px rgba(255,68,68,0.8)',
                        letterSpacing: '0.3em',
                        transition: 'color 0.4s ease, text-shadow 0.4s ease',
                    }}
                >
                    {isOn ? 'ON' : 'OFF'}
                </div>
            </div>
        </div>
    );
}
