import "./App.css";
import Home from "./pages/Home";
import Denied from "./pages/auth/Denied";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import AuctionsPage from "./pages/AuctionPage";
import BiddingPage from "./pages/BiddingPage";
import CreateAuction from "./pages/admin/CreateAuction";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import ManageAuctions from "./pages/admin/ManageAuction";
import NotFound from "./pages/NotFound";
import { Navigate, Route, Routes } from "react-router-dom";
import UpdateAuction from "./pages/admin/UpdateAuction";
import Users from "./pages/admin/UsersPage";
import Reports from "./pages/admin/Reports";
import RequireAuth from "./pages/auth/RequireAuth";
import AdminRoutes from "./components/AdminRoutes";
import HowItWorks from "./pages/HowItWorksPage";
import About from "./pages/AboutPage";
import AdminDeclareWinner from "./pages/admin/DeclareWinner";
import LeaderboardPage from "./pages/LeaderboardPage";
import MyBidsPage from "./pages/MyBidsPage";
import PhoneLogin from "./components/PhoneLogin";

function App() {
  return (
    <>
      <Routes>
        {/** Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/denied" element={<Denied />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/phoneloginpage" element={<PhoneLogin />} />

        {/** Protected user routes */}
        <Route element={<RequireAuth />}>
          <Route path="/auctions/:id" element={<BiddingPage />} />
          <Route path="/auctions" element={<AuctionsPage />} />
          <Route path="/auction/:auctionId/leaderboard" element={<LeaderboardPage />} />
          <Route path="/my-bids" element={<MyBidsPage />} />

        </Route>

          <Route element={<AdminRoutes />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="declare-winner" element={<AdminDeclareWinner />} />
          <Route path="auctions" element={<ManageAuctions />} />
          <Route path="create-auction" element={<CreateAuction />} />
          <Route path="update-auction/:auctionId" element={<UpdateAuction />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
