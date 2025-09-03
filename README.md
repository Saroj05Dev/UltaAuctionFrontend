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

| Layer        | Technologies                           |
|--------------|----------------------------------------|
| Frontend     | React, Redux Toolkit, Tailwind CSS     |
| Backend      | Node.js, Express.js, MongoDB           |
| API Calls    | Axios + Redux AsyncThunk               |
| Auth         | JWT-based Authentication               |
| Image Upload | Cloudinary                             |
| Payments     | Razorpay                               |
| OTP Registr. | Twilio                                 |
---
**Home Page**
<img width="1920" height="3504" alt="screencapture-ulta-auction-frontend-saroj-kumar-das-projects-vercel-app-2025-09-03-11_44_19" src="https://github.com/user-attachments/assets/1eee2677-a5ea-405c-8bec-aed5c5c4d9ca" />
**Auction Page**
<img width="1920" height="3307" alt="screencapture-ulta-auction-frontend-saroj-kumar-das-projects-vercel-app-auctions-2025-09-03-11_41_50" src="https://github.com/user-attachments/assets/55fe0a75-5932-4fff-ab0d-252e46fbbadc" />
**About Page**
<img width="1920" height="3261" alt="screencapture-ulta-auction-frontend-saroj-kumar-das-projects-vercel-app-about-2025-09-03-11_43_22" src="https://github.com/user-attachments/assets/1e931893-ddd0-4fe2-9b76-35607e7fae01" />
**My Bidding Page**
<img width="1891" height="861" alt="Screenshot 2025-09-03 114359" src="https://github.com/user-attachments/assets/82b7a982-a3a0-456f-9b87-19f0739c1584" />
**Auction Details/BiddingPage**
<img width="1920" height="1918" alt="screencapture-ulta-auction-frontend-saroj-kumar-das-projects-vercel-app-auctions-685f5a2551732b5c0707ed43-2025-09-03-11_48_33" src="https://github.com/user-attachments/assets/b695e640-e33c-44f0-8638-e9f510f38ccd" />

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

├── UltaAuction/ # React Frontend
│ ├── src/
│ ├── public/
│ └── .env


├── UltaAuctionBackend/ # Node.js + Express Backend
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

---

## 📂 Environment Variables

### 📍 `client/.env`
```env
VITE_API_BASE_URL=https://your-backend-url.com/api/v1
📍 server/.env
PORT=5000
MONGO_URI=your-mongo-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
💻 Run Locally
bash
# Clone the repository
git clone https://github.com/Saroj05Dev/UltaAuctionFrontend.git
cd UltaAuctionFrontend // for frontend

git clone https://github.com/Saroj05Dev/UltaAuctionBackend.git
cd UltaAuctionBackend // for backend 

# Install frontend dependencies
cd UltaAuctionFrontend
npm install

# Install backend dependencies
cd UltaAuctionBackend
npm install

# Run both apps (concurrently)
npm run dev // for frontend
npm start // for backend

🙋‍♂️ Author
Saroj Kumar Das
📧 Email: sarojkumardas.dev@gmail.com
🔗 LinkedIn: https://www.linkedin.com/in/saroj-kumar-das-86a36b30a/

⭐ Like this Project?
If you found this project helpful or inspiring, please ⭐ star the repo and share it with others!
