import React from "react";
import { Link } from "react-router-dom";

export default function FamilyInfographic() {
  return (
    <div className="container-fluid py-5 px-4">

      <div className="bg-light rounded-4 shadow-lg py-5 px-4">

        <div className="row align-items-center justify-content-center">


          {/* LEFT CARD */}
          <div className="col-md-4 mb-4 mb-md-0">

            <Link to="/youngcourses" className="text-decoration-none">

              <div className="card border-0 shadow-lg text-center infographic-card left-card">

                <div className="card-body d-flex flex-column justify-content-center">

                  <h4 className="fw-bold mb-2">
                    For Brother & Sister
                  </h4>

                  <p className="text-light mb-0">
                    Information about brother and sister.
                  </p>

                </div>

              </div>

            </Link>

          </div>


          {/* CENTER */}
          <div className="col-md-2 text-center my-4 my-md-0 me-2">

            <div
              className="bg-white rounded-circle shadow mx-auto d-flex justify-content-center align-items-center overflow-hidden"
              style={{ width: "220px", height: "220px" }}
            >
              <img
                src="/assets/images1.jpeg"
                alt="logo"
                className="w-100 h-100 rounded-circle object-fit-cover"
              />
            </div>

          </div>


          {/* RIGHT CARD */}
          <div className="col-md-4">

            <Link to="/childcourses" className="text-decoration-none">

              <div className="card border-0 shadow-lg text-center infographic-card right-card">

                <div className="card-body d-flex flex-column justify-content-center">

                  <h4 className="fw-bold mb-2">
                    For Kid
                  </h4>

                  <p className="text-light mb-0">
                    Information about the child.
                  </p>

                </div>

              </div>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
