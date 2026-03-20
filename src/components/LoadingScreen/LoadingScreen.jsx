import { useEffect, useRef, useState } from 'react';
import styles from './LoadingScreen.module.css';

/* ─── Math Helpers ─── */
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export default function LoadingScreen({ onDone }) {
    const canvasRef = useRef(null);
    const wrapperRef = useRef(null);
    const [percent, setPercent] = useState(0);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        /* ─── State ─── */
        let progress = 0;
        let phase = 0;
        let time = 0;
        let W = 0, H = 0;
        let nodes = [];
        let lasers = [{ progress: 0 }, { progress: 0 }, { progress: 0 }, { progress: 0 }];
        let renderAnimId, timelineAnimId;
        let startTime = null;
        let isComplete = false;
        let isTitleShown = false;

        const DURATION = 6000;

        /* ─── Canvas Init ─── */
        function initCanvas() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            canvas.style.width = W + 'px';
            canvas.style.height = H + 'px';
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);

            nodes = [];
            for (let i = 0; i < 40; i++) {
                nodes.push({
                    x: W * 0.2 + Math.random() * W * 0.6,
                    y: H * 0.2 + Math.random() * H * 0.6,
                    on: 0,
                    flicker: Math.random() * 6,
                });
            }
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();

        /* ─── Render Loop ─── */
        function render() {
            const cx = W / 2;
            const cy = H / 2;
            ctx.clearRect(0, 0, W, H);

            /* Phase 1: Lasers shooting from 4 edges toward center */
            if (phase >= 1) {
                const laserProg = clamp((progress - 0.0) / 0.25, 0, 1);
                const eased = laserProg * laserProg * (3 - 2 * laserProg);

                lasers.forEach(l => { l.progress = lerp(l.progress, eased, 0.08); });
                const lp = lasers[0].progress;

                ctx.save();
                ctx.globalCompositeOperation = 'lighter';

                const laserData = [
                    { sx: 0, sy: cy, ex: cx, ey: cy, color: '0, 220, 255' },
                    { sx: W, sy: cy, ex: cx, ey: cy, color: '160, 80, 255' },
                    { sx: cx, sy: 0, ex: cx, ey: cy, color: '0, 200, 255' },
                    { sx: cx, sy: H, ex: cx, ey: cy, color: '180, 60, 255' },
                ];

                laserData.forEach(({ sx, sy, ex, ey, color }) => {
                    const px = lerp(sx, ex, lp);
                    const py = lerp(sy, ey, lp);
                    const grad = ctx.createLinearGradient(sx, sy, px, py);
                    grad.addColorStop(0, `rgba(${color}, 0)`);
                    grad.addColorStop(0.7, `rgba(${color}, 0.15)`);
                    grad.addColorStop(1, `rgba(${color}, 0.9)`);

                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 1.5;
                    ctx.shadowColor = `rgba(${color}, 0.8)`;
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.moveTo(sx, sy);
                    ctx.lineTo(px, py);
                    ctx.stroke();

                    if (lp > 0.1) {
                        ctx.fillStyle = `rgba(${color}, ${0.6 + Math.sin(time * 8) * 0.3})`;
                        ctx.shadowBlur = 15;
                        ctx.beginPath();
                        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });

                /* Retract lasers at end */
                if (phase >= 5) {
                    lasers.forEach(l => { l.progress = lerp(l.progress, 0, 0.04); });
                }
                ctx.restore();
            }

            /* Phase 2: Star / Circuit Lines from center */
            if (phase >= 2) {
                const circuitProg = clamp((progress - 0.15) / 0.35, 0, 1);
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';

                const branches = 12;
                for (let i = 0; i < branches; i++) {
                    const angle = (Math.PI * 2 * i) / branches + Math.PI / 6;
                    const len = Math.min(W, H) * 0.4 * circuitProg;
                    const segments = 3;
                    let px = cx, py = cy;

                    ctx.strokeStyle = `rgba(0, 200, 255, ${0.2 + circuitProg * 0.3})`;
                    ctx.lineWidth = 1.2;
                    ctx.shadowColor = 'rgba(0, 220, 255, 0.5)';
                    ctx.shadowBlur = 8;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);

                    for (let s = 0; s < segments; s++) {
                        const segLen = len / segments;
                        const turn = s % 2 === 0 ? 0 : (i % 2 === 0 ? Math.PI / 2 : -Math.PI / 2);
                        const a = angle + turn * 0.35;
                        px += Math.cos(a) * segLen;
                        py += Math.sin(a) * segLen;
                        ctx.lineTo(px, py);
                    }
                    ctx.stroke();
                }
                ctx.restore();
            }

            /* Phase 2b: Flickering Nodes */
            if (phase >= 2) {
                const nodeProg = clamp((progress - 0.25) / 0.35, 0, 1);
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';

                nodes.forEach((node, i) => {
                    const activateAt = i / nodes.length;
                    if (nodeProg > activateAt) {
                        node.on = lerp(node.on, 1, 0.05);
                        const flicker = Math.sin(time * 10 + node.flicker) * 0.15 + 0.85;
                        const alpha = node.on * flicker * 0.7;

                        ctx.fillStyle = `rgba(0, 220, 255, ${alpha})`;
                        ctx.shadowColor = 'rgba(0, 220, 255, 0.8)';
                        ctx.shadowBlur = 10 * node.on;
                        ctx.beginPath();
                        ctx.arc(node.x, node.y, 2 * node.on, 0, Math.PI * 2);
                        ctx.fill();
                    }
                });
                ctx.restore();
            }

            /* Phase 3: Wavy Background Lines */
            if (phase >= 3) {
                const waveProg = clamp((progress - 0.35) / 0.3, 0, 1);
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';

                [0, 1, 2].forEach((layer) => {
                    const yOff = cy + (layer - 1) * 30;
                    const alpha = waveProg * (0.08 - layer * 0.02);
                    const freq = 0.006 + layer * 0.002;
                    const amp = 40 + layer * 15;
                    const speed = time * (1.2 - layer * 0.2);

                    ctx.strokeStyle = layer === 0
                        ? `rgba(0, 220, 255, ${alpha})`
                        : `rgba(160, 80, 255, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();

                    for (let x = 0; x <= W; x += 5) {
                        const y = yOff + Math.sin(x * freq + speed) * amp * waveProg;
                        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                    }
                    ctx.stroke();
                });
                ctx.restore();
            }

            time += 0.016;
            renderAnimId = requestAnimationFrame(render);
        }

        /* ─── Timeline Logic ─── */
        function animateTimeline(timestamp) {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const p = clamp(elapsed / DURATION, 0, 1);

            /* Smooth ease in-out-cubic */
            progress = p < 0.5
                ? 4 * p * p * p
                : 1 - Math.pow(-2 * p + 2, 3) / 2;

            /* Phase gating */
            if (p > 0.05) phase = Math.max(phase, 1);
            if (p > 0.20) phase = Math.max(phase, 2);
            if (p > 0.40) phase = Math.max(phase, 3);
            if (p > 0.60) phase = Math.max(phase, 4);
            if (p > 0.88) phase = Math.max(phase, 5);

            /* Update percent display */
            setPercent(Math.round(progress * 100));

            /* Trigger text reveal */
            if (phase >= 4 && !isTitleShown) {
                setShowText(true);
                isTitleShown = true;
            }

            /* Complete */
            if (p >= 1 && !isComplete) {
                isComplete = true;
                setTimeout(() => {
                    if (wrapperRef.current) {
                        wrapperRef.current.style.opacity = '0';
                    }
                    setTimeout(() => onDone(), 800);
                }, 500);
                return;
            }

            if (!isComplete) {
                timelineAnimId = requestAnimationFrame(animateTimeline);
            }
        }

        renderAnimId = requestAnimationFrame(render);
        timelineAnimId = requestAnimationFrame(animateTimeline);

        return () => {
            cancelAnimationFrame(renderAnimId);
            cancelAnimationFrame(timelineAnimId);
            window.removeEventListener('resize', initCanvas);
        };
    }, [onDone]);

    return (
        <div ref={wrapperRef} className={styles.loaderWrapper}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <div className={styles.vignette} />

            {/* Text Container */}
            <div className={`${styles.textContainer} ${showText ? styles.show : ''}`}>
                <div className={styles.titleWrapper}>
                    {/* Chromatic aberration layers */}
                    <div className={`${styles.titleLayer} ${styles.titleText} ${styles.layerCyan}`}>
                        IETE KJSIT
                    </div>
                    <div className={`${styles.titleLayer} ${styles.titleText} ${styles.layerPurple}`}>
                        IETE KJSIT
                    </div>
                    <div className={`${styles.titleText} ${styles.layerMain}`}>
                        IETE KJSIT
                    </div>
                </div>
                <p className={styles.subtitle}>2026 – 27</p>
            </div>

            {/* Progress Bar */}
            <div className={styles.progressWrapper}>
                <div className={styles.progressTrack}>
                    <div className={styles.progressFill} style={{ width: `${percent}%` }} />
                </div>
                <span className={styles.progressText}>{percent}%</span>
            </div>
        </div>
    );
}
