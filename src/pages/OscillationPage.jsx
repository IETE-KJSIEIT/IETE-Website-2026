import CanvasBackground from '../components/CanvasBackground/CanvasBackground';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Countdown from '../components/Countdown/Countdown';
import Events from '../components/Events/Events';
import Sponsors from '../components/Sponsors/Sponsors';
import Footer from '../components/Footer/Footer';

export default function OscillationPage() {
    return (
        <>
            <CanvasBackground />
            <Navbar />
            <main>
                <Hero />
                <Countdown />
                <Events />
                <Sponsors />
            </main>
            <Footer />
        </>
    );
}
