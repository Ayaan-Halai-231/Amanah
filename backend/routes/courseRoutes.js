import express from "express";
import Course from "../models/Course.js";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/upload.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary.js";

const router = express.Router();

// PUBLIC — Get all courses
router.get("/", async (req, res) => {
    try {
        const filter = req.query.category ? { category: req.query.category } : {};
        const courses = await Course.find(filter).sort({ order: 1 });
        res.json(courses);
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Create course
router.post("/", adminAuth, upload.single("image"), async (req, res) => {
    try {
        let image = "", imageId = "";
        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer, "amanah/courses");
            image = result.secure_url;
            imageId = result.public_id;
        }
        const course = await Course.create({ ...req.body, image, imageId });
        res.status(201).json({ success: true, data: course });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Update course
router.put("/:id", adminAuth, upload.single("image"), async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ success: false, message: "Not found" });

        if (req.file) {
            if (course.imageId) await deleteFromCloudinary(course.imageId);
            const result = await uploadToCloudinary(req.file.buffer, "amanah/courses");
            req.body.image = result.secure_url;
            req.body.imageId = result.public_id;
        }

        const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, data: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Delete course
router.delete("/:id", adminAuth, async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ success: false, message: "Not found" });

        if (course.imageId) await deleteFromCloudinary(course.imageId);
        await Course.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
