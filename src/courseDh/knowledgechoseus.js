import React, { useRef, useEffect } from "react";
import "../coursecss/knowledgechooseus.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "../Courseimage/choose.png"; // Use your real image file

gsap.registerPlugin(ScrollTrigger);

const WhyChooseNIM = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if(imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div className="why-section">
      <h2 className="why-title">
        <span className="why-blue">Why</span> Choose <span className="why-green">NIM</span> Academy
      </h2>

      <div className="why-grid">
        {/* Left: Image */}
        <div className="why-img-wrap" ref={imageRef}>
          <div className="why-img-circles">
            <img src={heroImage} alt="Students" className="why-img" />
            <span className="why-circle why-c1"></span>
            <span className="why-circle why-c2"></span>
            <span className="why-circle why-c3"></span>
          </div>
        </div>
        {/* Right: Text */}
        <div className="why-list">
          <div className="why-point">Expert Trainers With Real-World Experience</div>
          <div className="why-point">Flexible Learning – Anytime, Anywhere</div>
          <div className="why-point">Beginner-Friendly Lessons</div>
          <div className="why-point">Interview & Career-Focused Training</div>
          <div className="why-point">Affordable Courses With High Value</div>
          <div className="why-point">Continuous Support & Live Guidance</div>
        </div>
      </div>

      {/* Ribbon Box */}
      <div className="ribbons-wrapper">
        <div className="ribbons">
          <p>Stay curious. Keep growing.</p>
        </div>
        <div className="ribbons-shadow"></div>
      </div>

    </div>
  );
};

export default WhyChooseNIM;
