import React from "react";
import { Link } from "react-router-dom"

export default function KidsCourses() {

  const courses = [
    {
      id:1,
      title:"QURAN HIFDH",
      desc:"Kids learn step-by-step Quran memorization with expert teachers and structured daily revision system.Kids learn step-by-step Quran memorization with expert teachers and structured daily revision system.",
      img:"/assets/demo.png"
    },
    {
      id:2,
      title:"BASIC ARABIC",
      desc:"Children learn Arabic reading, vocabulary building, sentence formation and grammar basics in fun way.",
      img:"/assets/demo.png"
    },
    {
      id:3,
      title:"NOORANI QAIDA",
      desc:"Beginner course designed for children to start Quran reading correctly with Tajweed practice.",
      img:"/assets/demo.png"
    }
  ];

  const shortText=(text,limit=20)=>{
    const words=text.split(" ");
    return words.length>limit ? words.slice(0,limit).join(" ")+"..." : text;
  };

  return (

    <div className="container py-4 px-lg-5 px-4">

      <h3 className="text-center fw-bold mb-4">
        Courses
      </h3>

      <div className="row g-4">

        {courses.map(course => (

          <div key={course.id} className="col-lg-4 col-md-6">

            <div className="card premium-card border-0 rounded-4 overflow-hidden">

              {/* ===== IMAGE AREA ===== */}
              <div className="position-relative">

                {/* background image smaller height */}
                <img
                  src={course.img}
                  className="w-100"
                  style={{height:"230px",objectFit:"cover"}}
                  alt=""
                />

                {/* dark overlay */}
                <div className="premium-overlay"></div>

                {/* ✅ WEBSITE NAME TOP */}
                <div className="position-absolute top-0 start-0 w-100 text-center text-white small fw-semibold py-2">
                    AL-AMANAH TARBIYAH ACADEMY
                </div>

                {/* TITLE CENTER */}
                <div className="position-absolute start-50 text-center"
                    style={{top:"42%", transform:"translate(-50%,-50%)"}}>
                  <h4 className="premium-title m-0">
                    {course.title}
                  </h4>
                </div>

                {/* floating small image slightly smaller */}
                <img
                    src="/assets/2.png"
                    alt=""
                    className="position-absolute floating-badge"
                    style={{
                        height:"95px",
                        bottom:"4px",          // bottom level
                        left:"50%",              // center horizontally
                        transform:"translateX(-50%)",
                        
                    }}
                />
              </div>

              {/* ===== BODY tighter padding ===== */}
              <div className="card-body text-center bg-light pt-4 pb-3">

                <p className="small text-muted mb-2">
                  {shortText(course.desc)}
                </p>

                <Link to={`/enroll/${course.id}`} className="premium-link">
                  View More
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}