import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import enrollRoute from "./routes/enroll.js";
import "./config/cloudinary.js"; // Initialize Cloudinary

dotenv.config();

const app = express();

app.use(cors());          // ⭐ VERY IMPORTANT
app.use(express.json());

mongoose.connect(process.env.DB_URL_LOCAL)
  .then(() => console.log("MongoDB connected"));

app.use("/api/enroll", enrollRoute);

app.listen(process.env.PORT, () => {
  console.log("Server running on", process.env.PORT);
});