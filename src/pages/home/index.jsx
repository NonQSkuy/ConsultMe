import BentoHome from "./components/certify";
import HomeContent from "./components/content";
import StatsHome from "./components/cta";
import HeaderHome from "./components/header";
import TestimonialsSection from "./components/testimonials";

export default function Home() {
  return (
    <div>
      <HeaderHome />
      <BentoHome />
      <HomeContent />
      <StatsHome />
      <TestimonialsSection />
    </div>
  );
}
