import React, { useEffect, useRef, useState } from "react";
import "../GalleryCss/CelebrateSection.css";

import img1 from "../Images/CELEBRATE1.jpg";
import img2 from "../Images/CELEBRATE2.jpg";
import img3 from "../Images/Gallery3.png";

const CelebrateSection = () => {
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
    <div className="celebrate-box">

      {/* IMAGES ROW */}
      <div className="row g-3 celebrate-row">

        <div
          ref={(el) => (fadeRefs.current[0] = el)}
          className={`col-md-4 fade-up delay-1 ${visible.includes("0") ? "show" : ""}`}
        >
          <img src={img1} alt="Event 1" />
        </div>

        <div
          ref={(el) => (fadeRefs.current[1] = el)}
          className={`col-md-4 fade-up delay-2 ${visible.includes("1") ? "show" : ""}`}
        >
          <img src={img2} alt="Event 2" />
        </div>

        <div
          ref={(el) => (fadeRefs.current[2] = el)}
          className={`col-md-4 fade-up delay-3 ${visible.includes("2") ? "show" : ""}`}
        >
          <img src={img3} alt="Event 3" />
        </div>

      </div>

      {/* TEXT SECTION */}
      <div className="text-center">

        <div
          ref={(el) => (fadeRefs.current[3] = el)}
          className={`celebrate-title fade-up delay-4 ${visible.includes("3") ? "show" : ""}`}
        >
          LET’S CELEBRATE
        </div>

        <div
          ref={(el) => (fadeRefs.current[4] = el)}
          className={`celebrate-text fade-up delay-5 ${visible.includes("4") ? "show" : ""}`}
        >
          EVERY FESTIVAL, EVERY SMILE, EVERY MOMENT —  
          NIM ACADEMY CELEBRATES IT TOGETHER
        </div>

        <div
          ref={(el) => (fadeRefs.current[5] = el)}
          className={`celebrate-name fade-up delay-6 ${visible.includes("5") ? "show" : ""}`}
        >
          N I M &nbsp; A C A D E M Y
        </div>

      </div>
    </div>
  );
};

export default CelebrateSection;
