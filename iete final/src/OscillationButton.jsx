import React from 'react';

export default function OscillationButton() {
    return (
        <div className="w-full flex justify-center py-24 mb-12 relative z-10">
            <button
                className="group relative cursor-pointer"
                style={{
                    fontFamily: "'Orbitron', 'Share Tech Mono', monospace",
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                }}
            >
                {/* Glow Behind Button */}
                <div
                    className="absolute inset-0 rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(90deg, #00d2ff 0%, #3a7bd5 100%)' }}
                ></div>

                {/* Main Button Body */}
                <div
                    className="relative px-12 py-5 rounded-full border border-cyan-500/30 overflow-hidden"
                    style={{
                        background: 'linear-gradient(180deg, rgba(0,20,40,0.8) 0%, rgba(0,10,20,0.9) 100%)',
                        boxShadow: 'inset 0 0 20px rgba(0, 255, 255, 0.1), 0 0 15px rgba(0, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.4s ease',
                    }}
                >
                    {/* Animated scanning line (cyberpunk effect) */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 opacity-50 group-hover:translate-y-16 transition-transform duration-1000 ease-in-out"></div>

                    {/* Text */}
                    <span
                        className="relative z-10 text-xl tracking-[0.3em] font-bold text-cyan-50 group-hover:text-cyan-300 transition-colors duration-300"
                        style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.5)' }}
                    >
                        OSCILLATION
                    </span>

                    {/* Left/Right brackets for tech aesthetic */}
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-600 opacity-50 text-sm">◂</span>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-600 opacity-50 text-sm">▸</span>
                </div>
            </button>
        </div>
    );
}
