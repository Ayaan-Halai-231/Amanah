import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    desc: { type: String, required: true },
    image: { type: String, default: "" },
    imageId: { type: String, default: "" },
    category: { type: String, enum: ["child", "young"], default: "child" },
    order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);
