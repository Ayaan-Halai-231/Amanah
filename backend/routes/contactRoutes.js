const router = require("express").Router();
const Contact = require("../models/Contact");
const nodemailer = require('nodemailer')

router.post("/sendemail", async (req, res) => {
  const data = new Contact(req.body);
  await data.save();
  res.json({ success: true });
});

module.exports = router;
