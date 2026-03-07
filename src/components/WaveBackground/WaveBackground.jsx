import { useEffect, useRef } from 'react';
import styles from './WaveBackground.module.css';

class Wave {
    constructor(y, amplitude, wavelength, speed, color) {
        this.y = y;
        this.amplitude = amplitude;
        this.wavelength = wavelength;
        this.speed = speed;
        this.color = color;
        this.time = 0;
    }

    draw(ctx, width, height) {
        this.y = height / 2; // keep centered dynamically
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;

        for (let x = 0; x < width; x++) {
            const yOffset = Math.sin(x * this.wavelength - this.time * this.speed) * this.amplitude;
            ctx.lineTo(x, this.y + yOffset);
        }

        ctx.stroke();
        ctx.shadowBlur = 0;
        this.time += 1;
    }
}

class BackgroundNoise {
    constructor() {
        this.stars = [];
    }

    init(width, height) {
        this.stars = [];
        const numStars = (width * height) / 10000;
        for (let i = 0; i < numStars; i++) {
            this.stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5,
                opacity: Math.random() * 0.5,
            });
        }
    }

    draw(ctx) {
        ctx.fillStyle = '#fff';
        this.stars.forEach(star => {
            ctx.globalAlpha = star.opacity;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1.0;
    }
}

export default function WaveBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;

        let width = 0;
        let height = 0;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            bg.init(width, height);
        }

        const waves = [
            new Wave(0, 80, 0.003, 0.05, 'rgba(0, 200, 255, 0.8)'),    // Bright Cyan (--primary)
            new Wave(0, 60, 0.005, 0.03, 'rgba(160, 80, 240, 0.6)'),   // Purple (--secondary)
            new Wave(0, 100, 0.002, 0.02, 'rgba(0, 200, 255, 0.25)'),   // Faint cyan outer
            new Wave(0, 40, 0.008, 0.06, 'rgba(200, 150, 255, 0.45)'), // Light purple highlight
        ];

        const bg = new BackgroundNoise();

        resize();
        window.addEventListener('resize', resize);

        function animate() {
            ctx.fillStyle = 'hsl(230, 25%, 5%)';
            ctx.fillRect(0, 0, width, height);

            bg.draw(ctx);

            waves.forEach(wave => wave.draw(ctx, width, height));

            animId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas} />;
}
