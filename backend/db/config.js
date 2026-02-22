import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.DB_URL_LOCAL)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));