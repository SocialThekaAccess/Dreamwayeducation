import Hero from "../components/sections/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import CountriesSection from "../components/sections/CountriesSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FaqSection from "../components/sections/FaqSection";
import CtaBanner from "../components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CountriesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
