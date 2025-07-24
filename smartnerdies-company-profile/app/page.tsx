import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Statistic from "@/components/Statistic";
import CarouselSection from "@/components/CaruselSection";
import Testimoni from "@/components/Testimony";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <section id="services">
        <Services />
      </section>
      <Statistic />
      <section id="portfolio">
        <CarouselSection />
      </section>
      <section id="testimonials">
        <Testimoni />
      </section>
      <VideoSection />
      <section>
        <Faq />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
