import Banner from "@/components/shared/Banner";
import AvailableCarsSection from "@/components/ui/AvailableCarsSection";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <AvailableCarsSection />
    </div>
  );
}
