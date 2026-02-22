import React, { useEffect, useState } from "react";
import API from "../../config/api";

export default function ManageBlogs() {
    const token = localStorage.getItem("adminToken");
    const headers = { "x-admin-token": token };

    const [blogs, setBlogs] = useState([]);
    const [form, setForm] = useState({ title: "", desc: "" });
    const [image, setImage] = useState(null);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchBlogs = async () => {
        const res = await fetch(`${API}/api/blogs`);
        setBlogs(await res.json());
    };

    useEffect(() => { fetchBlogs(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData();
        fd.append("title", form.title);
        fd.append("desc", form.desc);
        if (image) fd.append("image", image);

        const url = editId ? `${API}/api/blogs/${editId}` : `${API}/api/blogs`;
        const method = editId ? "PUT" : "POST";

        await fetch(url, { method, headers: { "x-admin-token": token }, body: fd });
        setForm({ title: "", desc: "" });
        setImage(null);
        setEditId(null);
        setLoading(false);
        fetchBlogs();
    };

    const handleEdit = (blog) => {
        setEditId(blog._id);
        setForm({ title: blog.title, desc: blog.desc });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this blog?")) return;
        await fetch(`${API}/api/blogs/${id}`, { method: "DELETE", headers });
        fetchBlogs();
    };

    return (
        <>
            <h3 className="fw-bold mb-4">Manage Blogs</h3>

            {/* Form */}
            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 16 }}>
                <div className="card-body p-4">
                    <h5 className="fw-semibold mb-3">{editId ? "Edit Blog" : "Add Blog"}</h5>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <input className="form-control" placeholder="Title" value={form.title}
                                onChange={(e) => setForm({ ...form, title: e.target.value })} required />
                        </div>
                        <div className="col-md-6">
                            <input type="file" className="form-control" accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className="col-12">
                            <textarea className="form-control" rows="3" placeholder="Description"
                                value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} required />
                        </div>
                        <div className="col-12 d-flex gap-2">
                            <button className="btn btn-success" disabled={loading}>
                                {loading ? "Saving..." : editId ? "Update" : "Add Blog"}
                            </button>
                            {editId && (
                                <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => { setEditId(null); setForm({ title: "", desc: "" }); }}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            {/* Table */}
            <div className="card border-0 shadow-sm" style={{ borderRadius: 16 }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th style={{ width: 80 }}>Image</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th style={{ width: 140 }}>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map(b => (
                                    <tr key={b._id}>
                                        <td>
                                            {b.image && <img src={b.image} alt="" style={{ width: 60, height: 40, objectFit: "cover", borderRadius: 6 }} />}
                                        </td>
                                        <td className="fw-semibold">{b.title}</td>
                                        <td><small className="text-muted">{b.desc?.slice(0, 80)}...</small></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-1" onClick={() => handleEdit(b)}>Edit</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(b._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {blogs.length === 0 && (
                                    <tr><td colSpan="4" className="text-center text-muted py-4">No blogs yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
