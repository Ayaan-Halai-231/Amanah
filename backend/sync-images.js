// Sync script — uploads all existing static images to Cloudinary
// and updates MongoDB records with Cloudinary URLs
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { uploadToCloudinary } from "./config/cloudinary.js";
import Blog from "./models/Blog.js";
import Course from "./models/Course.js";
import Slider from "./models/Slider.js";
import SiteAsset from "./models/SiteAsset.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS = path.resolve(__dirname, "../frontend/assets");

const DB_URL = process.env.DB_URL || process.env.DB_URL_LOCAL;

async function uploadFile(filePath, folder) {
    const buffer = fs.readFileSync(filePath);
    const result = await uploadToCloudinary(buffer, folder);
    return { url: result.secure_url, publicId: result.public_id };
}

async function syncBlogs() {
    console.log("\n📝 Syncing blog images...");
    const blogs = await Blog.find().sort({ createdAt: 1 });
    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        const imgFile = path.join(ASSETS, "blog", `img${i + 1}.jpeg`);
        if (!fs.existsSync(imgFile)) {
            console.log(`  ⚠️  Skipping blog #${i + 1} — file not found: ${imgFile}`);
            continue;
        }
        try {
            const { url, publicId } = await uploadFile(imgFile, "amanah/blogs");
            blog.image = url;
            blog.imageId = publicId;
            await blog.save();
            console.log(`  ✅ Blog ${i + 1}/${blogs.length}: ${blog.title.substring(0, 40)}...`);
        } catch (err) {
            console.log(`  ❌ Blog ${i + 1} failed: ${err.message}`);
        }
    }
}

async function syncCourses() {
    console.log("\n📚 Syncing course images...");
    const courses = await Course.find().sort({ order: 1 });
    const courseImg = path.join(ASSETS, "demo.png");
    if (!fs.existsSync(courseImg)) {
        console.log("  ⚠️  demo.png not found, skipping");
        return;
    }
    // Upload once and reuse for all courses since they share the same image
    const { url, publicId } = await uploadFile(courseImg, "amanah/courses");
    for (const course of courses) {
        course.image = url;
        course.imageId = publicId;
        await course.save();
        console.log(`  ✅ Course: ${course.title}`);
    }
}

async function syncSliders() {
    console.log("\n🖼️  Syncing slider images...");
    const sliderData = [
        { file: "sliderImg1.jpeg", heading: "AL-AMANAH TARBIYAH ACADEMY", subtext: "Nurturing Knowledge with Faith" },
        { file: "sliderImg2.jpeg", heading: "Quality Islamic Education", subtext: "Quran • Sunnah • Modern Learning" },
        { file: "sliderImg3.jpeg", heading: "Building Future Leaders", subtext: "With Faith & Knowledge" },
    ];

    // Clear existing sliders
    await Slider.deleteMany({});

    for (let i = 0; i < sliderData.length; i++) {
        const s = sliderData[i];
        const filePath = path.join(ASSETS, "slider", s.file);
        if (!fs.existsSync(filePath)) {
            console.log(`  ⚠️  ${s.file} not found, skipping`);
            continue;
        }
        const { url, publicId } = await uploadFile(filePath, "amanah/sliders");
        await Slider.create({
            image: url,
            imageId: publicId,
            heading: s.heading,
            subtext: s.subtext,
            order: i + 1,
        });
        console.log(`  ✅ Slider ${i + 1}: ${s.file}`);
    }
}

async function syncSiteAssets() {
    console.log("\n🎨 Syncing site assets...");

    const assetMap = [
        { key: "logo", label: "Site Logo (Navbar)", category: "branding", file: "images1.jpeg" },
        { key: "favicon", label: "Favicon", category: "branding", file: "images1.jpeg" },
        { key: "home_hero_image", label: "Home — Right Side Image", category: "home", file: "images.jpeg" },
        { key: "about_hero_bg", label: "About — Hero Background", category: "about", file: "about/aboutImg1.jpeg" },
        { key: "about_right_image", label: "About — Top Right Image", category: "about", file: "about/aboutImg3.jpeg" },
        { key: "about_bottom_image", label: "About — Bottom Left Image", category: "about", file: "about/aboutImg6.jpeg" },
        { key: "course_decor_1", label: "Course — Decorative 1", category: "courses", file: "1.png" },
        { key: "course_decor_2", label: "Course — Decorative 2", category: "courses", file: "2.png" },
        { key: "course_decor_3", label: "Course — Decorative 3", category: "courses", file: "3.png" },
    ];

    for (const a of assetMap) {
        const filePath = path.join(ASSETS, a.file);
        if (!fs.existsSync(filePath)) {
            console.log(`  ⚠️  ${a.file} not found, skipping`);
            continue;
        }
        const { url, publicId } = await uploadFile(filePath, "amanah/site");
        await SiteAsset.findOneAndUpdate(
            { key: a.key },
            { key: a.key, label: a.label, category: a.category, image: url, imageId: publicId },
            { upsert: true, new: true }
        );
        console.log(`  ✅ ${a.label}`);
    }
}

async function main() {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(DB_URL);
    console.log("✅ Connected!\n");

    console.log("Starting full image sync to Cloudinary...");
    console.log("This may take a few minutes for 30+ images.\n");

    await syncBlogs();
    await syncCourses();
    await syncSliders();
    await syncSiteAssets();

    console.log("\n\n🎉 All images synced successfully!");
    console.log("Check your admin panel — all images should now show previews.");

    process.exit(0);
}

main().catch(err => {
    console.error("Fatal error:", err);
    process.exit(1);
});
