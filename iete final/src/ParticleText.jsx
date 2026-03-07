import React, { useEffect, useRef } from "react";

const ParticleText = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });

        let particlesArray = [];
        const colors = ["#00bfff", "#1e90ff", "#4fc3f7"];

        let mouseCoordinates = { x: null, y: null, radius: 60 };

        const handleMouseMove = (event) => {
            mouseCoordinates.x = event.clientX;
            mouseCoordinates.y = event.clientY;
        };

        const handleMouseLeave = () => {
            mouseCoordinates.x = null;
            mouseCoordinates.y = null;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        const setCanvasDimensions = () => {
            if (!canvasRef.current || !containerRef.current) return;
            canvas.width = containerRef.current.clientWidth;
            canvas.height = containerRef.current.clientHeight;
        }

        const resizeObserver = new ResizeObserver(() => {
            if (containerRef.current && canvasRef.current && containerRef.current.clientWidth > 0) {
                setCanvasDimensions();
                init();
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        // Also listen to window resize just in case
        window.addEventListener("resize", () => {
            if (containerRef.current && containerRef.current.clientWidth > 0) {
                setCanvasDimensions();
                init();
            }
        });

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.z = 0;
                this.baseX = x;
                this.baseY = y;
                this.size = Math.random() * 2 + 1.5;
                this.density = Math.random() * 30 + 10;
                this.color = colors[Math.floor(Math.random() * colors.length)];

                // Butterfly 3D phase based on position for a cohesive wave
                this.angle = (x * 0.01) + (y * 0.01);
                this.speed = 0.05;

                // Projected coordinates for drawing lines
                this.projectedX = x;
                this.projectedY = y;
            }

            draw() {
                // Calculate 3D perspective
                let perspective = 300 / (300 + this.z);
                this.projectedX = this.x * perspective + (canvas.width / 2) * (1 - perspective);
                this.projectedY = this.y * perspective + (canvas.height / 2) * (1 - perspective);
                let projectedSize = this.size * perspective;

                if (projectedSize < 0.1) return; // Don't draw if too small

                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.projectedX, this.projectedY, projectedSize, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                // Determine where the particle *wants* to be (strictly the base position)
                let targetX = this.baseX;
                let targetY = this.baseY;

                // Interaction with mouse (in 2D space for simplicity)
                let dx = mouseCoordinates.x - this.x;
                let dy = mouseCoordinates.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                // Mouse push force applied to current position
                if (distance < mouseCoordinates.radius) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let force = (mouseCoordinates.radius - distance) / mouseCoordinates.radius;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    // Elastic return towards the target butterfly position
                    this.x += (targetX - this.x) * 0.1;
                    this.y += (targetY - this.y) * 0.1;
                }
            }
        }

        const init = () => {
            particlesArray = [];

            if (!canvas || canvas.width === 0 || canvas.height === 0) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Responsive Font Sizing
            let fontSize = window.innerWidth < 768 ? 90 : 180;

            ctx.font = `bold ${fontSize}px system-ui, -apple-system, sans-serif`;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";

            // Draw IETE on top, KJSIT below
            ctx.fillText("IETE", canvas.width / 2, canvas.height / 2 - fontSize * 0.55);
            ctx.fillText("KJSIT", canvas.width / 2, canvas.height / 2 + fontSize * 0.55);

            const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            let resolution = window.innerWidth < 768 ? 6 : 8;

            for (let y = 0; y < textCoordinates.height; y += resolution) {
                for (let x = 0; x < textCoordinates.width; x += resolution) {
                    if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
                        particlesArray.push(new Particle(x, y));
                    }
                }
            }
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                // Optimization: Avoid full O(n^2) by limiting inner loop and only checking nearby arrays
                // Start from 'a+1' to avoid duplicate checks and checking self
                for (let b = a + 1; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].projectedX - particlesArray[b].projectedX;
                    let dy = particlesArray[a].projectedY - particlesArray[b].projectedY;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 25) {
                        opacityValue = 1 - distance / 25;
                        ctx.strokeStyle = `rgba(30, 144, 255, ${opacityValue * 0.5})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].projectedX, particlesArray[a].projectedY);
                        ctx.lineTo(particlesArray[b].projectedX, particlesArray[b].projectedY);
                        ctx.stroke();
                    }
                }
            }
        };

        let animationFrameId;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].draw();
                particlesArray[i].update();
            }

            connect();

            animationFrameId = requestAnimationFrame(animate);
        };

        // Ensure fonts load
        document.fonts.ready.then(() => {
            init();
            animate();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                backgroundColor: '#050a14',
                backgroundImage: `
                linear-gradient(rgba(0,191,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,191,255,0.05) 1px, transparent 1px)
            `,
                backgroundSize: '40px 40px',
                animation: 'fadeIn 2s ease-in-out forwards'
            }}
        >
            <style>
                {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
            </style>
            <canvas
                ref={canvasRef}
                style={{ display: "block", position: "absolute", inset: 0, zIndex: 10 }}
            />
        </div>
    );
};

export default ParticleText;
