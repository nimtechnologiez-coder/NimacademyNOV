import React from "react";
import "../knowledgestyletk/interncards.css";

import durationImg from "../imagestk/duration.png";
import modeImg from "../imagestk/durationmode.png";
import structureImg from "../imagestk/durationstructure.png";
import gain1 from "../imagestk/gain1.png";
import gain2 from "../imagestk/gain2.png";
import gain3 from "../imagestk/gain3.png";
import gain4 from "../imagestk/gain4.png";

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

      {/* TOP CARDS */}
      <div className="info-cards-row">
        {cards.map((card, index) => (
          <div className="info-card" key={index}>
            <div className="card-circle-wrap">
              <div className="card-circle-ring">
                <div className="card-circle-img">
                  <img src={card.img} alt={card.title} />
                </div>
              </div>
            </div>

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

      {/* SECTION TITLE */}
      <h2 className="section-title">What You’ll Gain</h2>

      <p className="section-description">
        Discover the skills, confidence, and real-world experience you need to
        stand out in your career. Through expert guidance, hands-on projects, and
        practical learning, you’ll gain industry-ready knowledge and the mindset
        to grow, adapt, and succeed.
      </p>

      {/* GAIN CARDS WITH IMAGES */}
      <div className="gain-grid">
        
        <div className="gain-card">
          <div className="gain-img">
            <img src={gain1} alt="Real-World Project Exposure" />
          </div>
          <p>Real-World Project Exposure Across Domains</p>
        </div>

        <div className="gain-card">
          <div className="gain-img">
            <img src={gain2} alt="Internship Certification" />
          </div>
          <p>Internship Certification Recognized By Top Colleges And Industry Partners</p>
        </div>

        <div className="gain-card">
          <div className="gain-img">
            <img src={gain3} alt="Placement Network" />
          </div>
          <p>Access To NIM Placement Network For Future Job Opportunities</p>
        </div>

        <div className="gain-card">
          <div className="gain-img">
            <img src={gain4} alt="Mentorship from Experts" />
          </div>
          <p>Mentorship From Industry Experts & Company Professionals</p>
        </div>

      </div>

    </section>
  );
};

export default InternshipTopCards;
