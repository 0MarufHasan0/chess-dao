import ThreeCanvas from "@/components/ThreeCanvas";

export default function TokenShowcase() {
  const benefits = [
    {
      title: "Decisive Voting Weight",
      desc: "ATLAS holders govern the multi-sig treasury allocations. Each token acts as a cryptographic vote for sovereign capital decisions.",
      metric: "1 Token = 1 Vote",
    },
    {
      title: "Syndicate Seed Allocations",
      desc: "Secure exclusive entry into early-stage Web3 venture rounds co-invested alongside leading global investment houses.",
      metric: "Priority Access",
    },
    {
      title: "Yield Reserve Staking",
      desc: "Lock tokens to accrue interest derived from multi-chain treasury deployments and low-risk institutional liquidity pooling.",
      metric: "Up to 14.5% APR",
    },
    {
      title: "Elite Tier Channels",
      desc: "Threshold holdings unlock access to closed private communications channels, grandmaster strategy sessions, and real-time alpha.",
      metric: "Tier Locked",
    },
  ];

  return (
    <section id="token" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-gold-primary/10">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold-primary/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: 3D Token Canvas */}
          <div className="lg:col-span-5 w-full flex flex-col items-center justify-center">
            <div className="relative w-full h-[400px] md:h-[480px] flex items-center justify-center">
              <div className="absolute w-[280px] h-[280px] rounded-full border border-gold-primary/10 animate-[ping_4s_linear_infinite]" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-gold-primary/5 via-transparent to-transparent filter blur-2xl" />

              <div className="w-full h-full relative z-10 canvas-interactive">
                <ThreeCanvas piece="token" autoRotateSpeed={0.6} />
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <span className="font-display-xl text-lg text-gold-primary tracking-widest uppercase">
                $ATLAS ERC-20
              </span>
              <p className="font-label-md text-[9px] text-on-surface-variant uppercase tracking-[0.3em] mt-1">
                Sovereign Governance Asset
              </p>
            </div>
          </div>

          {/* Right Column: Utility Details */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-3">
              <div className="font-label-md text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
                Treasury Engine
              </div>
              <h2 className="font-display-xl text-3xl md:text-5xl text-white uppercase tracking-wider">
                Token Utility
              </h2>
            </div>
            <div className="w-16 h-[1px] bg-gold-primary/50" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {benefits.map((b, idx) => (
                <div key={idx} className="glass-luxury p-8 relative group cursor-default hover:border-gold-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-display-xl text-[10px] text-gold-primary tracking-widest uppercase">
                      Utility {idx + 1}
                    </span>
                    <span className="text-[9px] text-gold-light/60 border border-gold-primary/20 px-2 py-0.5 uppercase tracking-widest font-semibold bg-gold-primary/5">
                      {b.metric}
                    </span>
                  </div>
                  <h3 className="font-display-xl text-md text-white mb-2 tracking-wider uppercase">
                    {b.title}
                  </h3>
                  <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
