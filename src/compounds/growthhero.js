import React from "react";
import "../Style/growthhero.css";
import graduates from "../Images/twoheroman.png"; // <-- your image

const GrowthBanner = () => {
  return (
    <section className="growth-banner">

      {/* LEFT TEXT */}
      <div className="gb-left">
        <h1>
          Your Growth — Measured,
          <br />
          Mentored, and Certified.
        </h1>
      </div>

      {/* RIGHT TEXT */}
      <div className="gb-right">
        <p>100% Placement Support</p>
        <p>Mentorship by Industry Experts</p>
        <p>Live Learning + Real Projects</p>
      </div>

      {/* CENTER IMAGE */}
      <div className="gb-image-wrapper">
        <img src={graduates} alt="Graduates" className="gb-image" />
      </div>

      {/* BLACK BOTTOM SHAPE */}
      <div className="gb-bottom-shape"></div>
    </section>
  );
};

export default GrowthBanner;
