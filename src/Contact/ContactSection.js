import React, { useEffect } from "react";
import "../ContactSectioncss/Contact.css";

const useRevealOnScroll = (selector = ".reveal") => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};

const ContactFollowPage = () => {
  useRevealOnScroll(".reveal");

  return (
    <>
      {/* CONTACT SECTION */}
      <div className="contact-wrapper">

        <h1 className="contact-heading reveal fade-up">
          Let’s Shape the Future — Together
        </h1>

        <p className="contact-subtext reveal fade-up">
          Whether you’re a student eager to start your journey, a college looking
          for collaboration, or a company seeking talent — we’d love to hear from you.
        </p>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left reveal fade-left">

            <h2 className="left-title">Contact Us</h2>

            <div className="color-bars">
              <div className="bar bg-blue"></div>
              <div className="bar bg-green"></div>
              <div className="bar bg-lightgreen"></div>
            </div>

            <p className="left-description">
              Don’t Hesitate to Contact Us—We Are Ready to Provide Solutions!
            </p>

            {/* MAP */}
            <iframe
              className="contact-map"
              title="NIM Technologies map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.013836489458!2d77.4082749!3d8.1631162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f10046dc4a8d%3A0xd372272bbc55b!2sNim%20Technologies!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              allowFullScreen=""
            ></iframe>

            {/* CONTACT DETAILS WITH BOOTSTRAP ICONS */}
            <p className="contact-info">
              <i className="bi bi-geo-alt-fill contact-icon"></i>
              NIM Academy (A Division of NIM Technologies), Nagercoil, Tamil Nadu
            </p>

            <p className="contact-info">
              <i className="bi bi-telephone-fill contact-icon"></i>
              +91 74188 55308
            </p>

            <p className="contact-info">
              <i className="bi bi-envelope-fill contact-icon"></i>
              info@nimtechnologies.org
            </p>

            {/* SOCIAL ICONS */}
            <div className="social-icons">
              <a href="https://www.instagram.com/nim_academy/" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://youtube.com" target="_blank">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://twitter.com" target="_blank">
                <i className="bi bi-twitter-x"></i>
              </a>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="contact-form-box reveal fade-right">

            <h2 className="form-title">Let’s Connect Instantly!</h2>

            <p className="form-text">
              Fill out the form below and our team will reach out within 24 hours.
            </p>

            <input type="text" placeholder="Name" className="input-field" />
            <input type="email" placeholder="Email Address" className="input-field" />
            <input type="text" placeholder="Subject" className="input-field" />
            <textarea placeholder="Your Message" className="input-field textarea"></textarea>

            <button className="connect-btn">Let’s Connect</button>

          </div>
        </div>
      </div>

      {/* FOLLOW SECTION */}
      <div className="follow-wrapper reveal fade-up">

        <h2 className="follow-heading">Follow & Stay Updated</h2>

        <p className="follow-subtext">
          Stay connected and never miss a moment from our community.
        </p>

        <h3 className="follow-bold-text">
          Join 10,000+ learners who are transforming <br /> their careers with NIM Academy.
        </h3>

        <h3 className="learn-heading">Learn with excitement!</h3>

        <p className="learn-subtext">
          Sign up now to receive updates, insights, and special promotions.
        </p>

        <div className="email-box-container">
          <a
            href="https://docs.google.com/forms/d/e/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="send-btn">Fill Google Form</button>
          </a>
        </div>

        <div className="follow-banner">
          Let’s turn your ideas into action — message us <br />
          and start your learning journey today.
        </div>

      </div>
    </>
  );
};

export default ContactFollowPage;
