import React, { useEffect, useState } from "react";
import axios from "axios";
import ReceiverClaimForm from "./ReceiverClaimForm";

const DonationList = () => {
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

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
        🧾 Available Donations
      </h2>

      {donations.length === 0 ? (
        <p className="text-center text-gray-500">No donations available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {donations.map((donation) => (
            <div
              key={donation._id}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                {donation.foodType} ({donation.quantity})
              </h3>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Donor:</strong> {donation.donorName}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Address:</strong> {donation.address}
              </p>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Contact:</strong> {donation.contactNumber}
              </p>

              {/* Receiver form */}
              <ReceiverClaimForm donationId={donation._id} />

              {/* Show receivers who claimed */}
              {donation.claimedBy && donation.claimedBy.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">Receivers Interested:</h4>
                  <ul className="text-sm text-gray-700 list-disc list-inside">
                    {donation.claimedBy.map((r, index) => (
                      <li key={index}>
                        {r.name} — {r.contact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationList;
