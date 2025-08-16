require("dotenv").config();
const mongoose = require("mongoose");
const User = require("./models/User");

async function createAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    if (existingAdmin) {
      console.log("⚠️ Admin already exists with this email:", process.env.ADMIN_EMAIL);
      return;
    }

    // Create admin (plain password, model pre-save hook will hash it)
    await User.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD, // plain text
      role: "admin",
    });

    console.log("✅ Admin created successfully!");
  } catch (err) {
    console.error("❌ Error creating admin:", err);
  } finally {
    mongoose.disconnect();
  }
}

createAdmin();
