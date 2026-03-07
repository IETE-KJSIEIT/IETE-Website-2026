import CanvasBackground from '../components/CanvasBackground/CanvasBackground';
import Navbar from '../components/Navbar/Navbar';
import RenaissanceHero from './sections/RenaissanceHero';
import EventsSection from './sections/EventCards';
import Workshops from './sections/Workshops';
import PhotoGallery from './sections/PhotoGallery';
import Footer from '../components/Footer/Footer';
import styles from './EventsPage.module.css';

export default function EventsPage() {
    return (
        <>
            <CanvasBackground />
            <Navbar />
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
