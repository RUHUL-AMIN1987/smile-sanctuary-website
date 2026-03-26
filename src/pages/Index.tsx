import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import BookingCTA from "@/components/BookingCTA";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <TrustSection />
    <AboutSection />
    <TeamSection />
    <BookingCTA />
    <FAQSection />
    <ContactSection />
    <Footer />
  </>
);

export default Index;
