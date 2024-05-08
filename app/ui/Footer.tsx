import "@/app/globals.css";

const Footer: React.FC = () => {
  return (
    <div className="socials">
      <div className="socials-items">
        <p>Build with 💖 by Brightscout & Ayush</p>
      </div>
      <div className="socials-items">
        <ul>
          <li>
            <a href="" className="socials-links">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="" className="socials-links">
              Twitter
            </a>
          </li>
          <li>
            <a href="" className="socials-links">
              Instagram
            </a>
          </li>
          <li>
            <a href="" className="socials-links">
              Webflow
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
