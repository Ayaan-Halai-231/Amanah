import React, { useEffect, useState } from "react";
import API from "../../config/api";
import { FaBlog, FaBook, FaStar, FaEnvelope, FaUserGraduate, FaImages } from "react-icons/fa";

export default function Dashboard() {
    const [stats, setStats] = useState({
        blogs: 0, courses: 0, testimonials: 0, sliders: 0, contacts: 0, enrollments: 0,
    });

    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        const headers = { "x-admin-token": token };

        Promise.all([
            fetch(`${API}/api/blogs`).then(r => r.json()),
            fetch(`${API}/api/courses`).then(r => r.json()),
            fetch(`${API}/api/testimonials`).then(r => r.json()),
            fetch(`${API}/api/sliders`).then(r => r.json()),
            fetch(`${API}/api/contacts`, { headers }).then(r => r.json()),
            fetch(`${API}/api/enroll`, { headers }).then(r => r.json()),
        ]).then(([blogs, courses, testimonials, sliders, contacts, enrollments]) => {
            setStats({
                blogs: blogs.length || 0,
                courses: courses.length || 0,
                testimonials: testimonials.length || 0,
                sliders: sliders.length || 0,
                contacts: contacts.length || 0,
                enrollments: enrollments.length || 0,
            });
        }).catch(console.error);
    }, []);

    const cards = [
        { label: "Blogs", value: stats.blogs, icon: <FaBlog />, color: "#6f42c1" },
        { label: "Courses", value: stats.courses, icon: <FaBook />, color: "#198754" },
        { label: "Testimonials", value: stats.testimonials, icon: <FaStar />, color: "#f4b400" },
        { label: "Slider Images", value: stats.sliders, icon: <FaImages />, color: "#0d6efd" },
        { label: "Contacts", value: stats.contacts, icon: <FaEnvelope />, color: "#dc3545" },
        { label: "Enrollments", value: stats.enrollments, icon: <FaUserGraduate />, color: "#20c997" },
    ];

    return (
        <>
            <h3 className="fw-bold mb-4">Dashboard</h3>

            <div className="row g-4">
                {cards.map((c, i) => (
                    <div className="col-md-4 col-sm-6" key={i}>
                        <div
                            className="card border-0 shadow-sm h-100 p-4"
                            style={{ borderRadius: 16, borderLeft: `5px solid ${c.color}` }}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="d-flex align-items-center justify-content-center"
                                    style={{
                                        width: 50, height: 50, borderRadius: "50%",
                                        background: c.color + "18", color: c.color, fontSize: 22,
                                    }}
                                >
                                    {c.icon}
                                </div>
                                <div>
                                    <h2 className="fw-bold mb-0">{c.value}</h2>
                                    <small className="text-muted">{c.label}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
