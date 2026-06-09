export default function JoinForm() {
  return (
    <section className="py-margin-lg bg-surface-container-high relative overflow-hidden transition-all duration-1000">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full">
          <div className="border-r border-primary h-full"></div>
          <div className="border-r border-primary h-full"></div>
          <div className="border-r border-primary h-full"></div>
          <div className="border-r border-primary h-full"></div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-margin-lg relative z-10 text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Claim Your Seat</h2>
        <div className="bg-background p-4 md:p-8 border border-primary shadow-2xl gold-glow relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-6 h-full">
              <div className="border-r border-primary/20 h-full"></div>
              <div className="border-r border-primary/20 h-full"></div>
              <div className="border-r border-primary/20 h-full"></div>
              <div className="border-r border-primary/20 h-full"></div>
              <div className="border-r border-primary/20 h-full"></div>
            </div>
          </div>
          <div className="relative z-10 w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfD6v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v_v/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
            >
              Loading application form...
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
