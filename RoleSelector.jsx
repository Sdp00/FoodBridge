import React from "react";

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-50 px-4">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">🥘 Welcome to FoodBridge</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">Who are you?</p>
      <div className="flex gap-6">
        <button
          className="px-6 py-3 bg-orange-500 text-white rounded-xl shadow hover:bg-orange-600 transition"
          onClick={() => onSelectRole("donor")}
        >
          I am a Donor
        </button>
        <button
          className="px-6 py-3 bg-green-500 text-white rounded-xl shadow hover:bg-green-600 transition"
          onClick={() => onSelectRole("receiver")}
        >
          I am a Receiver
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;
