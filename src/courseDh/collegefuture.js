import React, { useEffect, useRef } from "react";
import "../collegestylestk/collegefuture.css";

import phone from "../imagestk/phone.png";
import mail from "../imagestk/email.png";
import chat from "../imagestk/chat.png";
import globe from "../imagestk/globe.png";
import at from "../imagestk/instagram.png";
import location from "../imagestk/location.png";

const FutureTogether = () => {
  const iconRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("slide-right-show");
        }
      },
      { threshold: 0.4 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="future-wrapper">

      {/* RIBBON HEADER */}
      <div className="future-header">
        <p>Let’s Build the Future Together</p>
      </div>
      <div className="future-shadow"></div>

      {/* MAIN CONTENT */}
      <div className="future-content">

        {/* LEFT SECTION */}
        <div className="future-left">
          <p>
            If you’re a college or university looking to prepare your students
            for the next era of technology, partner with NIM Academy — the most
            trusted EdTech collaborator in South India.
          </p>

          <button className="future-btn">Contact Us</button>
        </div>

        {/* RIGHT ICON GRID WITH SCROLL ANIMATION */}
        <div className="future-icons slide-right-hidden" ref={iconRef}>
          <img src={phone} alt="Phone" />
          <img src={mail} alt="Mail" />
          <img src={chat} alt="Chat" />
          <img src={globe} alt="Globe" />
          <img src={at} alt="Instagram" />
          <img src={location} alt="Location" />
        </div>

      </div>
    </div>
  );
};

export default FutureTogether;
