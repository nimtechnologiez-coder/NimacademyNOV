// src/components/CollaborationSection.jsx
import React from "react";
import "../knowledgestyletk/internship.css";

const CollaborationSection = () => {
  return (
    <div className="collab-container">
      {/* HEADING */}
      <h2 className="collab-title">
        Industry <span>&</span> College Collaborations
      </h2>

      {/* DESCRIPTION */}
      <p className="collab-description">
        NIM Academy partners with leading colleges and companies across South India to
        provide internships that transform potential into performance. Our students have
        worked with real clients, built live dashboards, secured cloud environments, and
        designed next-gen applications for brands that matter.
      </p>

      {/* MIDDLE GRADIENT CARD */}
      <div className="collab-mid-box"></div>

      {/* BOTTOM GREEN–BLUE GRADIENT BANNER */}
      <div className="collabs-header">
        Turn your curiosity into capability. Join the NIM Internship Program and experience
        what it truly means to be industry-ready.
      </div>
      <div className="collabs-shadow"></div>
    </div>
  );
};

export default CollaborationSection;
