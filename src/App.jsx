import { Routes, Route } from "react-router-dom";

// Home Page Components
import Card from "./components/card.jsx";
import { cardsData } from "./CardData.js";
import bgVideo from "./assets/18419947-uhd_3840_2160_30fps.mp4";
import Features from "./components/features.jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero.jsx";
import BottomSvg from "./components/BottomSvg";
import LogoSlider from "./components/LogoSlider";
import Layout from "./components/Layout";

// About Page
import About from "./components/About.jsx";
import Product from "./components/Product.jsx";

import React, { useRef, useEffect, useState } from "react";

function HomePage() {
  const [cursorActive, setCursorActive] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="app-container">
      

      <video
        ref={videoRef}
        className="bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
      />

      <div className="site-container">
        <Hero />
        <Card cards={cardsData} />
        <LogoSlider />
        <Features />
        <Footer />
        <BottomSvg />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Layout>
  );
}