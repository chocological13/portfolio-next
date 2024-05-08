import "@/app/globals.css";
import Image from "next/image";

const FooterTop: React.FC = () => {
  return (
    <div className="get-in-touch">
      <div className="touch-text">
        <p>Have something in mind?</p>
        <p className="footer-img">
          <Image src={"/footer-profile.png"} width={80} height={80} alt="mini-icon" />
          <span> let&apos;s build it together.</span>
        </p>
      </div>
      <button type="button">
        <a href="contact">Get In Touch</a>
      </button>
    </div>
  );
};

export default FooterTop;
