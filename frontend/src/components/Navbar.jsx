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
    <nav className="navbar navbar-dark navbar-expand-lg overlay-content-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={img("logo", "/assets/images1.jpeg")}
            alt="Logo"
            width="50"
            height="50"
            className="me-2 rounded-5"
          />
          <span className="color fw-bold">AL-AMANAH TARBIYAH ACADEMY</span>
        </Link>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* 🔍 Search */}
          <form
            className="position-relative mx-lg-4 my-2 my-lg-0"
            onSubmit={handleSearch}
            style={{ maxWidth: "350px", width: "100%" }}
          >
            <FiSearch className="react-search-icon" />

            <input
              type="search"
              className="form-control ps-5 rounded-pill"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>

          {/* Links */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="color nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="color nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="color nav-link" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="color nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="color nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="color nav-link" to="/testimonials">Testimonials</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
