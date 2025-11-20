import React, { useRef, useEffect } from "react";
import "../coursecss/collabhero.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import campusesBg from "../Courseimage/collabbg.png";  // bg image with curve
import girlImg from "../Courseimage/collabgirl.png";   // girl image

gsap.registerPlugin(ScrollTrigger);

const EmpoweringCampuses = () => {
  const imgWrapRef = useRef(null);

  useEffect(() => {
    if (!imgWrapRef.current) return;

    gsap.fromTo(
      imgWrapRef.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgWrapRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      className="campus-empower-section"
      style={{ backgroundImage: `url(${campusesBg})` }}  // 👈 only the image
    >
      <div className="campus-empower-content">
        {/* Text Content */}
        <div className="campus-empower-left">
          <h2 className="campus-empower-title">
            Empowering Campuses,
            <br />
            Transforming Futures
          </h2>
          <p className="campus-empower-desc">
            At NIM Academy, we believe true education happens when academia
            meets industry. That’s why we’ve partnered with leading colleges
            and universities across South India to bridge the gap between
            classroom learning and real-world skills. Our collaborations are
            built to empower students, equip faculty, and enhance institutional
            value through training, internships, and placement programs designed
            by industry experts.
          </p>
        </div>

        {/* Girl Image */}
        <div className="campus-empower-right" ref={imgWrapRef}>
          <div className="campus-img-circle">
            <img src={girlImg} alt="Campus Girl" className="campus-girl-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringCampuses;