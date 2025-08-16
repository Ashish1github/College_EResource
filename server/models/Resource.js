const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: { type: String, required: true },
});

const resourceSchema = new mongoose.Schema(
  {
    department: { type: String, required: true, trim: true },
    semester: { type: String, required: true, trim: true },
    subjectName: { type: String, required: true, trim: true },
    driveLinks: { type: [linkSchema], default: [] },
    videoLinks: { type: [linkSchema], default: [] },
    tips: { type: String, default: "" },
  },
  { timestamps: true }
);

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
