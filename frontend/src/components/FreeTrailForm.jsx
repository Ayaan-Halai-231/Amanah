import React, { useState } from "react";

export default function FreeTrialForm() {

  const [form, setForm] = useState({
    studentName: "",
    gender: "",
    dob: "",
    age: "",
    countryCode: "+91",
    mobile: "",
    email: "",
    country: "",
    city: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/enroll`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      alert(data.message || "Enrollment Submitted");

      setForm({
        studentName: "",
        gender: "",
        dob: "",
        age: "",
        countryCode: "+91",
        mobile: "",
        email: "",
        country: "",
        city: ""
      });

    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h2 className="fw-bold">Free Trial Enrollment</h2>
        <p className="text-muted">Fill the form to start your journey</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-7 col-md-9">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4 p-md-5">

              <form onSubmit={handleSubmit} autoComplete="off" className="row g-4">

                {/* Student Name */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Student Name</label>
                  <input
                    type="text"
                    name="studentName"
                    placeholder="Enter Your Name"
                    value={form.studentName}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3"
                  />
                </div>

                {/* Gender */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold d-block">Gender</label>
                  <div className="d-flex gap-3 mt-1">
                    <div className="form-check">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={form.gender === "Male"}
                        onChange={handleChange}
                        required
                        className="form-check-input"
                      />
                      <label className="form-check-label">Male</label>
                    </div>

                    <div className="form-check">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={form.gender === "Female"}
                        onChange={handleChange}
                        className="form-check-input"
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>
                </div>

                {/* DOB */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3"
                  />
                </div>

                {/* Age */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Age</label>
                  <input
                    type="number"
                    name="age"
                    placeholder="Enter Your Age"
                    value={form.age}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3"
                  />
                </div>

                {/* Mobile */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Mobile Number</label>
                  <div className="input-group">
                    <input
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      className="form-control"
                      style={{ maxWidth: "90px" }}
                    />
                    <input
                      name="mobile"
                      placeholder="999999 9999"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3"
                  />
                </div>

                {/* Country */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Country</label>
                  <input
                    name="country"
                    placeholder="Enter Your Country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3"
                  />
                </div>

                {/* City */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold">City</label>
                  <input
                    name="city"
                    placeholder="Enter Your City"
                    value={form.city}
                    onChange={handleChange}
                    required
                    className="form-control rounded-3"
                  />
                </div>

                {/* Submit */}
                <div className="col-12 mt-3">
                  <button className="btn btn-success w-100 py-2 rounded-3 fw-semibold">
                    Submit Enrollment
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}