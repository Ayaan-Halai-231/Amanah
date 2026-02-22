import express from "express";
import Testimonial from "../models/Testimonial.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// PUBLIC — Get all testimonials
router.get("/", async (req, res) => {
    try {
        const testimonials = await Testimonial.find().sort({ createdAt: -1 });
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Create
router.post("/", adminAuth, async (req, res) => {
    try {
        const t = await Testimonial.create(req.body);
        res.status(201).json({ success: true, data: t });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Update
router.put("/:id", adminAuth, async (req, res) => {
    try {
        const t = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!t) return res.status(404).json({ success: false, message: "Not found" });
        res.json({ success: true, data: t });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Delete
router.delete("/:id", adminAuth, async (req, res) => {
    try {
        const t = await Testimonial.findByIdAndDelete(req.params.id);
        if (!t) return res.status(404).json({ success: false, message: "Not found" });
        res.json({ success: true, message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
