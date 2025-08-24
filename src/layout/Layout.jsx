import { Link, useNavigate } from "react-router-dom";
import AuctionLogo from "../assets/AucionLogo.jpg";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";
import { useState } from "react";
import { RiAuctionFill } from "react-icons/ri";
import { BsQuestion } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { LogInIcon, LogOutIcon, Sheet } from "lucide-react";

function Layout({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth?.role);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
    setMenuOpen(false);
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#111827] text-white">
      {/* Navbar */}
      <nav className="bg-[#1F2937] shadow-md border-b border-yellow-500">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo & Title */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src={AuctionLogo}
              alt="UltaAuction Logo"
              className="h-10 w-10 rounded-full border-2 border-yellow-500"
            />
            <p className="text-2xl font-bold text-yellow-400 tracking-wider hover:text-yellow-300 transition-all duration-300">
              UltaAuction
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-lg">
            <Link to="/auctions" className="hover:text-yellow-400 transition">
              <RiAuctionFill size={20} name="AuctionIcon" className="inline"/> Auctions
            </Link>
            <Link to="/how-it-works" className="hover:text-yellow-400 transition">
              <BsQuestion size={25} name="AuctionIcon" className="inline"/> How It Works
            </Link>
            <Link to="/about" className="hover:text-yellow-400 transition">
              <FcAbout size={25} name="AuctionIcon" className="inline"/> About
            </Link>
            {isLoggedIn && role === "USER" && (
              <Link to="/my-bids" className="hover:text-yellow-400 transition">
                <Sheet size={20} name="AuctionIcon" className="inline"/> My Bids
              </Link>
            )}
            <div className="ml-10">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="hover:text-red-400 font-semibold transition cursor-pointer"
                >
                  <LogOutIcon size={20} name="AuctionIcon" className="inline"/> Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="hover:text-green-400 font-semibold transition"
                >
                  <LogInIcon size={20} name="AuctionIcon" className="inline"/> Login
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-yellow-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-2 text-lg bg-[#111827] text-yellow-200 border-t border-yellow-700">
            <Link
              to="/auctions"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              <RiAuctionFill size={20} name="AuctionIcon" className="inline"/> Auctions
            </Link>
            <Link
              to="/how-it-works"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              <BsQuestion size={20} name="AuctionIcon" className="inline"/> How It Works
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-400"
            >
              <FcAbout size={25} name="AuctionIcon" className="inline"/> About
            </Link>
            {isLoggedIn && role === "USER" && (
              <Link
                to="/my-bids"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400"
              >
                <Sheet size={20} name="AuctionIcon" className="inline"/> My Bids
              </Link>
            )}
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-left hover:text-red-400"
              >
                <LogOutIcon size={20} name="AuctionIcon" className="inline"/> Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-green-400"
              >
                <LogInIcon size={20} name="AuctionIcon" className="inline"/> Login
              </Link>
            )}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
