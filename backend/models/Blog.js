import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true },
    image: { type: String, default: "" },          // Cloudinary URL
    imageId: { type: String, default: "" },          // Cloudinary public_id
}, { timestamps: true });

export default mongoose.model("Blog", blogSchema);
