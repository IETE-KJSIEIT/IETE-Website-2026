import { useState, useEffect, useCallback } from 'react';
import styles from './EventModal.module.css';

export default function EventModal({ event, isTech, onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        setIsClosing(true);
        // Wait for the close animation to finish before unmounting
        setTimeout(() => onClose(), 380);
    }, [onClose]);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => { if (e.key === 'Escape') handleClose(); };
        document.addEventListener('keydown', handler);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handler);
            document.body.style.overflow = '';
        };
    }, [handleClose]);

    // Theme classes based on tech vs non-tech
    const themeClass = isTech ? styles.themeTech : styles.themeNonTech;

    return (
        <div
            className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ''}`}
            onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
            <div className={`${styles.boxWrapper} ${themeClass} ${isClosing ? styles.closing : ''}`}>
                <div className={styles.box}>
                    <div className={styles.hudTop}></div>
                    <div className={styles.hudBottom}></div>

                    {/* Sticky close bar — always visible at top */}
                    <div className={styles.closeBar}>
                        <button className={styles.close} onClick={handleClose} aria-label="Close">[X]</button>
                    </div>

                    {/* Scrollable content */}
                    <div className={styles.scrollContent}>
                        <div className={styles.headerLayout}>
                            <div className={styles.iconBox}>
                                <img src={event.logo} alt={event.title} className={styles.emoji} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                            </div>
                            <div className={styles.titleBox}>
                                <span className={styles.badge}>// {isTech ? 'TECH_OP' : 'NON_TECH_OP'}</span>
                                <h3 className={styles.title}>{event.title}</h3>
                            </div>
                        </div>

                        <p className={styles.desc}>{event.description}</p>

                        <a href={event.registerUrl} className={styles.registerBtn}>
                            INITIATE_REGISTER
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
