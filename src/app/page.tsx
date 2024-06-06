
import { NavbarComponent } from "@/components/navbar";
import '../app/globals.css'
import { HomeCardSlider } from "@/components/home-card-slider";
import { AboutUs } from "@/components/about-us";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <main >
      <div className="relative">

        <NavbarComponent />
        <div className="relative h-screen" id="Home">
          <HomeCardSlider />
        </div>
        <div id="About-us" className="relative h-screen">
          <AboutUs />
        </div>
        <div id="services" className="relative h-screen">
          <Services />
        </div>
      </div>
    </main>
  );
}
