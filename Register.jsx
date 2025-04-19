import React, { useState } from "react";
import axios from "axios";

const Register = ({ onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "donor", // default
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("✅ Registered successfully! Please login now.");
      onRegisterSuccess(); // Switch to login page
    } catch (error) {
      alert("❌ Registration failed");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Create Account</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 w-80">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          type="email"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        />
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        />
        <input
          name="password"
          placeholder="Password"
          onChange={handleChange}
          type="password"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        />
        <select
          name="role"
          onChange={handleChange}
          className="w-full border border-gray-300 px-4 py-2 rounded-md"
        >
          <option value="donor">Donor</option>
          <option value="receiver">Receiver</option>
        </select>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
