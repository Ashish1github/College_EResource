const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Subject = require("../models/subject");

dotenv.config();

const subjectsData = [
  { name: "Mathematics 1", department: "CSE", semester: "1", description: "Basic Mathematics for Computer Science" },
  { name: "Physics", department: "CSE", semester: "1", description: "Fundamental Physics" },
  { name: "Chemistry", department: "CSE", semester: "1", description: "Fundamental Chemistry" },
  { name: "Digital Electronic", department: "CSE", semester: "1", description: "fundamental of Digital Electronic " },
  { name: "Programming Basics", department: "CSE", semester: "1", description: "Introduction to programming concepts" },
  { name: "English", department: "CSE", semester: "1", description: "English language and communication skills" },
  { name: "Data Structures", department: "CSE", semester: "2", description: "Study of data organization" },
  { name: "Digital Logic", department: "CSE", semester: "2", description: "Basics of digital electronics" },
  { name: "Mathematics 1", department: "ECE", semester: "1", description: "Mathematics for Electronics" },
  { name: "Basic Electronics", department: "ECE", semester: "1", description: "Introduction to electronics components" },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    await Subject.init(); // create indexes
    console.log("✅ Indexes created successfully");

    await Subject.deleteMany({});
    console.log("✅ Cleared existing subjects");

    await Subject.insertMany(subjectsData);
    console.log("✅ Seeded subjects successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding subjects:", error);
    process.exit(1);
  }
}

seed();
