const express = require("express");
const router = express.Router();
const Subject = require("../models/subject");

// GET /api/subjects?department=deptName&semester=semId
router.get("/", async (req, res) => {
  const { department, semester } = req.query;

  if (!department || !semester) {
    return res.status(400).json({ error: "Department and semester are required" });
  }

  try {
    const subjects = await Subject.find({ department, semester });
    res.json(subjects);
  } catch (error) {
    console.error("Error fetching subjects:", error);
    res.status(500).json({ error: "Server error fetching subjects" });
  }
});

module.exports = router;
