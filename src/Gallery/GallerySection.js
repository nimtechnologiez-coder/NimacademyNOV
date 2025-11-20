import React, { useEffect, useRef, useState } from "react";
import "../GalleryCss/GallerySection.css";

import img1 from "../Images/Gallery1.png";
import img2 from "../Images/Gallery2.png";
import img3 from "../Images/Gallery3.png";
import img4 from "../Images/Gallery4.png";
import bigImg from "../Images/Gallerybig.png";

const GallerySection = () => {
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

    fadeRefs.current.forEach((el, i) => {
      if (el) {
        el.dataset.index = i.toString();
        OBS.observe(el);
      }
    });

    return () => OBS.disconnect();
  }, []);

  return (
    <div className="gallery-wrapper">

      {/* TOP CONTENT */}
      <div
        ref={(el) => (fadeRefs.current[0] = el)}
        className={`top-text fade-up delay-1 ${visible.includes("0") ? "show" : ""}`}
      >
        Every snapshot tells a story — of learning, growth, and the people who
        make it happen. At NIM Academy, we’re not just an EdTech brand — we’re a
        community of passionate learners, mentors, and innovators.
      </div>

      {/* MAIN TITLE */}
      <div
        ref={(el) => (fadeRefs.current[1] = el)}
        className={`highlight-title fade-up delay-2 ${visible.includes("1") ? "show" : ""}`}
      >
        Explore the journey that’s <span>shaping</span> tomorrow’s tech leaders
        across <span>South India</span>
      </div>

      {/* IMAGE ROW */}
      <div className="image-row">
        {[img1, img2, img3, img4].map((src, i) => (
          <div
            key={i}
            ref={(el) => (fadeRefs.current[i + 2] = el)}
            className={`img-card fade-up delay-${i + 3} ${
              visible.includes(String(i + 2)) ? "show" : ""
            }`}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>

      {/* BIG IMAGE */}
      <div
        ref={(el) => (fadeRefs.current[6] = el)}
        className={`big-img-card fade-up delay-7 ${visible.includes("6") ? "show" : ""}`}
      >
        <img src={bigImg} alt="Main" />
      </div>

      {/* CAPTION */}
      <div
        ref={(el) => (fadeRefs.current[7] = el)}
        className={`caption-bar fade-up delay-8 ${visible.includes("7") ? "show" : ""}`}
      >
        Behind every successful student is a passionate mentor
      </div>
    </div>
  );
};

export default GallerySection;
