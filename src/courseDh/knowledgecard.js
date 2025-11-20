import React from "react";
import "../coursecss/knowledgecard.css";
import img1 from "../Courseimage/python.png";
import img2 from "../Courseimage/python.png";
import img3 from "../Courseimage/python.png";

const PythonCourses = () => {
  return (
    <div className="python-wrapper">

      {/* FIRST TWO CARDS ROW */}
      <div className="python-row">
        
        {/* LEFT CARD */}
        <div className="python-card">
          <img src={img1} alt="Python Programming" className="python-img" />
          <div className="python-card-body">
            
            <h3>Python Programing</h3>
            <p>
              The Python Full Stack Development program is designed to equip you with end-to-end skills required to build modern, responsive, and scalable web applications. From crafting user interfaces using HTML, CSS, and JavaScript to building powerful backends with Python frameworks like Django or Flask — this course covers it all.
            </p>
            <button className="python-btn">Join Now</button>
          </div>
        </div>

        {/* RIGHT TEXT BLOCK */}
        <div className="python-right">
          <h2>Why Learn Python In 2025</h2>
          <p>
            In today’s fast-changing tech world, learning the right programming language can shape your entire career. Python continues to lead the way as one of the most powerful and beginner-friendly languages used worldwide. Whether you are a student or a working professional, mastering Python opens countless opportunities in AI, data science, and software development. For anyone looking to start a strong tech career, joining the Best Python training institute in Nagercoil is the smartest first step. If you are exploring Python for beginners, 2025 is the perfect year to get started.

          </p>
          <button className="python-btn">Join Now</button>
        </div>
      </div>


      {/* SECTION TITLE */}
      <h2 className="python-section-title">
        Python For Beginners: The Most Popular<br></br> Programming Language
      </h2>


      {/* SECOND ROW — TWO CARDS */}
      <div className="python-grid">

        <div className="python-card">
          <img src={img2} alt="Learning Python" className="python-img" />
          <div className="python-card-body">
            <span className="python-tag">2.5 ★ - Months</span>
            <h3>Learning Python Made Easy</h3>
            <p>
             Python has consistently ranked among the top programming languages in global surveys like the TIOBE Index and Stack Overflow Developer Reports. Its simplicity, flexibility, and wide range of applications make it ideal for both beginners and experienced developers
            </p>
            <button className="python-btn">Join Now</button>
          </div>
        </div>

        <div className="python-card">
          <img src={img3} alt="Python Made Easy" className="python-img" />
          <div className="python-card-body">
            <span className="python-tag">2.0 ★ - Months</span>
            <h3>Learning Python Made Easy</h3>
            <p>
             Python is used in nearly every industry — from AI, web development, automation, and data science to cybersecurity and cloud computing. Global tech giants like Google, Netflix, and NASA depend on it for critical systems. Learning Python in 2025 ensures your skills stay relevant and in high demand.
            </p>
            <button className="python-btn">Join Now</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default PythonCourses;

