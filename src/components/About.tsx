import ThreeCanvas from "@/components/ThreeCanvas";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative ambient gold glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gold-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-lg relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Storytelling */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="font-label-md text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
              Sovereign Dynasty
            </div>
            
            <h2 className="font-display-xl text-[36px] md:text-[50px] leading-tight text-white uppercase tracking-wider">
              The Sovereignty <br />
              <span className="shimmer-gold">of Strategy</span>
            </h2>

            <div className="w-20 h-[1px] bg-gold-primary/50" />

            <div className="space-y-6 font-body-lg text-on-surface-variant text-sm md:text-base leading-relaxed tracking-wide">
              <p>
                ChessDAO is not a conventional community; it is a multi-chain sovereign syndicate designed for the intellectually ambitious. We exist to merge the timeless strategic depth of chess with cutting-edge decentralized treasury mechanics.
              </p>
              <p>
                Through a core structure built on high-consensus voting power, members guide collective capital allocation, secure priority access to luxury seed rounds, and deploy strategic alpha developed by an elite council of grandmasters.
              </p>
              <p>
                In a digital landscape of short-term noise, we build for the long horizon. We believe that in Web3, as in chess, the most powerful entities are those that control the center of the board.
              </p>
            </div>

            {/* Strategic Pillars Summary */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="font-display-xl text-lg text-gold-light uppercase tracking-widest">
                  01 / Sovereignty
                </div>
                <p className="font-body-md text-xs text-on-surface-variant">
                  Independent multi-chain capital deployment.
                </p>
              </div>
              <div className="space-y-2">
                <div className="font-display-xl text-lg text-gold-light uppercase tracking-widest">
                  02 / Consensus
                </div>
                <p className="font-body-md text-xs text-on-surface-variant">
                  High-barrier network of aligned minds.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Card + 3D Queen Canvas */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="glass-luxury p-8 w-full max-w-md relative overflow-hidden group">
              {/* Internal Accent Lighting */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full filter blur-3xl pointer-events-none" />

              {/* 3D Canvas */}
              <div className="h-72 w-full relative mb-6 canvas-interactive">
                <ThreeCanvas piece="queen" autoRotateSpeed={0.3} />
              </div>

              {/* Card Meta */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-label-md text-[10px] tracking-[0.25em] text-gold-primary uppercase font-bold">
                    Executive Council
                  </span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">
                    Active Node
                  </span>
                </div>
                
                <h3 className="font-display-xl text-xl text-white uppercase tracking-widest">
                  The Queen&apos;s Gambit
                </h3>
                
                <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                  &ldquo;In Web3, the most powerful assets are those that maintain absolute mobility across chains. We deploy treasury resources with tactical fluidity.&rdquo;
                </p>
                
                <div className="font-label-md text-[10px] text-gold-light uppercase tracking-widest font-semibold pt-2">
                  — THE GRANDMASTER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
