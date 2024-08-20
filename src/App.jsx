import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import Footter from "./components/Footter";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* <HeroSection /> */}
        <FeatureSection />
        <Workflow />
        <PricingSection />
        <Testimonials />
        <Footter />
      </div>
    </>
  );
};

export default App;
