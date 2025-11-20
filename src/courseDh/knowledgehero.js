import React from "react";
import "../coursecss/knowledgehero.css";

import bgImg from "../Courseimage/knowledgehero.png";      // gradient + curve
import knowledgeMan from "../Courseimage/blogheroperson.png"; // man + shapes

const KnowledgeBanner = () => {
  return (
    <section
      className="kb-hero"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="kb-inner">
        {/* LEFT – TEXT */}
        <div className="kb-left">
          <h1 className="kb-title">Your Daily Dose of Knowledge</h1>
          <p className="kb-subhead">
            Benefits of Online Learning You
            <br />
            Can’t Ignore in 2025
          </p>
        </div>

        {/* RIGHT – MAN IMAGE */}
        <div className="kb-right">
          <img
            src={knowledgeMan}
            alt="Smiling man pointing"
            className="kb-man-image"
          />
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBanner;