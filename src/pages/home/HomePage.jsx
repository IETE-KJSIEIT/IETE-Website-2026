import { useState } from 'react';
import WaveBackground from './WaveBackground';
import TogglePanel from './TogglePanel';
import ParticleText from './ParticleText';
import AboutSection from './AboutSection';
import AwardsSection from './AwardsSection';
import OscillationButton from './OscillationButton';
import HomeFooter from './HomeFooter';

export default function HomePage() {
    const [isOn, setIsOn] = useState(false);
    const handleToggle = () => setIsOn(v => !v);

    return (
        <div style={{ position: 'fixed', inset: 0, background: '#000', overflow: 'hidden' }}>
            {/* Fixed decorative background — always visible */}
            <WaveBackground />

            {/* VIEW 1: Toggle hero (full-screen, no scroll) */}
            <div style={{
                position: 'absolute', inset: 0,
                opacity: isOn ? 0 : 1,
                pointerEvents: isOn ? 'none' : 'auto',
                transition: isOn ? 'opacity 0.8s ease 1s' : 'opacity 0.8s ease 0s',
                zIndex: 20,
            }}>
                <TogglePanel isOn={isOn} onToggle={handleToggle} />
            </div>

            {/* VIEW 2: About + Awards (scrollable) */}
            <div style={{
                position: 'absolute', inset: 0,
                opacity: isOn ? 1 : 0,
                pointerEvents: isOn ? 'auto' : 'none',
                transition: isOn ? 'opacity 0.8s ease 1s' : 'opacity 0.8s ease 0s',
                zIndex: 10,
                overflowY: 'auto',
                overflowX: 'hidden',
            }}>
                {/* Particle IETE KJSIT hero screen */}
                <ParticleText />

                {/* About section */}
                <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <AboutSection onToggleOff={handleToggle} />
                </div>

                {/* Awards */}
                <AwardsSection />

                {/* Oscillation CTA button → links to /oscillation */}
                <OscillationButton />

                {/* Footer */}
                <HomeFooter />
            </div>
        </div>
    );
}
