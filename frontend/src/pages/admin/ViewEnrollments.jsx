import React, { useEffect, useState } from "react";
import API from "../../config/api";

export default function ViewEnrollments() {
    const token = localStorage.getItem("adminToken");
    const headers = { "x-admin-token": token };

    const [enrollments, setEnrollments] = useState([]);

    const fetchEnrollments = async () => {
        const res = await fetch(`${API}/api/enroll`, { headers });
        setEnrollments(await res.json());
    };

    useEffect(() => { fetchEnrollments(); }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this enrollment?")) return;
        await fetch(`${API}/api/enroll/${id}`, { method: "DELETE", headers });
        fetchEnrollments();
    };

    return (
        <>
            <h3 className="fw-bold mb-4">Enrollment Submissions</h3>

            <div className="card border-0 shadow-sm" style={{ borderRadius: 16 }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Student</th><th>Course</th><th>Gender</th><th>Age</th>
                                    <th>Father</th><th>Email</th><th>Mobile</th><th>Country</th><th>Date</th><th style={{ width: 80 }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enrollments.map(e => (
                                    <tr key={e._id}>
                                        <td className="fw-semibold">{e.studentName}</td>
                                        <td><span className="badge bg-success">{e.course}</span></td>
                                        <td>{e.gender}</td>
                                        <td>{e.age}</td>
                                        <td>{e.fatherName}</td>
                                        <td><small>{e.email}</small></td>
                                        <td>{e.countryCode} {e.mobile}</td>
                                        <td>{e.country}</td>
                                        <td><small>{new Date(e.createdAt).toLocaleDateString()}</small></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(e._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {enrollments.length === 0 && (
                                    <tr><td colSpan="10" className="text-center text-muted py-4">No enrollments yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
