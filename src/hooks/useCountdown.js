import { useState, useEffect } from 'react';
import { EVENT_DATE } from '../data/constants';

function pad(n) {
    return String(n).padStart(2, '0');
}

export function useCountdown() {
    const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

    useEffect(() => {
        function tick() {
            const diff = EVENT_DATE - Date.now();
            if (diff <= 0) {
                setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
                return;
            }
            setTime({
                days: pad(Math.floor(diff / 86400000)),
                hours: pad(Math.floor((diff % 86400000) / 3600000)),
                minutes: pad(Math.floor((diff % 3600000) / 60000)),
                seconds: pad(Math.floor((diff % 60000) / 1000)),
            });
        }
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    return time;
}
