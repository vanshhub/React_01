// src/components/Features.jsx
import React from "react";

import "./features.css";

// ✅ Import your PNG icons
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";

function Features() {
  const featureList = [
    { icon: icon1, title: "Device Virtualization" },
    { icon: icon2, title: "Cloud Workflows" },
    { icon: icon3, title: "Visual AI Understanding" },
    { icon: icon4, title: "Reliable Interactions" },
    { icon: icon5, title: "Cross-Platform" },
    { icon: icon6, title: "No-Code Workflow Builder" },
  ];

  return (
    <div className="features-section" data-aos="fade-right">

      {/* ✅ Left side feature cards */}
      <div className="features-grid">
        {featureList.map((item, index) => (
          <div key={index} className="feature-card">
            <img src={item.icon} className="feature-icon" alt="icon" />
            <h3 className="feature-title">{item.title}</h3>
          </div>
        ))}
      </div>

      {/* ✅ Right side heading + paragraph */}
      <div className="features-text">
        <h1>Features</h1>
        <p>
          Mobile-use is the reliable platform that lets AI agents tap, swipe and
          navigate any mobile app through visual AI and device virtualization.
        </p>
      </div>

    </div>
  );
}

export default Features;
