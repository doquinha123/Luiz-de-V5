import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  maxLife: number;
  life: number;
  color: string;
  glowSize: number;
}

export const FireParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const maxParticles = Math.min(100, Math.floor((width * height) / 14000));

    const fireColors = [
      '#ff3b00', // Deep red-orange
      '#ff6a00', // Rich orange
      '#ff9500', // Warm amber
      '#ffc83b', // Bright golden spark
      '#ff5014', // Fiery coral
    ];

    const createParticle = (customY?: number): Particle => {
      const size = Math.random() * 2.8 + 1.2;
      return {
        x: Math.random() * width,
        y: customY !== undefined ? customY : height + Math.random() * 50,
        size,
        speedY: -(Math.random() * 1.6 + 0.8),
        speedX: (Math.random() - 0.5) * 0.9,
        opacity: Math.random() * 0.7 + 0.3,
        maxLife: Math.random() * 220 + 120,
        life: 0,
        color: fireColors[Math.floor(Math.random() * fireColors.length)],
        glowSize: size * (Math.random() * 3 + 2.5),
      };
    };

    // Pre-populate particles across screen
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(Math.random() * height));
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let hasInteracted = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      hasInteracted = true;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Add gentle fire glow at the very bottom
      const gradient = ctx.createLinearGradient(0, height - 180, 0, height);
      gradient.addColorStop(0, 'rgba(255, 60, 0, 0)');
      gradient.addColorStop(0.5, 'rgba(255, 80, 0, 0.04)');
      gradient.addColorStop(1, 'rgba(255, 100, 0, 0.09)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, height - 180, width, 180);

      // Render glowing fire embers
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.life * 0.04) * 0.4;

        // Subtle mouse push if nearby
        if (hasInteracted) {
          const dx = p.x - mouseX;
          const dy = p.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.x += (dx / dist) * 1.5;
            p.y += (dy / dist) * 1.5;
          }
        }

        // Calculate fade based on life
        const progress = p.life / p.maxLife;
        const currentOpacity = (1 - progress) * p.opacity;

        if (p.life >= p.maxLife || p.y < -30) {
          particles[i] = createParticle();
          continue;
        }

        // Draw particle glow
        ctx.save();
        ctx.globalAlpha = Math.max(0, currentOpacity);
        ctx.shadowBlur = p.glowSize;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      aria-hidden="true"
    />
  );
};
