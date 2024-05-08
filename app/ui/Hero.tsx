import "@/app/globals.css";
import CTAButton from "./CTA-Button";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="hero-section">
      <Image src={"/hero-portrait.png"} width={501} height={654} alt="portrait" className="hero-img" />
      <p className="hero-title">Webflow Developer - UI/UX</p>
      <CTAButton />
    </div>
  );
};

export default Hero;
