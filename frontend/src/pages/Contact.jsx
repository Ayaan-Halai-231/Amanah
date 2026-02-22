import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const address = "Ahmedabad Gujarat India";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* ================= CONTACT SECTION ================= */}
      <div
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg,#e6fff9,#f7fffc,#e8f8ff)",
        }}
      >
        <div className="container">
          <div className="row align-items-start">

            {/* LEFT SIDE */}
            <div
              className="col-lg-6 mb-4 d-flex flex-column text-center"
              style={{ minHeight: "420px" }}
            >
              {/* TOP CONTENT */}
              <div>
                <h2 className="text-uppercase fw-bold mb-3 text-primary">
                  Amanah Islamic Academy
                </h2>

                <h5 className="fw-semibold mb-4">
                  I'd like to hear from you
                </h5>

                <p className="text-muted mb-5">
                  If you have any inquiries, questions, or simply want to say
                  hello,
                  <br />
                  feel free to reach out by using the contact form below.
                </p>

                {/* EMAIL */}
                <div className="d-inline-flex align-items-center px-3 py-2 border rounded bg-light mb-4">
                  <MdEmail className="me-2 text-primary fs-5" />
                  <span className="fw-medium">
                    info@amanahacademy.in
                  </span>
                </div>
              </div>

              {/* BOTTOM ICONS */}
              <div className="mt-auto">
                <div className="d-flex gap-3 justify-content-center">

                  {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <Icon />
                      </a>
                    )
                  )}

                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-6">
              <div className="bg-white p-4 shadow rounded">
                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Enter Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-success px-4"
                  >
                    Send Message
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>

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
};

export default Contact;
