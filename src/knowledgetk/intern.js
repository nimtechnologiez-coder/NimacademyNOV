// src/components/InternshipDomains.jsx
import React from "react";
import "../knowledgestyletk/intern.css";

const InternshipDomains = () => {
  return (
    <div className="container">
      {/* MAIN HEADING */}
      <h2 className="heading">
        Where <span>Learning</span> Meets Real-World Impact
      </h2>

      {/* MAIN PARAGRAPH */}
      <p className="description">
        At <b>NIM Academy</b>, we bridge the gap between academic knowledge and
        industry excellence. Our internship programs are not just about learning
        — they're about <b>doing, experimenting, and transforming</b> your skills
        into real outcomes.
        <br />
        <br />
        Every intern at NIM Academy gets exposure to{" "}
        <b>live industry projects, daily mentor support,</b> and tasks designed
        by working professionals. When you complete your internship, you don’t
        just hold a certificate — you hold proof of capability.
      </p>

      {/* SUB HEADING */}
      <h2 className="sub-heading">Domains We Offer Internships In</h2>

      <p className="sub-description">
        Get trained and work on real-world projects across today’s most
        in-demand domains
      </p>

      {/* GRID START */}
      <div className="grid">
        {/* CARD 1 */}
        <div className="card">
          <h3>Data Analytics &amp; Business Analytics</h3>
          <p>
            Learn data cleaning, visualization, reports, dashboards &amp; real
            business insights.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <h3>Artificial Intelligence &amp; Machine Learning</h3>
          <p>
            Build predictive models, automation systems, and AI-driven
            applications.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="card">
          <h3>Python Full Stack Development</h3>
          <p>
            Master front-end to back-end development, APIs, and real-world
            deployment.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="card">
          <h3>Java Full Stack Development</h3>
          <p>
            Learn cloud deployment, CI/CD, automation pipelines, and
            containerized systems.
          </p>
        </div>

        {/* CARD 5 */}
        <div className="card">
          <h3>MERN Stack Development</h3>
          <p>
            Create fast and modern web apps using MongoDB, Express, React, and
            Node.
          </p>
        </div>

        {/* CARD 6 */}
        <div className="card">
          <h3>AWS &amp; DevOps</h3>
          <p>
            Build scalable cloud systems, automation workflows, and deployment
            pipelines.
          </p>
        </div>
      </div>
      {/* GRID END */}
    </div>
  );
};

export default InternshipDomains;
