import React, { useState } from "react";
import NimHero from "./HeroSection";
import VerifiedHero from "./verifiedhero";
import "../Style/heroslider.css";
import GrowthBanner from "./growthhero";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className="hero-slider">

      {/* SLIDES */}
      <div className="hero-slide-container">
        {activeSlide === 1 && <NimHero />}
        {activeSlide === 2 && <VerifiedHero />}
        {activeSlide === 3 && <GrowthBanner/>}
      </div>

      {/* DOTS */}
      <div className="hero-dots">
        <span
          className={activeSlide === 1 ? "dot active" : "dot"}
          onClick={() => setActiveSlide(1)}
        ></span>

        <span
          className={activeSlide === 2 ? "dot active" : "dot"}
          onClick={() => setActiveSlide(2)}
        ></span>

         <span
          className={activeSlide === 3 ? "dot active" : "dot"}
          onClick={() => setActiveSlide(3)}
        ></span>

        
      </div>

    </div>
  );
};

export default HeroSlider;
