import React, { useState } from "react";
import DonorDashboard from './pages/DonorDashboard';

import DonationForm from "./components/DonationForm";
import DonationList from "./components/DonationList";
import RoleSelector from "./components/RoleSelector";
import Register from "./components/Register";
import Login from "./components/Login";
import MyReceivers from "./components/MyReceivers"; // 👈 New

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [donorView, setDonorView] = useState("donations"); // 👈 New

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setRole("");
  };

  const handleBack = () => {
    setRole("");
    setDonorView("donations");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      {/* Top Right: Logout + Back */}
      {user && (
        <div className="absolute top-4 right-4 flex gap-4">
          <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-1 rounded"
          >
            ← Back
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      )}

      {/* If not logged in */}
      {!user && (
        <>
          {showLogin ? (
            <Login onLoginSuccess={(user) => setUser(user)} />
          ) : (
            <Register onRegisterSuccess={() => setShowLogin(true)} />
          )}
          <div className="flex justify-center mt-4">
            {showLogin ? (
              <p className="text-sm">
                Don't have an account?{" "}
                <button
                  onClick={() => setShowLogin(false)}
                  className="text-orange-500 underline"
                >
                  Register
                </button>
              </p>
            ) : (
              <p className="text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => setShowLogin(true)}
                  className="text-green-500 underline"
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </>
      )}

      {/* After login */}
      {user && !role && <RoleSelector onSelectRole={(r) => setRole(r)} />}

      {/* Donor Dashboard */}
      {user && role === "donor" && (
        <>
          <h1 className="text-3xl font-bold text-center text-orange-600 mt-16 mb-8">
            🍲 Donor Dashboard
          </h1>

          <div className="flex justify-center gap-6 mb-6">
            <button
              onClick={() => setDonorView("donations")}
              className={`px-6 py-2 rounded-md ${donorView === "donations"
                ? "bg-orange-500 text-white"
                : "bg-orange-200 text-orange-800"
                }`}
            >
              View Donations
            </button>
            <button
              onClick={() => setDonorView("receivers")}
              className={`px-6 py-2 rounded-md ${donorView === "receivers"
                ? "bg-green-500 text-white"
                : "bg-green-200 text-green-800"
                }`}
            >
              View Interested Receivers
            </button>
          </div>

          {donorView === "donations" && <DonationForm />}
          {donorView === "receivers" && <MyReceivers />}
        </>
      )}

      {/* Receiver Dashboard */}
      {user && role === "receiver" && (
        <>
          <h1 className="text-3xl font-bold text-center text-green-600 mt-16 mb-4">
            🙌 Receiver Dashboard
          </h1>
          <DonationList />
        </>
      )}
    </div>
  );
}

export default App;
