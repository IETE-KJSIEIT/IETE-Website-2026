import WaveBackground from '../components/WaveBackground/WaveBackground';
import ScrollNavbar from '../components/ScrollNavbar/ScrollNavbar';
import Hero from '../components/Hero/Hero';
import Countdown from '../components/Countdown/Countdown';
import Events from '../components/Events/Events';
import Sponsors from '../components/Sponsors/Sponsors';
import Footer from '../components/Footer/Footer';

export default function OscillationPage() {
  return (
    <>
      <WaveBackground />
      <ScrollNavbar scrollProgress={1} />
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
