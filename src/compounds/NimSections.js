import React, { useRef, useEffect, useState } from 'react';
import '../Style/NimSections.css';

// Local image
import heroImage from "../Images/home.png";

const HeroSection = () => {

  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const bannerRef = useRef(null);

  const [animate, setAnimate] = useState({
    heading: false,
    text: false,
    image: false,
    banner: false
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
      { threshold: 0.2 }
    );

    headingRef.current.dataset.anim = "heading";
    textRef.current.dataset.anim = "text";
    imageRef.current.dataset.anim = "image";
    bannerRef.current.dataset.anim = "banner";

    observer.observe(headingRef.current);
    observer.observe(textRef.current);
    observer.observe(imageRef.current);
    observer.observe(bannerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="nim-hero-section">

      {/* HEADING */}
      <h1
        ref={headingRef}
        className={`nim-hero-heading nim-fade-up ${animate.heading ? "show" : ""}`}
      >
        Trusted by 100+ Colleges. Chosen by 1 Lakh+ Learners.
      </h1>

      <h2
        className={`nim-hero-subheading nim-fade-up-delay ${animate.heading ? "show" : ""}`}
      >
        Recognized Across South India
      </h2>

      {/* CONTENT WRAPPER */}
      <div className="nim-content-wrapper">

        {/* LEFT TEXT */}
        <div
          ref={textRef}
          className={`nim-text-content nim-fade-left ${animate.text ? "show" : ""}`}
        >
          <p>
            From the heart of Kanyakumari, Nim Academy has grown into a symbol of trust,
            innovation, and results-driven learning. Every success story we create adds to our
            mission — bridging education and industry with real outcomes.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          ref={imageRef}
          className={`nim-image-content nim-fade-right ${animate.image ? "show" : ""}`}
        >
          <div className="nim-image-wrapper">
            <img src={heroImage} alt="Nim Academy Students" />
          </div>
        </div>

      </div>

      {/* MISSION BANNER */}
      <div
        ref={bannerRef}
        className={`nim-banner-wrapper nim-fade-banner ${animate.banner ? "show" : ""}`}
      >
        <div className="nim-banner">
          <p>
            Every <span className="highlight-teal">success</span> story we create adds to our mission —
            bridging education and industry with <span className="highlight-lime">real</span> outcomes.
          </p>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
