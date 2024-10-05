/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import maintainence from "../src/assets/image/Maintenance.jpg";
import map from "../src/assets/image/map.jpg";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";
import Showcase from "./components/Showcase";
import Services from "./components/Services";
import SolarCalculator from "./components/SolarCalculator";

const App = () => {
  return (
    <div className="text-[#d9d9d9]">
      <Router basename="broccoli">
        <Navbar />
        <div className="w-screen">
          <Routes>
            <Route path="/" element={<HeroSection />} />
          </Routes>
          <FeatureSection />
          <div className="flex py-8">
            <div className="w-[50%] p-3">
              <SolarCalculator />
            </div>
            <div className="h-full w-[50%] flex justify-between items-center mt-5 ">
              <img
                src={maintainence}
                alt="Description of Image"
                className="h-[362px] w-[35%] object-fill rounded-2xl border border-white"
              />
              <div className="p-7 w-[65%]">
                <h1 className="text-gray-500 text-4xl">
                  <span className="text-white">Lorem ipsum dolor,</span>
                  sit amet <br /> consectetur adipisicing.
                </h1>
                <p className="text-wrap mt-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente dolore harum iste!
                </p>
                <button className="bg-yellow-300 p-2 rounded-2xl mt-5 text-black px-4">
                  Get in touch
                </button>
              </div>
            </div>
          </div>
          <div className="w-screen px-16 bg-[#FFFFFF]">
            <img
              src={map}
              alt="Description of Image"
              className="w-[99.8%] object-contain rounded-2xl border border-white"
            />
          </div>
          <Services />
          <Showcase />
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
