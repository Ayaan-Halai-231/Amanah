import React from "react";
import { Link } from "react-router-dom"

export default function KidsCourses() {

  const courses = [
    {
      id:1,
      title:"Quran Learning Programs",
      desc:"Our Quran courses are personalized according to each child’s level, pace, and ability, ensuring steady and confident progress. This structured preparation enables children to begin Quran reading with accuracy and confidence.",
      floatingImg:"/assets/floatingImg/1.png"
    },
    {
      id:2,
      title:"Quran Nazra ",
      desc:"Students recite the Holy Quran with proper Tajweed under teacher guidance. Lessons are planned to improve:",
      floatingImg:"/assets/floatingImg/2.png"
    },
    {
      id:3,
      title:"Quran Hifz",
      desc:"We provide structured memorization pathways based on each child’s ability and goals: Structured revision schedulesGentle supervision to avoid pressure or burnout",
      floatingImg:"/assets/floatingImg/3.png"
    },
    {
      id:4,
      title:"Arabic Language Development ",
      desc:"To help children understand the language of the Quran, our Arabic program is taught in a gradual and child-friendly manner.",
      floatingImg:"/assets/floatingImg/4.png"
    },
    {
      id:5,
      title:"Basic Arabic Grammar ",
      desc:"Simple, structured lessons introducing essential grammar concepts through examples and exercises.",
      floatingImg:"/assets/floatingImg/5.png"
    },
    {
      id:6,
      title:"Advanced Arabic Grammar ",
      desc:"For students ready to explore deeper sentence structure and Quranic language patterns.",
      floatingImg:"/assets/floatingImg/6.png"
    },
    {
      id:7,
      title:"Arabic Vocabulary Building ",
      desc:"Vocabulary lessons are integrated into reading and understanding activities to strengthen Quran comprehension and overall Arabic skills. All Arabic lessons are supported with visual aids, practice exercises, and interactive online tools to make learning effective and enjoyable.",
      floatingImg:"/assets/floatingImg/1.png"
    },
    {
      id:8,
      title:"Islamic Studies",
      desc:"Our Islamic Studies curriculum is designed to develop strong faith, good character, and Islamic identity through meaningful and well-organized lessons.",
      floatingImg:"/assets/floatingImg/2.png"
    },
    {
      id:9,
      title:"Aqidah (Islamic Beliefs)",
      desc:"Children learn the core beliefs of Islam in a clear and structured way that strengthens their understanding and connection with Allah.",
      floatingImg:"/assets/floatingImg/3.png"
    },
    {
      id:10,
      title:"Seerah (Life of the Prophet ﷺ) ",
      desc:"The Seerah is taught as a guided journey through key events in the life of Prophet Muhammad ﷺ, helping children learn practical lessons in:",
      floatingImg:"/assets/floatingImg/4.png"
    },
    {
      id:11,
      title:"Stories of the Prophets (AS) ",
      desc:"The stories of the Prophets are taught as moral and character-building case studies, where children learn: How Prophets showed patience during hardship",
      floatingImg:"/assets/floatingImg/5.png"
    },
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
                  src="/assets/demo.png"
                  className="w-100"
                  style={{height:"230px",objectFit:"cover",opacity:"0.9"}}
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
                    src={course.floatingImg}
                    alt=""
                    className="position-absolute floating-badge"
                    style={{
                        height:"95px",
                        width:"95px",
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