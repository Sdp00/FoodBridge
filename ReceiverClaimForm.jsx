// ✅ src/components/ReceiverClaimForm.jsx
import React, { useState } from "react";
import axios from "axios";

const ReceiverClaimForm = ({ donationId }) => {
  const [formData, setFormData] = useState({ name: "", contact: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/food/claim/${donationId}`, formData);
      alert("✅ Interest submitted to donor!");
      setFormData({ name: "", contact: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to submit interest");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full border px-3 py-1 rounded"
      />
      <input
        type="text"
        name="contact"
        placeholder="Your Contact"
        value={formData.contact}
        onChange={handleChange}
        required
        className="w-full border px-3 py-1 rounded"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-1 rounded hover:bg-green-600"
      >
        I'm Interested
      </button>
    </form>
  );
};

export default ReceiverClaimForm;
