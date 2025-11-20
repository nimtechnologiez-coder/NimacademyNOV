import React, { useEffect, useRef, useState } from "react";
import "../GalleryCss/Moments.css";

import imgMain from "../Images/gallerymov1.png";
import imgTop from "../Images/gallerymov2.png";
import imgMid from "../Images/gallerymov3.png";
import imgBot from "../Images/gallerymov4.png";

const Moments = () => {
  const fadeRefs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const OBS = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.index;
            setVisible((prev) => [...prev, idx]);
          }
        });
      },
      { threshold: 0.25 }
    );

    fadeRefs.current.forEach((el, idx) => {
      if (el) {
        el.dataset.index = idx.toString();
        OBS.observe(el);
      }
    });

    return () => OBS.disconnect();
  }, []);

  return (
    <div className="moments-container">

      {/* TITLE */}
      <h1
        ref={(el) => (fadeRefs.current[0] = el)}
        className={`main-title fade-up delay-1 ${visible.includes("0") ? "show" : ""}`}
      >
        Moments that <span>shape</span> learning
      </h1>

      <div className="container mt-5">
        <div className="row g-4">

          {/* LEFT COLUMN */}
          <div className="col-lg-6">

            <div
              ref={(el) => (fadeRefs.current[1] = el)}
              className={`shadow-box fade-up delay-2 ${visible.includes("1") ? "show" : ""}`}
            >
              <img src={imgMain} className="img-fluid" alt="Main" />
            </div>

            <h2
              ref={(el) => (fadeRefs.current[2] = el)}
              className={`left-heading fade-up delay-3 ${visible.includes("2") ? "show" : ""}`}
            >
              Life at <span>NIM</span> Academy
            </h2>

            <p
              ref={(el) => (fadeRefs.current[3] = el)}
              className={`left-text fade-up delay-4 ${visible.includes("3") ? "show" : ""}`}
            >
              Learning at NIM Academy goes beyond books and code — it’s built on
              passion, teamwork, and curiosity. Every workshop, every class, and
              every project reflects the energy and dedication our students bring.
              These moments highlight the culture, commitment, and real-world learning
              that make NIM Academy one of South India’s most trusted education hubs.
            </p>
          </div>

          {/* CENTER COLUMN */}
          <div className="col-lg-4">

            <div
              ref={(el) => (fadeRefs.current[4] = el)}
              className={`shadow-box fade-up delay-5 center-img-box ${visible.includes("4") ? "show" : ""}`}
            >
              <img src={imgTop} className="center-img" alt="Top" />
            </div>

            <div
              ref={(el) => (fadeRefs.current[5] = el)}
              className={`shadow-box fade-up delay-6 center-img-box ${visible.includes("5") ? "show" : ""}`}
            >
              <img src={imgMid} className="center-img" alt="Mid" />
            </div>

            <div
              ref={(el) => (fadeRefs.current[6] = el)}
              className={`shadow-box fade-up delay-7 center-img-box ${visible.includes("6") ? "show" : ""}`}
            >
              <img src={imgBot} className="center-img" alt="Bottom" />
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div
            ref={(el) => (fadeRefs.current[7] = el)}
            className={`col-lg-2 fade-up delay-8 ${visible.includes("7") ? "show" : ""}`}
          >
            <div className="trending-box">

              <h3
                ref={(el) => (fadeRefs.current[8] = el)}
                className={`fade-up delay-9 ${visible.includes("8") ? "show" : ""}`}
              >
                Trending
              </h3>

              {[
                "The Best Data Analysis Tips for Beginners to Build a Strong Foundation",
                "Inspiring Student Projects Created During Our Live Classes",
                "Powerful Coding Practices Every Beginner Should Learn",
                "How to Build a Career in Tech With Zero Experience",
                "Mastering Digital Marketing: A Practical Guide for Beginners"
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (fadeRefs.current[9 + i] = el)}
                  className={`trend-item fade-up delay-${10 + i} ${
                    visible.includes(String(9 + i)) ? "show" : ""
                  }`}
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Moments;
