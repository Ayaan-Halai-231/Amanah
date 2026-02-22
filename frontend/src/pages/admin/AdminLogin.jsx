import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../config/api";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch(`${API}/api/admin/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });
            const data = await res.json();

            if (data.success) {
                localStorage.setItem("adminToken", data.token);
                navigate("/admin/dashboard");
            } else {
                setError("Invalid password");
            }
        } catch {
            setError("Server error");
        }
        setLoading(false);
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
            }}
        >
            <div
                className="card border-0 shadow-lg p-5"
                style={{
                    width: "100%",
                    maxWidth: 420,
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.97)",
                }}
            >
                <div className="text-center mb-4">
                    <div
                        className="d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                            width: 60,
                            height: 60,
                            borderRadius: "50%",
                            background: "linear-gradient(135deg, #198754, #20c997)",
                            fontSize: 24,
                            color: "#fff",
                        }}
                    >
                        🔐
                    </div>
                    <h4 className="fw-bold mb-1">Admin Panel</h4>
                    <p className="text-muted small">Amanah Islamic Academy</p>
                </div>

                {error && (
                    <div className="alert alert-danger py-2 small text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="form-label fw-semibold small">Admin Password</label>
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ borderRadius: 12 }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100 py-2 fw-semibold"
                        disabled={loading}
                        style={{ borderRadius: 12, fontSize: 16 }}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
