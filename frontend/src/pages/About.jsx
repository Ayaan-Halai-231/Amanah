import React from "react";

const About = () => {
  return (
    <>

      {/* PARALLAX HERO */}
      <section
        className="hero-parallax text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.7)), url('/assets/about/aboutImg1.jpeg')"
        }}
      >


        <div className="container position-relative">
          <h1 className="display-3 calligraphy">
            About Us
          </h1>

          <h1 className="lead arabic-title">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h1>
        </div>

      </section>


      {/* GLASS CARD CONTENT */}
      <section className="container my-5">
        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="glass-card p-4 p-md-5 h-100">

              <h2 className="arabic-title mb-5">
                مرحبًا بكم في الأمانة أكاديمية للتربية
              </h2>

              <p>
                <strong>Al Amanah Tarbiyah Academy</strong> was established with a sincere
                mission to nurture hearts and minds with authentic Islamic knowledge
                in a caring, respectful, and faith-centered environment.
              </p>

              <p>
                Amanah means trust and Tarbiyah means nurturing.
                Every student is a trust from Allah ﷻ, and our goal is to guide that
                trust with knowledge, noble character, and love for the Deen.
              </p>
              
              <p>
              Our academy provides Islamic learning opportunities for everyone 
              in the community  brothers and sisters, (adults) and boys and girls, 
              (children) of all ages. Through online classes, we aim to make sacred 
              knowledge accessible to learners wherever they are, creating a space 
              where everyone feels valued, comfortable, and inspired to grow in their faith.
              </p>

            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="col-lg-6" data-aos="fade-left">
            <img
              src="https://i.etsystatic.com/23334810/r/il/5f14ce/2318929070/il_fullxfull.2318929070_7cjm.jpg"
              alt="Islamic learning"
              className="img-fluid rounded shadow-lg side-image"
            />
          </div>

        </div>
      </section>


      <section className="aim-wrapper py-5">

<div className="container-fluid position-relative">

  {/* Background Row */}
  <div className="row g-0 aim-bg-row">

    <div className="col-md-4 aim-bg aim-left"></div>

    <div className="col-md-4 aim-bg aim-center"></div>

    <div className="col-md-4 aim-bg aim-right"></div>

  </div>


  {/* Floating Card */}
  <div className="container position-relative">
    <div className="row justify-content-center">

      <div className="col-lg-8">

        <div className="card shadow border-0 p-4 text-center aim-card">

          <h4 className="fw-bold mb-3">AIM</h4>

          <p>
            At Al Amanah Tarbiyah Academy, learning Islam is not only about gaining knowledge, 
            but also about building strong character, strengthening our connection with Allah, 
            and practicing the beautiful manners taught by our beloved Prophet Muhammad ﷺ.
          </p>

          <p>
            We strive to make Islamic education engaging, meaningful, 
            and relevant to daily life, so that our students can confidently 
            live as practicing Muslims in today’s world.
          </p>

          <p>
            Our intention is purely for the sake of Allah ﷻ:
            to serve His creation with sincerity, to spread 
            knowledge that brings hearts closer to Him, and 
            to help raise a generation whose lives are guided by the Qur’an,
            illuminated by the Sunnah, and beautified with noble character.
          </p>

        </div>

      </div>

    </div>
  </div>

</div>

</section>



      {/* QUOTE GOLD BLOCK */}
      <section className="container my-5">
        <div
          className="quote-gold"
          data-aos="zoom-in"
        >
          May Allah place barakah in this effort and make it a source of ongoing benefit. 
          Ameen.
        </div>
      </section>


      {/* IMAGE + TEXT */}
      <section className="container my-5">
        <div className="row align-items-center g-5">

          <div
            className="col-lg-6"
            data-aos="fade-right"
          >
            <img
              src="/assets/about/aboutImg6.jpeg"
              className="img-fluid rounded shadow-lg"
            />
          </div>

          <div
            className="col-lg-6"
            data-aos="fade-left"
          >
            <div className="glass-card p-4">
              <p>
              We pray to nurture souls that remember Allah in ease and hardship, 
              tongues that speak with kindness and truth, and hearts that carry 
              love for the Deen. 
              
              </p>

              <p>
              Our hope is that the knowledge gained here becomes a source of light in this world,
              a means of steadfastness in faith, and a path toward success in the Hereafter.

              </p>
            </div>
          </div>

        </div>
      </section>

    </>
  );
};

export default About;
