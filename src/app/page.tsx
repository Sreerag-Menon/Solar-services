import { NavbarComponent } from "@/components/navbar";
import '../app/globals.css';
import { HomeCardSlider } from "@/components/home-card-slider";
import { AboutUs } from "@/components/about-us";
import { Services } from "@/components/services";
import { ContactUs } from "@/components/testimonial/layout";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <NavbarComponent />
      <div id="Home" className="relative min-h-screen">
        <HomeCardSlider />
      </div>
      <div className="relative py-10">
        <AboutUs />
      </div>
      <div id="services" className="relative pt-10 bg-gray-200">
        <Services />
      </div>
      <div className="relative ">
        <ContactUs />
      </div>
    </main>
  );
}
