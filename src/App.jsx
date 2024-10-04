/* eslint-disable no-unused-vars */
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <Router basename="broccoli">
      <Navbar />
      <div className="w-screen">
        <Routes>
          <Route path="/" element={<HeroSection />} />
        </Routes>
        <FeatureSection />
      </div>
    </Router>
    
  );
};

export default App;
