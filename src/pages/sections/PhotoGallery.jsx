import styles from './PhotoGallery.module.css';
import { galleryImages } from '../../data/eventsData';

export default function PhotoGallery() {
    return (
        <section className={styles.section}>
            <div className="section-container">
                <div className={styles.sectionHeader}>
                    <span className={styles.pill}>MEMORIES</span>
                    <h2 className={styles.sectionTitle}>Photo Gallery</h2>
                    <p className={styles.sectionSub}>Moments from Renaissance 2025 and IETE KJSIT events.</p>
                </div>

                <div className={styles.masonry}>
                    {galleryImages.map((img) => (
                        <div
                            key={img.id}
                            className={`${styles.item} ${styles[img.span]}`}
                        >
                            <div
                                className={styles.imgPlaceholder}
                                style={{ backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            >
                                <div className={styles.overlay}>
                                    <span className={styles.overlayText}>{img.alt}</span>
                                </div>
                                {/* Subtle grid texture */}
                                <div className={styles.gridTex} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
