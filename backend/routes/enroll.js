import express from "express";
import Enroll from "../models/enroll.js";

const router = express.Router();

router.post("/", async (req,res)=>{

  try{
    const newEnroll = new Enroll(req.body);
    await newEnroll.save();

    res.status(201).json({
      success:true,
      message:"Enrollment submitted successfully"
    });

  }catch(err){

    console.error(err);

    res.status(500).json({
      success:false,
      message:"Server error"
    });

  }

});

export default router;