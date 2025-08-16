const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Resource = require("../models/Resource");

dotenv.config();

const sampleData = [
  {
    department: "CSE",
    semester: "1",
    subjectName: "Programming Basics",
    driveLinks: [
      { title: "PYQS,NOTES,SYLLABUS,PDF", link: "https://drive.google.com/abc123" },
     
    ],
    videoLinks: [
      { title: "YOUTUBE LECTURE", link: "https://youtube.com/video1" },
      { title: "YOUTUBE LECTURE", link: "https://youtube.com/video2" },
    ],
    tips: "Practice coding daily and understand basics well.",
  },
  {
    department: "CSE",
    semester: "2",
    subjectName: "Data Structures",
    driveLinks: [
      { title: "PYQS,NOTES,SYLLABUS,PDF", link: "https://drive.google.com/def123" },
    ],
    videoLinks: [
      { title: "Lecture 1", link: "https://youtube.com/video3" },
      { title: "Lecture 2", link: "https://youtube.com/video4" },
    ],
    tips: "Focus on tree and graph algorithms.",
  },
  {
    department: "ECE",
    semester: "1",
    subjectName: "Basic Electronics",
    driveLinks: [
      { title: "PYQS,NOTES,SYLLABUS,PDF", link: "https://drive.google.com/ghi123" },
    ],
    videoLinks: [
      { title: "Lecture 1", link: "https://youtube.com/video5" },
      { title: "Lecture 2", link: "https://youtube.com/video6" },
    ],
    tips: "Understand circuit components and signals.",
  },
];

async function seedResources() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    // Clear existing resources
    await Resource.deleteMany({});
    console.log("🗑 Cleared existing resources");

    // Insert new resources
    await Resource.insertMany(sampleData);
    console.log("✅ Sample resources inserted successfully");
  } catch (err) {
    console.error("❌ Error seeding resources:", err);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

// Run seeder
seedResources();
