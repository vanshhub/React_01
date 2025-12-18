// src/components/card.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";

import Loader from "./TittleLoader";  // your loader file

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "./card.css";

function Card({ cards }) {
  return (
    <div className="full-slider-container" data-aos="fade-up">
      {/* ⭐ Add loader before heading */}
      <div className="loader-heading-wrapper">
        <Loader /> 

        <h2 className="features-heading">
          Types of <span className="bold">AI Agent</span>
          <hr id="horizontal-line" />
        </h2>
      </div>

      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        speed={2000}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {cards.map((item, i) => (
          <SwiperSlide key={i} className="full-slide">
            <div className="card-content">

              <div className="card-image-section">
                <img src={item.icon} alt={item.title} className="card-image" />
              </div>

              <div className="card-feature-section">
                <h3 className="slidercard-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}

export default Card;
