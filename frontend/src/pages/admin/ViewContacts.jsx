import React, { useEffect, useState } from "react";
import API from "../../config/api";

export default function ViewContacts() {
    const token = localStorage.getItem("adminToken");
    const headers = { "x-admin-token": token };

    const [contacts, setContacts] = useState([]);

    const fetchContacts = async () => {
        const res = await fetch(`${API}/api/contacts`, { headers });
        setContacts(await res.json());
    };

    useEffect(() => { fetchContacts(); }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Delete this contact?")) return;
        await fetch(`${API}/api/contacts/${id}`, { method: "DELETE", headers });
        fetchContacts();
    };

    return (
        <>
            <h3 className="fw-bold mb-4">Contact Submissions</h3>

            <div className="card border-0 shadow-sm" style={{ borderRadius: 16 }}>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover mb-0">
                            <thead className="table-light">
                                <tr><th>Name</th><th>Email</th><th>Phone</th><th>Message</th><th>Date</th><th style={{ width: 80 }}>Action</th></tr>
                            </thead>
                            <tbody>
                                {contacts.map(c => (
                                    <tr key={c._id}>
                                        <td className="fw-semibold">{c.name}</td>
                                        <td>{c.email}</td>
                                        <td>{c.phone}</td>
                                        <td><small className="text-muted">{c.message?.slice(0, 60)}...</small></td>
                                        <td><small>{new Date(c.createdAt).toLocaleDateString()}</small></td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(c._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {contacts.length === 0 && (
                                    <tr><td colSpan="6" className="text-center text-muted py-4">No contacts yet</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
