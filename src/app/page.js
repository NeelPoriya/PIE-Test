import CustomerSection from "@/components/CustomerSection";
import FeaturesSection from "@/components/FeaturesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IndustriesSection from "@/components/IndustriesSection";
import LanguagesSection from "@/components/LanguagesSection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CustomerSection />
      {/* Youtube section */}
      <LanguagesSection />
      <FeaturesSection />
      <IndustriesSection />
    </>
  )
}
