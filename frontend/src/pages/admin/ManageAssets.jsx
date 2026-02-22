import React, { useEffect, useState } from "react";
import API from "../../config/api";

const ASSET_SLOTS = [
    { key: "logo", label: "Site Logo (Navbar)", category: "branding" },
    { key: "favicon", label: "Favicon", category: "branding" },
    { key: "home_hero_image", label: "Home — Right Side Image", category: "home" },
    { key: "about_hero_bg", label: "About — Hero Background", category: "about" },
    { key: "about_right_image", label: "About — Top Right Image", category: "about" },
    { key: "about_bottom_image", label: "About — Bottom Left Image", category: "about" },
    { key: "course_decor_1", label: "Course — Decorative Image 1", category: "courses" },
    { key: "course_decor_2", label: "Course — Decorative Image 2", category: "courses" },
    { key: "course_decor_3", label: "Course — Decorative Image 3", category: "courses" },
];

export default function ManageAssets() {
    const token = localStorage.getItem("adminToken");
    const [assets, setAssets] = useState({});
    const [uploading, setUploading] = useState("");

    const fetchAssets = async () => {
        const res = await fetch(`${API}/api/site-assets`);
        setAssets(await res.json());
    };

    useEffect(() => { fetchAssets(); }, []);

    const handleUpload = async (key, label, category, file) => {
        if (!file) return;
        setUploading(key);
        try {
            const fd = new FormData();
            fd.append("image", file);
            fd.append("label", label);
            fd.append("category", category);

            const res = await fetch(`${API}/api/site-assets/${key}`, {
                method: "PUT",
                headers: { "x-admin-token": token },
                body: fd,
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || "Upload failed");
            }

            alert("Image updated successfully!");
        } catch (error) {
            console.error(error);
            alert("Error uploading image: " + error.message);
        } finally {
            setUploading("");
            fetchAssets();
        }
    };

    const handleDelete = async (key) => {
        if (!window.confirm(`Remove this image?`)) return;
        await fetch(`${API}/api/site-assets/${key}`, {
            method: "DELETE",
            headers: { "x-admin-token": token },
        });
        fetchAssets();
    };

    // Group by category
    const categories = [...new Set(ASSET_SLOTS.map(s => s.category))];

    const catLabels = { branding: "🎨 Branding", home: "🏠 Home Page", about: "ℹ️ About Page", courses: "📚 Courses" };

    return (
        <>
            <h3 className="fw-bold mb-4">Manage Site Images</h3>

            {categories.map(cat => (
                <div key={cat} className="mb-4">
                    <h5 className="fw-semibold text-muted mb-3">{catLabels[cat] || cat}</h5>

                    <div className="row g-3">
                        {ASSET_SLOTS.filter(s => s.category === cat).map(slot => {
                            const asset = assets[slot.key];
                            return (
                                <div className="col-md-4" key={slot.key}>
                                    <div className="card border-0 shadow-sm h-100" style={{ borderRadius: 14 }}>
                                        {/* Preview */}
                                        <div
                                            className="d-flex align-items-center justify-content-center bg-light"
                                            style={{ height: 140, borderRadius: "14px 14px 0 0", overflow: "hidden" }}
                                        >
                                            {asset?.image ? (
                                                <img src={asset.image} alt={slot.label}
                                                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                                            ) : (
                                                <span className="text-muted small">No image</span>
                                            )}
                                        </div>

                                        <div className="card-body">
                                            <h6 className="fw-semibold mb-2" style={{ fontSize: 13 }}>{slot.label}</h6>
                                            <small className="text-muted d-block mb-2">Key: <code>{slot.key}</code></small>

                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="form-control form-control-sm mb-2"
                                                onChange={(e) => handleUpload(slot.key, slot.label, slot.category, e.target.files[0])}
                                            />

                                            {uploading === slot.key && (
                                                <small className="text-success">Uploading...</small>
                                            )}

                                            {asset?.image && (
                                                <button
                                                    className="btn btn-sm btn-outline-danger w-100 mt-1"
                                                    onClick={() => handleDelete(slot.key)}
                                                >
                                                    Remove
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </>
    );
}
