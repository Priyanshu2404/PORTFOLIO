import { useEffect, useRef } from 'react';

/**
 * MatrixRain — draws a classic green phosphor character rain on a canvas.
 * Pure CSS/Canvas, no images, zero dependencies beyond React.
 */
export default function MatrixRain({ opacity = 0.18, speed = 40 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const CHARS = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ><{}[]|/\\';
    const FONT_SIZE = 13;
    let cols, drops;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      cols  = Math.floor(canvas.width / FONT_SIZE);
      drops = Array(cols).fill(1);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const draw = () => {
      // Fade trail
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x    = i * FONT_SIZE;

        // Leading character — bright white-green
        ctx.fillStyle = `rgba(200,255,220,${opacity * 3})`;
        ctx.fillText(char, x, y * FONT_SIZE);

        // Body characters — phosphor green at varying intensity
        ctx.fillStyle = `rgba(0,255,65,${opacity})`;
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, (y - 1) * FONT_SIZE);

        if (y * FONT_SIZE > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, speed);
    return () => {
      clearInterval(interval);
      ro.disconnect();
    };
  }, [opacity, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
