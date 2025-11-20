import React, { useRef, useEffect, useState } from "react";
import "../Programcss/WhyCreatedProgram.css";
import girlImg from "../Images/program1.png";

const WhyCreatedProgram = () => {

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const [animate, setAnimate] = useState({
    heading: false,
    text: false,
    image: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate((prev) => ({
              ...prev,
              [entry.target.dataset.anim]: true
            }));
          }
        });
      },
      { threshold: 0.25 }
    );

    headingRef.current.dataset.anim = "heading";
    textRef.current.dataset.anim = "text";
    imageRef.current.dataset.anim = "image";

    observer.observe(headingRef.current);
    observer.observe(textRef.current);
    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="why-wrapper">

      {/* HEADING – Fade Up */}
      <h2
        ref={headingRef}
        className={`why-heading fade-up ${animate.heading ? "show" : ""}`}
      >
        Why We Created This Program
      </h2>

      <div className="why-content">

        {/* LEFT TEXT – Fade Up */}
        <div
          ref={textRef}
          className={`why-text fade-up ${animate.text ? "show" : ""}`}
        >
          <p>
            We saw how students spend months learning — and still feel unprepared
            for real work. That’s why NIM Academy created a power-packed,
            outcome-based learning model — where students learn, build, and
            showcase their skills in just 17 day. Each program blends theory,
            tools, and projects that mirror real industry environments — helping
            you stand out faster and smarter.
          </p>
        </div>

        {/* RIGHT CIRCLE IMAGE – Fade Right */}
        <div
          ref={imageRef}
          className={`why-circle fade-right ${animate.image ? "show" : ""}`}
        >
          <img src={girlImg} alt="Student" />
        </div>

      </div>
    </div>
  );
};

export default WhyCreatedProgram;
