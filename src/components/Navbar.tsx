import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gold-primary/10 shadow-lg">
      <div className="flex justify-between items-center h-20 px-margin-lg max-w-container-max mx-auto w-full">
        <Link
          href="/"
          className="font-display-xl text-headline-sm tracking-[0.25em] text-gold-light hover:text-gold-primary transition-all duration-300 uppercase"
        >
          ChessDAO
        </Link>
        <div className="hidden md:flex items-center gap-8 font-label-md text-[11px] uppercase tracking-[0.22em] font-medium">
          <a
            className="text-on-surface-variant hover:text-gold-primary transition-colors duration-300"
            href="#about"
          >
            Sovereignty
          </a>
          <a
            className="text-on-surface-variant hover:text-gold-primary transition-colors duration-300"
            href="#pillars"
          >
            Pillars
          </a>
          <a
            className="text-on-surface-variant hover:text-gold-primary transition-colors duration-300"
            href="#ecosystem"
          >
            Ecosystem
          </a>
          <a
            className="text-on-surface-variant hover:text-gold-primary transition-colors duration-300"
            href="#token"
          >
            Token
          </a>
          <a
            className="text-on-surface-variant hover:text-gold-primary transition-colors duration-300"
            href="#roadmap"
          >
            Roadmap
          </a>
          <a
            className="text-on-surface-variant hover:text-gold-primary transition-colors duration-300"
            href="#benefits"
          >
            Perks
          </a>
        </div>
        <button className="bg-transparent border border-gold-primary text-gold-primary px-6 py-2.5 font-label-md text-[11px] uppercase tracking-[0.2em] hover:bg-gold-primary hover:text-black transition-all duration-500 gold-glow active:scale-95 cursor-pointer">
          Apply to Join ♟
        </button>
      </div>
    </nav>
  );
}
