import React from "react";
import "../coursecss/coursejourney.css";

// Images: update paths according to your project!
import journeyImg from "../Courseimage/journeyimg.png";
import placement from "../Courseimage/placement.png";

const JourneySection = () => (
  <div className="journey-wrapper">

    {/* Curved Top Background + Hero Image */}
    <div className="journey-top">
      <div className="curve-bg"></div>
      <img src={journeyImg} className="journey-img" alt="Journey" />
      <h1 className="journey-headingg">
        Ready to Start <span className="green-span">Your</span> <span className="blue-span">Journey</span>
      </h1>
    </div>

    {/* Top Cards */}
    <div className="journey-cards">
      <div className="journey-card">
        <div className="card-dots">
          {Array(7).fill().map((_, i) => <span key={i} className="dot"></span>)}
        </div>
        <h3>Learn from Industry Experts</h3>
        <p>
          Gain practical insights and skills directly from experienced professionals.
        </p>
        <div className="card-line"></div>
      </div>

      <div className="journey-card">
        <div className="card-dots">
          {Array(7).fill().map((_, i) => <span key={i} className="dot"></span>)}
        </div>
        <h3>Work on Real Client Projects</h3>
        <p>
          Apply your learning through hands-on projects that build real-world experience.
        </p>
        <div className="card-line"></div>
      </div>

      <div className="journey-card">
        <div className="card-dots">
          {Array(7).fill().map((_, i) => <span key={i} className="dot"></span>)}
        </div>
        <h3>Internship + Live Mentorship</h3>
        <p>
          Get guided by mentors while interning on live industry tasks.
        </p>
        <div className="card-line"></div>
      </div>
    </div>

    {/* Placement Card */}
    <div className="journey-bottom-card">
      <div className="card-dots">
        {Array(9).fill().map((_, i) => <span key={i} className="dot"></span>)}
      </div>
      <h3>Placement Support 100%</h3>
      <p>
        Receive complete assistance to kickstart your career with top companies.
      </p>
      <div className="placement-icons">
        <img src={placement} alt="Placement Support" />
      </div>
      <div className="card-line"></div>
    </div>
  </div>
);

export default JourneySection;

