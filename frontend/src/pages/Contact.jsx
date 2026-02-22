import React, { useState, useEffect } from "react";
import API from "../config/api";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message");
      }
    } catch {
      setStatus("Server error");
    }
  };

  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(to bottom, #f8f9fa, #e8f5e9)" }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Contact Us</h2>
          <div
            className="mx-auto mt-3"
            style={{
              width: "90px",
              height: "4px",
              background: "linear-gradient(to right,#198754,#7ed6a5)",
              borderRadius: "20px",
            }}
          />
          <p className="text-muted mt-3">
            Have a question? We'd love to hear from you.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit} className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input
                      name="phone"
                      className="form-control"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button className="btn btn-success w-100 py-2">
                      Send Message
                    </button>
                  </div>

                  {status && (
                    <div className="col-12">
                      <div
                        className={`alert ${status.includes("success")
                            ? "alert-success"
                            : "alert-warning"
                          } py-2 small mb-0`}
                      >
                        {status}
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
