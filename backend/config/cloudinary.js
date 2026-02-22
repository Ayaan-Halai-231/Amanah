import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { Readable } from "stream";

dotenv.config();

// Explicitly parse CLOUDINARY_URL = cloudinary://API_KEY:API_SECRET@CLOUD_NAME
const cloudUrl = process.env.CLOUDINARY_URL || "";
const match = cloudUrl.match(/cloudinary:\/\/(\d+):([^@]+)@(.+)/);
if (match) {
  cloudinary.config({
    cloud_name: match[3],
    api_key: match[1],
    api_secret: match[2],
  });
} else {
  console.warn("⚠️  CLOUDINARY_URL not set or invalid");
}

// Upload buffer to the "amanah" folder in Cloudinary
export const uploadToCloudinary = (buffer, folder = "amanah") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    Readable.from(buffer).pipe(stream);
  });
};

// Delete from Cloudinary by public_id
export const deleteFromCloudinary = async (publicId) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    throw error;
  }
};

export default cloudinary;
