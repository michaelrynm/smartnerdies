import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Statistic from "@/components/Statistic";
import CarouselSection from "@/components/CaruselSection";
import Testimoni from "@/components/Testimony";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Statistic />
      <CarouselSection />
      <Testimoni />
      <VideoSection />
      <ContactSection />
    </div>
  );
}
