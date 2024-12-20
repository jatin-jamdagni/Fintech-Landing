import { NavBar } from "@/components/nav-bar";
import { HeroSection } from "@/components/hero-section";
import { MacbookDisplay } from "@/components/macbook-display";
import { OurAlliances } from "./components/our-alliances";
import { Footer } from "./components/footer-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#131720] relative overflow-hidden">
      {/* Background wave SVG */}
      <svg
        className="absolute top-0 left-0 right-0 w-full h-[75vh] md:h-screen"
        viewBox="0 0 1638 1204"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1638V1067C1638 1067 1427.52 996.927 1288 1002C917.288 1015.48 735.572 1255.18 339 1193C186.5 1169.09 0 1067 0 1067V0Z"
          fill="#FC4746"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10">
        <NavBar />
        <HeroSection />
        <MacbookDisplay />
        <br />
        <OurAlliances />
        <Footer />
      </div>
    </div>
  );
}
