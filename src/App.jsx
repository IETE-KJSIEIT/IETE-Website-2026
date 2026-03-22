import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const IETEHomePage = lazy(() => import('./pages/IETEHomePage'));
const EventsPage = lazy(() => import('./pages/EventsPage'));
const OscillationPage = lazy(() => import('./pages/OscillationPage'));

export default function App() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#000', color: '#00BFFF', fontFamily: 'monospace', letterSpacing: '0.2em' }}>LOADING...</div>}>
      <Routes>
        <Route path="/" element={<IETEHomePage />} />
        <Route path="/oscillation" element={<OscillationPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </Suspense>
  );
}
