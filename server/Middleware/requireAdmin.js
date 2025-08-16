const jwt = require("jsonwebtoken");
const User = require("../models/User"); // adjust path to your User model

const requireAdmin = async (req, res, next) => {
  try {
    // 1. Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1];

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Get user from DB
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // 4. Check if admin
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    // 5. Attach user to request and continue
    req.user = user;
    next();

  } catch (error) {
    console.error("Admin auth error:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = requireAdmin;
