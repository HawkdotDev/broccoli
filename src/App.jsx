/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";
import Showcase from "./components/Showcase";
import Services from "./components/Services";

const App = () => {
  return (
    <Router basename="broccoli">
      <Navbar />
      <div className="w-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <FeatureSection />
        <Showcase />
        <Services />
        <Footer />
      </div>
    </Router>
    
  );
};

export default App;
