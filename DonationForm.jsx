// ✅ src/components/DonationForm.jsx
import React, { useState } from "react";
import axios from "axios";

const DonationForm = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    contactNumber: "",
    foodType: "",
    quantity: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/food/donate", formData);
      alert("✅ Donation submitted successfully!");
      setFormData({
        donorName: "",
        contactNumber: "",
        foodType: "",
        quantity: "",
        address: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong while submitting the donation");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md mb-10">
      <h2 className="text-2xl font-bold text-center mb-4">Submit Food Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="donorName"
          placeholder="Your Name"
          value={formData.donorName}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="foodType"
          placeholder="Food Type (e.g. fruits, rice)"
          value={formData.foodType}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity (e.g. 10 kg)"
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
        <textarea
          name="address"
          placeholder="Full Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
