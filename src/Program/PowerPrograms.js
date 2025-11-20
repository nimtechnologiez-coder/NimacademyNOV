import React, { useEffect, useRef, useState } from "react";
import "../Programcss/PowerPrograms.css";

/* ==== LOCAL IMAGES ==== */
import genAI from "../Images/Generative.png";
import aiMl from "../Images/aiml.png";
import iotImg from "../Images/Internet.jpg";
import devopsImg from "../Images/DevOpss.png";

import cloud from "../Images/Python.png";
import cybersecurity from "../Images/SaaS.png";
import fulstack from "../Images/Development.png";
import blockchain from "../Images/Digital.png";
import datascience from "../Images/Powerbi.png";
import testing from "../Images/Excel.png";

const CourseCards = () => {
  
  /* ===================== ANIMATION STATE + REFS ===================== */
  const barsRef = useRef(null);
  const titleRef = useRef(null);
  const cardRefs = useRef([]);

  const [animate, setAnimate] = useState({
    bars: false,
    title: false,
    cards: {},
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const key = entry.target.dataset.anim;

          setAnimate((prev) => ({
            ...prev,
            [key]: key === "cards"
              ? { ...prev.cards, [entry.target.dataset.index]: true }
              : true,
          }));
        });
      },
      { threshold: 0.25 }
    );

    if (barsRef.current) {
      barsRef.current.dataset.anim = "bars";
      observer.observe(barsRef.current);
    }

    if (titleRef.current) {
      titleRef.current.dataset.anim = "title";
      observer.observe(titleRef.current);
    }

    cardRefs.current.forEach((card, i) => {
      if (card) {
        card.dataset.anim = "cards";
        card.dataset.index = i;
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  /* ===================== ALL CARDS DATA ===================== */
  const cards = [
    { title: "Generative AI", img: genAI, desc: "Learn to build real-world projects using Generative AI tools & workflows that boost creativity and automation." },
    { title: "AI & ML", img: aiMl, desc: "Gain hands-on experience in Machine Learning, AI models & data prediction to build intelligent data-driven solutions." },
    { title: "Internet Of Things (IOT)", img: iotImg, desc: "Explore the Internet of Things, sensors & smart devices to create connected, intelligent systems for real-world applications." },
    { title: "DevOps", img: devopsImg, desc: "Learn Automation, CI/CD, and Cloud Deployments to streamline workflows and deliver scalable, efficient applications." },
    { title: "AI + Python", img: cloud, desc: "Build a strong Python foundation and apply it to real-world AI projects for a hands-on learning experience." },
    { title: "AI + SaaS", img: cybersecurity, desc: "Gain hands-on experience in Machine Learning, AI models & data prediction to build intelligent, data-driven solutions." },
    { title: "AI + App Development", img: fulstack, desc: "Learn to create AI-powered mobile apps that combine intelligent features with seamless user experiences." },
    { title: "Digital Marketing", img: blockchain, desc: "Master performance optimization, SEO, and social media strategy to boost visibility and engagement." },
    { title: "Power BI", img: datascience, desc: "Learn to design data visualizations and business dashboards that turn complex data into clear, actionable insights." },
    { title: "Excel Mastery", img: testing, desc: "Master user automation, dashboards, and data analysis to simplify workflows and make smarter business decisions." },
  ];

  return (
    <div className="cc-wrapper">

      {/* ================= TOP HEADING SECTION ================= */}
      <div className="top-section">

        {/* LEFT BARS */}
        <div
          ref={barsRef}
          className={`left-bars cc-fade-left ${animate.bars ? "show" : ""}`}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* RIGHT TITLE */}
        <div
          ref={titleRef}
          className={`title-box cc-fade-right ${animate.title ? "show" : ""}`}
        >
          Power Program Courses We Offer
        </div>

      </div>

      {/* ================= CARD GRID SECTION ================= */}
      <div className="container">
        <div className="row g-4">
          {cards.map((item, index) => (
            <div className="col-md-6" key={index}>
              <div
                ref={(el) => (cardRefs.current[index] = el)}
                className={`cc-card cc-fade-up ${
                  animate.cards[index] ? "show" : ""
                }`}
              >
                <div className="cc-img-box">
                  <img src={item.img} alt={item.title} className="cc-img" />
                </div>

                <div className="cc-content">
                  <h3 className="cc-title">{item.title}</h3>
                  <p className="cc-desc">{item.desc}</p>

                  {/* UPDATED BUTTON → CLICKABLE LINK */}
                  <a
                    href="#"
                    className="cc-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default CourseCards;
