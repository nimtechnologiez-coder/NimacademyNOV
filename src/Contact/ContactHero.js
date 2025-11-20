import React from "react";
import "../ContactSectioncss/ContactHero.css";

import bgImg from "../Images/contacthero.png";
import personImg from "../Images/contactperson.png";

const ContactHero = () => {
  return (
    <section
      className="ct-hero-wrapper"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* LEFT SECTION */}
      <div className="ct-left">
        <h1 className="ct-title">Get In Touch</h1>
        <p className="ct-desc">
          Contact us now for questions, support, or more information — 
          we’re always ready to help you anytime.
        </p>
      </div>

      {/* RIGHT PERSON IMAGE */}
      <div className="ct-right">
        <div className="ct-person-wrap">
          <div className="ct-ring"></div>
          <img src={personImg} alt="person" className="ct-person-img" />
          <div className="ct-dots"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
