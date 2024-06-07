
import { NavbarComponent } from "@/components/navbar";
import '../app/globals.css'
import { HomeCardSlider } from "@/components/home-card-slider";
import { AboutUs } from "@/components/about-us";
import { Services } from "@/components/services";
import { ContactUs } from "@/components/testimonial/layout";

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
        <div id="services" className="relative h-screen bg-gray-100">
          <Services />
        </div>
      </div>
      <div id='contact-us' className="relative h-screen">
        <ContactUs />
      </div>

    </main>
  );
}
