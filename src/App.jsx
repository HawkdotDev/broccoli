/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import maintainence from "../src/assets/image/Maintenance.jpg";
import map from "../src/assets/image/map2.jpg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import SolarCalculator from "./components/SolarCalculator";

const App = () => {
  const white = " #FFFFFF";
  const footer_black = "#191915";
  const green_dark = "#14C771";
  const green_light = "#0DC36B";
  const text_grey = "#DFDFDF";
  const text_black = "#5E5E5E";
  return (
    <div className="text-[#d9d9d9]">
      <Router basename="AKIP">
        <Navbar />
        <div className="w-screen">
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
          <FeatureSection />
          <div className="bg-gray-400 py-8 px-16">
            <div className="flex h-[86vh] justify-between">
              <div className="w-[68%] py-3 pr-3">
                <SolarCalculator />
              </div>
              <div className="max-h-full w-[27%] mt-5 bg-white rounded-3xl p-5">
                <img
                  src={maintainence}
                  alt="Description of Image"
                  className="h-[45%] w-full object-fill rounded-2xl border border-white"
                />
                <h1 className="text-black text-3xl pt-2">
                  <span className="text-gray-500">Lorem ipsum dolor</span>
                  <br /> consectetur adipisicing.
                </h1>
                <p className="text-wrap mt-10 text-black">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente dolore harum iste!
                </p>
                <button className="bg-green-400 text-white p-2 rounded-full mt-10 px-8">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <Services />
          <Showcase />
          <div className="px-16 bg-[#E6E6E6]">
            <img
              src={map}
              alt="Description of Image"
              className="w-screen object-cover border-white"
            />
          </div>
          <div className="w-screen h-screen px-16 bg-[#FFFFFF]"></div>
          <div className="w-screen h-[65vh] border-t border-black px-16 bg-[#FFFFFF]"></div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
