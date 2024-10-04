import adani from "../assets/Company/adani.png";
import exide from "../assets/Company/exide.png";
import goodwe from "../assets/Company/goodwe.png";
import jio from "../assets/Company/jio.png";
import tata from "../assets/Company/tata.png";
import renew from "../assets/Company/renew.png";

const FeatureSection = () => {
  return (
    <div className="w-screen bg-black px-20 py-20">
      <div className="flex justify-between">
        <h1 className="text-5xl">
          Lorem, ipsum dolor sit amet <br/>consectetur adipisicing
        </h1>
        <h1 className="w-[45%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis soluta ipsam deserunt doloribus animi expedita at, eveniet nihil aliquid iure adipisci cumque est ex fuga possimus enim dolorum, illo sapiente dolore minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, pariatur.
        </h1>
      </div>
      <div className="w-full mt-16 overflow-x-auto whitespace-nowrap"
      >
        <div className="flex flex-row space-x-8 justify-between">
          <img
            src={adani}
            alt="Placeholder 1"
            className="w-40 p-4 rounded-full object-contain bg-slate-300 hover:bg-yellow-400"
          />
          <img
            src={exide}
            alt="Placeholder 2"
            className="w-40 p-4 rounded-full object-contain bg-slate-300 hover:bg-yellow-400"
          />
          <img
            src={goodwe}
            alt="Placeholder 3"
            className="w-40 p-4 rounded-full object-contain bg-slate-300 hover:bg-yellow-400"
          />
          <img
            src={jio}
            alt="Placeholder 4"
            className="w-40 p-4 rounded-full object-contain bg-slate-300 hover:bg-yellow-400"
          />
          <img
            src={tata}
            alt="Placeholder 5"
            className="w-40 p-4 rounded-full object-contain bg-slate-300 hover:bg-yellow-400"
          />
          <img
            src={renew}
            alt="Placeholder 6"
            className="w-40 p-4 rounded-full object-contain bg-slate-300 hover:bg-yellow-400"
          />
        </div>
      </div>
      </div>
  );
};

export default FeatureSection;
