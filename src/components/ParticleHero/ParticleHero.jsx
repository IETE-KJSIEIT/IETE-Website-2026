import { useEffect, useRef } from 'react';
import styles from './ParticleHero.module.css';

const PARTICLE_COUNT = 10000;
const HOVER_RADIUS = 100;    // px radius around cursor
const PUSH_STRENGTH = 60;    // max pixels a particle can be pushed from home
const FONT_COLORS = ['#00c8ff'];

class Particle {
    constructor(homeX, homeY, centerX, centerY) {
        this.homeX = homeX;
        this.homeY = homeY;
        this.centerX = centerX;
        this.centerY = centerY;
        this.x = homeX;
        this.y = homeY;
        this.vx = 0;
        this.vy = 0;
        this.color = FONT_COLORS[Math.floor(Math.random() * FONT_COLORS.length)];
    }

    update(mouseX, mouseY, scrollY) {
        // --- Scroll butterfly: inward collapse through center ---
        const scrollScatter = Math.min(scrollY / 150, 3);
        const dxHome = this.homeX - this.centerX;
        const dyHome = this.homeY - this.centerY;
        const dirLen = Math.sqrt(dxHome * dxHome + dyHome * dyHome) || 1;
        // Negative = inward then crosses center = butterfly wings
        let targetX = this.homeX + (dxHome / dirLen) * scrollScatter * -180;
        let targetY = this.homeY + (dyHome / dirLen) * scrollScatter * -180;

        // --- Mouse repel: push away from cursor, clamped to PUSH_STRENGTH px max ---
        if (mouseX !== -9999) {
            const dxM = this.homeX - mouseX;
            const dyM = this.homeY - mouseY;
            const distM = Math.sqrt(dxM * dxM + dyM * dyM);
            if (distM < HOVER_RADIUS && distM > 0) {
                const force = 1 - distM / HOVER_RADIUS;
                targetX += (dxM / distM) * force * PUSH_STRENGTH;
                targetY += (dyM / distM) * force * PUSH_STRENGTH;
            }
        }

        // Spring + damping
        this.vx += (targetX - this.x) * 0.15;
        this.vy += (targetY - this.y) * 0.15;
        this.vx *= 0.75;
        this.vy *= 0.75;
        this.x += this.vx;
        this.y += this.vy;
    }
}

// No async font loading needed — Courier New is a system font, always available

function sampleTextParticles(width, height, isLandscape) {
    const off = document.createElement('canvas');
    off.width = width;
    off.height = height;
    const ctx = off.getContext('2d');

    const fontSize = isLandscape
        ? Math.floor(width * 0.21)
        : Math.floor(width * 0.28);

    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `900 ${fontSize}px "Courier New", Courier, monospace`;

    const centerX = width / 2;
    const centerY = height / 2;

    if (isLandscape) {
        ctx.fillText('IETE', centerX, centerY - fontSize * 0.40);
        ctx.fillText('KJSIT', centerX, centerY + fontSize * 0.40);
    } else {
        const lines = ['IE', 'TE', '-K', 'JS', 'IT'];
        const smallSize = Math.floor(width * 0.28);
        ctx.font = `900 ${smallSize}px "Courier New", Courier, monospace`;
        lines.forEach((line, i) => {
            ctx.fillText(line, centerX, centerY + (i - 2) * smallSize * 0.9);
        });
    }

    const data = ctx.getImageData(0, 0, width, height).data;
    const gap = Math.ceil(Math.sqrt((width * height) / PARTICLE_COUNT));
    const points = [];

    for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
            const idx = (y * width + x) * 4;
            if (data[idx + 3] > 128) {
                points.push({ x, y });
            }
        }
    }
    return { points, centerX, centerY };
}

export default function ParticleHero() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let particles = [];
        let mouse = { x: -9999, y: -9999 };
        let scrollY = 0;

        function buildParticles() {
            const w = canvas.width;
            const h = canvas.height;
            const isLandscape = w > h;
            const { points, centerX, centerY } = sampleTextParticles(w, h, isLandscape);
            particles = points.map(p => new Particle(p.x, p.y, centerX, centerY));
        }

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            buildParticles();
        }

        // Smooth 3D tilt — applied as a CSS perspective transform on the canvas element
        let tiltX = 0; // current rotateX (vertical tilt, degrees)
        let tiltY = 0; // current rotateY (horizontal tilt, degrees)

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const particleSize = 2.0;

            // Target tilt: mouse position mapped to ±12 degrees
            const targetTiltY = mouse.x !== -9999
                ? ((mouse.x / canvas.width) - 0.5) * 60   // rotateY: left-right tilt ±30°
                : 0;
            const targetTiltX = mouse.y !== -9999
                ? -((mouse.y / canvas.height) - 0.5) * 40  // rotateX: up-down tilt ±20°
                : 0;

            // Aggressive lerp
            tiltX += (targetTiltX - tiltX) * 0.12;
            tiltY += (targetTiltY - tiltY) * 0.12;

            // Apply 3D perspective CSS transform directly to the canvas DOM element
            canvas.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

            particles.forEach(p => {
                p.update(mouse.x, mouse.y, scrollY);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = 0.85;
                ctx.fillRect(p.x - particleSize / 2, p.y - particleSize / 2, particleSize, particleSize);
            });
            ctx.globalAlpha = 1;
            animId = requestAnimationFrame(animate);
        }

        function onMouseMove(e) { mouse.x = e.clientX; mouse.y = e.clientY; }
        function onMouseLeave() { mouse.x = -9999; mouse.y = -9999; }
        function onScroll() { scrollY = window.scrollY; }
        function onTouchMove(e) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; }

        resize();
        animate();

        window.addEventListener('resize', resize);
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('mousemove', onMouseMove);
        canvas.addEventListener('mouseleave', onMouseLeave);
        canvas.addEventListener('touchmove', onTouchMove, { passive: true });

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('mousemove', onMouseMove);
            canvas.removeEventListener('mouseleave', onMouseLeave);
            canvas.removeEventListener('touchmove', onTouchMove);
        };
    }, []);

    return (
        <div className={styles.wrap}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <p className={styles.hint}>Move cursor · Scroll to scatter</p>
        </div>
    );
}
