import React, { useState } from 'react';
import axios from 'axios';

const DonorDashboard = ({ onBack }) => {
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');

  const handleDonationSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/donations',
        { foodType, quantity, location },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('Donation submitted successfully!');
      setFoodType('');
      setQuantity('');
      setLocation('');
    } catch (error) {
      console.error('Donation submit error:', error);
      alert('Something went wrong while submitting donation');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="bg-gray-300 px-3 py-1 rounded">Back</button>
        <button onClick={handleLogout} className="bg-red-400 px-3 py-1 rounded">Logout</button>
      </div>

      <h1 className="text-2xl font-bold mb-6">Donor Dashboard</h1>

      <div className="space-x-4 mb-6">
        <button className="bg-blue-400 px-3 py-2 rounded">View Donations</button>
        <button className="bg-green-400 px-3 py-2 rounded">View Interested Receivers</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Submit Food Donation</h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Food Type"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          className="border px-2 py-1"
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border px-2 py-1"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-2 py-1"
        />
        <button onClick={handleDonationSubmit} className="bg-purple-400 px-3 py-1 rounded">
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonorDashboard;
