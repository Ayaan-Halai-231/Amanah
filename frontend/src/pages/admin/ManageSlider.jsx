import React, { useEffect, useState } from "react";
import API from "../../config/api";

export default function ManageSlider() {
    const token = localStorage.getItem("adminToken");
    const headers = { "x-admin-token": token };

    const [sliders, setSliders] = useState([]);
    const [form, setForm] = useState({ heading: "", subtext: "", order: 0 });
    const [image, setImage] = useState(null);
    const [editId, setEditId] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchSliders = async () => {
        const res = await fetch(`${API}/api/sliders`);
        setSliders(await res.json());
    };

    useEffect(() => { fetchSliders(); }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const fd = new FormData();
        fd.append("heading", form.heading);
        fd.append("subtext", form.subtext);
        fd.append("order", form.order);
        if (image) fd.append("image", image);

        const url = editId ? `${API}/api/sliders/${editId}` : `${API}/api/sliders`;
        const method = editId ? "PUT" : "POST";

        await fetch(url, { method, headers: { "x-admin-token": token }, body: fd });
        setForm({ heading: "", subtext: "", order: 0 });
        setImage(null);
        setEditId(null);
        setLoading(false);
        fetchSliders();
    };

    const handleEdit = (s) => {
        setEditId(s._id);
        setForm({ heading: s.heading, subtext: s.subtext, order: s.order });
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this slider?")) return;
        await fetch(`${API}/api/sliders/${id}`, { method: "DELETE", headers });
        fetchSliders();
    };

    return (
        <>
            <h3 className="fw-bold mb-4">Manage Slider</h3>

            <div className="card border-0 shadow-sm mb-4" style={{ borderRadius: 16 }}>
                <div className="card-body p-4">
                    <h5 className="fw-semibold mb-3">{editId ? "Edit Slide" : "Add Slide"}</h5>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Heading" value={form.heading}
                                onChange={(e) => setForm({ ...form, heading: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <input className="form-control" placeholder="Subtext" value={form.subtext}
                                onChange={(e) => setForm({ ...form, subtext: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <input type="number" className="form-control" placeholder="Order" value={form.order}
                                onChange={(e) => setForm({ ...form, order: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <input type="file" className="form-control" accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className="col-12 d-flex gap-2">
                            <button className="btn btn-success" disabled={loading}>
                                {loading ? "Saving..." : editId ? "Update" : "Add Slide"}
                            </button>
                            {editId && (
                                <button type="button" className="btn btn-outline-secondary"
                                    onClick={() => { setEditId(null); setForm({ heading: "", subtext: "", order: 0 }); }}>
                                    Cancel
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>

            <div className="row g-3">
                {sliders.map(s => (
                    <div className="col-md-4" key={s._id}>
                        <div className="card border-0 shadow-sm overflow-hidden" style={{ borderRadius: 12 }}>
                            <img src={s.image} alt="" style={{ height: 180, objectFit: "cover" }} />
                            <div className="card-body">
                                <h6 className="fw-bold mb-1">{s.heading || "No heading"}</h6>
                                <small className="text-muted">{s.subtext || "No subtext"}</small>
                                <div className="mt-2 d-flex gap-1">
                                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(s)}>Edit</button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(s._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {sliders.length === 0 && (
                    <div className="col-12 text-center text-muted py-4">No slider images yet</div>
                )}
            </div>
        </>
    );
}
