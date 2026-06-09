import Image from "next/image";

export default function WinningBoard() {
  return (
    <section className="py-margin-lg px-margin-lg max-w-container-max mx-auto transition-all duration-1000">
      <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">
        The Winning Board
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {/* Win Card 1 */}
        <div className="break-inside-avoid bg-surface-container p-6 border border-primary/10">
          <div className="relative w-full overflow-hidden mb-4">
            <Image
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVsKVWchEDZMF2IYojYe7gn0dEohgg4O0nS8Gwzr9Xa2HU6ASSzN5bO0HnMZHL3CwDrPb3C5t1gIYsa_PfBW5h4Bg4Yyv7UlyrBvk_Vv5usXNJpK05-uOzZhG8tyFhh-mqnphA6EfUyWn6gBK_c1faCdXB_3e_YFs0z1sxYCjgpc_4-ok1L3aCDqZ1HUyGEzg5E92um8w-qlavTQhzfNpbGnaOjtUCCri_jM6589-aGHS0qvTLmoeeGtER8dEda77VhNbxr_u6VoM"
              alt="A high-quality 3D render of a futuristic digital crypto asset with glowing gold circuits on a deep dark mahogany surface. The lighting is dramatic and cinematic, emphasizing the metallic textures and technological sophistication of the Web3 space. This professional aesthetic aligns with the premium branding of ChessDAO."
              width={600}
              height={400}
              priority
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-secondary/20 text-secondary text-[10px] px-3 py-1 font-bold uppercase">
              NFT Mint
            </span>
            <div className="text-on-surface-variant text-xs">2 hours ago</div>
          </div>
          <h4 className="font-headline-sm text-[18px] text-primary">Golden King #441 Secured</h4>
          <p className="text-sm text-on-surface-variant mt-2">
            Member @cryptoking secured a rare mint through DAO priority access.
          </p>
        </div>

        {/* Win Card 2 */}
        <div className="break-inside-avoid bg-surface-container p-6 border border-primary/10">
          <div className="h-48 bg-gradient-to-r from-primary/10 to-transparent flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-6xl text-primary/40">trending_up</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-primary/20 text-primary text-[10px] px-3 py-1 font-bold uppercase">
              DeFi Profit
            </span>
            <div className="text-on-surface-variant text-xs">Yesterday</div>
          </div>
          <h4 className="font-headline-sm text-[18px] text-primary">400% Yield Harvest</h4>
          <p className="text-sm text-on-surface-variant mt-2">
            Treasury-backed farming strategy yielded significant returns for participants.
          </p>
        </div>

        {/* Win Card 3 */}
        <div className="break-inside-avoid bg-surface-container p-6 border border-primary/10">
          <div className="relative w-full overflow-hidden mb-4">
            <Image
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4su1WqUPU3B7h8P4-U1ToodmAfCu3oxg8jQGnhmfEnA8iWo4OnveKhvNUs4sj92ni9ObNwhIqQv3d0ARthtOW3pQPXMXQituw-t3y7M8ChRmhSAqupFstxBOt13oMXUHsZ1u5CGzTMNXrEzjnx5YyWdUCV20_iLac2kh31zpKHRjKwFlEUQ5FpjzVVb658AG8ejZ3YgU0QLyL8EqD_NT2PTSyKG0K8Ajtklx_I7bkF00m2vD4cJYlGqIdAa-_eFeri0R1EYtlopU"
              alt="An intricate macro shot of an advanced computer motherboard with pulsating golden light traveling through the circuit pathways. The depth of field is shallow, focusing on a central processor engraved with a chess knight symbol. The overall mood is mysterious, elite, and high-tech, reflecting the digital governance theme."
              width={600}
              height={400}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="bg-tertiary/20 text-tertiary text-[10px] px-3 py-1 font-bold uppercase">
              Airdrop
            </span>
            <div className="text-on-surface-variant text-xs">3 days ago</div>
          </div>
          <h4 className="font-headline-sm text-[18px] text-primary">Atlas Token Distribution</h4>
          <p className="text-sm text-on-surface-variant mt-2">
            Core contributors received the first round of $ATLAS rewards.
          </p>
        </div>
      </div>
    </section>
  );
}
