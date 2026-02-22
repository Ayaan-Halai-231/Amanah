import React from "react";
import ChildCoursesCard from "./CoursesCard"

export default function NewMuslimCourse() {
  return (
    <div style={{ background: "#f6f4ef" }}>

      {/* ================= HERO ================= */}
      <section className="py-5 bg-white border-bottom">
        <div className="container">
          <div className="row align-items-center gy-4">

            <div className="col-lg-6">
              <span className="badge bg-success mb-3">New Course 2026</span>

              <h1 className="fw-bold display-6">
                New Muslim Convert Course
              </h1>

              <p className="text-muted mt-3">
                Begin your journey in Islam with confidence. This personalized
                one-on-one course helps new Muslims understand beliefs,
                worship, daily practice, and spiritual growth step-by-step.
              </p>

              <a
                href="https://wa.me/919999999999"
                className="btn btn-success btn-lg mt-3"
              >
                Enroll via WhatsApp
              </a>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src="/assets/newmuslim.png"
                alt="New Muslim Course"
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: "420px", objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </section>

      <ChildCoursesCard/>
      {/* ================= WHY JOIN ================= */}
      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-4">
            Why Join This Course?
          </h2>

          <p className="text-muted text-center mb-5">
            Becoming a Muslim is a beautiful journey. This course guides you
            step-by-step with knowledge, skills, and personal support.
          </p>

          <div className="row g-4">

            {[
              "Recently embraced Islam and want guidance",
              "Want stronger knowledge of beliefs and worship",
              "Prefer structured personalized learning",
              "Need friendly environment to ask questions"
            ].map((item, i) => (

              <div className="col-md-6 col-lg-3" key={i}>
                <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
                  <div className="fs-3 mb-2">☪️</div>
                  <p className="mb-0">{item}</p>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>


      {/* ================= STRUCTURE ================= */}
      <section className="py-5 bg-white">
        <div className="container">

          <h2 className="fw-bold text-center mb-5">
            Course Structure
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8">

              <div className="card shadow border-0 rounded-4 p-4">

                <ul className="list-group list-group-flush">

                  <li className="list-group-item">
                    <b>Class Type:</b> One-on-one personalized sessions
                  </li>

                  <li className="list-group-item">
                    <b>Levels:</b> Beginner → Intermediate → Advanced
                  </li>

                  <li className="list-group-item">
                    <b>Age Group:</b> All ages welcome
                  </li>

                  <li className="list-group-item">
                    <b>Language:</b> English & Urdu
                  </li>

                  <li className="list-group-item">
                    <b>Resources:</b> Worksheets, videos, G-Suite materials
                  </li>

                </ul>

              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ================= OUTCOMES ================= */}
      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold text-center mb-5">
            Course Outcomes
          </h2>

          <div className="row g-3">

            {[
              "Understand overview of Islam and core principles",
              "Learn Five Pillars and proper implementation",
              "Master Six Pillars of Faith",
              "Understand worship and spiritual growth",
              "Apply Islam in daily life",
              "Learn Islamic morality and ethics",
              "Recognize major sins and shirk",
              "Understand rights and responsibilities",
              "Study life of Prophet Muhammad ﷺ",
              "Develop Islamic manners and habits",
              "Gain confidence practicing Islam today"
            ].map((o,i)=>(
              <div className="col-md-6" key={i}>
                <div className="bg-white shadow-sm rounded-4 p-3">
                  ✅ {o}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ================= INSTRUCTORS ================= */}
      <section className="py-5 bg-white">
        <div className="container">

          <h2 className="fw-bold text-center mb-4">
            Qualified Instructors
          </h2>

          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">

              <p className="text-muted">
                Our instructors are knowledgeable, spiritually grounded, and
                experienced in supporting new Muslims. They provide structured,
                authentic guidance along with compassionate mentorship in a
                respectful and confidential environment.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* ================= PREREQUISITE ================= */}
      <section className="py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-4">
            Course Prerequisite
          </h2>

          <p className="text-muted mx-auto" style={{maxWidth:700}}>
            No strict prerequisites. Open to new Muslims, people considering
            Islam, and anyone sincerely interested in understanding the faith.
            Suitable for all ages, genders, and nationalities worldwide.
          </p>

        </div>
      </section>


      {/* ================= CTA ================= */}
      <section className="py-5 text-center bg-success text-white">
        <div className="container">

          <h2 className="fw-bold">
            Join Us on This Transformative Journey
          </h2>

          <p className="mt-3">
            Start your journey of faith, knowledge, and growth today.
          </p>

          <a
            href="https://wa.me/919999999999"
            className="btn btn-light btn-lg mt-3"
          >
            Start Learning Now
          </a>

        </div>
      </section>

    </div>
  );
}