import React, { useEffect, useRef, useState } from "react";
import "../GalleryCss/MouSection.css";

import mouImg1 from "../Images/Collaboration1.png";
import mouImg2 from "../Images/Collaboration2.png";

const MoUCombined = () => {
  const fadeRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const OBS = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = e.target.dataset.index;
            setVisible((prev) => [...prev, idx]);
          }
        });
      },
      { threshold: 0.25 }
    );

    fadeRefs.current.forEach((el, i) => {
      if (el) {
        el.dataset.index = i.toString();
        OBS.observe(el);
      }
    });

    return () => OBS.disconnect();
  }, []);

  return (
    <div className="mou-full-container">

      {/* ========== SECTION 1 — TWO MoU CARDS ========== */}
      <h1
        ref={(el) => (fadeRefs.current[0] = el)}
        className={`main-title big-main-title fade-up delay-1 ${
          visible.includes("0") ? "show" : ""
        }`}
      >
        Our Latest <span>Collaborations</span>
      </h1>

      <h2
        ref={(el) => (fadeRefs.current[1] = el)}
        className={`sub-title big-sub-title fade-up delay-2 ${
          visible.includes("1") ? "show" : ""
        }`}
      >
        New MoUs Signed with <span>Top Institutions</span>
      </h2>

      <p
        ref={(el) => (fadeRefs.current[2] = el)}
        className={`desc-text fade-up delay-3 ${
          visible.includes("2") ? "show" : ""
        }`}
      >
        NIM Academy continues expanding its industry–academia partnerships.
        Here are the latest MoU collaborations empowering students with
        real-world, job-ready skills.
      </p>

      <div className="row mou-row g-4">
        {[mouImg1, mouImg2].map((img, i) => (
          <div
            key={i}
            ref={(el) => (fadeRefs.current[3 + i] = el)}
            className={`col-md-6 fade-up delay-${4 + i} ${
              visible.includes(String(3 + i)) ? "show" : ""
            }`}
          >
            <div className="mou-wrapper hover-card">
              <img src={img} alt="MoU" className="mou-image" />
            </div>
          </div>
        ))}
      </div>

      {/* ========== SECTION 2 — BENEFITS ========== */}
      <div className="mou-benefits">

        <h2
          ref={(el) => (fadeRefs.current[5] = el)}
          className={`benefits-title big-benefits-title fade-up delay-6 ${
            visible.includes("5") ? "show" : ""
          }`}
        >
          Through this collaboration, students will <br /> gain access to:
        </h2>

        <div className="benefits-list">
          {[
            "Industry-aligned training programs in AI, ML, Data Analytics, Cloud, Cybersecurity, Full Stack, and more",
            "Internship opportunities with real-time project experience",
            "Placement support through our 250+ hiring partners",
            "Workshops, bootcamps, and hackathons conducted by NIM Academy experts",
            "Faculty development programs to bring the latest industry trends to the classroom",
          ].map((text, i) => (
            <p
              key={i}
              ref={(el) => (fadeRefs.current[6 + i] = el)}
              className={`fade-up delay-${7 + i} ${
                visible.includes(String(6 + i)) ? "show" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        <h2
          ref={(el) => (fadeRefs.current[11] = el)}
          className={`benefits-bottom-text big-benefits-bottom fade-up delay-12 ${
            visible.includes("11") ? "show" : ""
          }`}
        >
          This MoU reinforces our commitment to transforming <br />
          engineering education by bridging the gap between <br />
          academia and industry.
        </h2>
      </div>

      {/* ========== SECTION 3 — FEATURE BANNER ========== */}
      <div className="feature-section">

        <h2
          ref={(el) => (fadeRefs.current[12] = el)}
          className={`feature-title big-feature-title fade-up delay-13 ${
            visible.includes("12") ? "show" : ""
          }`}
        >
          Want to Feature Here?
        </h2>

        <p
          ref={(el) => (fadeRefs.current[13] = el)}
          className={`feature-subtext fade-up delay-14 ${
            visible.includes("13") ? "show" : ""
          }`}
        >
          Be part of the next big moment. Join our upcoming programs,
          workshops, or internships and step into the NIM Academy journey.
        </p>

        <div
          ref={(el) => (fadeRefs.current[14] = el)}
          className={`feature-banner fade-up delay-15 ${
            visible.includes("14") ? "show" : ""
          }`}
        >
          Together we learn, grow, and rise.
        </div>

      </div>

    </div>
  );
};

export default MoUCombined;
