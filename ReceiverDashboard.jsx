import React from "react";
import DonationList from "../components/DonationList";

const ReceiverDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
        🙌 Receiver Dashboard
      </h1>
      <DonationList />
    </div>
  );
};

export default ReceiverDashboard;
