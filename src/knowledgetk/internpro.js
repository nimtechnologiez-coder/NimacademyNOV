// src/components/InternshipDetails.jsx
import React from "react";
import "../knowledgestyletk/internpro.css";

// 🔁 Update these paths & filenames to match your project structure
import durationImg from "../imagestk/twocategory.png";
import modeImg from "../imagestk/python.png";
import structureImg from "../imagestk/productdd.png";

const InternshipDetails = () => {
  return (
    <div className="container">
      {/* TOP 3 CARDS */}
      <div className="three-box">
        <div className="three-card">
          <img src={durationImg} alt="Duration" />
          <h3>DURATION</h3>
          <p>
            1 Month or 2 Months
            <br />
            (Flexible)
          </p>
        </div>

        <div className="three-card">
          <img src={modeImg} alt="Mode" />
          <h3>MODE</h3>
          <p>Available Online &amp; Offline</p>
        </div>

        <div className="three-card">
          <img src={structureImg} alt="Structure" />
          <h3>STRUCTURE</h3>
          <p>
            Live Mentor Sessions + Daily Tasks + Real Project + Final
            Evaluation
          </p>
        </div>
      </div>

      {/* WHAT YOU GAIN SECTION */}
      <h2 className="section-title">What You’ll Gain</h2>

      <p className="section-description">
        Discover the skills, confidence, and real-world experience you need to
        stand out in your career. Through expert guidance, hands-on projects,
        and practical learning, you’ll gain industry-ready knowledge and the
        mindset to grow, adapt, and succeed in any professional environment.
      </p>

      {/* 4 GAIN CARDS */}
      <div className="gain-grid">
        <div className="gain-card">
          <div className="gain-icon">📊</div>
          <p>Real-World Project Exposure Across Domains</p>
        </div>

        <div className="gain-card">
          <div className="gain-icon">🎓</div>
          <p>Internship Certification Recognized By Top Colleges And Industry Partners</p>
        </div>

        <div className="gain-card">
          <div className="gain-icon">💼</div>
          <p>Access To NIM Placement Network For Future Job Opportunities</p>
        </div>

        <div className="gain-card">
          <div className="gain-icon">🚀</div>
          <p>Mentorship From Industry Experts &amp; Company Professionals</p>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
