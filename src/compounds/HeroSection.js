import React from "react";
import "../Style/HeroSection.css";
import heroPerson from "../Images/onehero (2).png";

const NimHero = () => {
  return (
    <section className="nim-hero">
      <div className="nim-hero-main">
        <div className="nim-hero-left">
          <h1>
            South India’s Most Trusted EdTech
            <br />
            Academy — Empowering Learners,
            <br />
            Building Global Futures.
          </h1>
        </div>

        <div className="nim-hero-right">
          <div className="nim-hero-right-text">
            <p>Empowering 1L+ learners with real-world tech skills</p>
            <p>Career-Ready Programs</p>
            <p>Mentorship</p>
          </div>

          <div className="nim-hero-dots">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="nim-hero-center">
        <img src={heroPerson} alt="Student" className="nim-hero-person" />

        <div className="nim-hero-ribbon">
          <span className="nim-hero-ribbon-left">Learn.Build.Get Placed</span>
          <span className="nim-hero-ribbon-right">That’s the Nim Way</span>
        </div>
      </div>

      <div className="nim-hero-bottom">
        <div className="nim-hero-stem nim-hero-stem-left" />
        <div className="nim-hero-stem nim-hero-stem-right" />
        <div className="nim-hero-bottom-card">
          Trusted by the South. Recognized Across India
        </div>
      </div>
    </section>
  );
};

export default NimHero;
