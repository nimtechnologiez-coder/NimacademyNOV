import React, { useEffect, useRef } from "react";
import "../Style/Navbar.css";
import logoImg from "../Images/navbar.png";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  let openTimer = null;
  let closeTimer = null;

  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("overlay");
    const closeBtn = document.getElementById("closeBtn");
    const spans = hamburger?.querySelectorAll("span");
    const links = overlay?.querySelectorAll("a");

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
    links?.forEach((link) => link.addEventListener("click", closeOverlay));

    return () => {
      hamburger.removeEventListener("click", openOverlay);
      closeBtn?.removeEventListener("click", closeOverlay);
      links?.forEach((link) => link.removeEventListener("click", closeOverlay));
    };
  }, []);

  // ----------------------------------------------
  // Dropdown Hover Delay Logic
  // ----------------------------------------------
  const handleMouseEnter = () => {
    clearTimeout(closeTimer);
    openTimer = setTimeout(() => {
      menuRef.current.classList.add("show");
    }, 200); // OPEN DELAY
  };

  const handleMouseLeave = () => {
    clearTimeout(openTimer);
    closeTimer = setTimeout(() => {
      menuRef.current.classList.remove("show");
    }, 250); // CLOSE DELAY
  };

  return (
    <>
      <nav className="nav">
        <img src={logoImg} alt="Logo" className="logo-img" />

        <div className="nav-links">
          <a href="/">Home</a>

          {/* Updated Dropdown */}
          <div
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-title">Pages ▾</div>
            <div className="dropdown-menu" ref={menuRef}>
              <a href="/college">Placement</a>
              <a href="#">Careers</a>
              <a href="/Blog">Blog</a>
              <a href="/Gallery">Gallery</a>
            </div>
          </div>

          <a href="/course">Course</a>
          <a href="#">Portal</a>
          <a href="/Contact">Contact</a>
        </div>

        <div className="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Overlay */}
      <div className="overlay" id="overlay">
        <button className="close-btn" id="closeBtn">&times;</button>
        <div className="overlay-inner">
          <a href="/">Home</a>
          

          <a href="/course">Course</a>
          <a href="#">Portal</a>
          <a href="/Contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
