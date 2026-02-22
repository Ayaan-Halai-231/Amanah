import dotenv from "dotenv";
dotenv.config();

// Simple password-based admin auth
const adminAuth = (req, res, next) => {
    const token = req.headers["x-admin-token"];
    if (!token || token !== process.env.ADMIN_PASSWORD) {
        return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    next();
};

export default adminAuth;
