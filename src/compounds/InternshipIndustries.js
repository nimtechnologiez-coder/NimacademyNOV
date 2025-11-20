import React, { useEffect } from "react";
import "../Style/InternshipIndustries.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faGraduationCap,
  faUtensils,
  faChartLine,
  faGears,
  faCode,
  faDesktop
} from "@fortawesome/free-solid-svg-icons";

const InternshipIndustries = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("ii-show");
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".ii-fade-up, .ii-fade-right, .ii-fade-delay")
      .forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="ii-wrapper">

      {/* HEADER */}
      <h1 className="ii-fade-up">
        Internship at <span className="ii-nim">NIM</span>{" "}
        <span className="ii-academy">Academy</span>
      </h1>

      <h2 className="ii-fade-up">Step Into the Industry</h2>

      <p className="ii-desc ii-fade-up">
        At <strong>NIM Academy</strong>, every learner gets real-time project
        exposure with <span className="ii-blue-highlight">industry experts</span>.
        Internships are <span className="ii-green-highlight">impact-based</span>,
        shaping you into a job-ready professional.
      </p>

      {/* ICON CIRCLES */}
      <div className="ii-circle-wrapper">

        <div className="ii-circle-box ii-fade-right">
          <div className="ii-circle">
            <FontAwesomeIcon icon={faChartLine} className="ii-circle-icon" />
          </div>
          <h3>Data Analytics & AI</h3>
          <p>Focus on real-time data challenges.</p>
        </div>

        <div className="ii-circle-box ii-fade-right" style={{ animationDelay: ".2s" }}>
          <div className="ii-circle">
            <FontAwesomeIcon icon={faGears} className="ii-circle-icon" />
          </div>
          <h3>AWS & DevOps</h3>
          <p>Learn deployment & cloud automation.</p>
        </div>

        <div className="ii-circle-box ii-fade-right" style={{ animationDelay: ".4s" }}>
          <div className="ii-circle">
            <FontAwesomeIcon icon={faCode} className="ii-circle-icon" />
          </div>
          <h3>Full Stack</h3>
          <p>Hands-on MERN & Python full stack.</p>
        </div>

        <div className="ii-circle-box ii-fade-right" style={{ animationDelay: ".6s" }}>
          <div className="ii-circle">
            <FontAwesomeIcon icon={faDesktop} className="ii-circle-icon" />
          </div>
          <h3>UI/UX Design</h3>
          <p>Design stunning user experiences.</p>
        </div>

      </div>

      {/* INDUSTRIES SECTION */}
      <h1 className="ii-section-title ii-fade-up">
        Industries <span className="ii-blue-text">We</span>{" "}
        <span className="ii-green-text">Work With</span>
      </h1>

      <p className="ii-subtitle ii-fade-up">
        We collaborate with Education, IT, SaaS, Finance & FoodTech industries
        to provide practical, job-ready learning experiences.
      </p>

      <div className="ii-cards ii-fade-up">

        <div className="ii-industry-card ii-fade-up">
          <FontAwesomeIcon icon={faCloud} className="ii-industry-icon" />
          <h3>SaaS</h3>
          <p>Cloud-native platforms & automation systems.</p>
        </div>

        <div className="ii-industry-card ii-middle ii-fade-up">
          <FontAwesomeIcon icon={faGraduationCap} className="ii-industry-icon" />
          <h3>Education</h3>
          <p>Smart LMS, eLearning, and analytics systems.</p>
        </div>

        <div className="ii-industry-card ii-fade-up">
          <FontAwesomeIcon icon={faUtensils} className="ii-industry-icon" />
          <h3>FoodTech</h3>
          <p>AI-powered restaurant & inventory systems.</p>
        </div>

      </div>

    </div>
  );
};

export default InternshipIndustries;
