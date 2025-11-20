import React, { useEffect } from "react";
import "../coursecss/Course.css";

// Images
import pythonImg from "../Courseimage/python.png";
import javaImg from "../Courseimage/java.png";
import mernImg from "../Courseimage/mern.png";
import dataanalImg from "../Courseimage/data.png";
import businessImg from "../Courseimage/business.png";
import digitalImg from "../Courseimage/digital.png";
import datasciImg from "../Courseimage/datasci.png";
import awsImg from "../Courseimage/aws.png";
import productImg from "../Courseimage/productdd.png";
import aimlImg from "../Courseimage/alml.png";
import cyberImg from "../Courseimage/cyberf.png";
import uiuxImg from "../Courseimage/uiux.png";

const FullStackPage = () => {

  // =====================
  // Scroll Reveal Animation
  // =====================
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="wrapper">

      <h1 className="heading">Category 1 - Full Stack Development</h1>

      <div className="cards">

        {/* PYTHON */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${pythonImg})` }}>
            <h2 className="top-title">Python Full Stack</h2>
          </div>

          <div className="card-body">
            <p>Build fast, scalable, and dynamic web apps using Python, Django, and modern frontend tools.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180 Hrs</span>
              <span className="info-item">3 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* JAVA */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${javaImg})` }}>
            <h2 className="top-title">Java Full Stack</h2>
          </div>

          <div className="card-body">
            <p>Develop enterprise grade applications from backends to frontends using Java.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180 Hrs</span>
              <span className="info-item">3 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* MERN */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${mernImg})` }}>
            <h2 className="top-title">MERN Full Stack</h2>
          </div>

          <div className="card-body">
            <p>Create dynamic web experiences with Mongo, Express, React & Node.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 230 Hrs</span>
              <span className="info-item">4 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>
      </div>


      {/* ============== CATEGORY 2 ============== */}
      <h1 className="heading">Category 2 - Data & Analysis</h1>

      <div className="cards">

        {/* Data Analyst */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${dataanalImg})` }}>
            <h2 className="top-title">Data Analyst</h2>
          </div>

          <div className="card-body">
            <p>Master Excel, SQL, and Power BI to analyze data and present actionable insights.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180–200 Hrs</span>
              <span className="info-item">3.5 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* Business Analyst */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${businessImg})` }}>
            <h2 className="top-title">Business Analyst</h2>
          </div>

          <div className="card-body">
            <p>Connect business goals with data-driven strategies and effective decision-making.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 200 Hrs</span>
              <span className="info-item">4 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* Digital Marketing */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${digitalImg})` }}>
            <h2 className="top-title">Digital Marketing</h2>
          </div>

          <div className="card-body">
            <p>Become a 360° marketer with hands-on SEO, advertising, and social media campaigns.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 150 Hrs</span>
              <span className="info-item">2.5 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>
      </div>


      {/* ============== CATEGORY 3 ============== */}
      <h1 className="heading">Category 3 - Design And Branding</h1>

      <div className="cards">

        {/* Data Science */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${datasciImg})` }}>
            <h2 className="top-title">Data Science</h2>
          </div>

          <div className="card-body">
            <p>Learn ML, Python, and AI tools to build intelligent, predictive models.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 350–400 Hrs</span>
              <span className="info-item">7 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* AWS DevOps */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${awsImg})` }}>
            <h2 className="top-title">AWS DevOps</h2>
          </div>

          <div className="card-body">
            <p>Learn cloud deployment, automation, and server management with real workflows.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180 Hrs</span>
              <span className="info-item">3 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* Product Design */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${productImg})` }}>
            <h2 className="top-title">Product Design</h2>
          </div>

          <div className="card-body">
            <p>Bring ideas to life with research, wireframes, and high-fidelity prototypes.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180 Hrs</span>
              <span className="info-item">3 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

      </div>


      {/* ============== CATEGORY 4 ============== */}
      <h1 className="heading">Category 4 - Cloud And Digital</h1>

      <div className="cards">

        {/* AI ML */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${aimlImg})` }}>
            <h2 className="top-title">AI & ML Engineer</h2>
          </div>

          <div className="card-body">
            <p>Dive into Artificial Intelligence with applied ML models and automation projects.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180 Hrs</span>
              <span className="info-item">3 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* Cybersecurity */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${cyberImg})` }}>
            <h2 className="top-title">Cybersecurity<br/>Fundamentals</h2>
          </div>

          <div className="card-body">
            <p>Learn to protect systems, detect threats, and strengthen digital defenses.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 180 Hrs</span>
              <span className="info-item">3 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

        {/* UI UX */}
        <div className="card reveal">
          <div className="card-top" style={{ backgroundImage: `url(${uiuxImg})` }}>
            <h2 className="top-title">UI/UX Design</h2>
          </div>

          <div className="card-body">
            <p>Design engaging, user-focused interfaces that are both beautiful and functional.</p>

            <div className="bottom-info">
              <span className="info-item">⏱️ 120 Hrs</span>
              <span className="info-item">2 months</span>
            </div>

            <div className="card-buttons">
              <button className="show-btn">Show More</button>
              <button className="enroll-btn">Enroll</button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FullStackPage;
