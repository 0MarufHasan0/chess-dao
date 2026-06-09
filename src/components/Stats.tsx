"use client";

import { useEffect, useState, useRef } from "react";

interface StatItemProps {
  end: number;
  prefix?: string;
  suffix: string;
  label: string;
  isK?: boolean;
}

function StatItem({ end, prefix = "", suffix, label, isK = false }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          const duration = 2200; // 2.2s

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // easeOutExpo (extremely smooth deceleration)
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentCount = Math.floor(easeProgress * end);
            
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end]);

  const formatNumber = (num: number) => {
    if (isK) {
      return (num / 1000).toFixed(0) + "K";
    }
    if (num >= 1000 && num < 1000000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }
    return num.toLocaleString();
  };

  return (
    <div ref={elementRef} className="text-center px-4 relative group">
      {/* Subtle hover background glow */}
      <div className="absolute inset-x-0 -inset-y-4 bg-gold-primary/3 rounded-lg filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="font-display-xl text-3xl md:text-4xl lg:text-5xl tracking-wide text-gold-light shimmer-gold">
        {prefix}
        {formatNumber(count)}
        {suffix}
      </div>
      <div className="font-label-md text-[9px] md:text-[10px] lg:text-xs text-on-surface-variant uppercase tracking-[0.25em] mt-3 font-semibold">
        {label}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative bg-[#0A0A0A] border-y border-gold-primary/10 py-16 overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.02)_0%,_transparent_80%)] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-lg relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-4 divide-y-0 md:divide-x divide-gold-primary/10">
          <StatItem end={125} prefix="$" suffix="M+" label="Capital Managed" />
          <StatItem end={1000} suffix="+" label="Discord Elite" />
          <StatItem end={32000} suffix="+" label="X Strategists" isK />
          <StatItem end={158000} suffix="+" label="Impressions" isK />
          <StatItem end={300} suffix="+" label="Atlas Holders" />
        </div>
      </div>
    </section>
  );
}
