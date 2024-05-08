import "@/app/globals.css";
import Image from "next/image";

const Work: React.FC = () => {
  return (
    <div className="work">
      <div className="work-row">
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
      </div>
      <div className="work-row">
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
        <div className="work-container">
          <Image src="/work.png" width={273} height={151} alt="work" className="scroll-img" />
        </div>
      </div>
    </div>
  );
};

export default Work;
