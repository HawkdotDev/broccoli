import video1 from "../assets/videos/solar.webm";
import solar from "../assets/image/solar.jpg";
import AnimatedCounter from "./AnimationCounter";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center px-6 bg-black w-screen h-screen">
      <div className="w-[99%] h-[90vh] overflow-hidden mt-[69px] rounded-2xl relative flex justify-end items-end">
        <div className="absolute top-0 left-0 flex">
          <video autoPlay loop muted className="w-full h-full object-cover z-1">
            <source src={video1} type="video/webm" />
            Your browser does not support the video tag.
          </video>
          <div className="w-[50%] absolute h-[90vh] flex flex-col justify-between items-center py-32">
            <h1 className="text-lg w-[55%] h-20 flex flex-col justify-end">
              Lorem ipsum dolor sit.
            </h1>
            <h1 className="text-8xl ml-32">
              Lorem ipsum <br /> dolor sit.
            </h1>
            <div className="flex w-[55%] mt-5">
              <a className="mr-16 flex" href="#brochure">
                brochure
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
                download{" "}
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
          <div className="w-[50%] absolute h-[90vh] flex flex-col justify-start mt-16 items-center right-0">
            <div className="bg-slate-300/30 p-2 border border-white w-[40%] h-[46%] rounded-2xl flex flex-col justify-between">
              <div className="w-full h-[68%] flex justify-between">
                <img
                  src={solar}
                  alt="Description of Image"
                  className="w-[65%] h-full object-cover rounded-2xl border border-white"
                />
                <div className="w-8 h-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M222.72-391.52q-36.63 0-62.68-25.99Q134-443.5 134-480q0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.73 0 62.88 25.76 26.16 25.76 26.16 62.44 0 36.67-26.08 62.72-26.09 26.04-62.72 26.04Zm257.56 0q-36.67 0-62.72-25.99-26.04-25.99-26.04-62.49 0-36.96 25.99-62.72 25.99-25.76 62.49-25.76 36.96 0 62.72 25.76 25.76 25.76 25.76 62.44 0 36.67-25.76 62.72-25.76 26.04-62.44 26.04Zm257.4 0q-36.79 0-63-25.99-26.2-25.99-26.2-62.49 0-36.96 26.2-62.72 26.21-25.76 63-25.76 36.8 0 62.56 25.76Q826-516.96 826-480.28q0 36.67-25.76 62.72-25.76 26.04-62.56 26.04Z" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-lg items-center">
                  <div className="bg-white/30 hover:bg-black/40 border border-white w-16 h-16 rounded-full flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="32px"
                      viewBox="0 -960 960 960"
                      width="32px"
                      fill="#e8eaed"
                    >
                      <path d="M214.87-141.91 140.78-216l456.65-456.65H351.52v-106h426v426h-106v-245.91L214.87-141.91Z" />
                    </svg>
                  </div>
                  <div className="mx-3">
                    Discover our <br /> latest projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-[50%] h-[30%] px-8 bg-black rounded-tl-2xl flex justify-between items-center">
          <AnimatedCounter numsArray={[135, 53, 75, 92]} />
          <AnimatedCounter numsArray={[15, 32, 69, 43]} />
          <AnimatedCounter numsArray={[219, 94, 47, 101]} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
