import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useSiteAssets from "../hooks/useSiteAssets";
import { Collapse } from "bootstrap";

const NavigationBar = () => {

  const { img } = useSiteAssets();
  const navRef = useRef(null);

  const closeNavbar = () => {
    if (navRef.current) {
      const bsCollapse = Collapse.getInstance(navRef.current);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
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
            style={{ width: "52px", height: "52px", }}
          />
          <span className="color fw-bold small small-sm">
            AL-AMANAH TARBIYAH
          </span>
        </Link>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            if (navRef.current) {
              const bsCollapse =
                Collapse.getInstance(navRef.current) ||
                new Collapse(navRef.current, { toggle: false });

              bsCollapse.toggle();
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* COLLAPSE */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          ref={navRef}
        >

          <ul className="navbar-nav ms-auto text-center text-lg-start">

            <li className="nav-item">
              <Link className="nav-link color" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/courses" onClick={closeNavbar}>
                Courses
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/blogs" onClick={closeNavbar}>
                Blogs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/about" onClick={closeNavbar}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/contact" onClick={closeNavbar}>
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link color" to="/testimonials" onClick={closeNavbar}>
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