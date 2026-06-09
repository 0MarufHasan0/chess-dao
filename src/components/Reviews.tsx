export default function Reviews() {
  const reviews = [
    {
      initials: "JD",
      handle: "@jdog_web3",
      role: "Member since 2023",
      bgColor: "bg-primary/20",
      textColor: "text-primary",
      text: '"The alpha in this DAO is literally months ahead of Twitter. Best move I\'ve made this year."',
    },
    {
      initials: "PX",
      handle: "@pixel_knight",
      role: "Strategist",
      bgColor: "bg-secondary/20",
      textColor: "text-secondary",
      text: '"ChessDAO isn\'t a group, it\'s a family of killers. The strategy sessions are world class."',
    },
    {
      initials: "AL",
      handle: "@alpha_lord",
      role: "OG Holder",
      bgColor: "bg-tertiary/20",
      textColor: "text-tertiary",
      text: '"Governance that actually works. Finally a DAO where every move matters."',
    },
  ];

  return (
    <section className="py-margin-md overflow-hidden bg-background transition-all duration-1000">
      <div className="flex animate-marquee-reverse gap-6 whitespace-nowrap w-max">
        {/* First list of reviews */}
        <div className="flex gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={`rev-1-${idx}`}
              className="bg-surface-container p-6 w-[400px] border border-white/5 shrink-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${rev.bgColor} flex items-center justify-center ${rev.textColor} font-bold`}
                >
                  {rev.initials}
                </div>
                <div>
                  <div className="font-bold text-on-surface">{rev.handle}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase">
                    {rev.role}
                  </div>
                </div>
              </div>
              <p className="text-sm whitespace-normal italic">{rev.text}</p>
            </div>
          ))}
        </div>
        {/* Duplicate list for seamless infinite loop */}
        <div className="flex gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={`rev-2-${idx}`}
              className="bg-surface-container p-6 w-[400px] border border-white/5 shrink-0"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 ${rev.bgColor} flex items-center justify-center ${rev.textColor} font-bold`}
                >
                  {rev.initials}
                </div>
                <div>
                  <div className="font-bold text-on-surface">{rev.handle}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase">
                    {rev.role}
                  </div>
                </div>
              </div>
              <p className="text-sm whitespace-normal italic">{rev.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
