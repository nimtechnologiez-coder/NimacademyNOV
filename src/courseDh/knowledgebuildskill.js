import React, { useEffect, useRef, useState } from "react";
import "../coursecss/knowledgebuildskill.css";
import futureImg from "../Courseimage/skillpy.png";

const FutureSection = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // 40% visible triggers animation
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="future-container">
      {/* LEFT CONTENT */}
      <div className="future-left">
        <h2>Building Skills For A Better Future</h2>
        <p>
          At NIM Academy, We Believe Learning Should Be Simple, Practical, And
          Focused On Career Growth. Our Expert-Led Programs Help Students
          Strengthen Their Abilities, Gain Confidence, And Prepare For Real-World
          Opportunities. From Personal Development To Professional Skills, Our
          Mission Is To Guide Every Learner Toward Success.
        </p>
      </div>

      {/* RIGHT IMAGE WITH ANIMATION */}
      <div
        ref={imageRef}
        className={`future-right ${isVisible ? "show" : ""}`}
      >
        
          <img src={futureImg} alt="students" />
     
      </div>
    </div>
  );
};

export default FutureSection;