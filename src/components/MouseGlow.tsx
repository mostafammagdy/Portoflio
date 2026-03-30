"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  shape: "diamond" | "square" | "cross" | "dot";
}

function drawParticle(
  ctx: CanvasRenderingContext2D,
  p: Particle,
  alpha: number
) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
  ctx.fillStyle = `rgba(6, 182, 212, ${alpha * 0.5})`;
  ctx.lineWidth = 1;

  const s = p.size;

  switch (p.shape) {
    case "diamond":
      ctx.beginPath();
      ctx.moveTo(p.x, p.y - s);
      ctx.lineTo(p.x + s, p.y);
      ctx.lineTo(p.x, p.y + s);
      ctx.lineTo(p.x - s, p.y);
      ctx.closePath();
      ctx.stroke();
      break;

    case "square":
      ctx.strokeRect(p.x - s / 2, p.y - s / 2, s, s);
      break;

    case "cross":
      ctx.beginPath();
      ctx.moveTo(p.x - s, p.y);
      ctx.lineTo(p.x + s, p.y);
      ctx.moveTo(p.x, p.y - s);
      ctx.lineTo(p.x, p.y + s);
      ctx.stroke();
      break;

    case "dot":
      ctx.beginPath();
      ctx.arc(p.x, p.y, s * 0.5, 0, Math.PI * 2);
      ctx.fill();
      break;
  }

  ctx.restore();
}

const SHAPES: Particle["shape"][] = ["diamond", "square", "cross", "dot"];
const MAX_PARTICLES = 50;
const CONNECTION_DIST = 120;
const SPAWN_THROTTLE = 50; // ms between spawns

export default function MouseGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -500, y: -500 });
  const lastSpawnRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const isTouchRef = useRef(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) {
      isTouchRef.current = true;
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      const now = performance.now();
      if (now - lastSpawnRef.current > SPAWN_THROTTLE) {
        lastSpawnRef.current = now;

        if (particlesRef.current.length < MAX_PARTICLES) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.3 + Math.random() * 0.8;
          particlesRef.current.push({
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 0,
            maxLife: 60 + Math.random() * 60, // 1-2 seconds at 60fps
            size: 3 + Math.random() * 4,
            shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
          });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alphaA = 1 - a.life / a.maxLife;
            const alphaB = 1 - b.life / b.maxLife;
            const lineAlpha =
              (1 - dist / CONNECTION_DIST) * Math.min(alphaA, alphaB) * 0.3;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(6, 182, 212, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        const alpha = (1 - p.life / p.maxLife) * 0.7;
        drawParticle(ctx, p, alpha);
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  if (isTouchRef.current) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
