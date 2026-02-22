import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema({
    image: { type: String, required: true },     // Cloudinary URL
    imageId: { type: String, default: "" },
    heading: { type: String, default: "" },
    subtext: { type: String, default: "" },
    order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Slider", sliderSchema);
