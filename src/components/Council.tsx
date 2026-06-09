export default function Council() {
  const members = [
    { name: "CUBE", role: "FOUNDER", icon: "view_in_ar" },
    { name: "PROFESSOR", role: "CO-FOUNDER", icon: "school" },
    { name: "SILE", role: "CO-FOUNDER", icon: "shield" },
    { name: "TEAM X", role: "OPERATIONS", icon: "groups" },
  ];

  return (
    <section className="py-margin-lg max-w-container-max mx-auto px-margin-lg transition-all duration-1000">
      <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">
        The Council
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {members.map((member, idx) => (
          <div key={idx} className="text-center group">
            <div className="relative mb-6 mx-auto w-40 h-40">
              <div className="absolute inset-0 border-2 border-primary rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
              <div className="absolute inset-2 bg-surface-container flex items-center justify-center overflow-hidden">
                <span
                  className="material-symbols-outlined text-5xl text-primary block w-fit"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {member.icon}
                </span>
              </div>
            </div>
            <div className="font-headline-sm text-headline-sm">{member.name}</div>
            <div className="font-label-md text-primary uppercase text-[12px]">{member.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
