import React, { useEffect } from "react";
import "../Style/HeroSection.css";
import heroImg from "../Images/Herosection.png";

const HeroSection = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("nim-show");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".nim-fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="nim-hero">

      {/* Background Shapes */}
      <div className="nim-hero-shape nim-hero-shape1"></div>
      <div className="nim-hero-shape nim-hero-shape2"></div>

      <div className="container position-relative">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <span className="nim-hero-badge nim-fade-up" style={{ animationDelay: "0s" }}>
              South India’s Most Trusted EdTech Academy
            </span>

            <h1 className="nim-hero-title nim-fade-up" style={{ animationDelay: "0.1s" }}>
              Empowering Learners,<br /> Building Global Futures.
            </h1>

            <p className="nim-hero-text nim-fade-up" style={{ animationDelay: "0.2s" }}>
              Learn. Build. Get Placed — <strong>That’s the NIM Way.</strong><br />
              Empowering 1L+ learners with real-world tech skills, mentorship excellence,
              and career-ready programs.
            </p>

            <div className="nim-cta-bar nim-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="nim-cta-icon">→</div>
              <div className="nim-cta-text">Explore Programs & Career Growth</div>
              <div className="nim-cta-arrow">›</div>
            </div>

            {/* STATS */}
            <div className="row nim-stats mt-5 gy-4 nim-fade-up" style={{ animationDelay: "0.4s" }}>
              <div className="col-6 col-md-4 nim-stat-item">
                <div className="nim-stat-num">100+</div>
                <div className="nim-stat-label">Colleges</div>
              </div>

              <div className="col-6 col-md-4 nim-stat-item">
                <div className="nim-stat-num">1 Lakh+</div>
                <div className="nim-stat-label">Learners</div>
              </div>

              <div className="col-12 col-md-4 nim-stat-item">
                <div className="nim-stat-num">Top-tier</div>
                <div className="nim-stat-label">Mentorship</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="col-lg-6 text-center mt-5 mt-lg-0 nim-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <img src={heroImg} alt="Modern Learning" className="nim-hero-img" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
