import React from 'react';

export default function Footer() {
    const navLinks = ['Home', 'Oscillation', 'Past Events', 'Upcoming Workshops', 'Team & Faculty'];

    return (
        <footer className="relative w-full bg-[#0a0a0a] text-[#d1d5db] font-['Orbitron','Share_Tech_Mono',monospace] overflow-hidden">
            {/* ── Neon green cyber grid ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0,191,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.07) 1px, transparent 1px)',
                    backgroundSize: '36px 36px',
                }}
                aria-hidden="true"
            />

            {/* ── Top edge glow line ── */}
            <div
                className="w-full h-[1px]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,191,255,0.5) 30%, rgba(30,144,255,0.5) 70%, transparent)' }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* ── LEFT COLUMN ── */}
                    <div className="flex flex-col gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[#00BFFF] mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]">
                                Socials
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {['Instagram', 'LinkedIn'].map((social) => (
                                    <li key={social}>
                                        <a
                                            href="#"
                                            className="text-[#d1d5db] text-lg transition-all duration-300 hover:text-[#00BFFF] hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.8)] flex items-center gap-2"
                                        >
                                            <span className="text-[#00BFFF] text-sm md:text-base">▹</span> {social}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h4 className="text-xl font-bold text-[#00BFFF] mb-3 tracking-wider drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]">
                                Contact Us
                            </h4>
                            <a
                                href="mailto:iete.tech@somaiya.edu"
                                className="font-mono text-[#d1d5db] text-sm md:text-base transition-colors duration-300 hover:text-[#1E90FF]"
                            >
                                iete.tech@somaiya.edu
                            </a>
                        </div>
                    </div>

                    {/* ── CENTER COLUMN ── */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-[#00BFFF] mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]">
                            Navigation
                        </h3>
                        <ul className="flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-[#d1d5db] text-lg transition-all duration-300 hover:text-[#00BFFF] hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.8)] flex items-center gap-2"
                                    >
                                        <span className="text-[#00BFFF] text-sm md:text-base">▹</span> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ── RIGHT COLUMN ── */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-[#00BFFF] mb-4 tracking-wider drop-shadow-[0_0_8px_rgba(0,191,255,0.8)]">
                            Partners
                        </h3>
                        <div className="flex gap-6 items-center">
                            {/* Logo 1 */}
                            <div className="w-24 h-24 rounded-full border-2 border-[rgba(0,191,255,0.4)] bg-[rgba(0,191,255,0.06)] flex items-center justify-center overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.2)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:border-[rgba(0,191,255,0.8)]">
                                <img
                                    src="/iete-logo.png"
                                    alt="IETE Logo"
                                    className="w-3/4 h-3/4 object-contain brightness-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-[#00BFFF] text-xs tracking-widest font-mono">IETE</span>
                            </div>

                            {/* Logo 2 */}
                            <div className="w-24 h-24 rounded-full border-2 border-[rgba(0,191,255,0.4)] bg-[rgba(0,191,255,0.06)] flex items-center justify-center overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.2)] hover:shadow-[0_0_25px_rgba(0,191,255,0.6)] hover:border-[rgba(0,191,255,0.8)]">
                                <img
                                    src="/somaiya-logo.png"
                                    alt="Somaiya Logo"
                                    className="w-3/4 h-3/4 object-contain brightness-110"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling.style.display = 'block';
                                    }}
                                />
                                <span className="hidden text-[#00BFFF] text-[10px] tracking-widest font-mono">SOMAIYA</span>
                            </div>
                        </div>
                        <p className="m-0 text-xs text-[rgba(209,213,219,0.4)] tracking-widest font-mono mt-2">
                            Partners of <span className="text-[rgba(0,191,255,0.5)]">Oscillations 2025</span>
                        </p>
                    </div>

                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="relative z-10 border-t border-[rgba(0,191,255,0.15)] px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#0a0a0a]/80 backdrop-blur-sm">
                <span className="text-[rgba(209,213,219,0.5)] text-xs tracking-[0.2em] font-mono text-center">
                    © {new Date().getFullYear()} IETE STUDENT CHAPTER — KJSIT
                </span>
                <span className="text-[rgba(0,191,255,0.5)] text-xs tracking-[0.2em] font-mono text-center">
                    BUILT WITH ⚡ BY IETE-KJSIT
                </span>
            </div>
        </footer>
    );
}
