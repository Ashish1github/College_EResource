const mongoose = require("mongoose");
const dotenv = require("dotenv");
const SkillResource = require("../models/SkillResource");

dotenv.config();

const skillResources = [
  {
    skillName: "webdev",
    materials: [
      { title: "HTML & CSS Guide", link: "https://drive.google.com/example1" },
      { title: "JavaScript Cheat Sheet", link: "https://drive.google.com/example2" },
    ],
    videos: [
      { title: "React Basics", link: "https://youtube.com/example1" },
      { title: "CSS Flexbox Tutorial", link: "https://youtube.com/example2" },
    ],
    tips: "Build projects to practice HTML, CSS, and JS before moving to frameworks.",
  },
  {
    skillName: "dsa",
    materials: [
      { title: "Pattern-Wise DSA Question", link: "https://veedaily19.substack.com/p/master-dsa-in-14-weeks?r=90652&utm_campaign=post&utm_medium=web&mcp_token=eyJwaWQiOjI1MDE1NjksInNpZCI6MTg0NjIxMDYyMCwiYXgiOiI0MTg0MzA5ZTZjZDQ1YTcyMDAxYjdmNGEzZGVlMTdjNCIsInRzIjoxNzU0NzY1MzA2LCJleHAiOjE3NTcxODQ1MDZ9.OLJ5ToPsr6jtJmPmSE5lK08El3P5wcWtqp5VZjGDKUM&triedRedirect=true&fbclid=PAQ0xDSwMEd19leHRuA2FlbQIxMAABp9-Gwi2HKCfBRPZIK69MK7TOu0B8DinKnVUGrY3oMLfDLTfzZpKj_wvBPuQr_aem_MxBwRDPeUOxf0CA27BpJCw" },
      { title: "Strivers A2Z DSA sheet", link: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
    ],
    videos: [
      { title: "Striver DSA Playlist", link: "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      { title: "Aditya Verma Dp Playlist", link: "https://www.youtube.com/watch?v=nqowUJzG-iM&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go" },
      {title:"Codestorywithmik Graph Playlist",link:"https://www.youtube.com/watch?v=5JGiZnr6B5w&list=PLpIkg8OmuX-LZB9jYzbbZchk277H5CbdY"},
    ],
    tips: "Focus on problem-solving daily to improve speed.",
  },
   {
    skillName: "ai-ml", 
    materials: [
      { title: "AI Fundamentals PDF", link: "https://drive.google.com/example5" },
      { title: "Machine Learning Notes", link: "https://drive.google.com/example6" },
    ],
    videos: [
      { title: "Neural Networks Basics", link: "https://youtube.com/example5" },
      { title: "AI Project Walkthrough", link: "https://youtube.com/example6" },
    ],
    tips: "Understand linear algebra, probability, and ML basics before diving into deep learning.",
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected...");

    await SkillResource.deleteMany();
    console.log("🗑 Old skill resources deleted.");

    await SkillResource.insertMany(skillResources);
    console.log("🌱 Skill resources seeded successfully!");

    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedData();
