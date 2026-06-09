export default function Advantages() {
  const pillars = [
    {
      num: "I",
      title: "Consensus Governance",
      desc: "Sovereign voting structures that govern our multi-chain deployments. Every decision is execute-on-chain and guided by high-barrier cryptographic votes.",
      icon: "gavel",
      status: "Cryptographic",
    },
    {
      num: "II",
      title: "Sovereign Treasury",
      desc: "A hedge-backed asset reserve targeting high-yield protocols and early venture capital allocations, secured by multi-signature elite consensus.",
      icon: "account_balance_wallet",
      status: "$125M+ Reserve",
    },
    {
      num: "III",
      title: "Consensus Syndicate",
      desc: "A closed-door network of select founders, investors, and cryptographers sharing high-signal intelligence and strategic resources.",
      icon: "groups",
      status: "Inv-Only",
    },
    {
      num: "IV",
      title: "Protocol Innovation",
      desc: "Incubating zero-knowledge systems and multi-chain liquidity hubs that redefine how strategic capital interacts with decentralized finance.",
      icon: "memory",
      status: "Core R&D",
    },
  ];

  return (
    <section id="pillars" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-b border-gold-primary/10">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-primary/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-container-max mx-auto px-margin-lg relative z-10">
        {/* Title */}
        <div className="text-center mb-20 space-y-4">
          <div className="font-label-md text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
            Foundations of Power
          </div>
          <h2 className="font-display-xl text-3xl md:text-5xl text-white uppercase tracking-wider">
            Strategic Pillars
          </h2>
          <div className="w-24 h-[1px] bg-gold-primary mx-auto mt-6" />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-luxury p-12 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Corner bracket decorative details */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold-primary/20 group-hover:border-gold-primary transition-colors duration-500" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold-primary/20 group-hover:border-gold-primary transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold-primary/20 group-hover:border-gold-primary transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold-primary/20 group-hover:border-gold-primary transition-colors duration-500" />

              {/* Glowing Background Radial */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(212,175,55,0.04)_0%,_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="font-display-xl text-3xl text-gold-primary/20 group-hover:text-gold-primary transition-colors duration-500">
                    {pillar.num}
                  </span>
                  <span className="bg-gold-primary/10 border border-gold-primary/20 text-gold-light text-[9px] px-2.5 py-1 font-bold uppercase tracking-widest rounded-full">
                    {pillar.status}
                  </span>
                </div>

                <h3 className="font-display-xl text-xl text-white group-hover:text-gold-primary transition-colors duration-500 mb-4 tracking-widest uppercase">
                  {pillar.title}
                </h3>
                
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed tracking-wide">
                  {pillar.desc}
                </p>
              </div>

              {/* Icon / Accent trigger */}
              <div className="mt-8 flex justify-end">
                <span className="material-symbols-outlined text-gold-primary/30 group-hover:text-gold-primary group-hover:scale-110 transition-all duration-500 text-3xl">
                  {pillar.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
