import { useEffect, useRef } from 'react';

const CodeRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Characters to display
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]<>/\\|~`';
        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Array to store drop position for each column
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            // Semi-transparent black background for trail effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Green text
            ctx.fillStyle = '#0ea5e9'; // Primary color instead of green
            ctx.font = `${fontSize}px monospace`;

            // Loop through drops
            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = chars[Math.floor(Math.random() * chars.length)];

                // Draw character
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        // Animation loop
        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{ zIndex: 0 }}
        />
    );
};

export default CodeRain;
