import React, {useState} from "react";
import { useParams } from "react-router-dom";

export default function Enroll(){

  const {id}=useParams();

  const courses={
    1:"QURAN HIFDH",
    2:"BASIC ARABIC",
    3:"NOORANI QAIDA"
  };

  const courseName=courses[id] || "Course";

  // ⭐ STATE FOR FORM
  const [form,setForm]=useState({
    studentName:"",
    gender:"",
    dob:"",
    age:"",
    fatherName:"",
    motherName:"",
    countryCode:"+91",
    mobile:"",
    email:"",
    country:"",
    city:"",
    source:""
  });

  // ⭐ HANDLE INPUT CHANGE
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  // ⭐ HANDLE SUBMIT
  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

      const res=await fetch("http://localhost:1000/api/enroll",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          ...form,
          course:courseName
        })
      });

      const data=await res.json();

      alert(data.message || "Enrollment Submitted");

      // ⭐ reset form after submit
      setForm({
        studentName:"",
        gender:"",
        dob:"",
        age:"",
        fatherName:"",
        motherName:"",
        countryCode:"+91",
        mobile:"",
        email:"",
        country:"",
        city:"",
        source:""
      });

    }catch(err){

      alert("Server error");

    }
  };

  return(

    <div className="container py-5">

      <div className="text-center mb-4">
        <h2 className="fw-bold">Enroll in {courseName}</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow border-0 rounded-4">
            <div className="card-body p-4">

              {/* ⭐ FORM CONNECTED */}
              <form onSubmit={handleSubmit} autoComplete="off" className="row g-3">

                <div className="col-md-6">
                  <label className="form-label">Student Name</label>
                  <input name="studentName" placeholder="Enter your name" value={form.studentName} onChange={handleChange} required className="form-control"/>
                </div>

                {/* GENDER */}
                <div className="col-md-6">
                    <label className="form-label d-block">Gender</label>

                <div className="form-check form-check-inline">

                    <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={form.gender === "Male"}
                    onChange={handleChange}
                    className="form-check-input"
                    required
                    />

                    <label className="form-check-label">Male</label>

                </div>

                <div className="form-check form-check-inline">

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

                <div className="col-md-6">
                  <label>DOB</label>
                  <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="form-control"/>
                </div>

                <div className="col-md-6">
                  <label>Age</label>
                  <input type="number" placeholder="Enter your age" name="age" value={form.age} onChange={handleChange} required className="form-control"/>
                </div>

                <div className="col-md-6">
                  <label>Father Name</label>
                  <input name="fatherName" placeholder="Enter your father name" value={form.fatherName} onChange={handleChange} required className="form-control"/>
                </div>

                <div className="col-md-6">
                  <label>Mother Name</label>
                  <input name="motherName" placeholder="Enter your mother name" value={form.motherName} onChange={handleChange} required className="form-control"/>
                </div>

                {/* PHONE */}
                <div className="col-md-6">
                  <label>Mobile</label>

                  <div className="input-group">

                    <input
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      style={{maxWidth:"95px"}}
                      className="form-control"
                    />

                    <input
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />

                  </div>

                </div>

                <div className="col-md-6">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" name="email" value={form.email} onChange={handleChange} required className="form-control"/>
                </div>

                <div className="col-md-6">
                  <label>Country</label>
                  <input name="country" placeholder="Enter your country" value={form.country} onChange={handleChange} required className="form-control"/>
                </div>

                <div className="col-md-6">
                  <label>City</label>
                  <input name="city" placeholder="Enter your city" value={form.city} onChange={handleChange} required className="form-control"/>
                </div>

                <div className="col-12">
                  <label>How did you hear about us?</label>
                  <select name="source" value={form.source} onChange={handleChange} required className="form-select">
                    <option value="">Select</option>
                    <option>Social Media</option>
                    <option>Friend / Family</option>
                    <option>Mosque</option>
                    <option>Website</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="col-12">
                  <label>Selected Course</label>
                  <input className="form-control bg-light" value={courseName} readOnly/>
                </div>

                <div className="col-12">
                  <button className="btn btn-success w-100">
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