import React from "react";
import "../Style/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

/* ---- LOCAL CERTIFICATE IMAGES ---- */
// import cert1 from "../Images/hex1.png";   // MSI Certificate
// import cert2 from "../Images/hex2.png";   // Another certificate

const Footer = () => {
  return (
    <div className="nim-footer">
      <div className="row">
        
        {/* LEFT SECTION */}
        <div className="col-md-7 left-section">
          <h2>
            NIM Academy helps learners become skilled IT professionals by offering
            high-quality, practical, and industry-relevant education. IT Courses in
            Web Development, Data Analytics, AI & More.
          </h2>

       <div className="social-icons">
  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-twitter-x"></i>
  </a>

  <a 
    href="https://facebook.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-facebook"></i>
  </a>

  <a 
    href="https://www.linkedin.com/company/nim-academy/posts/?feedView=all" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-linkedin"></i>
  </a>

  <a 
    href="https://www.instagram.com/nim_academy/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-instagram"></i>
  </a>

  <a 
    href="https://youtube.com"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <i className="bi bi-youtube"></i>
  </a>
</div>


          {/* CERTIFICATE IMAGES */}
          <div className="footer-certificates">
            {/* <img src={cert1} alt="MSI Certificate" className="cert-img" />
            <img src={cert2} alt="Certification Badge" className="cert-img" /> */}
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="col-md-5 right-section">
          <div className="row">

            <div className="col-6 mb-3"><a href="#">Accessibility on Ocean School</a></div>
            <div className="col-6 mb-3"><a href="#">Help Centre →</a></div>

            <div className="col-6 mb-3"><a href="#">Privacy policy</a></div>
            <div className="col-6 mb-3"><a href="#">Partners</a></div>

            <div className="col-6 mb-3"><a href="#">Terms and conditions →</a></div>
            <div className="col-6 mb-3"><a href="#">NFB Education →</a></div>

            <div className="col-6 mb-3"><a href="#">Credits</a></div>
            <div className="col-6 mb-3"><a href="#">Make a donation →</a></div>

            <div className="col-6 mb-3"></div>
            <div className="col-6 mb-3"><a href="#">About us</a></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
