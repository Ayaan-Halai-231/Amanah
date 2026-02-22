import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Routes
import enrollRoute from "./routes/enroll.js";
import contactRoute from "./routes/contactRoutes.js";
import blogRoute from "./routes/blogRoutes.js";
import courseRoute from "./routes/courseRoutes.js";
import testimonialRoute from "./routes/testimonialRoutes.js";
import sliderRoute from "./routes/sliderRoutes.js";
import siteAssetRoute from "./routes/siteAssetRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
const DB_URL = process.env.DB_URL || process.env.DB_URL_LOCAL;
mongoose.connect(DB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error:", err));

// Admin login endpoint
app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;
  if (password === process.env.ADMIN_PASSWORD) {
    res.json({ success: true, token: process.env.ADMIN_PASSWORD });
  } else {
    res.status(401).json({ success: false, message: "Invalid password" });
  }
});

// API Routes
app.use("/api/enroll", enrollRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/blogs", blogRoute);
app.use("/api/courses", courseRoute);
app.use("/api/testimonials", testimonialRoute);
app.use("/api/sliders", sliderRoute);
app.use("/api/site-assets", siteAssetRoute);

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});