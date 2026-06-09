"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-primary/20 relative w-full">
      <div className="max-w-container-max mx-auto px-margin-lg py-margin-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="font-display-xl text-headline-sm text-primary mb-4">ChessDAO</div>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              Forging the future of decentralized strategy through intellectual dominance.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary/40">chess</span>
            <span className="material-symbols-outlined text-primary/40">chess</span>
            <span className="material-symbols-outlined text-primary">king_bed</span>
            <span className="material-symbols-outlined text-primary/40">chess</span>
            <span className="material-symbols-outlined text-primary/40">chess</span>
          </div>
          <div className="flex gap-8 font-label-md text-label-md uppercase">
            <a className="text-on-surface-variant hover:text-primary underline transition-all" href="#">
              Twitter
            </a>
            <a className="text-on-surface-variant hover:text-primary underline transition-all" href="#">
              Discord
            </a>
            <a className="text-on-surface-variant hover:text-primary underline transition-all" href="#">
              Github
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-on-surface-variant text-sm">
            &copy; 2024 ChessDAO Ecosystem. All moves reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary font-bold uppercase text-xs hover:tracking-widest transition-all cursor-pointer"
          >
            Back to Zenith <span className="material-symbols-outlined text-sm">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
