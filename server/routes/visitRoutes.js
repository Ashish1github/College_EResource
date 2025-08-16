const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");
const requireAdmin = require("../Middleware/requireAdmin");

// 📌 Public — Increment visits
router.post("/increment", async (req, res) => {
  try {
    let visitDoc = await Visit.findOne();
    if (!visitDoc) {
      visitDoc = new Visit({ count: 0 });
    }
    visitDoc.count += 1;
    await visitDoc.save();
    res.status(200).json({ message: "Visit recorded" });
  } catch (error) {
    console.error("Error incrementing visit:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 📌 Admin only — Get total visits
router.get("/", requireAdmin, async (req, res) => {
  try {
    const visitDoc = await Visit.findOne();
    res.status(200).json({ count: visitDoc?.count || 0 });
  } catch (error) {
    console.error("Error fetching visits:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
