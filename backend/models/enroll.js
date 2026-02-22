import mongoose from "mongoose";

const enroll = new mongoose.Schema({

  studentName:{
    type:String,
    required:true,
    trim:true
  },

  gender:{
    type:String,
    enum:["Male","Female"],
    required:true
  },

  dob:{
    type:Date,
    required:true
  },

  age:{
    type:Number,
    required:true
  },

  fatherName:{
    type:String,
    required:true,
    trim:true
  },

  motherName:{
    type:String,
    required:true,
    trim:true
  },

  countryCode:{
    type:String,
    required:true
  },

  mobile:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    lowercase:true
  },

  country:{
    type:String,
    required:true
  },

  city:{
    type:String,
    required:true
  },

  source:{
    type:String,
    enum:[
      "Social Media",
      "Friend / Family",
      "Mosque",
      "Website",
      "Other"
    ],
    required:true
  },

  course:{
    type:String,
    required:true
  }

},{
  timestamps:true   // ⭐ VERY IMPORTANT (createdAt + updatedAt)
});

export default mongoose.model("Enrollment", enroll);