import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import slide1 from "../../assets/slider/sliderImg1.jpeg";
import slide2 from "../../assets/slider/sliderImg2.jpeg";
import slide3 from "../../assets/slider/sliderImg3.jpeg";

const BootstrapSlider = () => {
  return (
    <div
      id="schoolCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"   // 3 seconds
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#schoolCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src={slide1}
            className="d-block w-100"
            style={{ height: "450px", objectFit: "cover" }}
            alt="slide1"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1>AL-AMANAH TARBIYAH ACADEMY</h1>
            <p>Nurturing Knowledge with Faith</p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src={slide2}
            className="d-block w-100"
            style={{ height: "450px", objectFit: "cover" }}
            alt="slide2"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1>Quality Islamic Education</h1>
            <p>Quran • Sunnah • Modern Learning</p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src={slide3}
            className="d-block w-100"
            style={{ height: "450px", objectFit: "cover" }}
            alt="slide3"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <h1>Building Future Leaders</h1>
            <p>With Faith & Knowledge</p>
          </div>
        </div>

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
