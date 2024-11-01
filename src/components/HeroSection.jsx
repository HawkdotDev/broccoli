import video1 from "../assets/videos/solar.webm";
import AnimatedCounter from "./AnimationCounter";
import BrochureComponent from "./BrochureComponent";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-[#FFFFFF] w-full h-full">
      <div className="w-[100%] h-[100vh] overflow-hidden relative flex justify-end items-end">
        <div className="absolute top-0 left-0 flex">
          <video autoPlay loop muted className="w-full h-full object-cover z-1">
            <source src={video1} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="bg-black/25 absolute w-full h-full"></div>
          <div className="w-[50%] absolute h-[90vh] flex flex-col justify-between items-center py-40">
            <div className="w-full h-full ml-80">
              <h1 className="text-lg w-[55%] h-20 mb-3 flex flex-col justify-end">
                Lorem ipsum dolor sit.
              </h1>
              <h1 className="text-6xl text-left w-[56%]">
                Lorem ipsum <br /> dolor sit.
              </h1>
            </div>
            <div className="flex w-[55%] mt-5">
              <BrochureComponent />
            </div>
          </div>
          <div className="w-[50%] absolute h-[90vh] flex justify-around mt-36 items-start right-0">
            <HeroCard />
          </div>
        </div>
        <div className="relative w-[50%] h-[30%] px-24 bg-[#FFFFFF] rounded-tl-2xl flex justify-between items-center ">
          <div
            className="absolute bottom-0 left-[-35px] w-[35px] h-[35px] rounded-full"
            style={{
              boxShadow: "18.5px 18.5px 0 #ffffff",
            }}
          ></div>
          <AnimatedCounter numsArray={[7]} decoration={"M"} />
          <AnimatedCounter numsArray={[250]} decoration={"+"} />
          <AnimatedCounter numsArray={[120]} decoration={"k"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
