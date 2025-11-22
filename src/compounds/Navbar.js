import React, { useEffect, useRef, useState } from "react";
import "../Style/Navbar.css";
import logoImg from "../Images/navbar.png";

const Navbar = () => {
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false);

  let openTimer = null;
  let closeTimer = null;

  // ----------------------------------------------------
  // Overlay (Hamburger Menu)
  // ----------------------------------------------------
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
      setMobilePagesOpen(false); // close mobile accordion
    };

    hamburger.addEventListener("click", openOverlay);
    closeBtn?.addEventListener("click", closeOverlay);

    return () => {
      hamburger.removeEventListener("click", openOverlay);
      closeBtn?.removeEventListener("click", closeOverlay);
    };
  }, []);

  // ----------------------------------------------------
  // Desktop Dropdown Hover Delay Logic
  // ----------------------------------------------------
  const handleMouseEnter = () => {
    clearTimeout(closeTimer);
    openTimer = setTimeout(() => {
      menuRef.current.classList.add("show");
    }, 200);
  };

  const handleMouseLeave = () => {
    clearTimeout(openTimer);
    closeTimer = setTimeout(() => {
      menuRef.current.classList.remove("show");
    }, 250);
  };

  return (
    <>
      <nav className="nav">
        <img src={logoImg} alt="Logo" className="logo-img" />

        <div className="nav-links">
          <a href="/">Home</a>

          {/* Desktop Dropdown */}
          <div
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-title">Pages ▾</div>

            <div className="dropdown-menu" ref={menuRef}>
              <a href="/college">Placement</a>
              <a href="/Intership">Careers</a>
              <a href="/Blog">Blog</a>
              <a href="/Gallery">Gallery</a>
            </div>
          </div>

          <a href="/course">Course</a>
          <a href="#">Portal</a>
          <a href="/Contact">Contact</a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" id="hamburger">
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Mobile Overlay ------------------------------------------------ */}
      <div className="overlay" id="overlay">
        <button className="close-btn" id="closeBtn">&times;</button>

        <div className="overlay-inner">
          <a href="/">Home</a>

          {/* MOBILE PAGES DROPDOWN — ACCORDION */}
          <div className="mobile-dropdown">
            <div
              className="mobile-dropdown-title"
              onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
            >
              Pages ▾
            </div>

            {mobilePagesOpen && (
              <div className="mobile-dropdown-menu">
                <a href="/college">Placement</a>
                <a href="/Internship">Careers</a>
                <a href="/Blog">Blog</a>
                <a href="/Gallery">Gallery</a>
              </div>
            )}
          </div>

          <a href="/course">Course</a>
          <a href="#">Portal</a>
          <a href="/Contact">Contact</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
