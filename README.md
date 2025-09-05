# 🧨 UltaAuctionApp  
*MERN Stack • Lowest Unique Bid Auction Platform*

**UltaAuctionApp** is a full-stack auction platform where users can place **lowest unique bids** on products.  
It features **role-based access**, real-time **leaderboards**, OTP-based signup, secure payments, and dynamic **winner declaration** based on the *Lowest Unique Bid* logic.

---

## 🌐 Live Demo

- 🔗 **Frontend:** [ultaauction-frontend.vercel.app](https://ulta-auction-frontend-saroj-kumar-das-projects.vercel.app)  
- 🔗 **Backend API:** [ultaauction-api.onrender.com](https://ultaauctionbackend-1.onrender.com)  
- 📦 **Frontend Repo:** [UltaAuctionFrontend](https://github.com/sarojkr05/UltaAuctionFrontend)  
- 📦 **Backend Repo:** [UltaAuctionBackend](https://github.com/sarojkr05/UltaAuctionBackend)

---

## 📑 Table of Contents
1. [Tech Stack](#-tech-stack)  
2. [Screenshots](#-screenshots)  
3. [Features](#-features)  
4. [Project Structure](#-project-structure)  
5. [Environment Variables](#-environment-variables)  
6. [Run Locally](#-run-locally)  
7. [Author](#-author)  
8. [Contributing](#-contributing)  
9. [License](#-license)  

---

## 🛠️ Tech Stack

| Layer        | Technologies                           |
|--------------|----------------------------------------|
| **Frontend** | React, Redux Toolkit, Tailwind CSS     |
| **Backend**  | Node.js, Express.js, MongoDB           |
| **API Calls**| Axios + Redux AsyncThunk               |
| **Auth**     | JWT-based Authentication               |
| **Images**   | Cloudinary                             |
| **Payments** | Razorpay                               |
| **OTP Auth** | Twilio                                 |

---

## 📸 Screenshots

### 🏠 Home Page  
<img src="https://github.com/user-attachments/assets/1eee2677-a5ea-405c-8bec-aed5c5c4d9ca" width="800"/>

### 📊 Auction Listing  
<img src="https://github.com/user-attachments/assets/55fe0a75-5932-4fff-ab0d-252e46fbbadc" width="800"/>

### ℹ️ About Page  
<img src="https://github.com/user-attachments/assets/1e931893-ddd0-4fe2-9b76-35607e7fae01" width="800"/>

### 💰 My Bidding Page  
<img src="https://github.com/user-attachments/assets/82b7a982-a3a0-456f-9b87-19f0739c1584" width="800"/>

### 🏆 Auction Details / Bidding Page  
<img src="https://github.com/user-attachments/assets/b695e640-e33c-44f0-8638-e9f510f38ccd" width="800"/>

---

## 🚀 Features

### 👤 User
- 🔐 Register & Login with JWT + OTP verification  
- 📦 Browse all live auctions  
- 💰 Place bids with custom amounts  
- 📊 View personal bidding history ("My Bids")  
- 🥇 See real-time leaderboard & winner status  

### 👨‍💼 Admin
- 🧾 Create/manage auctions  
- 👥 View all bidders  
- 🏆 Declare winner (Lowest Unique Bid logic)  
- 📈 Admin dashboard with analytics  

### 💡 Others
- 📤 Upload product images to **Cloudinary**  
- 🧭 Auction pagination  
- 🔔 Real-time notifications with **React Toastify**  
- 🧑‍⚖️ Role-based route protection (User/Admin)  

---

## 📁 Project Structure

```bash
├── UltaAuction/             # React Frontend
│   ├── src/
│   ├── public/
│   └── .env

├── UltaAuctionBackend/       # Node.js + Express Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── repositories/
│   │   └── schemas/
│   └── .env
│
├── README.md
└── package.json              # Optional root scripts (monorepo)

📂 Environment Variables
For Frontend ->
VITE_BACKEND_URL = "your frontend url"
VITE_RAZORPAY_KEY_ID = "your razorpay key id"

For Backend ->
PORT = 3500
DB_URL = 'your db url'
JWT_SECRET='jwt secret'
JWT_EXPIRY='1d'
COOKIE_EXPIRY_MS='expiry for cookie'
NODE_ENV='development or production'
CLOUDINARY_API_KEY = 'your cloudinary api key'
CLOUDINARY_API_SECRET = 'your cloudinary api secret'
CLOUDINARY_CLOUD_NAME = 'cloudinary name'
TWILIO_ACCOUNT_SID = 'twillio account sid'
TWILIO_AUTH_TOKEN = 'auth token for twillio'
TWILIO_PHONE_NUMBER="+1........"
TWILIO_VERIFY_SID = "twillio verify sid"
RAZORPAY_KEY_ID = 'your razorpay key id'
RAZORPAY_SECRET = 'razorpay secret'

💻 Run Locally
# Clone frontend
git clone https://github.com/Saroj05Dev/UltaAuctionFrontend.git
cd UltaAuctionFrontend
npm install
npm run dev

# Clone backend
git clone https://github.com/Saroj05Dev/UltaAuctionBackend.git
cd UltaAuctionBackend
npm install
npm start

🙋‍♂️ Author

Saroj Kumar Das
📧 Email: sarojkumardas.dev@gmail.com

🔗 LinkedIn: https://www.linkedin.com/in/saroj-kumar-das-86a36b30a

🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo, open issues, or submit a PR.

📜 License

This project is licensed under the MIT License – free to use and modify.
⭐ If you found this project helpful, please consider giving it a star!
