import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";
import API from "../config/api";

// ⭐ Stars
const Stars = ({ count }) => (
  <>
    {[...Array(5)].map((_, i) =>
      i < count ? (
        <FaStar key={i} color="#f4b400" />
      ) : (
        <FaRegStar key={i} color="#ddd" />
      )
    )}
  </>
);

// 📖 Expand text
const ExpandableText = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const words = text.split(" ");
  const shortText = words.slice(0, 45).join(" ");
  const shouldTruncate = words.length > 45;

  return (
    <p className="text-muted mb-2">
      {expanded || !shouldTruncate ? text : `${shortText}...`}
      {shouldTruncate && (
        <span
          className="ms-2 fw-semibold"
          style={{ cursor: "pointer", color: "#198754" }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </span>
      )}
    </p>
  );
};

// ================= MAIN =================
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/testimonials`)
      .then((r) => r.json())
      .then(setTestimonials)
      .catch(console.error);
  }, []);

  return (
    <section className="py-5" style={{ background: "#f7f9f8" }}>
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">What Parents & Students Say</h2>

          <div
            className="mx-auto mt-3"
            style={{
              width: "90px",
              height: "4px",
              background: "linear-gradient(to right,#198754,#7ed6a5)",
              borderRadius: "20px",
            }}
          />
        </div>

        {/* CARDS */}
        <div className="row g-4">

          {testimonials.map((t, i) => (
            <div key={t._id || i} className="col-lg-4 col-md-6">

              <div
                className="card h-100 border-0 shadow-sm p-4"
                style={{
                  borderRadius: "18px",
                  transition: "0.35s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >

                {/* USER */}
                <div className="d-flex align-items-center mb-2">
                  <FaUserCircle size={42} className="text-secondary me-2" />
                  <div>
                    <div className="fw-bold">{t.name}</div>
                    <small className="text-muted">{t.role}</small>
                  </div>
                </div>

                {/* STARS */}
                <div className="mb-2">
                  <Stars count={t.rating} />
                </div>

                {/* TEXT */}
                <ExpandableText text={t.text} />

                {/* DATE */}
                <small className="text-muted mt-auto">
                  {new Date(t.createdAt).toLocaleDateString()}
                </small>

              </div>

            </div>
          ))}

          {testimonials.length === 0 && (
            <div className="text-center text-muted py-5">
              <h5>No testimonials yet</h5>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}