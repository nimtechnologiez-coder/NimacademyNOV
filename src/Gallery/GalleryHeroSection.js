import React from "react";
import "../GalleryCss/HeroSection.css";

import bgHero from "../Images/galleryhero.png";
import personImg from "../Images/person.png";

const GalleryHeroSection = () => {
  return (
    <section className="gallery-hero">

      <img src={bgHero} alt="background" className="hero-bg" />

  <div className="hero-text">
  <h1>
    Moments That Define NIM <br /> Academy
  </h1>
</div>


      <div className="hero-person">
        <img src={personImg} alt="Person" />
      </div>

      <div className="hanger-lines">
        <div className="hang left"></div>
        <div className="hang right"></div>
      </div>

    </section>
  );
};

export default GalleryHeroSection;
