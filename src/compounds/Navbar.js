import React, { useEffect, useRef, useState } from "react";
import "../Style/Navbar.css";
import logoImg from "../Images/navbar.png";

const Navbar = () => {
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  // Overlay Menu Logic
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");
    const spans = hamburger?.querySelectorAll("span");

    if (!hamburger || !overlay) return;

    const openOverlay = () => {
      overlay.classList.add("open");
      spans[0].style.transform = "rotate(45deg) translateY(8px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
      document.body.style.overflow = "hidden";
    };

    const closeOverlay = () => {
      overlay.classList.remove("open");
      spans[0].style.transform = "";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "";
      document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", openOverlay);
    closeBtn?.addEventListener("click", closeOverlay);

    return () => {
      hamburger.removeEventListener("click", openOverlay);
      closeBtn?.removeEventListener("click", closeOverlay);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <img src={logoImg} alt="Logo" className="logo-img" />

        <div className="nav-links">
          <a href="/">Home</a>

          {/* DIRECT LINKS (Pages removed) */}
          <a href="/college">Placement</a>
          <a href="/Intership">Internship</a>
          <a href="/Blog">Blog</a>
          <a href="/Gallery">Gallery</a>

          <a href="/course">Course</a>
          <a href="/Contact">Contact</a>
        </div>

        <div className="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className="overlay" id="overlay">
        <button className="close-btn" id="closeBtn">&times;</button>

        <div className="overlay-inner">
          <a href="/">Home</a>

          {/* DIRECT LINKS (No dropdown in mobile) */}
          <a href="/college">Placement</a>
          <a href="/Intership">Careers</a>
          <a href="/Blog">Blog</a>
          <a href="/Gallery">Gallery</a>

          <a href="/course">Course</a>
          <a href="/Contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
