import React from "react";
import "./logoslider.css";

import spotify from "../assets/logos/companyspotify.png";
import gpay from "../assets/logos/amazon.png";
import hdfc from "../assets/logos/hdfc-bank.png";
import microsoft from "../assets/logos/microsoft.png";
import paypal from "../assets/logos/paypal.png";

export default function LogoSlider() {
  const logos = [spotify, gpay, hdfc, microsoft, paypal];

  return (
    <div className="logo-slider-container" data-aos="fade-in">
      <div className="heading-logo-slider" >
        <h2>Backed by</h2>
      </div>
      <div className="logo-track">

        {/* Original */}
        {logos.map((src, i) => (
          <div className="logo-item" key={i}>
            <img src={src} alt="" />
          </div>
        ))}

        {/* Duplicate */}
        {logos.map((src, i) => (
          <div className="logo-item" key={`dup-${i}`}>
            <img src={src} alt="" />
          </div>
        ))}

      </div>
    </div>
  );
}
