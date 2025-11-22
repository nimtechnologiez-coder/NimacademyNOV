import React, { useEffect } from "react";
import "../Style/Partnerships.css";
import "bootstrap/dist/css/bootstrap.min.css";

/* Local images */
import hex1 from "../Images/hex1.png";
import hex2 from "../Images/hex2.png";
import hex3 from "../Images/hex3.png";
import hex4 from "../Images/hex4.png";
import hex5 from "../Images/hex5.png";

import impactImg from "../Images/impact2.png";
import impactImg1 from "../Images/impact3.png";
import impactImg2 from "../Images/impact4.png";
import impactImg3 from "../Images/impact5.png";

const Partnerships = () => {

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("nim-show");
        });
      },
      { threshold: 0.25 }
    );

    document.querySelectorAll(".nim-fade-up, .nim-fade-right")
      .forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <div className="nim-partnerships">

      {/* TITLE */}
      <h1 className="nim-title nim-fade-up">
        What <span>We Do Through Partnerships</span>
      </h1>

      <p className="nim-desc nim-fade-up">
        We collaborate with leading organizations and industry experts to share
        knowledge, create opportunities, and deliver impactful learning
        experiences. Our partnerships help us expand innovation, strengthen
        quality, and empower every learner with real-world exposure.
      </p>

      {/* ================= HEX CARDS ================= */}
      <div className="container pb-5">
        <div className="row justify-content-center g-5">

          {[
            { img: hex1, title: "Skill Development Programs", color: "green", desc: "Tailored training in Data, AI & Software." },
            { img: hex2, title: "Internship & Placement Support", color: "blue", desc: "Connecting students with industry roles." },
            { img: hex3, title: "Project Guidance & Research Collaboration", color: "teal", desc: "Helping final-year students solve real problems." },
            { img: hex4, title: "Collaborative Workshops", color: "blue", desc: "Interactive learning with mentors." },
            { img: hex5, title: "Innovation & Startup Support", color: "green", desc: "Guidance for student innovators." }
          ].map((item, i) => (
            <div
              className="col-md-4 col-12 nim-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
              key={i}
            >
              <div className="nim-hex-card">
                <div className="nim-hex-img">
                  <div
                    className="nim-hex-inner"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                </div>

                <div className={`nim-hex-title ${item.color}`}>{item.title}</div>
                <div className="nim-hex-desc">{item.desc}</div>
              </div>
            </div>
          ))}

        </div>
      </div>


      {/* ================= IMPACT SECTION ================= */}
      <div className="impact-wrapper">

        <h2 className="impact-title nim-fade-up nim-delay-0">
          Impact of <span>Our Partnerships</span>
        </h2>

        {/* BLOCK 1 */}
        <div className="impact-row nim-fade-up nim-delay-1">
          <div className="impact-card">
            <img src={impactImg} alt="impact" className="impact-img nim-fade-up nim-delay-1" />
          </div>

          <div className="impact-text nim-fade-up nim-delay-2">
            <span className="num-blue">25</span>
            <span className="num-green">+</span>
            <span className="text">Institutional MoUs Signed</span>
          </div>
        </div>

        {/* BLOCK 2 */}
        <div className="impact-row reverse nim-fade-up nim-delay-2">
          <div className="impact-card">
            <img src={impactImg1} alt="impact" className="impact-img nim-fade-up nim-delay-2" />
          </div>

          <div className="impact-text nim-fade-up nim-delay-3">
            <span className="num-blue">500</span>
            <span className="num-green">+</span>
            <span className="text">Students Trained On-Campus</span>
          </div>
        </div>

        {/* BLOCK 3 */}
        <div className="impact-row nim-fade-up nim-delay-3">
          <div className="impact-card">
            <img src={impactImg2} alt="impact" className="impact-img nim-fade-up nim-delay-3" />
          </div>

          <div className="impact-text nim-fade-up nim-delay-4">
            <span className="num-blue">25</span>
            <span className="num-green">+</span>
            <span className="text">Placement-Ready Projects Delivered</span>
          </div>
        </div>

        {/* BLOCK 4 */}
        <div className="impact-row reverse nim-fade-up nim-delay-4">
          <div className="impact-card">
            <img src={impactImg3} alt="impact" className="impact-img nim-fade-up nim-delay-4" />
          </div>

          <div className="impact-text nim-fade-up nim-delay-5">
            <span className="num-blue">50</span>
            <span className="num-green">+</span>
            <span className="text">Corporate Mentors Involved</span>
          </div>
        </div>

      </div>


      {/* CTA SECTION */}
      <div className="nim-cta-wrapper nim-fade-up">
        <div className="nim-cta-shadow"></div>

        <div className="nim-cta-box nim-fade-right">
          <p>
            Interested in collaborating with NIM Academy? Join <br />
            our mission to make South India the hub of industry-ready talent.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Partnerships;
