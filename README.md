# 🧨 UltaAuctionApp (MERN Stack • Lowest Unique Bid Auction)

**UltaAuctionApp** is a full-stack auction platform where users can place **lowest unique bids** on products. It features role-based access, a dynamic leaderboard, and real-time winner declaration by admins.

---

## 🌐 Live Demo

- 🔗 Frontend: [ultaauction-frontend.vercel.app](https://ulta-auction-frontend-saroj-kumar-das-projects.vercel.app)  
- 🔗 Backend API: [ultaauction-api.onrender.com](https://ultaauctionbackend-1.onrender.com)  
- 📦 GitHub Repo (Frontend): [UltaAuctionFrontend](https://github.com/sarojkr05/UltaAuctionFrontend)  
- 📦 GitHub Repo (Backend): [UltaAuctionBackend](https://github.com/sarojkr05/UltaAuctionBackend)

---

## 🛠️ Tech Stack

| Layer        | Technologies                          |
|--------------|----------------------------------------|
| Frontend     | React, Redux Toolkit, Tailwind CSS     |
| Backend      | Node.js, Express.js, MongoDB           |
| API Calls    | Axios + Redux AsyncThunk               |
| Auth         | JWT-based Authentication               |
| Image Upload | Cloudinary                             |
| Payments     | Razorpay                               |

---
![Screenshot 2025-07-04 084446](https://github.com/user-attachments/assets/7c39671b-82b0-43cd-b90d-9283addfdaac)
![Screenshot 2025-07-04 085024](https://github.com/user-attachments/assets/9d27d99d-4051-40e2-92e4-c2a74c2ba8c2)
![Screenshot 2025-07-04 085047](https://github.com/user-attachments/assets/d589b986-8f55-4746-9416-4c92c139b23e)
![Screenshot 2025-07-04 085146](https://github.com/user-attachments/assets/597b1160-4510-4006-bf28-80346ba4bff8)
![Screenshot 2025-07-04 085327](https://github.com/user-attachments/assets/15eefd9c-18ca-470e-9ffc-355de71cece8)
![Screenshot 2025-07-04 085501](https://github.com/user-attachments/assets/16755b95-932a-4b0b-8946-c47933db4438)

## 🚀 Features

### 👤 User
- 🔐 Register & Login with JWT
- 📦 Browse all live auctions
- 💰 Place bids with custom amounts
- 📊 View personal bidding history ("My Bids")
- 🥇 See real-time leaderboard and winner status

### 👨‍💼 Admin
- 🧾 Create/manage auctions
- 👥 View all bidders
- 🏆 Declare winner (Lowest Unique Bid logic)
- 📈 Admin dashboard with summary stats

### 💡 Others
- 📤 Upload product images to Cloudinary
- 🧭 Auction pagination
- 🔔 React Toastify for notifications
- 🧑‍⚖️ Role-based route protection (User/Admin)

---

## 📁 Project Structure

UltaAuctionApp/
│
├── client/ # React Frontend
│ ├── src/
│ ├── public/
│ └── .env
│
├── server/ # Node.js + Express Backend
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── repositories/
│ │ └── schemas/
│ └── .env
│
├── README.md
└── package.json # Optional root scripts (monorepo)

yaml
Copy
Edit

---

## 📂 Environment Variables

### 📍 `client/.env`
```env
VITE_API_BASE_URL=https://your-backend-url.com/api/v1
📍 server/.env
env
Copy
Edit
PORT=5000
MONGO_URI=your-mongo-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
💻 Run Locally
bash
Copy
Edit
# Clone the repository
git clone https://github.com/sarojkr05/UltaAuctionApp.git
cd UltaAuctionApp

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

# Run both apps (concurrently)
npm run dev
📸 Screenshots (coming soon)
Add images like:

User Dashboard

Admin Panel

Auction Leaderboard

Bid Form

My Bids Page

🙋‍♂️ Author
Saroj Kumar Das
📧 Email: sarojsarojkumar753@gmail.com
🔗 LinkedIn: Saroj Kumar Das

⭐ Like this Project?
If you found this project helpful or inspiring, please ⭐ star the repo and share it with others!
