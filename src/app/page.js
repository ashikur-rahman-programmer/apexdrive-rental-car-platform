import Banner from "@/components/shared/Banner";
import AvailableCarsSection from "@/components/ui/AvailableCarsSection";
import ContactSection from "@/components/ui/ContactSection";
import HowItWorks from "@/components/ui/HowItWorks";
import WhyChooseUs from "@/components/ui/WhyChooseUse";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <AvailableCarsSection />
      <WhyChooseUs />
      <HowItWorks />
      <ContactSection />
    </div>
  );
}
