import React, { useState, useEffect } from "react";
import API from "../config/api";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/blogs`)
      .then((r) => r.json())
      .then(setBlogs)
      .catch(console.error);
  }, []);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-success">Our Blog</h2>
          <div
            className="mx-auto mt-3"
            style={{
              width: "90px",
              height: "4px",
              background: "linear-gradient(to right,#198754,#7ed6a5)",
              borderRadius: "20px",
            }}
          />
        </div>

        {/* Blog Grid */}
        <div className="row g-4">
          {blogs.map((blog, i) => {
            const isExpanded = expandedIndex === i;
            const shortDesc =
              blog.desc && blog.desc.length > 150
                ? blog.desc.slice(0, 150) + "..."
                : blog.desc;

            return (
              <div className="col-lg-4 col-md-6" key={blog._id || i}>
                <div
                  className="card h-100 border-0 shadow-sm overflow-hidden"
                  style={{ borderRadius: 16, transition: "0.3s" }}
                >
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body d-flex flex-column">
                    <h5 className="fw-bold">{blog.title}</h5>
                    <p className="text-muted flex-grow-1">
                      {isExpanded ? blog.desc : shortDesc}
                    </p>
                    {blog.desc && blog.desc.length > 150 && (
                      <span
                        className="fw-semibold"
                        style={{ cursor: "pointer", color: "#198754" }}
                        onClick={() => toggle(i)}
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </span>
                    )}
                    <small className="text-muted mt-2">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            );
          })}

          {blogs.length === 0 && (
            <div className="text-center text-muted py-5">
              <h5>No blog posts yet</h5>
              <p>Check back soon for updates!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
