import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import API from "./config/api";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// Dynamic favicon from admin panel
fetch(`${API}/api/site-assets`)
    .then(r => r.json())
    .then(data => {
        if (data?.favicon?.image) {
            const link = document.getElementById("dynamic-favicon");
            if (link) { link.href = data.favicon.image; link.type = "image/png"; }
        }
    })
    .catch(() => { });