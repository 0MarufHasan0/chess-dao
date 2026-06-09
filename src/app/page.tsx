import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollObserver from "@/components/ScrollObserver";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Tiers from "@/components/Tiers";
import NFTGallery from "@/components/NFTGallery";
import Reviews from "@/components/Reviews";
import WinningBoard from "@/components/WinningBoard";
import JoinForm from "@/components/JoinForm";
import Council from "@/components/Council";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <ScrollObserver />
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Stats />
        <About />
        <Advantages />
        <Tiers />
        <NFTGallery />
        <Reviews />
        <WinningBoard />
        <JoinForm />
        <Council />
      </main>
      <Footer />
    </>
  );
}
