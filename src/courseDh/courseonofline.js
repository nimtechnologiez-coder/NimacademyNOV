import React from "react";
import "../coursecss/courseonofline.css";
import onlineImg from "../Courseimage/offline.png";
import offlineImg from "../Courseimage/oflinegr.png";



const LearningModes = () => {
  return (
   <div className="learning-wrapper">

      {/* ROW 1 – Online Learning */}
      <div className="learning-row">
        <div className="hex-card">
          <img src={onlineImg} alt="Online Learning" />
        </div>

        <div className="learning-text">
          <h2>Online Learning</h2>
          <p>
            Experience interactive live classes with recorded access, guided
            mentorship, and real-world projects to strengthen your skills.
          </p>
        </div>
      </div>

      {/* ROW 2 – Offline Learning (Reversed) */}
      <div className="learning-row reverse">
        <div className="hex-card">
          <img src={offlineImg} alt="Offline Learning" />
        </div>

        <div className="learning-text">
          <h2>Offline Learning</h2>
          <p>
            Engage in live learning, access recorded sessions, and enhance
            skills with mentor-led projects.
          </p>
        </div>
      </div>

    </div>
  );
};

export default LearningModes;

