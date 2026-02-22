import { useState, useEffect } from "react";
import API from "../config/api";

export default function useSiteAssets() {
    const [assets, setAssets] = useState({});

    useEffect(() => {
        fetch(`${API}/api/site-assets`)
            .then(r => r.json())
            .then(data => setAssets(data))
            .catch(() => { });
    }, []);

    // Helper: get image URL with fallback
    const img = (key, fallback = "") => assets[key]?.image || fallback;

    return { assets, img };
}
