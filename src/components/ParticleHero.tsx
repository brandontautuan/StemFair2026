import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
}

interface MousePosition {
  x: number;
  y: number;
}

interface ParticleHeroProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

const ParticleHero: React.FC<ParticleHeroProps> = ({ 
  width = '100%', 
  height = '100%',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<MousePosition>({ x: -1000, y: -1000 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent): void => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize and animate particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle window resize
    const handleResize = (): void => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initializeParticles();
    };

    // Initialize particles based on screen size
    const initializeParticles = (): void => {
      const rect = canvas.getBoundingClientRect();
      const area = rect.width * rect.height;
      
      // Adaptive particle count based on screen size
      let particleCount: number;
      if (area < 500000) {
        particleCount = 50; // Small screens
      } else if (area < 1000000) {
        particleCount = 80; // Medium screens
      } else {
        particleCount = 120; // Large screens
      }

      particlesRef.current = Array.from({ length: particleCount }, () => {
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        return {
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx,
          vy,
          baseVx: vx,
          baseVy: vy,
        };
      });
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = (): void => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Animation loop
    const animate = (): void => {
      if (!ctx || !canvas) return;

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const connectionDistance = 150;
      const mouseInfluenceDistance = 120;
      const mouseInfluenceStrength = 0.02;

      // Update and draw particles
      particles.forEach((particle) => {
        // Mouse interaction - subtle repulsion
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distToMouse < mouseInfluenceDistance) {
          const force = (1 - distToMouse / mouseInfluenceDistance) * mouseInfluenceStrength;
          particle.vx += (dx / distToMouse) * force;
          particle.vy += (dy / distToMouse) * force;
        }

        // Gradually return to base velocity
        particle.vx += (particle.baseVx - particle.vx) * 0.01;
        particle.vy += (particle.baseVy - particle.vy) * 0.01;

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;

        // Draw particle (white on black)
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      });

      // Draw connections (dark blue on black)
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.2)';
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(37, 99, 235, ${opacity * 0.3})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    if (!prefersReducedMotion) {
      animate();
    } else {
      // Render static frame for reduced motion preference
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        display: 'block',
      }}
      aria-label="Interactive particle network animation"
      role="img"
    />
  );
};

export default ParticleHero;

