// server.js
require("dotenv").config();
const express = require("express");
//const mongoose = require("mongoose"); 
const cors = require("cors");
//app.use(cors({ origin: "http://localhost:3000" }));

const authRoute = require("./routes/authRoutes");
const adminRoutes = require("./routes/admin");
const connectDB = require("./config");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => res.send("Server is working"));

// routes
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoutes);
app.use("/api/faqs", require("./routes/faqRoutes"));
app.use("/api/feedbacks", require("./routes/feedbackRoutes"));
// Mount the subjects API 
app.use("/api/subjects", require("./routes/subjectRoutes"));
app.use("/api/resources", require("./routes/resourceRoutes"));
app.use("/api/skills", require("./routes/skillResourceRoutes"));
app.use("/api/visits", require("./routes/visitRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));
app.use("/api/protected/resource", require("./routes/resourceRoutes"));


// connect DB and start
const PORT = process.env.PORT || 5001;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`✅ Server running on port ${PORT}`);
});