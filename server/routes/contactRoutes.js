const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Create transporter ONCE (not inside route handler)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS, // App Password
  },
});

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, branch, sem, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required" });
  }

  try {
    // Send email directly (skip verify)
    await transporter.sendMail({
      from: process.env.EMAIL_USER, // must be your Gmail
      replyTo: email,
      to: process.env.EMAIL_USER,   // where you receive contact emails
      subject: "📩 New Contact Form Submission",
      text: `
From: ${name} <${email}>
Branch: ${branch || "N/A"}
Semester: ${sem || "N/A"}

Message:
${message}
      `,
    });

    res.json({ message: "✅ Email sent successfully" });
  } catch (err) {
    console.error("❌ Email send error:", err);
    res.status(500).json({ message: "Failed to send email", error: err.message });
  }
});

module.exports = router;
