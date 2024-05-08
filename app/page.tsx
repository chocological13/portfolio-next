import NavBar from "./ui/navbar/navbar";
import Menu from "./ui/Menu";
import Hero from "./ui/Hero";
import About from "./ui/About";
import Work from "./ui/Work";
import Testimonials from "./ui/Testimonials";
import FooterTop from "./ui/FooterTop";
import Footer from "./ui/Footer";

export default function Page() {
  return (
    <div>
      <NavBar />

      {/* Make the menu on click to CTA */}
      {/* <Menu /> */}

      <Hero />
      <About />
      <Work />
      <Testimonials />
      <div className="footer">
        <FooterTop />
        <div className="footer-bot">
          <Footer />
        </div>
      </div>
    </div>
  );
}
