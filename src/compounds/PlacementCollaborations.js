import React, { useEffect } from "react";
import "../Style/PlacementCollaborations.css";

import NICHE from "../Images/Dmi.png";
import DMI from "../Images/Nice.png";
import SATYAM from "../Images/satyam.png";
import XAVIER from "../Images/XAVIER.png";

const PlacementCollaborations = () => {

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("pc-show");
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".pc-fade-up")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <div className="pc-wrapper">

      {/* TOP GREEN SHAPE */}
      <div className="pc-top-shape pc-fade-up">
        <div className="pc-star pc-fade-up pc-delay-1"></div>

        <h2 className="pc-top-text pc-fade-up pc-delay-2">
          Our collaborations are designed to make every student <br />
          industry-ready before graduation.
        </h2>
      </div>

      {/* BLUE LINE */}
      <div className="pc-blue-line"></div>

      {/* CIRCLE SECTION */}
      <div className="pc-circles-section">

        {/* Circle 1 */}
        <div className="pc-circle-wrapper pc-fade-up pc-delay-1">
          <div className="pc-circle-gradient">
            <div className="pc-circle-inner">
              <img src={NICHE} alt="NICHE" />
            </div>
          </div>
        </div>

        {/* Circle 2 */}
        <div className="pc-circle-wrapper pc-fade-up pc-delay-2">
          <div className="pc-circle-gradient">
            <div className="pc-circle-inner">
              <img src={DMI} alt="DMI" />
            </div>
          </div>
        </div>

        {/* Circle 3 */}
        <div className="pc-circle-wrapper pc-fade-up pc-delay-3">
          <div className="pc-circle-gradient">
            <div className="pc-circle-inner">
              <img src={SATYAM} alt="SATYAM" />
            </div>
          </div>
        </div>

        {/* Circle 4 */}
        <div className="pc-circle-wrapper pc-fade-up pc-delay-4">
          <div className="pc-circle-gradient">
            <div className="pc-circle-inner">
              <img src={XAVIER} alt="XAVIER" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PlacementCollaborations;
