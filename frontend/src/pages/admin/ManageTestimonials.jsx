import React, { useEffect, useState } from "react";
import API from "../../config/api";

export default function ManageTestimonials() {
    const token = localStorage.getItem("adminToken");
    const headers = { "x-admin-token": token, "Content-Type": "application/json" };

    const [items, setItems] = useState([]);
    const [form, setForm] = useState({ name: "", role: "Parent", rating: 5, text: "" });
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchItems = async () => {
        const res = await fetch(`${API}/api/testimonials`);
        setItems(await res.json());
    };

    useEffect(() => { fetchItems(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const url = editId ? `${API}/api/testimonials/${editId}` : `${API}/api/testimonials`;
        const method = editId ? "PUT" : "POST";

        await fetch(url, { method, headers, body: JSON.stringify(form) });
        setForm({ name: "", role: "Parent", rating: 5, text: "" });
        setEditId(null);
        setLoading(false);
        fetchItems();
    };

    const handleEdit = (t) => {
        setEditId(t._id);
        setForm({ name: t.name, role: t.role, rating: t.rating, text: t.text });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this testimonial?")) return;
        await fetch(`${API}/api/testimonials/${id}`, { method: "DELETE", headers });
        fetchItems();
    };

    return (
        <>
            <h3 className="fw-bold mb-4">Manage Testimonials</h3>

            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 16 }}>
                <div className="card-body p-4">
                    <h5 className="fw-semibold mb-3">{editId ? "Edit Testimonial" : "Add Testimonial"}</h5>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Name" value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value })}>
                                <option>Parent</option>
                                <option>Student</option>
                                <option>Teacher</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" value={form.rating}
                                onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}>
                                {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Star{n > 1 && "s"}</option>)}
                            </select>
                        </div>
                        <div className="col-12">
                            <textarea className="form-control" rows="3" placeholder="Testimonial text"
                                value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} required />
                        </div>
                        <div className="col-12 d-flex gap-2">
                            <button className="btn btn-success" disabled={loading}>
                                {loading ? "Saving..." : editId ? "Update" : "Add Testimonial"}
                            </button>
                            {editId && (
                                <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => { setEditId(null); setForm({ name: "", role: "Parent", rating: 5, text: "" }); }}>
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
                                <tr><th>Name</th><th>Role</th><th>Rating</th><th>Text</th><th style={{ width: 140 }}>Actions</th></tr>
                            </thead>
                            <tbody>
                                {items.map(t => (
                                    <tr key={t._id}>
                                        <td className="fw-semibold">{t.name}</td>
                                        <td><span className="badge bg-secondary">{t.role}</span></td>
                                        <td>{"⭐".repeat(t.rating)}</td>
                                        <td><small className="text-muted">{t.text?.slice(0, 60)}...</small></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => handleEdit(t)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(t._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {items.length === 0 && (
                                    <tr><td colSpan="5" className="text-center text-muted py-4">No testimonials yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
