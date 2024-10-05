import FeatureCarousel from "./FeatureCarousel";

const FeatureSection = () => {
  return (
    <div className="w-screen bg-[#2d2929]  px-20 pt-20 pb-12">
      <div className="flex justify-between">
        <h1 className="text-5xl">
          <span className="text-yellow-500">Lorem,</span> ipsum dolor sit amet{" "}
          <br />
          consectetur adipisicing
        </h1>
        <h1 className="w-[45%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          soluta ipsam deserunt doloribus animi expedita at, eveniet nihil
          aliquid iure adipisci cumque est ex fuga possimus enim dolorum, illo
          sapiente dolore minima. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aspernatur, pariatur.
        </h1>
      </div>
      <div className="w-full mt-16 overflow-x-auto whitespace-nowrap">
        <FeatureCarousel />
      </div>
    </div>
  );
};

export default FeatureSection;
