🥘 FOOD BRIDGE - Backend Server
This is the backend server for the Food Bridge application, where donors can donate food and receivers can view and show interest in available donations.

🚀 Technologies Used
Node.js
Express.js
MongoDB + Mongoose
dotenv (for environment variables)
CORS

🛠 Project Setup
1. Clone the repository
git clone https://github.com/Sdp00/FoodBridge.git
cd FoodBridge

2. Install dependencies
npm install

3. Create a .env file inside the root directory and add:
MONGO_URI=mongodb-connection-string

4. Start the server
npm run dev
or
nodemon index.js

📂 Project Structure

foodbridge-server/
├── models/
│   ├── fooddonation.js
│   └── user.js
├── routes/
│   ├── foodRoutes.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

📦 API Endpoints
➡️ Authentication
Register User
  POST /api/users/register

Login User
  POST /api/users/login

➡️ Food Donations
Create Donation
  POST /api/food/

Get All Donations
  GET /api/food/

Express Interest in Donation
  POST /api/food/:id/interested

View Interested Users
  GET /api/food/:id/interested

🙏 Acknowledgements
Special thanks to all the open-source libraries and resources used in this project!

✨ Future Plans
Add authentication using JWT
Build frontend (React.js)
Add real-time notifications
Deployment to cloud (Render/Heroku/Netlify)

Happy Coding
