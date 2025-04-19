import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      alert("✅ Logged in successfully!");
      onLoginSuccess(user); // send user info to App.jsx
    } catch (error) {
      alert("❌ Login failed. Check credentials.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Login</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4 w-80">
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          type="email"
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
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
