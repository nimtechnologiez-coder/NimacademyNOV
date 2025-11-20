import React, { useRef, useEffect, useState } from "react";
import "../Style/CoursesSection.css";

import {
  FaRulerCombined,
  FaFlask,
  FaBook,
  FaGlobe,
  FaLaptopCode,
  FaBullseye
} from "react-icons/fa6";

import rightImage from "../Images/home1.png";

const leftItems = [
  { title: "Better Evaluation for\nEvery Learner", icon: <FaRulerCombined /> },
  { title: "Empowering the World\nwith Knowledge", icon: <FaGlobe /> },
  { title: "Creative Learning with\nReal Examples", icon: <FaLaptopCode /> },
];

const rightItems = [
  { title: "Complete Tech\nTraining Ecosystem", icon: <FaFlask /> },
  { title: "Strategies for\nEvery Learner", icon: <FaBook /> },
  { title: "Comprehensive\nLearning Expertise", icon: <FaBullseye /> },
];

const CoursesScreenshot = () => {

  // Refs
  const headingRef = useRef(null);
  const leftRef = useRef([]);
  const rightRef = useRef([]);
  const imageRef = useRef(null);

  // state
  const [animate, setAnimate] = useState({
    heading: false,
    left: [],
    right: [],
    image: false
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animKey = entry.target.dataset.anim;

            setAnimate(prev => ({
              ...prev,
              [animKey]: animKey === "left" || animKey === "right"
                ? [...prev[animKey], entry.target.dataset.index]
                : true
            }));

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // heading
    headingRef.current.dataset.anim = "heading";
    observer.observe(headingRef.current);

    // left items
    leftRef.current.forEach((el, index) => {
      el.dataset.anim = "left";
      el.dataset.index = index;
      observer.observe(el);
    });

    // right items
    rightRef.current.forEach((el, index) => {
      el.dataset.anim = "right";
      el.dataset.index = index;
      observer.observe(el);
    });

    // image
    imageRef.current.dataset.anim = "image";
    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cs-wrapper">

      {/* Heading */}
      <div
        ref={headingRef}
        className={`cs-header fade-up ${animate.heading ? "show" : ""}`}
      >
        <h2 className="cs-main-heading">
          Conceptualizing <span className="highlight">Courses</span> the Smart Way
        </h2>

        <p className="cs-subheading">
          We simplify complex topics through real-world learning,
          helping every student understand and apply concepts with confidence.
        </p>
      </div>

      <div className="cs-grid">

        {/* LEFT SIDE */}
        <div className="cs-left">
          {leftItems.map((item, i) => (
            <div
              key={i}
              ref={el => (leftRef.current[i] = el)}
              className={`cs-row fade-left ${
                animate.left.includes(String(i)) ? "show" : ""
              }`}
            >
              <div className="cs-text-box">
                {item.title.split("\n").map((line, idx) => (
                  <h3 key={idx} className="cs-title">{line}</h3>
                ))}
                <div className="cs-underline"></div>
              </div>
              <div className="cs-icon-box">{item.icon}</div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="cs-right">
          {rightItems.map((item, i) => (
            <div
              key={i}
              ref={el => (rightRef.current[i] = el)}
              className={`cs-row fade-right ${
                animate.right.includes(String(i)) ? "show" : ""
              }`}
            >
              <div className="cs-icon-box">{item.icon}</div>
              <div className="cs-text-box">
                {item.title.split("\n").map((line, idx) => (
                  <h3 key={idx} className="cs-title">{line}</h3>
                ))}
                <div className="cs-underline"></div>
              </div>
            </div>
          ))}
        </div>

        {/* IMAGE */}
        <div
          ref={imageRef}
          className={`cs-image-box fade-slide-right ${animate.image ? "show" : ""}`}
        >
          <img src={rightImage} alt="Learning" className="cs-image" />
        </div>

      </div>
    </section>
  );
};

export default CoursesScreenshot;
