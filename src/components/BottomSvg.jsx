import React from "react";
import "./BottomSvg.css";

export default function BottomSvg() {
  return (
    <div className="bottom-svg-wrapper">
<svg xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 1440 320"
     preserveAspectRatio="xMidYMax slice">

  <defs>
    {/* <!-- ⭐ Your exact gradient --> */}
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="rgba(43, 251, 251, 1)" />
      <stop offset="100%" stop-color="rgba(222, 204, 7, 1)" />
    </linearGradient>

    {/* <!-- ⭐ Minor Glow Filter --> */}
    <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
      {/* <!-- Blur --> */}
      <feGaussianBlur stdDeviation="12" result="blur" />

      {/* <!-- Add cyan glow tint --> */}
      <feFlood flood-color="rgba(255, 255, 255, 0.2)" result="color" />
      <feComposite in="color" in2="blur" operator="in" result="glow" />

      {/* <!-- Blend glow with wave --> */}
      <feMerge>
        <feMergeNode in="glow" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <path 
    fill="url(#waveGradient)"
    fill-opacity="1"
    filter="url(#glowFilter)"
    d="M0,128L80,154.7C160,181,320,235,480,240C640,245,800,203,960,186.7C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
  </path>

</svg>


    </div>
  );
}
