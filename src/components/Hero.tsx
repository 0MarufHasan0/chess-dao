import ThreeCanvas from "@/components/ThreeCanvas";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[#050505] px-margin-lg pt-12">
      {/* Dynamic Gold/Black Mesh Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(212,175,55,0.08)_0%,_rgba(5,5,5,0)_60%),_radial-gradient(circle_at_10%_80%,_rgba(231,193,91,0.04)_0%,_rgba(5,5,5,0)_50%)] pointer-events-none" />

      {/* Floating background chess symbols */}
      <div className="absolute top-[15%] left-[5%] text-[15rem] font-serif text-gold-primary/3 select-none pointer-events-none animate-float">
        ♔
      </div>
      <div 
        className="absolute bottom-[10%] right-[10%] text-[18rem] font-serif text-gold-primary/2 select-none pointer-events-none animate-float"
        style={{ animationDelay: "3s" }}
      >
        ♖
      </div>

      <div className="max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 space-y-8 text-left">
          {/* Elite Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-primary/10 border border-gold-primary/30 rounded-full text-gold-light font-label-md text-[10px] uppercase tracking-[0.25em] animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-primary"></span>
            Consensus League
          </div>

          {/* Large Title with Gold Metallic Sweep */}
          <div className="space-y-3">
            <h1 className="font-display-xl text-[56px] md:text-[80px] leading-none tracking-widest uppercase shimmer-gold">
              CHESSDAO
            </h1>
            <h2 className="font-headline-lg text-lg md:text-xl text-gold-light tracking-[0.3em] uppercase">
              Strategic Governance For The Digital Elite
            </h2>
          </div>

          {/* Subheadline */}
          <p className="font-body-lg text-on-surface-variant max-w-xl text-sm md:text-base leading-relaxed tracking-wider">
            Building the sovereign network of Web3 visionaries. We merge the timeless strategic depth of chess with decentralized capital governance and high-performance consensus systems.
          </p>

          {/* Buttons with Premium Interactions */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <button className="relative bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary bg-[size:200%_auto] text-black px-10 py-4 font-label-md text-xs font-bold uppercase tracking-[0.25em] gold-glow transition-all duration-500 hover:bg-[position:right_center] hover:scale-[1.03] active:scale-95 cursor-pointer">
              Enter The Arena
            </button>
            <button className="bg-transparent border border-white/20 hover:border-gold-primary hover:text-gold-primary text-white px-10 py-4 font-label-md text-xs font-bold uppercase tracking-[0.25em] transition-all duration-500 hover:scale-[1.03] active:scale-95 cursor-pointer">
              Connect Wallet
            </button>
          </div>
        </div>

        {/* Right Column: 3D Golden Knight Canvas */}
        <div className="lg:col-span-5 h-[450px] md:h-[550px] w-full relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-primary/5 to-transparent rounded-full filter blur-[80px] pointer-events-none" />
          {/* ThreeJS Interactive Canvas */}
          <div className="w-full h-full relative z-10 canvas-interactive">
            <ThreeCanvas piece="knight" autoRotateSpeed={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
}
