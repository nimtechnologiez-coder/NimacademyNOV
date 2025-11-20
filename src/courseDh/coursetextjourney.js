
import React from "react";
import "../coursecss/coursetextjourney.css";

const JourneyCTA = () => {
  return (
    <div className="journey-container">

      {/* Top Soft CTA */}
      <p className="soft-cta">
        Ready to Start Your Journey?” (Soft CTA) A professional but non-pushy<br></br> CTA — leads to the Program / Registration Page
      </p>

      {/* Ribbon Box */}
      <div className="ribbon-wrapper">
        <div className="ribbon">
          <p>Your future in tech starts today. Choose your path, we’ll guide your every step</p>
        </div>
        <div className="ribbon-shadow"></div>
      </div>

      {/* Heading */}
      <h1 className="main-heading">
        Flexible <span className="green">Learning</span> Modes— Online <span className="blue">or</span> Offline
      </h1>

      {/* Description */}
      <p className="description">
        Whether you’re a student, working professional, or career switcher,
        NIM<br></br> Academy gives you the freedom to learn your way.
      </p>

    </div>
  );
};

export default JourneyCTA;