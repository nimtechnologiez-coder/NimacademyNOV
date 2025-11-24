// src/components/InternshipTopCards.jsx
import React from "react";
import "../knowledgestyletk/interncards.css";

// 🔁 Change these imports to your actual image paths
import durationImg from "../imagestk/duration.png";
import modeImg from "../imagestk/durationmode.png";
import structureImg from "../imagestk/durationstructure.png";

const cards = [
  {
    img: durationImg,
    title: "DURATION",
    lines: ["1 Month or 2 Months", "(Flexible)"],
  },
  {
    img: modeImg,
    title: "MODE",
    lines: ["Available Online & Offline"],
  },
  {
    img: structureImg,
    title: "STRUCTURE",
    lines: [
      "Live Mentor Sessions + Daily",
      "Tasks + Real Project + Final",
      "Evaluation",
    ],
  },
];

const InternshipTopCards = () => {
  return (
    <section className="three-cards-section">
      <div className="three-cards-wrapper">
        {cards.map((card, index) => (
          <div className="info-card" key={index}>
            {/* Circle image with colored arcs */}
            <div className="card-circle-wrap">
              <div className="card-circle-ring">
                <div className="card-circle-img">
                  <img src={card.img} alt={card.title} />
                </div>
              </div>
            </div>

            {/* Text content */}
            <h3 className="info-card-title">{card.title}</h3>
            <p className="info-card-text">
              {card.lines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i !== card.lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
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
    
    </section>
  );
};

export default InternshipTopCards;
