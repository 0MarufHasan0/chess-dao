export default function NFTGallery() {
  const cards = [
    {
      emoji: "🦁",
      title: "The Lion Heart",
      subtitle: "Elite Vanguard",
      fromColor: "from-primary/20",
    },
    {
      emoji: "🧙",
      title: "The Wizard",
      subtitle: "Alpha Strategist",
      fromColor: "from-secondary/20",
    },
    {
      emoji: "🐉",
      title: "The Dragon",
      subtitle: "Treasury Warden",
      fromColor: "from-error/20",
    },
    {
      emoji: "🦅",
      title: "The Eagle",
      subtitle: "Visionary Scout",
      fromColor: "from-tertiary/20",
    },
  ];

  return (
    <section className="py-margin-lg bg-surface-container-lowest overflow-hidden border-y border-primary/10 transition-all duration-1000">
      <div className="flex animate-marquee gap-8 whitespace-nowrap mb-8 w-max">
        {/* First set of cards */}
        <div className="flex gap-8">
          {cards.map((card, idx) => (
            <div
              key={`card-1-${idx}`}
              className={`w-64 h-80 bg-gradient-to-br ${card.fromColor} to-surface-container-highest border border-primary/20 flex flex-col items-center justify-center p-6 text-center`}
            >
              <div className="text-7xl mb-6">{card.emoji}</div>
              <div className="font-headline-sm text-primary">{card.title}</div>
              <div className="font-label-md text-on-surface-variant uppercase mt-2">
                {card.subtitle}
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate set for infinite seamless effect */}
        <div className="flex gap-8">
          {cards.map((card, idx) => (
            <div
              key={`card-2-${idx}`}
              className={`w-64 h-80 bg-gradient-to-br ${card.fromColor} to-surface-container-highest border border-primary/20 flex flex-col items-center justify-center p-6 text-center`}
            >
              <div className="text-7xl mb-6">{card.emoji}</div>
              <div className="font-headline-sm text-primary">{card.title}</div>
              <div className="font-label-md text-on-surface-variant uppercase mt-2">
                {card.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
