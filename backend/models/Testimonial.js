import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    role: { type: String, default: "Parent" },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    text: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);
