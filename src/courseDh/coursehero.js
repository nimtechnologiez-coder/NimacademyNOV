import React from "react";
import "../coursecss/coursehero.css";

import heroImg1 from "../Courseimage/herocourse.png";
import bgHero from "../Courseimage/herobg.png";

const ProgramHeroo = () => {
  return (
    <section className="program-hero-wrapper">
      <div
        className="program-hero-bg"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="hero-container">
          {/* LEFT SIDE */}
          <div className="hero-left">
            <h1 className="hero-title">17–Day Power Programs</h1>

            <p className="hero-desc">
              At NIM Academy, we’ve redefined how learning works. Our 17-day
              immersive programs condense 6 months of core learning into an
              intense, project-based experience designed by real industry
              professionals. Each session focuses on practical, hands-on
              learning, helping students master real-world skills and build
              job-ready portfolios in a short time.
            </p>

            <h3 className="hero-highlight">Master the Future in Just 17 Days</h3>

            <div className="hero-buttons">
  <a href="/Program" className="hero-btn">
    Show More
  </a>

                <a href="/Contact" className="hero-btn">
    Contact Us
  </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-right">
            <img src={heroImg1} alt="Program" className="hero-img" />
          </div>
        </div>

        {/* RIBBON */}
        <div className="bottom-ribbon">Our Courses</div>
      </div>
    </section>
  );
};

export default ProgramHeroo;