import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import HomeCourses from "../components/HomeCourses";
import useSiteAssets from "../hooks/useSiteAssets";
import { Link } from "react-router-dom";

import {
  FaBook,
  FaGlobe,
  FaMobileAlt,
  FaProjectDiagram,
  FaUsers,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

export default function Home() {

  const [showPopup, setShowPopup] = useState(false);
  const { img } = useSiteAssets();
  const address = "Golden store, library road, Kodinar Kodinar. Gir Somnath. Gujarat. India Pin code : 362720"

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>

      {/* ===== STICKY BAR ===== */}
      <div
        className="sticky-top text-center py-2 fw-bold"
        style={{ background: "#1f7a63", color: "white", zIndex: 999 }}
      >
        🎓 Coureses Open • Free Trial Available
      </div>


      {/* ===== HERO ===== */}
      <div className="position-relative">

        <Slider />
        <Link
          to="/free-trial"
          style={{
            position: "absolute",
            top: "20px",
            left: "15px",
            background: "#ffcc00",
            padding: "10px 20px",
            borderRadius: "50px",
            fontWeight: "bold",
            boxShadow: "0 5px 15px rgba(0,0,0,.2)",
            textDecoration: "none",
            color: "#000",
            zIndex: 999
          }}
        >
          ⭐ FREE TRIAL
        </Link>
      </div>


      {/* ===== STUDENT COUNTER ===== */}
      <Stats />


      {/* ===== ABOUT SECTION ===== */}
      <section className="container my-5">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="bg-white rounded shadow p-4 p-md-5 h-100">

              <h2 className="fw-bold text-success mb-4">
                Welcome — Begin Your Journey of Knowledge & Growth
              </h2>

              <p className="text-muted">
                All of our courses are delivered through carefully structured
                and well-planned lessons. Each class follows a clear learning
                objective, step-by-step progression, and regular revision to
                ensure children truly understand what they learn — not just memorize it.
              </p>

              <h5 className="fw-bold text-success mt-4">
                Our teaching approach includes:
              </h5>

              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item border-0 ps-0">
                  ✔ Gradual skill-building according to age and level
                </li>

                <li className="list-group-item border-0 ps-0">
                  ✔ Interactive teaching methods to maintain focus online
                </li>

                <li className="list-group-item border-0 ps-0">
                  ✔ Regular revision and reinforcement
                </li>

                <li className="list-group-item border-0 ps-0">
                  ✔ Continuous encouragement to build confidence and love for learning
                </li>
              </ul>

            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">
            <img
              src={img("home_hero_image", "https://smarthistory.org/wp-content/uploads/2022/01/3343681248_16a178708f_o-scaled.jpg")}
              alt="Islamic learning"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </section>


      {/* ===== COURSES ===== */}
      <HomeCourses />


      {/* ===== SALIENT FEATURES ===== */}
      <Features />


      {/* ===== QUICK POPUP ===== */}
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupBox text-center">

            <h4 className="fw-bold mb-3">🎁 Free Trial Class</h4>

            <p className="text-muted">
              Book a FREE Quran class for your child today.
            </p>

            <Link to="/free-trial" className="btn btn-success mt-2">
              Book Now
            </Link>

            <div
              className="mt-3 text-muted"
              style={{ cursor: "pointer" }}
              onClick={() => setShowPopup(false)}
            >
              close
            </div>

          </div>
        </div>
      )}


      {/* ================= MAP SECTION ================= */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#e6fff9,#f7fffc,#e8f8ff)",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <div className="shadow rounded overflow-hidden">

            <iframe
              title="map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>
        </div>
      </section>

    </>
  );
}



/* ================= COUNTER ================= */

function Stats() {
  return (
    <section className="py-5 islamicBg text-center">
      <div className="container">
        <div className="row">

          <Counter n={350} label="Students" />
          <Counter n={18} label="Teachers" />
          <Counter n={22} label="Courses" />
          <Counter n={12} label="Countries" />

        </div>
      </div>
    </section>
  );
}

function Counter({ n, label }) {

  const [c, setC] = useState(0);

  useEffect(() => {

    let i = 0;
    const step = Math.ceil(n / 60);

    const t = setInterval(() => {
      i += step;
      if (i >= n) {
        i = n;
        clearInterval(t);
      }
      setC(i);
    }, 30);

    return () => clearInterval(t);

  }, [n]);

  return (
    <div className="col-md-3 mb-3">
      <h2 className="fw-bold text-success">{c}+</h2>
      <div className="text-muted">{label}</div>
    </div>
  );
}



/* ================= FEATURES ================= */

function Features() {

  const data = [
    { icon: <FaBook />, title: "Online Learning", text: "Structured Islamic lessons delivered live with teacher guidance." },
    { icon: <FaGlobe />, title: "Learn Anywhere", text: "Students can join classes worldwide anytime from home." },
    { icon: <FaMobileAlt />, title: "Mobile Friendly", text: "Attend classes easily using phone, tablet or computer." },
    { icon: <FaProjectDiagram />, title: "Teacher Support", text: "Personal one-to-one attention ensures proper learning." },
    { icon: <FaUsers />, title: "Positive Community", text: "Supportive environment helping students stay motivated." },
    { icon: <GrCertificate />, title: "Completion Certificate", text: "Receive official certificate after successful completion." }
  ];

  return (
    <section className="py-5 bg-light text-center">

      <h2 className="fw-bold mb-2" style={{ color: "#6f42c1" }}>
        Salient Features
      </h2>

      <div
        className="mx-auto mb-5"
        style={{ width: 60, height: 3, background: "#6f42c1" }}
      />

      <div className="container">
        <div className="row g-4">

          {data.map((f, i) => (
            <div className="col-md-4" key={i}>
              <div className="card border-0 shadow-sm h-100 p-4 featureCard">

                <div
                  className="mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: "50%",
                    background: "#f3ecff",
                    fontSize: 32,
                    color: "#6f42c1"
                  }}
                >
                  {f.icon}
                </div>

                <h5 className="fw-bold mt-3">{f.title}</h5>

                <p className="text-muted small">{f.text}</p>

              </div>
            </div>
          ))}

        </div>
      </div>

    </section>
    
  );
}