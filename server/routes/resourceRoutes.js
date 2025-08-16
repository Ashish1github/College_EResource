const express = require("express");
const router = express.Router();
const Resource = require("../models/Resource");
const jwt = require("jsonwebtoken");

// Middleware to authenticate JWT token
function authenticateMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user; // attach user info to request
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
}

// GET /api/protected/resource?department=&semester=&subjectName=
router.get("/", authenticateMiddleware, async (req, res) => {
  const { department, semester, subjectName } = req.query;

  if (!department || !semester || !subjectName) {
    return res.status(400).json({ message: "Missing query parameters" });
  }

  try {
    // Find all matching resources
    const resources = await Resource.find({
      department,
      semester,
      subjectName,
    });

    if (!resources || resources.length === 0) {
      return res.status(404).json({ message: "No resources found" });
    }

    res.json(resources); // always returns an array
  } catch (error) {
    console.error("Error fetching resources:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
