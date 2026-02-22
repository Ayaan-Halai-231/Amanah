import mongoose from "mongoose";

const siteAssetSchema = new mongoose.Schema({
    key: { type: String, required: true, unique: true, trim: true },
    label: { type: String, default: "" },
    image: { type: String, default: "" },
    imageId: { type: String, default: "" },
    category: { type: String, default: "general" },
}, { timestamps: true });

export default mongoose.model("SiteAsset", siteAssetSchema);
