import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
    FaTachometerAlt,
    FaBlog,
    FaBook,
    FaStar,
    FaImages,
    FaPalette,
    FaEnvelope,
    FaUserGraduate,
    FaSignOutAlt,
} from "react-icons/fa";

const links = [
    { to: "/admin/dashboard", icon: <FaTachometerAlt />, label: "Dashboard" },
    { to: "/admin/blogs", icon: <FaBlog />, label: "Blogs" },
    { to: "/admin/courses", icon: <FaBook />, label: "Courses" },
    { to: "/admin/testimonials", icon: <FaStar />, label: "Testimonials" },
    { to: "/admin/slider", icon: <FaImages />, label: "Slider" },
    { to: "/admin/contacts", icon: <FaEnvelope />, label: "Contacts" },
    { to: "/admin/enrollments", icon: <FaUserGraduate />, label: "Enrollments" },
    { to: "/admin/assets", icon: <FaPalette />, label: "Site Images" },
];

export default function AdminLayout() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("adminToken");
        navigate("/admin");
    };

    return (
        <div className="d-flex" style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <div
                className="d-flex flex-column p-3 text-white"
                style={{
                    width: 240,
                    background: "linear-gradient(180deg, #0f2027, #203a43)",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                    overflowY: "auto",
                }}
            >
                <h5 className="fw-bold text-center py-3 mb-3 border-bottom border-secondary">
                    🕌 Amanah Admin
                </h5>

                <nav className="nav flex-column gap-1 flex-grow-1">
                    {links.map((l) => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            className={({ isActive }) =>
                                `nav-link d-flex align-items-center gap-2 rounded px-3 py-2 ${isActive
                                    ? "bg-success text-white fw-semibold"
                                    : "text-white-50"
                                }`
                            }
                            style={{ fontSize: 14, transition: "0.2s" }}
                        >
                            {l.icon} {l.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    onClick={logout}
                    className="btn btn-outline-light btn-sm mt-3 d-flex align-items-center justify-content-center gap-2"
                >
                    <FaSignOutAlt /> Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-grow-1 bg-light" style={{ overflowY: "auto" }}>
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
