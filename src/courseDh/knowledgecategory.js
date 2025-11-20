import React, { useRef, useEffect } from "react";
import "../coursecss/knowledgecategory.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import num01 from "../Courseimage/onecategory.png";
import num02 from "../Courseimage/twocategory.png";
import num03 from "../Courseimage/threecategory.png";
import num04 from "../Courseimage/fourcategory.png";
// If you have a right-side image, import e.g.:
// import rightImage from "../knowledgestyle/uiux.png";

gsap.registerPlugin(ScrollTrigger);

const CategoryDescriptions = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 88%",
            end: "bottom 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className="category-section">
      <h2 className="cat-title">
        <span className="cat-green">Category</span>{" "}
        <span className="cat-blue">Descriptions</span>
      </h2>
      <div className="cat-grid-wrapper">
        <div className="cat-grid">
          <div className="cat-card">
            <img src={num01} alt="01" className="cat-card-num-img" />
            <div className="cat-card-text">
              Build your confidence with practical advice for interviews, resumes, and real-world career growth.
            </div>
          </div>
          <div className="cat-card">
            <img src={num02} alt="02" className="cat-card-num-img" />
            <div className="cat-card-text">
              Stay updated with the latest trends in Data Analysis, AI, UI/UX, programming, and digital innovation.
            </div>
          </div>
          <div className="cat-card">
            <div className="cat-card-text">
              Read inspiring achievements and project journeys from our learners across South India.
            </div>
            <img src={num03} alt="03" className="cat-card-num-img" />
          </div>
          <div className="cat-card">
            <div className="cat-card-text">
              Explore beginner-friendly guides, study hacks, tools, and step-by-step tutorials for faster learning.
            </div>
            <img src={num04} alt="04" className="cat-card-num-img" />
          </div>
        </div>
        {/* If you have a right-side image, include this block:
        <div className="cat-img-right" ref={imageRef}>
          <img src={rightImage} alt="Category" className="cat-right-img" />
        </div>
        */}
      </div>
    </div>
  );
};

export default CategoryDescriptions;

