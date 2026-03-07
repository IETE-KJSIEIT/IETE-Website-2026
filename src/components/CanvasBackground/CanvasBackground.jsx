import { useEffect, useRef } from 'react';
import styles from './CanvasBackground.module.css';

export default function CanvasBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let nodes = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildNodes();
        }

        function buildNodes() {
            nodes = [];
            const spacing = 90;
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (Math.random() > 0.55) continue;
                    nodes.push({
                        x: c * spacing + (Math.random() - 0.5) * 24,
                        y: r * spacing + (Math.random() - 0.5) * 24,
                        vx: (Math.random() - 0.5) * 0.12,
                        vy: (Math.random() - 0.5) * 0.12,
                        r: Math.random() * 1.8 + 0.8,
                        pulse: Math.random() * Math.PI * 2,
                    });
                }
            }
        }

        const MAX_DIST = 140;

        function tick() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += 0.02;
                if (n.x < -10 || n.x > canvas.width + 10) n.vx *= -1;
                if (n.y < -10 || n.y > canvas.height + 10) n.vy *= -1;
            }
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[j].x - nodes[i].x;
                    const dy = nodes[j].y - nodes[i].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < MAX_DIST) {
                        const alpha = (1 - dist / MAX_DIST) * 0.35;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(0,200,255,${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            for (const n of nodes) {
                const r = n.r + Math.sin(n.pulse) * 0.4;
                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,200,255,${0.55 + 0.35 * Math.sin(n.pulse)})`;
                ctx.fill();
            }
            animId = requestAnimationFrame(tick);
        }

        resize();
        window.addEventListener('resize', resize);
        tick();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
