import React, { useEffect, useState } from "react";
import axios from "axios";

const MyReceivers = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/food/donations")
      .then((res) => {
        setDonations(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Filter only my donations
  const myDonations = donations.filter((donation) => donation.donorId === user?.id);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📋 Interested Receivers</h2>

      {myDonations.length === 0 ? (
        <p className="text-center text-gray-500">No donations posted yet.</p>
      ) : (
        myDonations.map((donation) => (
          <div
            key={donation._id}
            className="bg-white shadow-md rounded-2xl p-4 border border-gray-100 mb-6"
          >
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              {donation.foodType} ({donation.quantity})
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong> {donation.address}
            </p>

            {donation.claimedBy && donation.claimedBy.length > 0 ? (
              <div>
                <h4 className="font-semibold text-sm text-gray-600 mb-1">Receivers:</h4>
                <ul className="text-sm text-gray-700 list-disc list-inside">
                  {donation.claimedBy.map((r, index) => (
                    <li key={index}>
                      {r.name} — {r.contact}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">No receivers yet.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyReceivers;
