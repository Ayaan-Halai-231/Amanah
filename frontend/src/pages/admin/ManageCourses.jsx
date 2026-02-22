import React, { useEffect, useState } from "react";
import API from "../../config/api";

export default function ManageCourses() {
    const token = localStorage.getItem("adminToken");
    const headers = { "x-admin-token": token };

    const [courses, setCourses] = useState([]);
    const [form, setForm] = useState({ title: "", desc: "", category: "child", order: 0 });
    const [image, setImage] = useState(null);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCourses = async () => {
        const res = await fetch(`${API}/api/courses`);
        setCourses(await res.json());
    };

    useEffect(() => { fetchCourses(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData();
        Object.keys(form).forEach(k => fd.append(k, form[k]));
        if (image) fd.append("image", image);

        const url = editId ? `${API}/api/courses/${editId}` : `${API}/api/courses`;
        const method = editId ? "PUT" : "POST";

        await fetch(url, { method, headers: { "x-admin-token": token }, body: fd });
        setForm({ title: "", desc: "", category: "child", order: 0 });
        setImage(null);
        setEditId(null);
        setLoading(false);
        fetchCourses();
    };

    const handleEdit = (c) => {
        setEditId(c._id);
        setForm({ title: c.title, desc: c.desc, category: c.category, order: c.order });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this course?")) return;
        await fetch(`${API}/api/courses/${id}`, { method: "DELETE", headers });
        fetchCourses();
    };

    return (
        <>
            <h3 className="fw-bold mb-4">Manage Courses</h3>

            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 16 }}>
                <div className="card-body p-4">
                    <h5 className="fw-semibold mb-3">{editId ? "Edit Course" : "Add Course"}</h5>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Title" value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" value={form.category}
                                onChange={(e) => setForm({ ...form, category: e.target.value })}>
                                <option value="child">Child Course</option>
                                <option value="young">Young Course</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <input type="number" className="form-control" placeholder="Order" value={form.order}
                                onChange={(e) => setForm({ ...form, order: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <input type="file" className="form-control" accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className="col-12">
                            <textarea className="form-control" rows="2" placeholder="Description"
                                value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} required />
                        </div>
                        <div className="col-12 d-flex gap-2">
                            <button className="btn btn-success" disabled={loading}>
                                {loading ? "Saving..." : editId ? "Update" : "Add Course"}
                            </button>
                            {editId && (
                                <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => { setEditId(null); setForm({ title: "", desc: "", category: "child", order: 0 }); }}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="card border-0 shadow-sm" style={{ borderRadius: 16 }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: 80 }}>Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Order</th>
                                    <th style={{ width: 140 }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map(c => (
                                    <tr key={c._id}>
                                        <td>{c.image && <img src={c.image} alt="" style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />}</td>
                                        <td className="fw-semibold">{c.title}</td>
                                        <td><span className={`badge ${c.category === "child" ? "bg-primary" : "bg-info"}`}>{c.category}</span></td>
                                        <td>{c.order}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => handleEdit(c)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(c._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {courses.length === 0 && (
                                    <tr><td colSpan="5" className="text-center text-muted py-4">No courses yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
