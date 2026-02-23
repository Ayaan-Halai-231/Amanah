import React, { useEffect } from "react";
import CoursesCard from "./CoursesCard"

export default function QaidaNooraniya() {

  /* ================= SCROLL ZOOM EFFECT ================= */

  useEffect(() => {

    const items = document.querySelectorAll(".scroll-zoom");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("zoom-show");
          } else {
            entry.target.classList.remove("zoom-show");
          }

        });
      },
      { threshold: 0.35 }
    );

    items.forEach((el) => observer.observe(el));

  }, []);


  return (
    <div style={{ background: "#f3efe9" }}>

      {/* ================= HERO ================= */}
      <section className="py-5 hero-bg fade-in">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-6">

              <h1 className="hero-title">
                Noorani Qaida Program
              </h1>

              <p className="hero-text mt-3">
                Our Noorani Qaida program helps young learners begin their
                Quran journey with confidence. Through guided lessons and
                simple exercises, children learn Arabic letters, sounds,
                and correct pronunciation step by step.
              </p>

              <button className="btn btn-success mt-3 px-4 py-2 shadow-sm hero-btn">
                Start Learning
              </button>

            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/assets/3.png"
                className="img-fluid float-img scroll-zoom"
                style={{ maxHeight: "320px" }}
                alt=""
              />
            </div>

          </div>
        </div>
      </section>



      {/* ================= ABOUT ================= */}
      <section className="py-5 bg-white fade-in">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">

              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4 p-md-5">

                  <span className="text-success fw-semibold small">
                    ABOUT THE COURSE
                  </span>

                  <h2 className="fw-bold mt-2">
                    Start Your Child’s Quran Reading Journey
                  </h2>

                  <div className="bg-success rounded mt-3 mb-4"
                    style={{ width: "70px", height: "4px" }} />

                  <p className="text-muted fs-5 mb-0">
                    The Noorani Qaida course is specially designed for beginners who
                    want to learn Quran reading from the foundation. Children learn
                    Arabic letters, correct pronunciation, and simple Tajweed rules
                    through guided lessons that gradually build reading confidence.
                  </p>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <CoursesCard/>

      {/* ================= WHAT STUDENTS LEARN ================= */}
      <section className="py-5 fade-in">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-7">

              <h2 className="mb-4 fw-semibold">
                What Students Will Learn
              </h2>

              <ul className="list-unstyled">

                {[
                  "Recognition of all Arabic letters and their sounds",
                  "Correct pronunciation using simple Tajweed basics",
                  "Reading joined letters, words, and short sentences",
                  "Confidence to begin reading Quran independently",
                ].map((item, i) => (
                  <li key={i} className="mb-3 p-3 offer-card">
                    ✓ {item}
                  </li>
                ))}

              </ul>

            </div>

            <div className="col-lg-5 text-center">
              <img
                src="/assets/2.png"
                className="img-fluid float-img scroll-zoom"
                style={{ maxHeight: "330px" }}
                alt=""
              />
            </div>

          </div>
        </div>
      </section>



      {/* ================= WHY OUR ACADEMY ================= */}
      <section className="py-5 fade-in">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-6 text-center">

              <img
                src="/assets/1.png"
                className="img-fluid float-img scroll-zoom"
                style={{ width: "100%", maxWidth: "460px" }}
                alt=""
              />

            </div>

            <div className="col-lg-6">

              <h2 className="mb-4 fw-semibold">
                Why Parents Trust Our Academy
              </h2>

              <ul className="list-unstyled">

                {[
                  "Beginner-friendly teaching style specially for children",
                  "Experienced Quran teachers with strong Tajweed knowledge",
                  "Interactive classes that keep students focused",
                  "Regular progress feedback for parents",
                ].map((item, i) => (
                  <li key={i} className="mb-3 p-3 offer-card">
                    ✓ {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>
        </div>
      </section>

      
    </div>
  );
}
