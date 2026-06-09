"use client";

import { useEffect, useRef, useState } from "react";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  color: string;
  details: string;
}

export default function Ecosystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = container.clientWidth || 800);
    let height = (canvas.height = container.clientHeight || 500);

    const centerX = width / 2;
    const centerY = height / 2;
    const radiusScale = Math.min(width, height) * 0.3;

    const rawNodes = [
      { id: "dao", label: "CHESSDAO HUB", angle: 0, dist: 0, r: 24, color: "#D4AF37", details: "The core cryptographic governance center governing all sovereign assets." },
      { id: "treasury", label: "SOVEREIGN TREASURY", angle: -Math.PI / 2, dist: 1.0, r: 16, color: "#F7D774", details: "Consensus-backed capital reserve targeting seed investments and yields." },
      { id: "members", label: "THE SYNDICATE", angle: -Math.PI / 6, dist: 1.05, r: 16, color: "#E7C15B", details: "Inv-only network of aligned cryptographers, venture builders, and grandmasters." },
      { id: "token", label: "$ATLAS TOKEN", angle: Math.PI / 6, dist: 1.0, r: 16, color: "#F7D774", details: "Cryptographic membership token holding voting weight and staking access." },
      { id: "gov", label: "CONSENSUS ENGINE", angle: (5 * Math.PI) / 6, dist: 1.05, r: 16, color: "#E7C15B", details: "Multi-signature execute-on-chain governance system protecting treasury moves." },
      { id: "partners", label: "VENTURE PARTNERS", angle: (7 * Math.PI) / 6, dist: 1.0, r: 16, color: "#D4AF37", details: "Sovereign Web3 networks and institutional investment syndicates." },
    ];

    const nodes: Node[] = rawNodes.map((n) => {
      const x = centerX + Math.cos(n.angle) * radiusScale * n.dist;
      const y = centerY + Math.sin(n.angle) * radiusScale * n.dist;
      return {
        id: n.id,
        label: n.label,
        x,
        y,
        baseX: x,
        baseY: y,
        radius: n.r,
        color: n.color,
        details: n.details,
      };
    });

    const connections = nodes
      .filter((n) => n.id !== "dao")
      .map((n) => ({
        from: nodes.find((val) => val.id === "dao")!,
        to: n,
        pulses: [Math.random(), Math.random() + 0.5],
      }));

    const mouse = { x: 0, y: 0, hoveredNodeId: null as string | null };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      let found: Node | null = null;
      nodes.forEach((node) => {
        const dist = Math.hypot(mouse.x - node.x, mouse.y - node.y);
        if (dist < node.radius + 15) {
          found = node;
        }
      });
      setHoveredNode(found);
      mouse.hoveredNodeId = found ? found.id : null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      connections.forEach((conn) => {
        ctx.strokeStyle = "rgba(212, 175, 55, 0.15)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.stroke();

        conn.pulses.forEach((p, idx) => {
          conn.pulses[idx] += 0.004;
          if (conn.pulses[idx] > 1) {
            conn.pulses[idx] = 0;
          }

          const currP = conn.pulses[idx];
          const px = conn.from.x + (conn.to.x - conn.from.x) * currP;
          const py = conn.from.y + (conn.to.y - conn.from.y) * currP;

          ctx.fillStyle = "#F7D774";
          ctx.shadowColor = "#D4AF37";
          ctx.shadowBlur = 8;
          ctx.beginPath();
          ctx.arc(px, py, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      nodes.forEach((node) => {
        const isHovered = mouse.hoveredNodeId === node.id;

        const targetX = node.baseX + (isHovered ? (mouse.x - node.baseX) * 0.15 : 0);
        const targetY = node.baseY + (isHovered ? (mouse.y - node.baseY) * 0.15 : 0);
        node.x += (targetX - node.x) * 0.1;
        node.y += (targetY - node.y) * 0.1;

        if (isHovered) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 25;
        }

        ctx.strokeStyle = isHovered ? "#F7D774" : "rgba(212, 175, 55, 0.3)";
        ctx.lineWidth = isHovered ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + 6, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = isHovered ? node.color : "#050505";
        ctx.strokeStyle = node.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;

        ctx.fillStyle = isHovered ? "#FFFFFF" : "#E5E5E5";
        ctx.font = `bold ${node.id === "dao" ? "11px" : "9px"} var(--font-dm-sans), sans-serif`;
        ctx.textAlign = "center";
        
        // Draw centered text label with manual letter spacing
        const labelText = node.label;
        ctx.fillText(labelText, node.x, node.y + node.radius + 20);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = container.clientWidth || 800;
      height = canvas.height = container.clientHeight || 500;
      const newCenterX = width / 2;
      const newCenterY = height / 2;
      const newRadiusScale = Math.min(width, height) * 0.3;

      nodes.forEach((node) => {
        const rawNode = rawNodes.find((rn) => rn.id === node.id)!;
        node.baseX = newCenterX + Math.cos(rawNode.angle) * newRadiusScale * rawNode.dist;
        node.baseY = newCenterY + Math.sin(rawNode.angle) * newRadiusScale * rawNode.dist;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="ecosystem" className="py-24 bg-[#050505] relative overflow-hidden border-b border-gold-primary/10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-primary/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-lg relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="font-label-md text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
            Interactive Network
          </div>
          <h2 className="font-display-xl text-3xl md:text-5xl text-white uppercase tracking-wider">
            Consensus Ecosystem
          </h2>
          <div className="w-24 h-[1px] bg-gold-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div ref={containerRef} className="lg:col-span-8 h-[450px] w-full bg-black/40 border border-gold-primary/10 relative overflow-hidden flex items-center justify-center p-4">
            <canvas ref={canvasRef} className="block w-full h-full cursor-crosshair" />
          </div>

          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="glass-luxury p-8 w-full min-h-[300px] flex flex-col justify-between">
              {hoveredNode ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-primary animate-ping" />
                    <span className="font-label-md text-[10px] tracking-[0.25em] text-gold-primary uppercase font-bold">
                      SYSTEM NODE ACTIVE
                    </span>
                  </div>
                  <h3 className="font-display-xl text-2xl text-white uppercase tracking-widest">
                    {hoveredNode.label}
                  </h3>
                  <div className="w-12 h-[1px] bg-gold-primary/50" />
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    {hoveredNode.details}
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gold-primary/40">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold-primary/40" />
                    <span className="font-label-md text-[10px] tracking-[0.25em] uppercase font-bold">
                      AWAITING SYSTEM SCAN
                    </span>
                  </div>
                  <h3 className="font-display-xl text-2xl text-white/50 uppercase tracking-widest">
                    Network Map
                  </h3>
                  <div className="w-12 h-[1px] bg-white/10" />
                  <p className="font-body-md text-sm text-on-surface-variant/50 leading-relaxed italic">
                    Hover over any system node in the cryptographic web projection to display metrics, governance rights, and connectivity data.
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-gold-primary/10 flex justify-between items-center text-[10px] tracking-widest text-on-surface-variant uppercase font-semibold">
                <span>Ecosystem Status</span>
                <span className="text-gold-primary">Consensus Confirmed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
