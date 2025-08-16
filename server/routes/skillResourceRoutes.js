const express = require("express");
const SkillResource = require("../models/SkillResource");

const router = express.Router();

// ---------------- Get all skill resources ----------------
router.get("/", async (req, res) => {
  try {
    const resources = await SkillResource.find();
    res.json(resources);
  } catch (error) {
    console.error("Error fetching all skills:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ---------------- Get skill resource by skillId ----------------
router.get("/:skillId", async (req, res) => {
  try {
    const skillId = req.params.skillId.toLowerCase(); // convert to lowercase

    // Find skill by skillName (case-insensitive)
    const resource = await SkillResource.findOne({ skillName: skillId });

    if (!resource) {
      return res.status(404).json({ message: `Skill resource '${req.params.skillId}' not found` });
    }

    res.json(resource);
  } catch (error) {
    console.error(`Error fetching skill "${req.params.skillId}":`, error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
