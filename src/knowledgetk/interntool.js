import React from "react";
import "../knowledgestyletk/interntools.css";
 
const DomainsSection = () => {
  return (
    
    <section className="domains-section">
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

      <h2 className="domains-title">Domains We Offer Internships In</h2>
 
      <p className="domains-subtitle">
        Get trained and work on real-world projects across today’s<br />
        most in-demand domains
      </p>
 
      <div className="domains-grid">
 
        {/* CARD 1 */}
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>Data Analytics & Business Analytics</h3>
            </div>
            <div className="flip-back">
              <p>
                Analyze data, create dashboards, and build business
                intelligence solutions.
              </p>
            </div>
          </div>
        </div>
 
        {/* CARD 2 */}
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>Artificial Intelligence & Machine Learning</h3>
            </div>
            <div className="flip-back">
              <p>
                Build predictive models, automation systems, and AI-based applications.
              </p>
            </div>
          </div>
        </div>
 
        {/* CARD 3 */}
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>Python Full Stack Development</h3>
            </div>
            <div className="flip-back">
              <p>
                Master front-end and back-end development with Python and modern tools.
              </p>
            </div>
          </div>
        </div>
 
        {/* CARD 4 */}
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>Java Full Stack Development</h3>
            </div>
            <div className="flip-back">
              <p>
                Learn full-stack Java development with databases, APIs, and cloud services.
              </p>
            </div>
          </div>
        </div>
 
        {/* CARD 5 */}
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>MERN Stack Development</h3>
            </div>
            <div className="flip-back">
              <p>
                Build advanced applications using MongoDB, Express, React, and Node.
              </p>
            </div>
          </div>
        </div>
 
        {/* CARD 6 */}
        <div className="flip-card">
          <div className="flip-inner">
            <div className="flip-front">
              <h3>AWS & DevOps</h3>
            </div>
            <div className="flip-back">
              <p>
                Work with CI/CD pipelines, cloud automation, and scalable deployments.
              </p>
            </div>
          </div>
        </div>
 </div>
      </div>
    </section>
  );
};
 
export default DomainsSection;