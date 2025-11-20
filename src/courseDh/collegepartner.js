import React from "react";
import "../coursecss/collegepartner.css";
import img1 from "../Courseimage/col1.png";
import img2 from "../Courseimage/col2.png";
import img3 from "../Courseimage/col3.png";
import img4 from "../Courseimage/col4.png";

const PartnerSection = () => {
  return (
    <div className="partner-wrapper">

      <h2 className="partner-title">
        Why Colleges <span>Partner</span> with NIM Academy
      </h2>

      {/* SECTION 1 */}
      <div className="partner-row">
        <div className="partner-text">
          <h3>Skill Development & Industry Programs</h3>
          <p>
            We conduct industry-aligned workshops and certification programs in
            emerging technologies like AI, Machine Learning, Data Analytics,
            Cloud, Cybersecurity, IoT, Full Stack Development, and Digital Marketing.
          </p>
        </div>

        <div className="partner-img blob">
          <img src={img1} alt="Skill Development Program" />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="partner-row reverse">
        <div className="partner-text">
          <h3>Internship & Placement Support</h3>
          <p>
            We collaborate with faculty teams to create joint research
            initiatives, conduct train-the-trainer sessions, and provide
            industry resource materials for upskilling.
          </p>
        </div>

        <div className="partner-img blob">
          <img src={img2} alt="Internship Support" />
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="partner-row">
        <div className="partner-text">
          <h3>Faculty Empowerment & Research Collaboration</h3>
          <p>
            We collaborate with faculty teams to create joint research initiatives, 
            conduct expert sessions, and provide modern teaching resources.
          </p>
        </div>

        <div className="partner-img blob">
          <img src={img3} alt="Faculty Development" />
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="partner-row reverse">
        <div className="partner-text">
          <h3>Workshops, Seminars & Bootcamps</h3>
          <p>
            Our expert trainers conduct hands-on workshops, seminars, coding 
            bootcamps, AI hackathons, and innovation challenges for students.
          </p>
        </div>

        <div className="partner-img blob">
          <img src={img4} alt="Academic Collaboration" />
        </div>
      </div>

    </div>
  );
};

export default PartnerSection;




