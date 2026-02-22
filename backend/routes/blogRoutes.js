import express from "express";
import Blog from "../models/Blog.js";
import adminAuth from "../middleware/adminAuth.js";
import upload from "../middleware/upload.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../config/cloudinary.js";

const router = express.Router();

// PUBLIC — Get all blogs
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Create blog
router.post("/", adminAuth, upload.single("image"), async (req, res) => {
    try {
        let image = "", imageId = "";
        if (req.file) {
            const result = await uploadToCloudinary(req.file.buffer, "amanah/blogs");
            image = result.secure_url;
            imageId = result.public_id;
        }
        const blog = await Blog.create({ ...req.body, image, imageId });
        res.status(201).json({ success: true, data: blog });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Update blog
router.put("/:id", adminAuth, upload.single("image"), async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Not found" });

        if (req.file) {
            if (blog.imageId) await deleteFromCloudinary(blog.imageId);
            const result = await uploadToCloudinary(req.file.buffer, "amanah/blogs");
            req.body.image = result.secure_url;
            req.body.imageId = result.public_id;
        }

        const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ success: true, data: updated });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

// ADMIN — Delete blog
router.delete("/:id", adminAuth, async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ success: false, message: "Not found" });

        if (blog.imageId) await deleteFromCloudinary(blog.imageId);
        await Blog.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: "Deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

export default router;
