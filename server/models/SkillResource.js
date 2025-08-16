const mongoose = require("mongoose");

const resourceItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

const skillResourceSchema = new mongoose.Schema({
  skillName: { type: String, required: true, unique: true, lowercase: true, trim: true },
  materials: { type: [resourceItemSchema], default: [] },
  videos: { type: [resourceItemSchema], default: [] },
  tips: { type: String, default: "" },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, { timestamps: true });

module.exports = mongoose.model("SkillResource", skillResourceSchema);
