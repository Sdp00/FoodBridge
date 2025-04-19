// foodbridge-server/routes/foodRoutes.js

const express = require("express");
const router = express.Router();
const FoodDonation = require("../models/fooddonation");

// Create food donation
router.post("/", async (req, res) => {
  try {
    const { foodType, quantity, pickupLocation, donorName, donorEmail, donorPhone } = req.body;

    if (!foodType || !quantity || !pickupLocation || !donorName || !donorEmail || !donorPhone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newDonation = new FoodDonation({
      foodType,
      quantity,
      pickupLocation,
      donorName,
      donorEmail,
      donorPhone,
    });

    await newDonation.save();

    res.status(201).json({ message: "Food donation created successfully" });
  } catch (err) {
    console.error("❌ Error in food donation POST:", err);
    res.status(500).json({ error: "Something went wrong while donating the food" });
  }
});

// Get all food donations
router.get("/", async (req, res) => {
  try {
    const donations = await FoodDonation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (err) {
    console.error("❌ Error in fetching food donations:", err);
    res.status(500).json({ error: "Something went wrong while fetching food donations" });
  }
});

// Express interest in a food donation
router.post("/:id/interested", async (req, res) => {
  try {
    const { interestedUserName, interestedUserEmail, interestedUserPhone } = req.body;
    const donationId = req.params.id;

    const donation = await FoodDonation.findById(donationId);
    if (!donation) {
      return res.status(404).json({ error: "Donation not found" });
    }

    donation.interestedUsers.push({
      name: interestedUserName,
      email: interestedUserEmail,
      phone: interestedUserPhone,
    });

    await donation.save();

    res.status(200).json({ message: "Interest registered successfully" });
  } catch (err) {
    console.error("❌ Error in expressing interest:", err);
    res.status(500).json({ error: "Something went wrong while registering interest" });
  }
});

// Get interested users for a donation
router.get("/:id/interested", async (req, res) => {
  try {
    const donationId = req.params.id;

    const donation = await FoodDonation.findById(donationId);
    if (!donation) {
      return res.status(404).json({ error: "Donation not found" });
    }

    res.status(200).json(donation.interestedUsers);
  } catch (err) {
    console.error("❌ Error in fetching interested users:", err);
    res.status(500).json({ error: "Something went wrong while fetching interested users" });
  }
});

module.exports = router;
