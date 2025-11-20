import React, { useEffect } from "react";
import "../Style/CoursesPage.css";

import iconCloud from "../Images/Analytics free icon.jpg";
import iconData from "../Images/database.png";
import iconCyber from "../Images/hack.png";
import iconAI from "../Images/artificial-intelligence.png";
import iconDevops from "../Images/Devops.png";
import iconFullstack from "../Images/Fullstack.png";
import iconUIUX from "../Images/uxui.jpg";
import iconTesting from "../Images/software-testing.png";

import pythonImg from "../Images/pythonImg.png";
import dataAnalystImg from "../Images/dataAnalystImg.png";
import devopsImg from "../Images/aws.png";

const CoursesPage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cpg-show");
            entry.target.style.animationDelay = `${index * 0.15}s`;
          }
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".cpg-fade-up, .cpg-fade-right").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  const techCourses = [
    { icon: iconCloud, title: "Cloud Computing" },
    { icon: iconData, title: "Data Analytics" },
    { icon: iconCyber, title: "Cyber Security" },
    { icon: iconAI, title: "Artificial Intelligence" },
    { icon: iconDevops, title: "DevOps Engineering" },
    { icon: iconFullstack, title: "Full Stack Development" },
    { icon: iconUIUX, title: "UI / UX Designing" },
    { icon: iconTesting, title: "Software Testing" }
  ];

  return (
    <div className="cpg-wrapper">

      {/* SECTION ONE */}
      <section className="cpg-section-one">

        <h2 className="cpg-main-heading cpg-fade-up">
          Courses That <span className="cpg-green">Shape</span> Future{" "}
          <span className="cpg-blue">Careers</span>
        </h2>

        <p className="cpg-section-description cpg-fade-up">
          At <span className="cpg-green cpg-bold">NIM Academy</span>, we don’t just teach —
          we transform learners into professionals.
          <br />
          Our programs are curated by industry experts and aligned with the latest
          technology trends.
        </p>

        {/* AUTO SLIDER */}
        <div className="cpg-slider-container cpg-fade-up">
          <div className="cpg-slider-track">

            <div className="cpg-card-group">
              {techCourses.map((item, i) => (
                <div key={i} className="cpg-course-card cpg-fade-up">
                  <img src={item.icon} className="cpg-card-icon" alt={item.title} />
                  <div className="cpg-card-title">{item.title}</div>
                </div>
              ))}
            </div>

            <div className="cpg-card-group">
              {techCourses.map((item, i) => (
                <div key={i} className="cpg-course-card cpg-fade-up">
                  <img src={item.icon} className="cpg-card-icon" alt={item.title} />
                  <div className="cpg-card-title">{item.title}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        <h2 className="cpg-footer-line cpg-fade-up">
          Whether you want to build, analyze, design, or lead — <br />
          we’ve got the right course for you.
        </h2>
      </section>

      {/* SECTION TWO */}
      <section className="cpg-section-two">

        <h2 className="cpg-section2-heading cpg-fade-up">
          Course <span className="cpg-blue">&</span> Tagline
        </h2>

        <div className="cpg-arrow-line-wrapper cpg-fade-up">
          <div className="cpg-arrow-line"></div>
        </div>

        <div className="cpg-hanging-cards">

          <div className="cpg-hang-item cpg-fade-right">
            <div className="cpg-hanger"></div>
            <div className="cpg-clip"></div>
            <div className="cpg-hang-card">
              <img src={pythonImg} alt="Python Full Stack" />
              <h4>Python Full Stack</h4>
              <p>Build Web Apps That Perform & Scale</p>
            </div>
          </div>

          <div className="cpg-hang-item cpg-fade-right">
            <div className="cpg-hanger"></div>
            <div className="cpg-clip"></div>
            <div className="cpg-hang-card cpg-highlight-card">
              <img src={dataAnalystImg} alt="Data Analyst" />
              <h4>Data Analyst</h4>
              <p>Turn Data Into Decisions</p>
            </div>
          </div>

          <div className="cpg-hang-item cpg-fade-right">
            <div className="cpg-hanger"></div>
            <div className="cpg-clip"></div>
            <div className="cpg-hang-card">
              <img src={devopsImg} alt="AWS DevOps" />
              <h4>AWS DevOps</h4>
              <p>Master Deployment & Cloud</p>
            </div>
          </div>

        </div>
      </section>

      {/* VIEW ALL BUTTON */}
      <div className="cpg-view-btn-wrapper">
        <a href="/courses" className="cpg-view-btn cpg-fade-up">
          View All Courses
        </a>
      </div>

    </div>
  );
};

export default CoursesPage;
