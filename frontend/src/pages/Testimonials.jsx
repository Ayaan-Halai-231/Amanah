import React, { useState } from "react";
import { FaStar, FaRegStar, FaUserCircle } from "react-icons/fa";

// ================= DATA =================
const testimonials = [
  {
    name: "Ayat parent",
    role: "Parent",
    rating: 5,
    text:
      "Alhamdulillah, enrolling my child at Al-Amana Tarbiyah Academy has been one of the best decisions for our family. The online classes are well-organized, and the teachers truly care about both Islamic character and academic growth. I’ve seen my child become more confident in salah, duas, and daily manners. May Allah reward the team for their sincere efforts.",
    date: "Mar 2, 2025",
  },
  {
    name: "Aafiya parent",
    role: "Parent",
    rating: 5,
    text:
      "Before joining Al-Amana Tarbiyah Academy, I was shy in class. Now I feel more confident speaking and reading, especially in Quran class. My teachers encourage me and that helps a lot.",
    date: "Jan 27, 2025",
  },
  {
    name: "Sameeha parent",
    role: "Parent",
    rating: 4,
    text:
      "I am very happy and satisfied with the quran class. The teacher took extra care to make my daughter comfortable. I was not sure about online classes at first but MashaAllah seeing my daughter how fast she coped with the help of her wonderful teacher made me realize that this was the best decision. My daughter enjoys her classes.",
    date: "Jan 19, 2025",
  },
  {
    name: "Maria / Inaya",
    role: "Parent",
    rating: 5,
    text:
      "Alhamdulillah my daughter learns the Quran in a very positive environment with you...she is eager to join the classes as you keep on motivating the kids. You are dedicated and patient with the kids.",
    date: "Dec 11, 2024",
  },
  {
    name: "Yusuf Ali",
    role: "Student",
    rating: 5,
    text:
      "Classes are engaging and practical. I appreciate the guidance and supportive environment that encourages growth.",
    date: "Nov 3, 2024",
  },
];

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
            <div key={i} className="col-lg-4 col-md-6">

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
                <small className="text-muted mt-auto">{t.date}</small>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}