import React from "react";
import "../knowledgestyletk/internhero.css";

import internImg from "../imagestk/internhero.png";
import bgTexture from "../imagestk/internbg.png";

const InternshipSection = () => {
  return (
    <section className="internship-section">
      <div className="internship-left">
        <div className="internship-circle-bg" />
        <img
          src={internImg}
          alt="Student with laptop"
          className="internship-img"
        />
      </div>

      <div className="internship-right">
        <h2 className="internship-title">Internship</h2>
        <p className="internship-text">
          At NIM Academy, we bridge the gap between academic knowledge and
          industry excellence. Our internship programs are not just about
          learning — they&apos;re about doing, experimenting, and transforming
          your skills into real outcomes.
        </p>
      </div>
    </section>
  );
};

export default InternshipSection;