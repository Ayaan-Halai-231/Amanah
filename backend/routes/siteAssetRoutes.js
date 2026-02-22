import express from "express";
import SiteAsset from "../models/SiteAsset.js";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/upload.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary.js";

const router = express.Router();

// PUBLIC — Get all site assets (for frontend to load images)
router.get("/", async (req, res) => {
    try {
        const assets = await SiteAsset.find();
        console.log(`Fetched ${assets.length} site assets`);
        // Return as key-value map for easy frontend usage
        const map = {};
        assets.forEach(a => { map[a.key] = a; });
        res.json(map);
    } catch (err) {
        console.error("Error fetching site assets:", err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Upsert (create or update) a site asset
router.put("/:key", adminAuth, upload.single("image"), async (req, res) => {
    try {
        const { key } = req.params;
        let existing = await SiteAsset.findOne({ key });

        let image = existing?.image || "";
        let imageId = existing?.imageId || "";

        if (req.file) {
            // Delete old image from Cloudinary if it exists
            if (imageId) await deleteFromCloudinary(imageId);
            const result = await uploadToCloudinary(req.file.buffer, "amanah/site");
            image = result.secure_url;
            imageId = result.public_id;
        }

        const data = {
            key,
            label: req.body.label || key,
            image,
            imageId,
            category: req.body.category || "general",
        };

        const asset = await SiteAsset.findOneAndUpdate(
            { key },
            data,
            { upsert: true, new: true }
        );

        console.log(`Updated site asset: ${key}`);
        res.json({ success: true, data: asset });
    } catch (err) {
        console.error(`Error updating site asset ${req.params.key}:`, err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Delete a site asset
router.delete("/:key", adminAuth, async (req, res) => {
    try {
        const asset = await SiteAsset.findOne({ key: req.params.key });
        if (!asset) return res.status(404).json({ success: false, message: "Not found" });

        if (asset.imageId) await deleteFromCloudinary(asset.imageId);
        await SiteAsset.deleteOne({ key: req.params.key });
        res.json({ success: true, message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
