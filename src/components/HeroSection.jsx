import video1 from "../assets/videos/solar.webm";
import AnimatedCounter from "./AnimationCounter";
import HeroCard from "./HeroCard";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center px-6 bg-[#2d2929]  w-screen h-screen">
      <div className="w-[99%] h-[90vh] overflow-hidden mt-[69px] rounded-2xl relative flex justify-end items-end">
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
              <a className="mr-16 flex" href="#brochure">
                Brochure
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#141414"
                  className="ml-3 bg-yellow-400 p-1 rounded-full border border-black"
                >
                  <path d="M214.87-141.91 140.78-216l456.65-456.65H351.52v-106h426v426h-106v-245.91L214.87-141.91Z" />
                </svg>
              </a>
              <a className="flex " href="#download">
                Download{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#141414"
                  className="ml-3 bg-yellow-400 p-[3px] rounded-full border border-black"
                >
                  <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-[50%] absolute h-[90vh] flex justify-around mt-16 items-start right-0">
            <HeroCard />
            <HeroCard />
          </div>
        </div>
        <div className="absolute w-[50%] h-[30%] px-8 bg-[#2d2929] rounded-tl-2xl flex justify-between items-center">
          <AnimatedCounter numsArray={[135, 53, 75, 92]} />
          <AnimatedCounter numsArray={[15, 32, 69, 43]} />
          <AnimatedCounter numsArray={[219, 94, 47, 101]} />
          <AnimatedCounter numsArray={[15, 32, 69, 43]} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
