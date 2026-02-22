import express from "express";
import Enroll from "../models/enroll.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// PUBLIC — Submit enrollment
router.post("/", async (req, res) => {

  try {
    const newEnroll = new Enroll(req.body);
    await newEnroll.save();

    res.status(201).json({
      success: true,
      message: "Enrollment submitted successfully"
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});

// ADMIN — Get all enrollments
router.get("/", adminAuth, async (req, res) => {
  try {
    const enrollments = await Enroll.find().sort({ createdAt: -1 });
    res.json(enrollments);
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// ADMIN — Delete enrollment
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    await Enroll.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;