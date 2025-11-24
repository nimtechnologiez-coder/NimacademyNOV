import React, { useEffect, useRef } from "react";
import "../coursecss/knowledgetimeline.css";

/* GSAP */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* Session Images */
import img1 from "../Courseimage/time2.png";
import img2 from "../Courseimage/time2.png";
import img3 from "../Courseimage/time3.png";

/* Time Images (only using time1 here) */


gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item) => {
      if (!item) return;
      const direction = item.classList.contains("left") ? -100 : 100;
      gsap.fromTo(
        item,
        { opacity: 0, x: direction },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title fade-in">Daily Learning Timeline</h2>

      <div className="timeline">
        {/* RIGHT — 8 AM Inspiration */}
        <div
          className="timeline-item right"
          ref={(el) => (itemsRef.current[0] = el)}
        >
          <div className="content card-hover">
            <h3 className="time-text">
              8 AM
            </h3>
            <p>
              <b>Start Your Day with Inspiration</b>
              <br />
              Begin your morning with short motivational lessons, productivity tips, and mindset training.<br />
              These sessions are designed to energize you and prepare you for a productive day.
            </p>
          </div>
        </div>

        {/* LEFT — 9 AM Practical Skill-Building */}
        <div
          className="timeline-item left"
          ref={(el) => (itemsRef.current[1] = el)}
        >
          <img src={img1} alt="session" className="session-img hover-zoom" />
          <div className="content card-hover">
            <h3 className="time-text">
              9 AM
            </h3>
            <p>
              <b>Practical Skill-Building</b>
              <br />
              Learn essential career and communication skills through interactive modules.<br />
              Topics include English fluency, interview preparation, technical skills, and personality development.
            </p>
          </div>
        </div>

        {/* LEFT — 7 AM Doubt Clearing */}
        <div
          className="timeline-item right"
          ref={(el) => (itemsRef.current[2] = el)}
        >
          <img src={img3} alt="session" className="session-img hover-zoom" />
          <div className="content card-hover">
            <h3 className="time-text">
              7 AM
            </h3>
            <p>
              <b>Evening Doubt Clearing</b>
              <br />
              Join our live doubt-clearing sessions to ask questions and strengthen your weak areas.<br />
              This ensures continuous improvement and clarity in every topic.
            </p>
          </div>
        </div>

        {/* RIGHT — 1 AM Hands-On Practice */}
        <div
          className="timeline-item left"
          ref={(el) => (itemsRef.current[3] = el)}
        >
          <img src={img2} alt="session" className="session-img hover-zoom" />
          <div className="content card-hover">
            <h3 className="time-text">
              1 AM
            </h3>
            <p>
              <b>Hands-On Practice Sessions</b>
              <br />
              Apply what you've learned with real-time activities and guided practice.<br />
              Our mentors help you master concepts using examples, exercises, and mini-projects.
            </p>
          </div>
        </div>

        {/* RIGHT — 8 AM Recap */}
        <div
          className="timeline-item right"
          ref={(el) => (itemsRef.current[4] = el)}
        >
          <div className="content card-hover">
            <h3 className="time-text">
              8 AM
            </h3>
            <p>
              <b>Daily Recap</b>
              <br />
              Start fresh with a quick recap of the previous day's lessons.<br />
              Reinforce learning and track your progress with small assessments and feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;




