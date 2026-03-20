import WaveBackground from '../components/WaveBackground/WaveBackground';
import ScrollNavbar from '../components/ScrollNavbar/ScrollNavbar';
import RenaissanceHero from './sections/RenaissanceHero';
import EventsSection from './sections/EventCards';
import Workshops from './sections/Workshops';
import PhotoGallery from './sections/PhotoGallery';
import Footer from '../components/Footer/Footer';
import styles from './EventsPage.module.css';

export default function EventsPage() {
    return (
        <>
            <WaveBackground />
            <ScrollNavbar scrollProgress={1} />
            <main>
                <RenaissanceHero />
                <EventsSection />
                <Workshops />
                <PhotoGallery />
            </main>
            <Footer />
        </>
    );
}
