import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import useSiteAssets from "../hooks/useSiteAssets";

const NavigationBar = () => {

  const [query, setQuery] = useState("");
  const { img } = useSiteAssets();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", query);
  };

  return (
    <nav className="navbar navbar-dark navbar-expand-lg overlay-content-navbar py-2">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={img("logo", "/assets/images1.jpeg")}
            alt="Logo"
            width="45"
            height="45"
            className="me-2 rounded-circle"
          />
          <span className="color fw-bold small small-sm">
            AL-AMANAH TARBIYAH
          </span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* CENTER SEARCH (becomes full width on mobile) */}
          <form
            className="d-lg-flex mx-lg-4 my-3 my-lg-0 w-100"
            style={{ maxWidth: "350px" }}
            onSubmit={handleSearch}
          >
            <div className="position-relative w-100">

              <FiSearch
                style={{
                  position: "absolute",
                  left: "15px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  opacity: 0.6
                }}
              />

              <input
                type="search"
                className="form-control ps-5 rounded-pill"
                placeholder="Search courses..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

            </div>
          </form>

          {/* MENU */}
          <ul className="navbar-nav ms-auto text-center text-lg-start">

            <li className="nav-item">
              <Link className="nav-link color" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/courses">Courses</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/blogs">Blogs</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/contact">Contact</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/testimonials">
                Testimonials
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;