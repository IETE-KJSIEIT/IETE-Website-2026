import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import OscillationPage from './pages/OscillationPage';
import EventsPage from './pages/EventsPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/oscillation" element={<OscillationPage />} />
      <Route path="/events" element={<EventsPage />} />
    </Routes>
  );
}
