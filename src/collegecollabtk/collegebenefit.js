import React, { useEffect, useRef } from "react";
import "../collegestylestk/collegebenefit.css";

const PartnerBenefits = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");   // <-- CORRECT CLASS
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Customized Training Programs (Online & Offline)",
    "Industry-Recognized Certifications",
    "Dedicated Internship & Placement Access",
    "Faculty Development & Research Collaboration",
    "Student Projects & Hackathons",
    "Annual Career Development Workshop"
  ];

  return (
    <div className="benefits-wrapper">
      <h2 className="benefits-title">
        Partner <span>Benefits</span> at a Glance
      </h2>

      <div className="benefits-grid">
        {benefits.map((text, index) => (
          <div
            className="benefit-card"
            key={index}
            ref={el => (cardRefs.current[index] = el)}
          >
            <div className="benefit-number">{index + 1}</div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerBenefits;
