"use client";

import { useEffect, useRef, useState } from "react";

export default function Roadmap() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const progress = Math.min(Math.max((viewportHeight - rect.top) / (rect.height + viewportHeight * 0.1), 0), 1);
        setScrollPercent(progress * 100);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const phases = [
    {
      num: "01",
      title: "Genesis Setup",
      desc: "Syndicate formation, cryptographically secured multi-sig setups, private token deployments, and council key distributions.",
      time: "Q1 2026",
    },
    {
      num: "02",
      title: "Expansion",
      desc: "Yield reserve staking portal launch. Co-investment contracts finalized with tier-1 Web3 venture syndicates.",
      time: "Q3 2026",
    },
    {
      num: "03",
      title: "Consensus Governance",
      desc: "Migration of governance directly to execute-on-chain cryptographic modules, establishing zero-dependency voting portals.",
      time: "Q1 2027",
    },
    {
      num: "04",
      title: "Ecosystem Hubs",
      desc: "Incubating zero-knowledge transaction privacy systems and cross-chain liquid vaults backing high-yield operations.",
      time: "Q3 2027",
    },
    {
      num: "05",
      title: "Global Sovereignty",
      desc: "Orchestration of cross-chain treasury operations and sovereign physical node validation deployments internationally.",
      time: "Q1 2028",
    },
  ];

  return (
    <section id="roadmap" ref={sectionRef} className="py-24 bg-[#050505] relative overflow-hidden border-b border-gold-primary/10">
      <div className="absolute top-10 left-10 w-96 h-96 bg-gold-primary/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-lg relative z-10">
        <div className="text-center mb-24 space-y-4">
          <div className="font-label-md text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
            Tactical Timeline
          </div>
          <h2 className="font-display-xl text-3xl md:text-5xl text-white uppercase tracking-wider">
            Sovereign Roadmap
          </h2>
          <div className="w-24 h-[1px] bg-gold-primary mx-auto mt-6" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/10" />

          <div
            className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-4 w-[2px] bg-gradient-to-b from-gold-primary via-gold-light to-gold-dark origin-top transition-all duration-150 ease-out"
            style={{ height: `${scrollPercent}%`, maxHeight: "98%" }}
          />

          <div className="space-y-16">
            {phases.map((phase, idx) => {
              const isActive = scrollPercent > (idx / phases.length) * 100 + 8;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`absolute left-[30px] md:left-1/2 -translate-x-1/2 top-2.5 w-6 h-6 rounded-full border-2 bg-black flex items-center justify-center transition-all duration-500 z-20 ${
                      isActive
                        ? "border-gold-primary shadow-[0_0_12px_rgba(212,175,55,0.8)]"
                        : "border-white/20"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                        isActive ? "bg-gold-primary" : "bg-white/10"
                      }`}
                    />
                  </div>

                  <div className="hidden md:block md:w-1/2" />

                  <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12">
                    <div
                      className={`glass-luxury p-8 relative transition-all duration-700 hover:border-gold-primary/40 ${
                        isActive ? "border-gold-primary/30 opacity-100" : "opacity-40"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-display-xl text-xs text-gold-primary tracking-widest uppercase">
                          Phase {phase.num}
                        </span>
                        <span className="font-label-md text-[9px] text-on-surface-variant uppercase tracking-widest font-semibold border border-white/10 px-2 py-0.5">
                          {phase.time}
                        </span>
                      </div>
                      
                      <h3 className="font-display-xl text-lg text-white mb-2 tracking-wider uppercase">
                        {phase.title}
                      </h3>
                      
                      <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
