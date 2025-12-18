// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import icon1 from "../assets/github.png";
import icon2 from "../assets/discord.png";
import uparrow from "../assets/up-left-arrow.png";

function Hero() {
  return (
    <div className="hero-container">

      {/* ✅ LEFT SECTION */}
      <div className="hero-left">
        <h1 className="hero-title">
          Opening the 
          <span className="glass-text"> mobile world </span><br />
           to AI agents.
        </h1>

        {/* ✅ BUTTON GROUP */}
        <div className="hero-buttons">
          <button className="btn primary">Join Cloud Waitlist</button>
          <button className="btn secondary"><span>⚡ 1.6k Github</span> <img src={icon1} alt="logo" className="github-icon" /> </button>
          <button className="btn secondary"><span>Discord</span> <img src={icon2} alt="logo" className="discord-icon" /></button>
        </div>
      </div>

      {/* ✅ RIGHT SIDE CARD */}
      <div className="hero-right">
        <div className="glass-card">
          <p className="card-title">1st on AndroidWorld benchmark  <span><img src={uparrow} alt="logo" className="up-arrow" /></span></p>
          <h2 className="card-number">84<span>.48%</span></h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
