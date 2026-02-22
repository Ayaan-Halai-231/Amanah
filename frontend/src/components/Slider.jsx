import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import API from "../config/api";

// Fallback images for when database is empty
import slide1 from "../../assets/slider/sliderImg1.jpeg";
import slide2 from "../../assets/slider/sliderImg2.jpeg";
import slide3 from "../../assets/slider/sliderImg3.jpeg";

const fallbackSlides = [
  { image: slide1, heading: "AL-AMANAH TARBIYAH ACADEMY", subtext: "Nurturing Knowledge with Faith" },
  { image: slide2, heading: "Quality Islamic Education", subtext: "Quran • Sunnah • Modern Learning" },
  { image: slide3, heading: "Building Future Leaders", subtext: "With Faith & Knowledge" },
];

const BootstrapSlider = () => {
  const [slides, setSlides] = useState(fallbackSlides);

  useEffect(() => {
    fetch(`${API}/api/sliders`)
      .then((r) => r.json())
      .then((data) => {
        if (data && data.length > 0) setSlides(data);
      })
      .catch(() => {
        // Keep fallback slides on error
      });
  }, []);

  return (
    <div
      id="schoolCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#schoolCarousel"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
          />
        ))}
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {slides.map((s, i) => (
          <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={s._id || i}>
            <img
              src={s.image}
              className="d-block w-100"
              style={{ height: "450px", objectFit: "cover" }}
              alt={s.heading || `slide${i + 1}`}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center h-100">
              {s.heading && <h1>{s.heading}</h1>}
              {s.subtext && <p>{s.subtext}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#schoolCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#schoolCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default BootstrapSlider;
