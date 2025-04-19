// foodbridge-server/models/fooddonation.js

const mongoose = require("mongoose");

const foodDonationSchema = new mongoose.Schema({
  foodType: { type: String, required: true },
  quantity: { type: String, required: true },
  pickupLocation: { type: String, required: true },
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  donorPhone: { type: String, required: true },
  interestedUsers: [
    {
      name: String,
      email: String,
      phone: String,
      dateInterested: { type: Date, default: Date.now }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("FoodDonation", foodDonationSchema);
