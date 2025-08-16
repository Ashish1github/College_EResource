const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  description: String,
});

// Compound index
subjectSchema.index({ department: 1, semester: 1 });

const Subject = mongoose.model("Subject", subjectSchema);
module.exports = Subject;
