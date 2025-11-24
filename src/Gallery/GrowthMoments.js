import React, { useEffect, useRef, useState } from "react";
import "../GalleryCss/GrowthMoments.css";

// ---- TOP REELS ----
import reelImg1 from "../Images/reelImg1.png";
import reelImg2 from "../Images/reelImg2.png";
import reelImg3 from "../Images/reelImg3.jpg";

// ---- BOTTOM IMAGES ----
import bottom1 from "../Images/gallerycentre1.png";
import bottom2 from "../Images/gallerycentre2.png";
import bottom3 from "../Images/gallerycentre3.png";

const GrowthMoments = () => {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisible(prev => [...prev, id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el, id) => (refs.current[id] = el);

  return (
    <div className="growth-wrapper">

      {/* HEADING */}
      <h2
        ref={el => addRef(el, 0)}
        data-id="0"
        className={`growth-heading big-growth-heading fade-up ${
          visible.includes("0") ? "show" : ""
        }`}
      >
        <span className="green">Growth</span> happens one{" "}
        <span className="blue">moment</span> at a time.
      </h2>

      {/* ======================
          TOP 3 REEL VIDEO CARDS
      ====================== */}
      <div className="video-row">

        <a
          href="https://www.instagram.com/reel/DRHvwPyEVIA/?igsh=MTgzdjd1aGV3amtteA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            ref={el => addRef(el, 1)}
            data-id="1"
            className={`video-card fade-up delay-1 ${
              visible.includes("1") ? "show" : ""
            }`}
          >
            <img src={reelImg1} alt="Reel 1" className="video-thumb" />
            <div className="play-btn">▶</div>
          </div>
        </a>

        <a
          href="https://www.instagram.com/reel/DQYWsH_kY7V/?igsh=MTlrNXU4c2J6M2N6cQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            ref={el => addRef(el, 2)}
            data-id="2"
            className={`video-card fade-up delay-2 ${
              visible.includes("2") ? "show" : ""
            }`}
          >
            <img src={reelImg2} alt="Reel 2" className="video-thumb" />
            <div className="play-btn">▶</div>
          </div>
        </a>

        <a
          href="https://www.instagram.com/reel/DNSbqdlOWYP/?igsh=MW0yYTBpb202ajd1YQ=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            ref={el => addRef(el, 3)}
            data-id="3"
            className={`video-card fade-up delay-3 ${
              visible.includes("3") ? "show" : ""
            }`}
          >
            <img src={reelImg3} alt="Reel 3" className="video-thumb" />
            <div className="play-btn">▶</div>
          </div>
        </a>

      </div>

      {/* ======================
          BOTTOM 3 IMAGE CARDS
      ====================== */}
      <div className="image-row">

        <div
          ref={el => addRef(el, 4)}
          data-id="4"
          className={`img-box fade-up delay-4 ${
            visible.includes("4") ? "show" : ""
          }`}
        >
          <div className="img-frame">
            <img src={bottom1} alt="mentor" />
          </div>
          <div className="img-caption">Mentor guiding students</div>
        </div>

        <div
          ref={el => addRef(el, 5)}
          data-id="5"
          className={`img-box fade-up delay-5 ${
            visible.includes("5") ? "show" : ""
          }`}
        >
          <div className="img-frame">
            <img src={bottom2} alt="trainer" />
          </div>
          <div className="img-caption">Trainer presenting Lecture</div>
        </div>

        <div
          ref={el => addRef(el, 6)}
          data-id="6"
          className={`img-box fade-up delay-6 ${
            visible.includes("6") ? "show" : ""
          }`}
        >
          <div className="img-frame">
            <img src={bottom3} alt="speaker" />
          </div>
          <div className="img-caption">Speaker addressing students</div>
        </div>

      </div>
    </div>
  );
};

export default GrowthMoments;
