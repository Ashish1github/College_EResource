const express = require("express");
const Faq = require("../models/FAQ");
const router = express.Router();

// 📌 Get all FAQs (Public)
router.get("/", async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📌 Add FAQ (Admin only)
router.post("/", async (req, res) => {
  try {
    const { question, answer } = req.body;
    if (!question || !answer) {
      return res.status(400).json({ message: "All fields required" });
    }
    const faq = new Faq({ question, answer });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📌 Edit FAQ (Admin only)
router.put("/:id", async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = await Faq.findByIdAndUpdate(
      req.params.id,
      { question, answer },
      { new: true }
    );
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json(faq);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 📌 Delete FAQ (Admin only)
router.delete("/:id", async (req, res) => {
  try {
    const faq = await Faq.findByIdAndDelete(req.params.id);
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
