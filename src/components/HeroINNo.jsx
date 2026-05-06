import { useRef, useEffect } from "react";
import heroVideo from "../assets/3480bdd1-f9f3-42ef-a797-d3ba6e89102a_watermarked.mp4";

const INNO = { bleuFonce: "#003da6", bleuClair: "#0084cc", vert: "#49ce54" };

const HeroINNO = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,800;1,800&display=swap');

        @keyframes doorLeft  { from{transform:translateX(0)} to{transform:translateX(-100%)} }
        @keyframes doorRight { from{transform:translateX(0)} to{transform:translateX(100%)} }
        @keyframes videoScale { from{transform:scale(1.08)} to{transform:scale(1)} }
        @keyframes contentIn  { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @keyframes barIn      { from{opacity:0} to{opacity:1} }
        @keyframes badgeIn    { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes dotPulse   { 0%,100%{box-shadow:0 0 0 0 rgba(73,206,84,.6)} 50%{box-shadow:0 0 0 6px rgba(73,206,84,0)} }

        .hero-door-left  { animation: doorLeft  1s cubic-bezier(0.76,0,0.24,1) 0.4s both; }
        .hero-door-right { animation: doorRight 1s cubic-bezier(0.76,0,0.24,1) 0.4s both; }
        .hero-video-anim { animation: videoScale 1.8s cubic-bezier(0.22,1,0.36,1) 1.1s both; }
        .hero-bar        { animation: barIn 0.5s ease 1.4s both; opacity:0; }
        .hero-content-in { animation: contentIn 0.9s cubic-bezier(0.22,1,0.36,1) 1.3s both; opacity:0; }
        .hero-badges-in  { animation: badgeIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.6s both; opacity:0; }
        .hero-dot-pulse  { animation: dotPulse 2.2s ease-in-out infinite; }

        .hero-btn-p { transition: transform .25s, box-shadow .25s; }
        .hero-btn-p:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(73,206,84,.6); }
        .hero-btn-s { transition: background .25s, border-color .25s; }
        .hero-btn-s:hover { background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.75); }

        /* ─── Hero section ─── */
        .hero-section {
          position: relative;
          width: 100%;
          /* 100dvh = dynamic viewport height — collapses with browser chrome on mobile */
          height: 100dvh;
          min-height: 480px;
          overflow: hidden;
          background: #000;
          font-family: 'Montserrat', sans-serif;
        }

        /* ─── Video: always fill, center on the car ─── */
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          /* Center horizontally AND vertically so the car stays in frame */
          object-position: center center;
        }

        /* On wider screens (landscape / tablet / desktop) keep top bias */
        @media (min-width: 768px) {
          .hero-video { object-position: center top; }
        }

        /* ─── Gradient overlay ─── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            108deg,
            rgba(0,61,166,.78) 0%,
            rgba(0,61,166,.45) 35%,
            rgba(0,0,0,.05) 68%,
            transparent 100%
          );
        }

        /* ─── Door shared ─── */
        .hero-door {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          background: #003da6;
          z-index: 10;
          display: flex;
          align-items: center;
        }

        .hero-door-left  { left: 0;  justify-content: flex-end;   border-right: 2px solid #49ce54; }
        .hero-door-right { right: 0; justify-content: flex-start; border-left:  2px solid #49ce54; }

        /* ghost text */
        .hero-door-ghost {
          font-size: 52px;
          font-weight: 800;
          color: #fff;
          opacity: .1;
          letter-spacing: -2px;
          padding-right: 32px;
        }

        /* edge gradient line */
        .hero-door-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, transparent, #49ce54 30%, #0084cc 70%, transparent);
        }
        .hero-door-left  .hero-door-line { right: 0; }
        .hero-door-right .hero-door-line { left:  0; }

        /* knob circle */
        .hero-knob {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(73,206,84,.15);
          border: 1px solid rgba(73,206,84,.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          top: 50%;
          transform: translateY(-50%);
        }
        .hero-door-left  .hero-knob { right: -30px; }
        .hero-door-right .hero-knob { left:  -30px; }

        .hero-knob-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #49ce54;
        }

        /* ─── Tablet (≤ 1024px) ─── */
        @media (max-width: 1024px) {
          .hero-door-ghost { font-size: 36px; padding-right: 20px; }
          .hero-knob { width: 50px; height: 50px; }
          .hero-door-left  .hero-knob { right: -25px; }
          .hero-door-right .hero-knob { left:  -25px; }
        }

        /* ─── Mobile (≤ 768px) ─── */
        @media (max-width: 768px) {
          .hero-door-ghost { font-size: 24px; padding-right: 12px; }
          .hero-knob { width: 36px; height: 36px; }
          .hero-knob-dot { width: 8px; height: 8px; }
          .hero-door-left  .hero-knob { right: -18px; }
          .hero-door-right .hero-knob { left:  -18px; }
        }

        /* ─── Small phones (≤ 480px) ─── */
        @media (max-width: 480px) {
          .hero-door-ghost { display: none; }
          .hero-knob { width: 28px; height: 28px; }
          .hero-knob-dot { width: 7px; height: 7px; }
          .hero-door-left  .hero-knob { right: -14px; }
          .hero-door-right .hero-knob { left:  -14px; }
        }
      `}</style>

      <section className="hero-section">

        {/* Background video */}
        <video
          ref={videoRef}
          className="hero-video hero-video-anim"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Gradient overlay */}
        <div className="hero-overlay" />

        {/* Accent bar */}
        <div className="hero-bar" style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "4px", zIndex: 5,
          background: `linear-gradient(90deg,${INNO.bleuFonce},${INNO.bleuClair},${INNO.vert})`,
        }}/>

        {/* Left door */}
        <div className="hero-door hero-door-left hero-door-left">
          <span className="hero-door-ghost">INNO</span>
          <div className="hero-door-line" />
          <div className="hero-knob">
            <div className="hero-knob-dot" />
          </div>
        </div>

        {/* Right door */}
        <div className="hero-door hero-door-right hero-door-right">
          <div className="hero-door-line" />
          <div className="hero-knob">
            <div className="hero-knob-dot" />
          </div>
        </div>

        {/* Scroll hint */}

      </section>
    </>
  );
};

export default HeroINNO;