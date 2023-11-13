import HeroSection from "@/components/hero-section";
import TechSection from "@/components/tech-section";
import NavBar from "@/components/navbar"
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center min-h-full">
        <div className="h-8" />
        <div className="min-h-screen">
          <div className="sm:px-[5%]"><NavBar /></div>
          <div className="flex justify-center">
            <div className="sm:w-4/5 lg:w-3/5">
              <HeroSection />
            </div>
          </div>
        </div>
        <div>
          <ServicesSection />
        </div>
        <div>
          <TechSection />
        </div>
      </div>
    </main>
  );
}