import { Link } from 'react-router-dom';
import styles from './OscillationButton.module.css';

export default function OscillationButton() {
    return (
        <div className={styles.wrap}>
            <Link to="/oscillation" className={styles.btn}>
                {/* Glow behind button */}
                <div className={styles.glow} />
                {/* Main button body */}
                <div className={styles.body}>
                    {/* Scanning line effect */}
                    <div className={styles.scanLine} />
                    <span className={styles.text}>OSCILLATION</span>
                    <span className={styles.bracketL}>◂</span>
                    <span className={styles.bracketR}>▸</span>
                </div>
            </Link>
        </div>
    );
}
