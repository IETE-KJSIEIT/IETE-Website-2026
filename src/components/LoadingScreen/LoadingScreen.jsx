import styles from './LoadingScreen.module.css';
import { useEffect, useRef } from 'react';

export default function LoadingScreen({ onDone }) {
    const barRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Animate the progress bar over 2.5s then call onDone
        let start = null;
        const duration = 2500;

        function step(ts) {
            if (!start) start = ts;
            const progress = Math.min((ts - start) / duration, 1);
            if (barRef.current) {
                barRef.current.style.width = `${progress * 100}%`;
            }
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                // Fade out then remove
                if (containerRef.current) {
                    containerRef.current.style.opacity = '0';
                }
                setTimeout(onDone, 600);
            }
        }
        requestAnimationFrame(step);
    }, [onDone]);

    return (
        <div ref={containerRef} className={styles.overlay}>
            {/* Circuit lines canvas */}
            <CircuitCanvas />

            <div className={styles.center}>
                <p className={styles.subtitle}>IGNITE INNOVATION &mdash; IETE KJSIT</p>
                <h1 className={styles.title}>
                    <span className={styles.titleMain}>IETE</span>
                    <span className={styles.titleSub}> KJSIT</span>
                </h1>
                {/* Mirror reflection */}
                <div className={styles.reflection} aria-hidden="true">
                    <span className={styles.titleMain}>IETE</span>
                    <span className={styles.titleSub}> KJSIT</span>
                </div>
                <p className={styles.year}>2 0 2 5 &ndash; 2 6</p>
            </div>

            <div className={styles.progressWrap}>
                <div className={styles.progressTrack}>
                    <div ref={barRef} className={styles.progressBar} />
                </div>
                <p className={styles.loadingText}>LOADING</p>
            </div>
        </div>
    );
}

/* Canvas that draws branching circuit lines from center */
function CircuitCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let t = 0;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        const branches = generateBranches(16);

        function generateBranches(count) {
            const arr = [];
            for (let i = 0; i < count; i++) {
                const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
                const len = 200 + Math.random() * 250;
                const segments = [];
                let x = 0, y = 0;
                let a = angle;
                for (let s = 0; s < 4; s++) {
                    const dl = (len / 4) * (0.7 + Math.random() * 0.6);
                    const nx = x + Math.cos(a) * dl;
                    const ny = y + Math.sin(a) * dl;
                    // 90-degree turns to make it look like a PCB trace
                    if (Math.random() > 0.5) {
                        segments.push({ x1: x, y1: y, x2: nx, y2: y });
                        segments.push({ x1: nx, y1: y, x2: nx, y2: ny });
                    } else {
                        segments.push({ x1: x, y1: y, x2: x, y2: ny });
                        segments.push({ x1: x, y1: ny, x2: nx, y2: ny });
                    }
                    x = nx; y = ny;
                    a += (Math.random() - 0.5) * 0.8;
                }
                // Small dot at end
                arr.push({ segments, endX: x, endY: y, color: i % 3 === 0 ? '#a855f7' : '#00c8ff' });
            }
            return arr;
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            t += 0.008;
            const revealFrac = Math.min(t / 1.5, 1); // fully revealed in ~1.5s

            branches.forEach((branch, bi) => {
                const branchDelay = bi / branches.length;
                const localFrac = Math.max(0, Math.min((revealFrac - branchDelay * 0.4) * 2, 1));
                if (localFrac <= 0) return;

                // Count total length
                let totalLen = 0;
                branch.segments.forEach(s => {
                    totalLen += Math.hypot(s.x2 - s.x1, s.y2 - s.y1);
                });

                let drawn = 0;
                const targetLen = totalLen * localFrac;

                ctx.strokeStyle = branch.color;
                ctx.lineWidth = 0.8;
                ctx.shadowBlur = 6;
                ctx.shadowColor = branch.color;
                ctx.globalAlpha = 0.45;

                branch.segments.forEach(seg => {
                    if (drawn >= targetLen) return;
                    const segLen = Math.hypot(seg.x2 - seg.x1, seg.y2 - seg.y1);
                    const take = Math.min(segLen, targetLen - drawn);
                    const frac = take / segLen;
                    const ex = seg.x1 + (seg.x2 - seg.x1) * frac;
                    const ey = seg.y1 + (seg.y2 - seg.y1) * frac;

                    ctx.beginPath();
                    ctx.moveTo(cx + seg.x1, cy + seg.y1);
                    ctx.lineTo(cx + ex, cy + ey);
                    ctx.stroke();
                    drawn += take;
                });

                // Dot at end if fully drawn
                if (localFrac >= 1) {
                    ctx.beginPath();
                    ctx.arc(cx + branch.endX, cy + branch.endY, 3, 0, Math.PI * 2);
                    ctx.fillStyle = branch.color;
                    ctx.globalAlpha = 0.8;
                    ctx.fill();
                }
            });

            ctx.globalAlpha = 1;
            ctx.shadowBlur = 0;
            animId = requestAnimationFrame(draw);
        }

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.circuitCanvas} />;
}
