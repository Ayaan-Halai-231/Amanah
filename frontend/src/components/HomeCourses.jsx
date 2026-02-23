import React from "react";
import { Link } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Qur’an Reading Basics",
    desc: "Learn to read the Qur’an confidently with structured beginner lessons designed for children and adults.",
    img: "/assets/blog/img11.jpeg",
  },
  {
    id: 2,
    title: "Tajweed Mastery",
    desc: "Improve pronunciation and recitation through detailed Tajweed rules and guided practice sessions.",
    img: "/assets/blog/img12.jpeg",
  },
  {
    id: 3,
    title: "Memorization (Hifz)",
    desc: "Structured memorization guidance with revision plans to help students retain effectively.",
    img: "/assets/blog/img13.jpeg",
  },
  {
    id: 4,
    title: "Islamic Studies",
    desc: "Build a strong Islamic foundation through Aqeedah, Seerah, and daily practical teachings.",
    img: "/assets/blog/img14.jpeg",
  },
  {
    id: 5,
    title: "Arabic Language",
    desc: "Understand Qur’anic Arabic through vocabulary building and grammar-focused lessons.",
    img: "/assets/blog/img15.jpeg",
  },
  {
    id: 6,
    title: "Daily Duas",
    desc: "Learn essential duas to strengthen connection with Allah and build daily Islamic habits.",
    img: "/assets/blog/img16.jpeg",
  },
];

export default function CoursePage() {

  const shortText = (text, words = 20) => {
    const arr = text.split(" ");
    return arr.length > words
      ? arr.slice(0, words).join(" ") + "..."
      : text;
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">

        {/* Title */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success display-6">
            Our Courses
          </h2>
          <p className="text-muted">Choose the perfect learning path for you</p>
        </div>

        {/* Grid */}
        <div className="row g-4 mx-0">

          {courses.map((course) => (
            <div className="col-lg-4 col-md-6" key={course.id}>

              <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="card-img-top"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Body */}
                <div className="card-body d-flex flex-column">

                  <h5 className="fw-semibold">
                    {course.title}
                  </h5>

                  <p className="text-muted small flex-grow-1">
                    {shortText(course.desc)}
                  </p>

                  <Link
                    to={`/course/${course.id}`}
                    className="btn btn-outline-success btn-sm mt-auto fw-semibold"
                  >
                    View Course
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Button */}
        <div className="text-center mt-5">
          <Link
            to="/courses"
            className="btn btn-success btn-lg fw-semibold shadow"
          >
            View More Courses →
          </Link>
        </div>

      </div>
    </div>
  );
}
