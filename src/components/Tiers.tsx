export default function Tiers() {
  return (
    <section className="py-margin-lg max-w-container-max mx-auto px-margin-lg transition-all duration-1000">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Access Tiers</h2>
        <p className="font-body-lg text-on-surface-variant">Elevate your standing in the ecosystem.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
        {/* Tier 1: Tactician */}
        <div className="bg-surface p-12 border border-primary/20 relative flex flex-col justify-between">
          <div>
            <div className="mb-8">
              <div className="text-primary font-label-md uppercase mb-2">Tactician</div>
              <div className="text-5xl font-headline-lg">
                $5 <span className="text-headline-sm text-on-surface-variant text-base">/ 3 MO</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>{" "}
                Verified Status
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>{" "}
                Basic Alpha Access
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant opacity-40">
                <span className="material-symbols-outlined text-sm">cancel</span>{" "}
                Private Discord Concierge
              </li>
            </ul>
          </div>
          <button className="w-full border border-primary text-primary py-4 font-bold uppercase hover:bg-primary hover:text-background transition-all cursor-pointer">
            Subscribe Now
          </button>
        </div>

        {/* Tier 2: Grandmaster */}
        <div className="bg-surface-container p-12 border-2 border-primary relative md:scale-105 shadow-2xl flex flex-col justify-between">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background px-4 py-1 text-[10px] font-black uppercase tracking-widest">
            Recommended
          </div>
          <div>
            <div className="mb-8">
              <div className="text-primary font-label-md uppercase mb-2">Grandmaster</div>
              <div className="text-5xl font-headline-lg">
                $10 <span className="text-headline-sm text-on-surface-variant text-base">/ 6 MO</span>
              </div>
            </div>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>{" "}
                All Tactician Perks
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>{" "}
                Private Alpha Channels
              </li>
              <li className="flex items-center gap-3 text-on-surface">
                <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>{" "}
                Governance Voting Power
              </li>
            </ul>
          </div>
          <button className="w-full bg-primary text-background py-4 font-bold uppercase gold-glow hover:brightness-110 transition-all cursor-pointer">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
}
