import React from "react";
import "../Style/VerifiedHero.css";
import heroMan from "../Images/oneheroman.png";

const VerifiedHero = () => {
  return (
    <section className="verified-hero">

      {/* LEFT IMAGE + BLUE SHAPE */}
      <div className="vh-left">
        <img src={heroMan} alt="Professional" className="vh-man" />
      </div>

      {/* RIGHT TEXT */}
      <div className="vh-right">
        <h1>
          Verified Learning System <br />
          <span>(NIM Academy)</span>
        </h1>

        <p className="vh-sub">Education with Ethics,</p>
        <p className="vh-sub">Training with Purpose.</p>
      </div>
    </section>
  );
};

export default VerifiedHero;
