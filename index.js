// foodbridge-server/index.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Import Routes
const foodRoutes = require("./routes/foodRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes"); // ✅ added authRoutes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route Middleware
app.use("/api/food", foodRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes); // ✅ added auth route here

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(5000, () => console.log("🚀 Server running on port 5000"));
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
