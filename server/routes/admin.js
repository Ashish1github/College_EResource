const express = require("express");
const requireAdmin = require("../Middleware/requireAdmin");
const router = express.Router();

router.get("/dashboard", requireAdmin, (req, res) => {
  res.json({ message: "Welcome Admin", user: req.user });
});

module.exports = router;
