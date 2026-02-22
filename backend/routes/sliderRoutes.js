import express from "express";
import Slider from "../models/Slider.js";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/upload.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary.js";

const router = express.Router();

// PUBLIC — Get all sliders
router.get("/", async (req, res) => {
    try {
        const sliders = await Slider.find().sort({ order: 1 });
        res.json(sliders);
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Create slider
router.post("/", adminAuth, upload.single("image"), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ success: false, message: "Image required" });

        const result = await uploadToCloudinary(req.file.buffer, "amanah/sliders");
        const slider = await Slider.create({
            ...req.body,
            image: result.secure_url,
            imageId: result.public_id,
        });
        res.status(201).json({ success: true, data: slider });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Update slider
router.put("/:id", adminAuth, upload.single("image"), async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);
        if (!slider) return res.status(404).json({ success: false, message: "Not found" });

        if (req.file) {
            if (slider.imageId) await deleteFromCloudinary(slider.imageId);
            const result = await uploadToCloudinary(req.file.buffer, "amanah/sliders");
            req.body.image = result.secure_url;
            req.body.imageId = result.public_id;
        }

        const updated = await Slider.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, data: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Delete slider
router.delete("/:id", adminAuth, async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);
        if (!slider) return res.status(404).json({ success: false, message: "Not found" });

        if (slider.imageId) await deleteFromCloudinary(slider.imageId);
        await Slider.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
