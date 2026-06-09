"use client";

import { useEffect, useState, useRef } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.random() * 8 + 3;
        return Math.min(Math.floor(prev + diff), 100);
      });
    }, 80);

    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2200);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("overflow-hidden");
    }, 2900);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const particles: Array<{
          x: number;
          y: number;
          size: number;
          speedY: number;
          alpha: number;
        }> = [];

        for (let i = 0; i < 40; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height + height,
            size: Math.random() * 2 + 0.5,
            speedY: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.2,
          });
        }

        const render = () => {
          ctx.clearRect(0, 0, width, height);

          particles.forEach((p) => {
            p.y -= p.speedY;
            if (p.y < -10) {
              p.y = height + 10;
              p.x = Math.random() * width;
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
            ctx.fill();
          });

          animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleResize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
          clearInterval(interval);
          clearTimeout(fadeTimer);
          clearTimeout(hideTimer);
          cancelAnimationFrame(animationFrameId);
          window.removeEventListener("resize", handleResize);
          document.body.classList.remove("overflow-hidden");
        };
      }
    }

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      id="loader"
      className={`fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center transition-all duration-700 ${
        fade ? "opacity-0 scale-95 pointer-events-none" : "opacity-100"
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      <div className="relative mb-12 flex items-center justify-center w-40 h-40">
        <div className="absolute inset-0 rounded-full border border-dashed border-gold-primary/30 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border border-double border-gold-light/20 animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute inset-4 rounded-full border-t border-b border-gold-primary animate-[spin_3s_linear_infinite]" />

        <div className="absolute flex items-center justify-center">
          <span
            className="material-symbols-outlined text-gold-primary text-5xl animate-[pulse_2s_ease-in-out_infinite]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            king_bed
          </span>
        </div>
      </div>

      <h1 className="font-display-xl text-headline-lg tracking-[0.3em] shimmer-gold mb-2">
        CHESSDAO
      </h1>
      
      <p className="font-label-md text-[10px] tracking-[0.4em] text-on-surface-variant uppercase mb-8">
        CONSENSUS &bull; STRATEGY &bull; POWER
      </p>

      <div className="flex flex-col items-center gap-3 relative z-10">
        <div className="font-display-xl text-sm text-gold-light tracking-[0.2em]">
          {progress}%
        </div>
        <div className="w-48 h-[2px] bg-luxury-bg-light overflow-hidden border border-gold-primary/10">
          <div
            className="h-full bg-gradient-to-r from-gold-primary to-gold-light transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
