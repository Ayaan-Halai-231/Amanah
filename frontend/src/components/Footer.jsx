import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 shadow-lg">

      <div className="container">
        <div className="row gy-4">

          {/* Facilities */}
          <div className="col-md-4">
            <h6 className="fw-bold text-warning border-bottom pb-2">
              Facilities
            </h6>

            <ul className="list-unstyled small lh-lg">
              <li>Moral & Character Development Sessions</li>
              <li>Arabic Language Sessions</li>
              <li>Counselling For Children</li>
              <li>Female Teachers Available for Girls</li>
              <li>Courses Certificate</li>
            </ul>
          </div>

          {/* Activities */}
          <div className="col-md-4">
            <h6 className="fw-bold text-warning border-bottom pb-2">
              Activities
            </h6>

            <ul className="list-unstyled small lh-lg">
              <li>Tajweed Improvement Classes</li>
              <li>Dua Memorization</li>
              <li>Surah Learning Program</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h6 className="fw-bold text-warning border-bottom pb-2">
              Contact Us
            </h6>

            <p className="fw-semibold mb-1">
              AL-AMANAH TARBIYAH ACADEMY
            </p>

            <p className="fst-italic small mb-2">
              An Independent School
            </p>

            <p className="small mb-2">
              📍 Golden store, library road, Kodinar. Gir Somnath.<br />
               Kodinar – 362720, Gujarat, India
            </p>

            <p className="small mb-1">
              📞 96387 84184
            </p>

            <p className="small mb-3">
              <MdEmail /> alamanahtarbiyahacademy@gmail.com
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-2">

              <a className="btn btn-light btn-sm rounded-circle">
                <FaInstagram />
              </a>

              <a className="btn btn-light btn-sm rounded-circle">
                <FaFacebook />
              </a>

              <a className="btn btn-light btn-sm rounded-circle">
                <FaTwitter />
              </a>

              <a className="btn btn-light btn-sm rounded-circle">
                <FaYoutube />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-secondary mt-4 py-3">
        <div className="container d-flex justify-content-between flex-wrap small">

          <span className="text-secondary">
            © 2026 AL-AMANAH TARBIYAH ACADEMY
          </span>

          <span className="text-secondary">
            Developed by S.H Infotech
          </span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
