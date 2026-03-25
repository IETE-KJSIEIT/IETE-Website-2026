import { useState } from 'react';
import { EVENTS, TECH_EVENTS, NONTECH_EVENTS } from '../../data/constants';
import EventModal from '../EventModal/EventModal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './Events.module.css';

/**
 * SVG connector lines overlaid on the entire 3×3 diamond grid.
 * Coordinates are in % of the grid's width/height.
 * Center = 50%,50%  |  Top = 50%,16%  |  Left = 16%,50%
 * Right = 84%,50%   |  Bottom = 50%,84%
 */
function ConnectorOverlay({ isTech, count }) {
    const color = isTech ? 'rgba(0, 200, 255, 0.35)' : 'rgba(160, 80, 240, 0.35)';

    if (count === 4) {
        return (
            <svg className={styles.connectorSvg} viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50" y1="42" x2="50" y2="28" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
                <line x1="50" y1="58" x2="50" y2="72" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
                <line x1="35" y1="50" x2="28" y2="50" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
                <line x1="65" y1="50" x2="72" y2="50" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
                <polyline points="50,16 84,50 50,84 16,50 50,16" fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="2 4" opacity="0.5" className={styles.connLine} />
            </svg>
        );
    }

    return (
        <svg className={styles.connectorSvg} viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="50" y1="42" x2="50" y2="28" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
            <line x1="35" y1="50" x2="28" y2="50" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
            <line x1="65" y1="50" x2="72" y2="50" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
            <line x1="42" y1="58" x2="28" y2="72" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
            <line x1="58" y1="58" x2="72" y2="72" stroke={color} strokeWidth="0.6" strokeDasharray="3 3" className={styles.connLine} />
            <polygon points="50,16 84,50 84,84 16,84 16,50" fill="none" stroke={color} strokeWidth="0.4" strokeDasharray="2 4" opacity="0.5" className={styles.connLine} />
        </svg>
    );
}

function GridHub({ type, eventIds, onOpen }) {
    const isTech = type === 'tech';
    const label = isTech ? 'TECH' : 'NON-TECH';
    const sublabel = isTech ? 'Technical Events' : 'Non-Technical Events';
    const count = eventIds.length;

    return (
        <div className={`${styles.diamond} ${isTech ? styles.techDiamond : styles.nontechDiamond}`}>
            <div className={styles.hubHeader}>
                <span className={`${styles.hubLabel} ${isTech ? styles.techLabel : styles.nontechLabel}`}>
                    {label}
                </span>
                <span className={styles.hubSub}>{sublabel}</span>
            </div>

            <div className={styles.diamondGrid}>
                <ConnectorOverlay isTech={isTech} count={count} />

                {count === 4 ? (
                    <>
                        <div className={styles.corner} />
                        <div className={`${styles.slot} ${styles.slotTop}`}>
                            <EventNode eventId={eventIds[0]} onOpen={onOpen} isTech={isTech} />
                        </div>
                        <div className={styles.corner} />

                        <div className={`${styles.slot} ${styles.slotLeft}`}>
                            <EventNode eventId={eventIds[1]} onOpen={onOpen} isTech={isTech} />
                        </div>

                        <div className={`${styles.centerHub} ${isTech ? styles.techCenter : styles.nontechCenter}`}>
                            <div className={`${styles.centerPulse} ${isTech ? styles.techPulse : styles.nontechPulse}`} />
                            <span className={`${styles.centerLabel} ${isTech ? styles.techLabel : styles.nontechLabel}`}>{label}</span>
                        </div>

                        <div className={`${styles.slot} ${styles.slotRight}`}>
                            <EventNode eventId={eventIds[2]} onOpen={onOpen} isTech={isTech} />
                        </div>

                        <div className={styles.corner} />
                        <div className={`${styles.slot} ${styles.slotBottom}`}>
                            <EventNode eventId={eventIds[3]} onOpen={onOpen} isTech={isTech} />
                        </div>
                        <div className={styles.corner} />
                    </>
                ) : (
                    <>
                        <div className={styles.corner} />
                        <div className={`${styles.slot} ${styles.slotTop}`}>
                            <EventNode eventId={eventIds[0]} onOpen={onOpen} isTech={isTech} />
                        </div>
                        <div className={styles.corner} />

                        <div className={`${styles.slot} ${styles.slotLeft}`}>
                            <EventNode eventId={eventIds[1]} onOpen={onOpen} isTech={isTech} />
                        </div>

                        <div className={`${styles.centerHub} ${isTech ? styles.techCenter : styles.nontechCenter}`}>
                            <div className={`${styles.centerPulse} ${isTech ? styles.techPulse : styles.nontechPulse}`} />
                            <span className={`${styles.centerLabel} ${isTech ? styles.techLabel : styles.nontechLabel}`}>{label}</span>
                        </div>

                        <div className={`${styles.slot} ${styles.slotRight}`}>
                            <EventNode eventId={eventIds[2]} onOpen={onOpen} isTech={isTech} />
                        </div>

                        <div className={`${styles.slot} ${styles.slotBottomLeft}`}>
                            <EventNode eventId={eventIds[3]} onOpen={onOpen} isTech={isTech} />
                        </div>
                        <div className={styles.corner} />
                        <div className={`${styles.slot} ${styles.slotBottomRight}`}>
                            <EventNode eventId={eventIds[4]} onOpen={onOpen} isTech={isTech} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function EventNode({ eventId, onOpen, isTech }) {
    const data = EVENTS[eventId];
    return (
        <div className={styles.nodeWrapper}>
            <button
                className={`${styles.node} ${data.locked ? styles.locked : ''} ${isTech ? styles.techNode : styles.nontechNode}`}
                onClick={() => !data.locked && onOpen(eventId)}
                title={data.title}
            >
                <span className={styles.outerRing} />
                <span className={styles.innerGlow} />
                <img src={data.logo} alt={data.title} className={styles.nodeEmoji} style={{ width: '50px', height: '50px', objectFit: 'contain', zIndex: 2, borderRadius: '50%' }} />
            </button>
            <span className={styles.nodeLabel}>{data.title}</span>
        </div>
    );
}

export default function Events() {
    const [openEvent, setOpenEvent] = useState(null);
    const titleRef = useScrollReveal();

    return (
        <section id="events" className={styles.section}>
            <div className="section-container">
                <h2 ref={titleRef} className="section-title glow-cyan reveal">EVENTS</h2>
                <p className="section-subtitle">Click on the nodes to explore each event and register.</p>
                <div className={styles.hubs}>
                    <GridHub type="tech" eventIds={TECH_EVENTS} onOpen={setOpenEvent} />
                    <GridHub type="nontech" eventIds={NONTECH_EVENTS} onOpen={setOpenEvent} />
                </div>
            </div>
            {openEvent && (
                <EventModal
                    event={EVENTS[openEvent]}
                    isTech={TECH_EVENTS.includes(openEvent)}
                    onClose={() => setOpenEvent(null)}
                />
            )}
        </section>
    );
}
