import React, { useEffect, useRef, useState } from "react";
import "../Programcss/HeroSection.css";

import heroImg1 from "../Images/programcentre.png";
import bgHero from "../Images/bgimage.png";

const ProgramHero = () => {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const descRef = useRef(null);
  const imgRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);

  const [show, setShow] = useState({
    title: false,
    sub: false,
    desc: false,
    img: false,
    leftBtn: false,
    rightBtn: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow((prev) => ({
              ...prev,
              [entry.target.dataset.anim]: true,
            }));
          }
        });
      },
      { threshold: 0.25 }
    );

    titleRef.current.dataset.anim = "title";
    subRef.current.dataset.anim = "sub";
    descRef.current.dataset.anim = "desc";
    imgRef.current.dataset.anim = "img";
    leftBtnRef.current.dataset.anim = "leftBtn";
    rightBtnRef.current.dataset.anim = "rightBtn";

    observer.observe(titleRef.current);
    observer.observe(subRef.current);
    observer.observe(descRef.current);
    observer.observe(imgRef.current);
    observer.observe(leftBtnRef.current);
    observer.observe(rightBtnRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="hero-wrapper program-hero-bg"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="center-layout">

        {/* TITLE */}
        <h1
          ref={titleRef}
          className={`program-title fade-up ${show.title ? "show" : ""}`}
        >
          17–Day Power Programs
        </h1>

        {/* SUB HEADING */}
        <p
          ref={subRef}
          className={`program-sub fade-up ${show.sub ? "show" : ""}`}
        >
          Fast-Track Your Career with NIM’s 17–Day Power Programs.
        </p>

        {/* DESCRIPTION */}
        <p
          ref={descRef}
          className={`program-desc fade-up ${show.desc ? "show" : ""}`}
        >
          At NIM Academy, we’ve redefined how learning works.
          Our 17-day immersive programs condense <b>6 months of learning</b> into
          an intense, project-based experience created by industry professionals.
        </p>

        {/* CENTER IMAGE */}
        <div
          ref={imgRef}
          className={`hero-center-image-1 fade-up ${show.img ? "show" : ""}`}
        >
          <img src={heroImg1} alt="Main Program" />
        </div>

        {/* LEFT BUTTON */}
        <div
          ref={leftBtnRef}
          className={`mini-btn left-btn fade-down ${show.leftBtn ? "show" : ""}`}
        >
          10 Mini Projects
        </div>

        {/* RIGHT BUTTON */}
        <div
          ref={rightBtnRef}
          className={`mini-btn right-btn fade-down ${show.rightBtn ? "show" : ""}`}
        >
          100% Real Learning.
        </div>

      </div>
    </section>
  );
};

export default ProgramHero;
